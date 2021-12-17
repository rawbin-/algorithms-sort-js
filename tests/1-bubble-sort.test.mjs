import {bubbleSortA, bubbleSortAOpt,bubbleSortARecursive, bubbleSortB, bubbleSortBRecursive} from "../src/1-bubble-sort.mjs";
import testData from "./common-test-data.mjs"

describe("bubble sort", () => {
    test.each(testData)("bubble-$#",({input,output}) => {
        expect(bubbleSortA(input)).toEqual(output)
        expect(bubbleSortARecursive(input)).toEqual(output)
        expect(bubbleSortAOpt(input)).toEqual(output)
        expect(bubbleSortB(input)).toEqual(output)
        expect(bubbleSortBRecursive(input)).toEqual(output)
    })
})
