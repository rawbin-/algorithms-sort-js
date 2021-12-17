import testData from './common-test-data.mjs'
import {selectSort} from "../src/2-select-sort.mjs";

describe('select sort',() => {
    test.each(testData)('select-$#',({input,output}) => {
        expect(selectSort(input)).toEqual(output)
    })
})
