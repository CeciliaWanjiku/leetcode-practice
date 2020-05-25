//1. Two Sum
var twoSum = function(nums, target) {
    let map  = {},
    result = []
    for(let i = 0; i<nums.length; i++){
        let diff = target- nums[i]
        console.log(map[diff], diff)
        if(map[diff] !== undefined){
            result.push(map[diff], i)
        }else {
            map[nums[i]] = i
        }
    }
    return result 
};

// 2. Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function(s) {
    //have two pointers i, j
    //move j until we get our first repeating char, record length
    //move i repeat untill we get to the end
    let charMap = {}, maxLength = 0
    
    let i = 0, j = 0
    while(i < s.length && j<s.length){
        if(charMap[s[j]]){
            i = charMap[s[j]]
            j++
            console.log(i)
        }else {
            charMap[s[j]] = j+1
            maxLength = Math.max(maxLength, j-i+1)
            
            j++ 
        }
    } 
    return maxLength 
};

//11. Container With Most Water
var maxArea = function(height) {
    let maxArea = 0
    for(let i = 0; i<height.length; i++){
        for(let j = i+1; j<height.length; j++){
            maxArea = Math.max(maxArea, Math.min(height[i], height[j])*(j-i))
        }
    }
    return maxArea
};
// O(n) solution
var maxArea = function(height) {
    let maxArea = 0, left = 0, right = height.length-1
    
    while(left < right){
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right-left))
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return maxArea
};

//21. Merge Two Sorted Lists
var mergeTwoLists = function(l1, l2) {
    if(!l1){
        return l2
    }
    if(!l2){
        return l1
    }
    if(l1.val <l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
    
};
// iteration
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode(-1)
    
    let curr = head
    
    while(l1 && l2){
        if(l1.val <= l2.val){
            curr.next = l1
            l1 = l1.next
        }else {
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }
    if(!l1){
        curr.next = l2
    }
    if(!l2){
        curr.next = l1
    }
    
    return head.next
    
};

//33. Search in Rotated Sorted Array
var search = function(nums, target) {
    if(!nums.length){
        return -1
    }
    
    let start = 0, end = nums.length-1
    
    while(start <= end){
        let mid = start + Math.floor((end-start)/2)
        console.log(nums[mid], mid)
        
        if(nums[mid] == target){
            console.log("got")
            return mid
        }else if(nums[start] <= nums[mid]){
            if(target >= nums[start] && target < nums[mid]){
                end = mid-1
            }else {
                start = mid+1
            }
        }else {
            if(target <= nums[end] && target > nums[mid]){
                start = mid+1
            }else {
                end = mid -1
            }
        }
    }
    return -1 
};

//49. Group Anagrams
const hash = (str) => {    
    let key = new Array(28).fill(0)
    for(let char of str){
        let charCode = char.charCodeAt(0)
        key[charCode-97]++
    }
     return key
}
var groupAnagrams = function(strs) {    
    let hashCodes = {} 
    for(let word of strs){
        let hashed = hash(word)
        if(hashCodes[hashed]){
            hashCodes[hashed].push(word)
        }else {
            hashCodes[hashed] = [word]
        }
    }
    return Object.values(hashCodes)
    
};