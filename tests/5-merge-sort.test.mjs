import testData from './common-test-data.mjs'
import {mergeSort} from "../src/5-merge-sort.mjs";

describe('merge sort', () => {
    test.each(testData)('mergeSort-$#',({input,output}) => {
        expect(mergeSort(input)).toEqual(output)
    })
})
