test('1+2=3',() => {
    expect(1 + 2).toBe(3)
})

test('array equal', () => {
    const a = [1,2]
    a.push(3)
    expect(a).toEqual([1,2,3])
})

import {quickSortB} from "../src/4-quick-sort.mjs";


test('array equal test',() => {
    expect(quickSortB([3,2,1,5,4,1],0,5)).toEqual([1,1,2,3,4,5])
    expect(quickSortB([3,5,1,4,2,1],0,5)).toEqual([1,1,2,3,4,5])
    expect(quickSortB([3,5,1,2,4,1],0,5)).toEqual([1,1,2,3,4,5])
})
