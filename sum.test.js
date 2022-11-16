const sum = require('./sum')
test('sum() doit realiser une addition', ()=>{
    const result = sum(1,2)
    expect(result).toBe(3) 
})