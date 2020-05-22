const replace = (str) => {
  count = 0
  let i = 0
  
  while (str.length) {
    if (str[i] === str[i + 1] === str[i + 2]) {
      if (str[i] === "a") {
        str[i+2] = "b" 
      } else {
        str[i+2] = "a"
      }
      count ++
    }
    i = i+2
  }
}

var reverseList = function(head) {
    let prev = null
    let curr = head
    while(curr !== null){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
        
    }
    return prev
    
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var reverseList = function(head) {
    let prev = null
    let curr = head
    while(curr !== null){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
        
    }
    return prev
    
};

const splitList = (head) => {
    let firstPointer = head
    let secondPointer = head
    
    while(secondPointer && secondPointer.next !== null){
        firstPointer = head.next
        secondPointer = head.next.next
    }
    
    return firstPointer
}
var isPalindrome = function(head) {
    if(!head){
        return true
    }
    let halfList = reverseList(splitList(head))
    console.log(halfList.val)
    console.log(head.val)
    console.log(head.val !== halfList.val)
    
    while(head.next !== null && halfList.next !== null){
        if(head.val !== halfList.val){
            return false
        }
        console.log(">>>>>>>>>>>>>>>")
        head = head.next
        halflist = halfList.next
    }
    
    return true
    
    
    
};