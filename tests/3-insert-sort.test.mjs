import testData from './common-test-data.mjs'
import {insertSort,insertSortEx,insertSortExA,insertSortExB} from "../src/3-insert-sort.mjs";

describe('insert sort', () => {
    test.each(testData)('insert-sort-$#',({input,output}) => {
        expect(insertSort(input)).toEqual(output)
        expect(insertSortEx(input)).toEqual(output)
        expect(insertSortExA(input)).toEqual(output)
        expect(insertSortExB(input)).toEqual(output)
    })
})
