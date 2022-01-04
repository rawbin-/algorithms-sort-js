import testData from './common-test-data.mjs'
import {heapSortA} from "../src/6-heap-sort.mjs";

describe('heap sort',() => {
    // 这里因为 heapSortA 改变了数据的引用，所以要通过数据复制的方式传入
    test.each(testData)('heapSort-min-heap-$#',({input,output}) => {
        expect(heapSortA(input && [...input],false)).toEqual(output)
    })

    test.each(testData)('heapSort-max-heap-$#',({input,output}) => {
        expect(heapSortA(input && [...input],true)).toEqual(output)
    })
})
