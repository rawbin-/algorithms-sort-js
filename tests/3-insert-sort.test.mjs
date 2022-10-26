import testData from './common-test-data.mjs'
import {insertSort,insertSortEx,insertSortExA,insertSortExB} from "../src/3-insert-sort.mjs";

describe('insert sort', () => {
    test.each(testData)('insertSort-$#',({input,output}) => {
        expect(insertSort(input && [...input])).toEqual(output)
    })

    test.each(testData)('insertSortEx-$#',({input,output}) => {
        expect(insertSortEx(input && [...input])).toEqual(output)
    })

    test.each(testData)('insertSortExA-$#',({input,output}) => {
        expect(insertSortExA(input && [...input])).toEqual(output)
    })

    test.each(testData)('insertSortExB-$#',({input,output}) => {
        expect(insertSortExB(input && [...input])).toEqual(output)
    })
})
