const sum = (arr) => {
    return arr.reduce((a,b) => a+b)
}
var findRestaurant = function(list1, list2) {
    let map = {}
    for(let i =0; i<list1.length; i++){
        const item = list1[i]
        if(map[item]){
            map[item].push(i)
        }else [
            map[item] = [i]
        ]
        
    }
    for(let j =0; j<list2.length; j++){
        const item = list2[j]
        if(map[item]){
            map[item].push(j)
        }else [
            map[item] = [j]
        ]
        
    }
    
    //console.log(map)
    let smallest = Infinity
    let values = []
    
    Object.keys(map).forEach((key) => {
        if(map[key].length > 1){
            let curr = sum(map[key])
            if(curr <= smallest){
                smallest = curr
                values.push(key)
            }
        }
       
    })
    return values
    
};

var longestConsecutive = function(r) {
  let max = r ? 1 : 0;

  (function helper(root) {
    if (!root) {
      return;
    }
    const localMax = longestPath(root, 1) + longestPath(root, -1) - 1;
    max = Math.max(max, localMax);
    helper(root.left);
    helper(root.right);
  })(r);

  return max;
};

function longestPath(root, diff) {
  if (!root) {
    return 0;
  }
  // prettier-ignore
  const left = root.left && (root.left.val - root.val === diff)
    ? longestPath(root.left, diff)
    : 0;
  // prettier-ignore
  const right = root.right && (root.right.val - root.val === diff)
    ? longestPath(root.right, diff)
    : 0;
  return Math.max(left, right) + 1;
}