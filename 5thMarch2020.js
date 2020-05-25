//124. Binary Tree Maximum Path Sum
var maxPathSum = function (root) {
  if (!root) return 0

  let ans = Number.MIN_SAFE_INTEGER

  function recursion(root) {
    if (!root) return 0
      let l = 0
      let r = 0
      l = Math.max(l, recursion(root.left))
      console.log(">>", l, root.left)
      r = Math.max(r, recursion(root.right))
      console.log("<<", r)

    // update ans, can use both children
    const sum = l + r + root.val
    ans = Math.max(ans, sum)

    // return longest path with only one child
    return Math.max(l, r) + root.val
  }

  recursion(root)

  return ans
}

var maxPathSum = function (root) {
  if (!root) return 0

  let ans = Number.MIN_SAFE_INTEGER

  function recursion(root) {
    if (!root) return 0
      let l = 0
      let r = 0
      l = Math.max(l, recursion(root.left))
      console.log(">>", l, root.left)
      r = Math.max(r, recursion(root.right))
      console.log("<<", r)

    // update ans, can use both children
    const sum = l + r + root.val
    ans = Math.max(ans, sum)

    // return longest path with only one child
    return Math.max(l, r) + root.val
  }

  recursion(root)

  return ans
}

var getIntersectionNode = function(headA, headB) {
    let lenA = 0
    let lenB = 0
    let startA = headA
    let startB  = headB
    if(!headA || !headB){
        return
    }
    while(headA){
        lenA++
        headA = headA.next
    }
     while(headB){
        lenB++
        headB = headB.next
    }
    if(lenA > lenB){
        let diff = lenA-lenB
        while(diff>0){
            startA = startA.next
            diff--
        }
    }else {
        let diff = lenB-lenA
        while(diff>0){
            startB = startB.next
            diff--
        }
        
    }
    
    while(startA || startB){
        if(startA == startB){
            return startA     
        }else if(startA.next == startB.next){
            console.log(lenA, lenB)  
            return startB.next
        }else{
            startA = startA.next
            startB = startB.next
        }
    }
    
};

var solution = function(knows) {
    return function(n) {
        let celebrity=0;
        for(let i=1; i<n; i++){
            if(knows(celebrity, i)){
                celebrity=i;
            }
        }
        console.log(celebrity)
        for(let j=0; j<n; j++){
            console.log(celebrity)
            if(celebrity != j && (knows(celebrity, j) || !knows(j, celebrity))){
                return -1
            }
        }
        return celebrity;
    };
};