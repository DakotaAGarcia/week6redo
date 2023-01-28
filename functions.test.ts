const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffle the order of the array', ()=>{
        let inputArray = [1, 2, 3, 4, 5];
        let outputArray = shuffleArray(inputArray);
        expect(inputArray).not.toEqual(outputArray)
    }),
    test('be the same length as the output array', ()=>{
        let inputArray2 = [1, 2, 3, 4, 5];
        let outputArray2 = shuffleArray(inputArray2);
        expect(inputArray2).toHaveLength(outputArray2.length)
    })
})