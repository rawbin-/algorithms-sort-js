export default [
    {
        input: null,
        output: null
    }, {
        input: [],
        output: []
    }, {
        input: [1],
        output: [1]
    }, {
        input: ['A'],
        output: ['A']
    }, {
        input: [1, 2],
        output: [1, 2]
    }, {
        input: ['A', 'B'],
        output: ['A', 'B']
    }, {
        input: [3, 2, 1],
        output: [1, 2, 3]
    }, {
        input: ['C', 'B', 'A'],
        output: ['A', 'B', 'C']
    }, {
        input: [1, 3, 5, 4, 2, 0],
        output: [0, 1, 2, 3, 4, 5]
    }, {
        input: [1, 3, 2, 6, 5, 9, 8, 7, 4],
        output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }, {
        input: ['A', 'C', 'B', 'F', 'E', 'I', 'H', 'G', 'D'],
        output: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    }, {
        input: [1, 2, 3, 4, 5, 6],
        output: [1, 2, 3, 4, 5, 6]
    }, {
        input: [6, 5, 4, 3, 2, 1],
        output: [1, 2, 3, 4, 5, 6]
    }, {
        input: [1, 2, 1, 1, 5, 3, 4],
        output: [1, 1, 1, 2, 3, 4, 5]
    }, {
        input: [5, 4, 1, 2, 1, 1, 5, 3, 4],
        output: [1, 1, 1, 2, 3, 4, 4, 5, 5]
    }
]
