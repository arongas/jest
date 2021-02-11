describe("Random library tests", () => {
    const R = require('../src/random');

    it('should be 0', function () {
        expect(R.random(0, 1)).toEqual(0)
    });

    it('should be between 0 and 1', function () {
        expect(R.random(0, 2)).toBeGreaterThanOrEqual(0)
        expect(R.random(0, 2)).toBeLessThan(2)
    });

});
