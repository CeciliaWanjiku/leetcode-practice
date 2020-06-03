// 42. Trapping Rain Water

// maxWaterTrapped at i = Math.min(maxleftHeight[i], maxHeightRight[i]) - height[i]
var trap = function(height) {
    
    let result = 0
    let len = height.length
    
    let maxHeightLeft = new Array(len).fill(0)
    let maxHeightRight = new Array(len).fill(0)
    
    if(height <=1){
        return result
    }
    maxHeightLeft[0] = height[0]
    for(let i = 1; i<len; i++){
        maxHeightLeft[i] = Math.max(height[i], maxHeightLeft[i-1])  
    }
    
    maxHeightRight[len-1] = height[len-1]
    for(let i = len-2; i>=0; i--){
        maxHeightRight[i] = Math.max(height[i],maxHeightRight[i+1])
    }
    
    for(let h = 0; h<len; h++){
        let val = Math.min(maxHeightLeft[h], maxHeightRight[h]) - height[h]
        result+=val
    }
    return result
    
};

//218. The Skyline Problem

//create new array with [start, isStart, height] && [end, isEnd, height]
//sort this array
//add starting point
//create a priority queue and push height
//if incoming height of a start point is greater that maxHeap.peek(), add this point to uour result
//update new maxHeight
// if point is an end point, remove from maxHeap, if the maxHeight changes, include point in result
var getSkyline = function(buildings) {
    
    let buildingPoints = new Array(buildings.length*2).fill(0).map(() => new Array())
    let index = 0
    
    for(let building of buildings){
        let start = building[0], end = building[1], height = building[2]
        buildingPoints[index] = [start,"start", height]
        buildingPoints[index+1] = [end, "end", height]
        index+=2
    }
    
    buildingPoints.sort((a, b) => a[0] - b[0])
    
    let maxHeap = new Heap([], null, ((a,b) => a[2]- b[2]))
    
    maxHeap.push(0, 2)
    
    let prevMaxHeight = 0
    
    let result = []
    
    for(let bp of buildingPoints){
        if(bp[1] == "start"){
            if(maxHeap.peek() < bp[2]){
                result.push([bp[0], bp[2]])
                prevMaxHeight = bp[2]
            }
            maxHeap.push(bp[2]) 
        }else if(bp[1] == "end"){
            maxHeap.delete(bp[2])
            if(maxHeap.peek() < prevMaxHeight){
                result.push([bp[0], bp[2]])
                prevMaxHeight = maxHeap.peek()
            }
        }
    }
    
    return result
};

//25. Reverse Nodes in k-Group
const reverse = (head, k) => {
    let newHead = null
    let pointer = head
    
    while(k > 0){
       let nextNode = pointer.next
       pointer.next = newHead
        newHead = pointer
        pointer = nextNode
        k--
        
    }
    return newHead
}
var reverseKGroup = function(head, k) {
 let pointer = head
 let ktail = null
 
 let newHead = null
 
 while(pointer){
     let count = 0
     pointer = head
     
     while(count < k && pointer){
         pointer = pointer.next
         count++
     }
     
     if(count == k){
         let revHead = reverse(head, k)
         
         if(newHead == null){
             newHead = revHead
         }
         
         if(ktail){
             ktail.next = revHead
         }
         ktail = head
         head = pointer
     }
 }
    if(ktail){
        ktail.next = head
    }
    if(newHead == null){
        return head
    }
    return newHead
};

const multiply = (num1, num2) => {
    if(num1 == "0" || num2 == "0"){
        return "0"
    }

    let product = new Array(num1.length + num2.length).fill(0)

    let prodIndex = product.length-1

    for(let i = num1.length-1; i>=0; i--){
        let tempIndex = prodIndex
        let carry = 0
        for(let j = num2.length-1; j>=0; j--){
            let digit1 = num1.charAt(i)-"0"
            let digit2 = num2.charAt(j)-"0"
            product[tempIndex] = product[tempIndex] + ((digit1 * digit2) % 10) + carry
            carry = Math.floor((digit1 * digit2) /10)
            tempIndex--
        }
        prodIndex--
    }
    return product.join(" ")
}
//43. Multiply Strings
var multiply = function(num1, num2) {
    if (num1 == '0' || num2 == '0') { return '0'; }

    let product = new Array(num1.length + num2.length);
    product.fill(0);
    let pos = product.length - 1;

    for (let i = num1.length - 1; i >= 0; i--) {
        let tempPos = pos;
        for (let j = num2.length - 1; j >= 0; j--) {
            product[tempPos] += parseInt(num1.charAt(i)) * parseInt(num2.charAt(j));
            product[tempPos-1] += Math.floor(product[tempPos] / 10); // carry
            product[tempPos] %= 10;
            tempPos -= 1;
        }
        pos -= 1;
    }

    return product.join("").replace(/^0+/, "");
};