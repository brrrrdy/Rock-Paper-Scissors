const { getHumanChoice } = require('./script'); 
describe('rock', () => {
    test('works when rock is entered', () => {
        expect(getHumanChoice('rock')).toBe(true); 
    });
});