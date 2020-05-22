var middleNode = function(head) {
    
    let slow = head
    let fast = head
    
    while(fast && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    
    return slow
    
};

var swapPairs = function(head) {
    if(!head){
        return head
    }
    if(head.next === null){
        return head
    }
    
    let current = head
        let firstNode = current
        let secondNode = current.next
        current. next = swapPairs(secondNode.next)
        secondNode.next = firstNode
    return secondNode
};


const buildKMPTable = (s) => {
    let kmpTable = [0]
    let i = 0;
    let j = 1;
    
    while(j < s.length){
        if(s[i] === s[j]){
            kmpTable[j] = i+1
            i++
            j++
        } else if (i){
            i = kmpTable[i-1]
        } else {
            kmpTable[j] = 0
            j++
    }
 
}
    return kmpTable
}

var repeatedSubstringPattern = function(s) {
    let table = buildKMPTable(s)
    console.log(table)
    let len = s.length
    let lastLen = table[table.length -1]
    console.log(">>>>", len, lastLen)
    if(lastLen && len % (len-lastLen) === 0){
        return true
    } else {
            return false
        }
 
}
 