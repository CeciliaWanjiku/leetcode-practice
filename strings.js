const isUnique = (str) => {

  const sortedString = str.split('').sort().join()
  for (let i = 0; i < sortedString.length; i++) {
     if (sortedString[i] === sortedString[i + 1]) {
    return false
    
  } else {
    return true
  }

  }

}
console.log(isUnique("asdfghj"))


// Node SortedInsert(Node head,int data) {
//     Node n = new Node();
//     n.data = data;
//     if (head == null) {
//         return n;
//     }
//     else if (data <= head.data) {
//         n.next = head;
//         head.prev = n;
//         return n;
//     }
//     else {
//         Node rest = SortedInsert(head.next, data);
//         head.next = rest;
//         rest.prev = head;
//         return head;
//     }
// }


const deleteDuplicates = (list) => {

}


const permutations = (str, space) => {
  

}