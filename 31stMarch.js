//21. Merge Two Sorted Lists
var mergeTwoLists = function (l1, l2) {
    if(!l1){
        return l2
    }
    if(!l2){
        return l1
    }
    if(!l1 && !l2){
        return null
    }
    if(l1.val <l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};

var mergeTwoLists = function(l1, l2) {
    
    let dummy = new ListNode()   
    let prev = dummy
    
    while(l1 && l2){
        if(l1.val <= l2.val){
            prev.next= l1
            l1 = l1.next
        }else {
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next
    }
    if(l1){
        prev.next = l1
    }
    if(l2){
        prev.next = l2
    }
    console.log(prev)
    return dummy.next
    
  
};

var mergeKLists = function(lists) {
    let dummy = new ListNode(-1)
    
    let prev = dummy
    let arr = []
    
    for(let list of lists){
        while(list){
            arr.push(list.val)
            list = list.next
        }
    }
    let sorted = arr.sort((a, b) => a - b)
    console.log(sorted)
    
    let i = 0
    
    while(i <sorted.length){
        prev.next = new ListNode(sorted[i])
        prev = prev.next
        i++
    }
    
    return dummy.next
    
};

//1257. Smallest Common Region

var findSmallestRegion = function(regions, region1, region2) {
    let map = {}
    
    for(let region of regions){
        for(let i = 1; i<region.length; i++){
            map[region[i]] = region[0]
            
        }
        
    }
    
    const path = new Set()
    
    let r = region1
    
    while(r){
        path.add(r)
        r = map[r]
    }
    
    let r2 = region2
    
    while(!path.has(r2)){
        r2 = map[r2]
    }
    
    return r2
    
};