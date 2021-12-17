test('1+2=3',() => {
    expect(1 + 2).toBe(3)
})

test('array equal', () => {
    const a = [1,2]
    a.push(3)
    expect(a).toEqual([1,2,3])
})
