const xtrente = require('./xtrente')
test('xtrente() dois retourner true', ()=>{
    const result = xtrente([2,5,3])
    expect(result).toBe(true) 
})
test('xtrente() dois retourner false', ()=>{
    const result = xtrente([2,4])
    expect(result).toBe(false) 
})
test('xtrente() dois retourner false', ()=>{
    const result = xtrente([2,4,3])
    expect(result).toBe(false) 
})
test('xtrente() dois retourner false', ()=>{
    const result = xtrente(['G',4,3])
    expect(result).toBe(false) 
})
test('xtrente() dois retourner false', ()=>{
    const result = xtrente([])
    expect(result).toBe(false) 
})
test('xtrente() dois retourner true', ()=>{
    const result = xtrente(['G',4,3,10,12,5,123,44,2])
    expect(result).toBe(true) 
})
test('xtrente() dois retourner false', ()=>{
    const result = xtrente({})
    expect(result).toBe(false) 
})
test('xtrente() dois retourner false', ()=>{
    const result = xtrente("Bonjour")
    expect(result).toBe(false) 
})