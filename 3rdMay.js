var canCompleteCircuit = function(gas, cost) {
    
    let def = 0, startIndex = 0, sum = 0
    
    for(let i = 0; i<gas.length; i++){
        sum = sum + gas[i]- cost[i]
        console.log(sum)
        if(sum < 0){
            startIndex = startIndex+1
            def = def + sum
            sum = 0
        }
    }
    if(sum + def >= 0){
        console.log("...",sum, def)
        return startIndex
    }
    return -1
    
};