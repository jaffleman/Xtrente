module.exports= (tab) => {
    if(!Array.isArray(tab)) return false
    const divTab = []
    tab.map(n=>{if(n===1||n===2||n===3||n===5||n===6||n===10||n===15||n===30) divTab.push(n)})
    if (divTab.length<3) return false
    let value = false
    while (divTab.length>2 && !value) {
        const elem1 = divTab.shift()
        for (let i=0; i<divTab.length; i++){
            if (elem1*divTab[i]<=30){
                for(let y=i+1; y<divTab.length; y++){
                    if(elem1*divTab[i]*divTab[y]===30) value = true
                }
            }
        }
    }
    return value
}
