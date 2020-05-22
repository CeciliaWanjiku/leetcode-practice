// const ispalindrome = (str) => str === str.split("").reverse().join("");

// const firstChar = (str) => str.substr(1);

// const lastChar = (str) => str.substr(0, str.length - 1);

// const longestPalindrome = (str) => {
//   let queue = [];
//   const log = {};
  
//   queue.push(str)

//   while (queue.length > 0) {
//     let firstItem = queue.shift();

//     if (ispalindrome(firstItem)) {
//       return firstItem;
//     }
    
//     if (log[firstItem] !== "visited") {
//       for (let i = o; i < firstItem.length; i++){

//       }
//       queue.push(firstChar(firstItem))
//       queue.push(lastChar(firstItem))  
//     }
//     log[firstItem] = "visited";
//   }
// }
// console.time("ffff");
// console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
// console.timeEnd("ffff");



const ispalindrome = (str) => str === str.split("").reverse().join("");

// const firstChar = (str) => str.substr(1);

// const lastChar = (str) => str.substr(0, str.length-1);

// var longestPalindrome = function(s) {
//     if(ispalindrome(s)){
//        return s;
//     }
    
    
//     const left = longestPalindrome(firstChar(s));
//     const right = longestPalindrome(lastChar(s));
    
//     if(left.length > right.length){
//         return left
//     }
//     return right
    
    
// };

const longestPalindrome = (str) => {
  let longestPal;
  for (let i = 0; i < str.length; i++) {
    let newWord = str[i]
    while (ispalindrome(newWord)) {
      if (longestPal && longestPal.length < newWord.length) {
        longestPal = newWord
        console.log("22222222",longestPal)
      }
      if (i - 1 || i + 1) {
        newWord = str[i-1] + str[i] + str[i+1] 
      }
      
    }
  }
  console.log("22222222",longestPal)
  return longestPal
}

console.log(longestPalindrome("BABBADD"))


var isAnagram = function(s, t) {
    let dict = {}
    if(s.length !== t.length) {
        return false
    }
    for(let letter of s){
        dict[letter] = (dict[letter] || 0)+1
    }
    console.log(Object.values(dict))
    for(let letter of t) {
        if(dict[letter]) {
            dict[letter] = dict[letter] -1
        }
    }
     let anagram = true
    
    for(let v of Object.values(dict)){
        
        if(v !== 0){
            anagram = false       
        }
    }
    return anagram
    
};


const reverseStack = (s) => {
  let queue = []
  while (s.length) {
    queue.push(s.shift())
  }
  queue.push("M")

  while(queue)

}