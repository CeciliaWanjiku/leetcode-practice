// class Node {
//   constructor(value) {
//     this.data = value
//     this.next = null

//   }

// }

// class singlyLinkedList {
//   constructor() {
//     this.head = null
//   }

// }

// let list = new singlyLinkedList()

// const insertAtBeginning = (value) => {
//   let newNode = new Node(value);

//   newNode.next = this.head
//   this.head = newNode;
// }

// const insertAtTheEnd = (value) => {
//   let newNode = new Node(value);

//   if (!this.head) {
//     this.head = newNode
//     return this.head
//   } else {
//     let tail = this.head;
//     while (tail.next !== null) {
//       tail = tail.next 
//     }
//     tail.next = newNode;
//     return this.head
//   }

// }

// const getAt = (index) => {
//   let counter = 0;
//   let node = this.head;
//   while (node) {
//     if (counter === index) {
//       return node
//     }
//     counter++;
//     node = node.next;
//   }
//   return null;
// }


// const addTwoNumbers = (l1, l2) => {
//   let carry = 0
//   //let newNode = new

// }

// var addTwoNumbers = function(l1, l2) {
//     var value1 = 0;
//     var value2 = 0;

//     var digits1 = [];
//     var digits2 = [];
    
//     var item = l1;
//     while (item) {
//         digits1.push(item.val);
//         item = item.next;
//     }

//     item = l2;
//     while (item) {
//         digits2.push(item.val);
//         item = item.next;
//     }

//     var index1 = digits1.length;
//     var index2 = digits2.length;
    
//     var total = '';
//     var tens = 0;
//     var carry = 0;
//     for (var i=Math.max(index1, index2); i>0; i--) {
//     	var a = 0;
//     	if (index1 > 0) {
//                a = digits1[index1 - 1];
//     	}
    
//     	var b = 0;
//     	if (index2 > 0) {
//                b = digits2[index2 - 1];
//     	}
        
//         var sum = a + b + carry;
        
//         if (sum > 9) {
//             carry = 1;
//             sum -= 10;
//         }
//         else {
//             carry = 0;
//         }
        
//         total = sum + total;
    
//     	index1--;
//     	index2--;
//     }
    
//     if (carry) {
//         total = carry + total;
//     }
    
//     //console.log(total);

//     return total.split('').map(function(value) { return parseInt(value); });
// };



  // Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
  let newList = ListNode(1);
  console.log('nbbbbbb', newList);
  while (true) {
    if(l1.value <= l2.value){
        if(newList.value === null){
            newList.value === l1.value
        } else {
            newList.next === li.value   
        } 
        l1.value = l1.next
    }
    else {
      console.log('nliii', newList);
        if(newList.value === null){
            newList.value === l2.value
        } else {
            newList.next === l2.value
        }
        }
        l2.value = l2.next
        
    }
    
};

console.log(mergeTwoLists([1, 3, 4], [1, 2, 5]));
