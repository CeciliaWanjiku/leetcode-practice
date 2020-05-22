//64. Minimum Path Sum
const dfs = (grid, cell) => {
    const [row, col] = cell
    if(row<0 || col< 0 || row >= grid.length || col >=grid[0].length){
        return Number.MAX_VALUE
    }
    if(row == grid.length-1 && col == grid[0].length-1){
        return grid[row][col]
    }
    let down = dfs(grid, [row+1, col])
    let right = dfs(grid, [row, col+1])
    
    return grid[row][col] + Math.min(down, right)
}
var minPathSum = function(grid) {
    return dfs(grid, [0, 0])
    
};

// 174. Dungeon Game
var calculateMinimumHP = function(dungeon) {
    const n = dungeon.length, m = dungeon[0].length
    const dp = new Array(n).fill(0).map(() => new Array(m).fill(Number.MAX_VALUE))
    
    for(let i = n-1; i>=0; i--){
        for(let j = m-1; j>=0; j--){
            if(i == n-1 && j == m-1){
                if(Math.sign(dungeon[i][j]) == -1){
                    dp[i][j] = 1 + (-dungeon[i][j])  
                }else {
                    dp[i][j] = 1
                }
            }else if(i+1 >= n && j+1 <m){
                dp[i][j] = 1 + dp[i][j+1]
            }else if(j+1 >= m && i+1 <n){
                dp[i][j] = 1 + dp[i+1][j]
            }else {
                dp[i][j] = Math.min(dp[i+1][j], dp[i][j+1])
            }
        }
    }
    console.log(dp)
    return dp[0][0]
    
};
//538. Convert BST to Greater Tree
var convertBST = function(root) {
    if(root === null) return root;
    let curSum = 0;
    var dfs = function (node) {
        if(node === null) return;
        dfs(node.right);
        curSum += node.val;
        node.val = curSum;
        dfs(node.left);
    }
    dfs(root);
    return root;
};



 