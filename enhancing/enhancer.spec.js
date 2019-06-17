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

    describe('fail()', () => {
        it('should decrease durability by 5 if enhancement < 15', () => {
            const item = {
                enhancement: 14,
                durability: 80
            }
            
            const expected = {
                enhancement: 14,
                durability: 75,
            }

            const failed = fail(item)
            expect(failed).toEqual(expected);
        })
    })
})
