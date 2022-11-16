module.exports= (tab) => {
    if(!Array.isArray(tab)) return false // si pas un tableau
    if(tab.length<3)return false // si tableau comporte moins de 3 elements 
    const findMyNumber = num => tab.findIndex(number => number===num)!==-1? true:false
    if(!findMyNumber(2)) return false // si pas de nombre 2 
    if(!findMyNumber(3)) return false // si pas de nombre 3 
    if(!findMyNumber(5)) return false // si pas de nombre 5 
    return true
}