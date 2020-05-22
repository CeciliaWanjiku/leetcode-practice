//127. Word Ladder
let mutation = (wordA, wordB) => {
    if(wordA == wordB){
        return false
    }
    let a = 0
    let b  = 0
    let count = 0
    while(a !== wordA.length && b !== wordB.length){
        if(wordA[a]  == wordB[b]){
            a++
            b++
        }else{
            count++
            a++
            b++
            
        }
    }
    
    if(count == 1){
        return true
    }
    return false
}
var ladderLength = function(beginWord, endWord, wordList) { 
    let seen = []
    let q = []
    let level = 1
    
    q.push(beginWord)
    
    while(q.length > 0){
        let len = q.length
        console.log(len)
        for(let i = 0; i<len; i++){
            let curr = q.shift()
            if(curr == endWord){
                return level
            }
            for(let word of wordList){
                if(mutation(word, curr) && !seen.includes(word)){
                    q.push(word)
                    seen.push(word)
                }
            }
        }
        level++
    }
    return 0
    
};