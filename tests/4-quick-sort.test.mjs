import testData from './common-test-data.mjs'
import {quickSortA,quickSortB} from "../src/4-quick-sort.mjs";

describe('quick sort', () => {
    test.each(testData)('quickSortA-0 arg-$#',({input,output}) => {
        expect(quickSortA(input && [...input])).toEqual(output)
    })

    test.each(testData)('quickSortA-1 arg-$#',({input,output}) => {
        expect(quickSortA(input && [...input],0)).toEqual(output)
    })

    test.each(testData)('quickSortA-2 arg-$#',({input,output}) => {
        expect(quickSortA(input && [...input],0,input && input.length - 1)).toEqual(output)
    })

    test.each(testData)('quickSortB-0 arg-$#',({input,output}) => {
        expect(quickSortB(input && [...input])).toEqual(output)
    })

    test.each(testData)('quickSortB-1 arg-$#',({input,output}) => {
        expect(quickSortB(input && [...input], 0)).toEqual(output)
    })

    test.each(testData)('quickSortB-2 arg-$#',({input,output}) => {
        expect(quickSortB(input && [...input], 0 , input && input.length - 1)).toEqual(output)
    })
})
