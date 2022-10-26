import {bubbleSortA, bubbleSortAOpt,bubbleSortARecursive, bubbleSortB, bubbleSortBRecursive} from "../src/1-bubble-sort.mjs";
import testData from "./common-test-data.mjs"

describe("bubble sort", () => {
    test.each(testData)("bubbleSortA-$#",({input,output}) => {
        expect(bubbleSortA(input && [...input])).toEqual(output)
    })

    test.each(testData)("bubbleSortARecursive-$#",({input,output}) => {
        expect(bubbleSortARecursive(input && [...input])).toEqual(output)
    })

    test.each(testData)("bubbleSortAOpt-$#",({input,output}) => {
        expect(bubbleSortAOpt(input && [...input])).toEqual(output)
    })

    test.each(testData)("bubbleSortB-$#",({input,output}) => {
        expect(bubbleSortB(input && [...input])).toEqual(output)
    })

    test.each(testData)("bubbleSortBRecursive-$#",({input,output}) => {
        expect(bubbleSortBRecursive(input && [...input])).toEqual(output)
    })
})
