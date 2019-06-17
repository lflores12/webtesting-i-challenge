const { repair, succeed, fail } = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {
    describe('repair()', () => {
        it('restores durability to 100', () => {
            expect(repair({ durability:89 }).durability).toBe(100);
        })
    })
    
    describe('succeed()', () => {
        it(' should increase enhancement by 1', () => {
            expect(succeed({ enhancement: 17}).enhancement).toBe(18);
        })
        it('should only increase enhancement if lower than 20', () => {
            expect(succeed({ enhancement:19}).enhancement).toBe(20);
        })
    })
})
