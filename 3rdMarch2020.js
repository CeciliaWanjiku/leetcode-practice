const sinkIsland = (cell, grid) => {
    let m = grid.length
    let n = grid[0].length
    const [row, col] = cell
    
    if(row >=m || col>=n || col<0 ||row<0 || grid[row][col] === "0"){
        return
    }
    grid[row][col] = "0"
    sinkIsland([row+1, col], grid);
    sinkIsland([row-1, col], grid);
    sinkIsland([row, col+1], grid);
    sinkIsland([row, col-1], grid)
    }

var numIslands = function(grid) {
    let count = 0
    if(!grid){
        return count
    }
   
    let m = grid.length
    
     
    if(m<=0){
        return count
    }
    
    let n = grid[0].length
    for(let i = 0; i<m; i++){
        for(let j= 0; j<n; j++){
            if(grid[i][j] == "1"){
                count++
                sinkIsland([i,j], grid)
            }
        }
    }
    return count
    
    
};


/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */

const addLand = (grid, position) => {
    const [row, col] = position
    let m = grid.length;
    let n = grid[0].length
    grid[row][col] = 1
    return grid  
}
 const countIslands = (cell, grid) => {
     const sinkIslands = (cell, grid) => {
        const [row, col] = cell 
        let m = grid.length;
        let n = grid[0].length
        
        if(row>=m || col>=n || row<0 || col<0 || grid[row][col] == 0){
            return
        }
         grid[row][col] = 0
         sinkIslands([row+1, col], grid)
         sinkIslands([row-1, col], grid)
         sinkIslands([row, col+1], grid)
         sinkIslands([row, col-1], grid)
         
     }
 }
var numIslands2 = function(m, n, positions) {
    let grid = new Array(m).fill(new Array(n).fill(0))
    let totalCount = []
    let positionIndex = 0
    
    while(positionIndex !== positions.length-1){
        let count = 0
        grid = addLand(grid, positions[positionIndex])
        for(let i =0; i<m; i++){
            for(let j = 0; j<n; j++){
                if(grid[i][j] === 1){
                    count++
                    countIslands([i,j], grid)    
                }
            }
    }
        totalCount.push(count) 
        console.log(grid)
        positionIndex++        
    }
    console.log(grid)
    return totalCount
};


var trap = function(height) {
    let result = 0;
    let maxLeft = new Array(height.length).fill(0)
    let maxRight = new Array(height.length).fill(0)
    
    if(height.length <=1){
        return result
    }
    
    for(let i = 0; i<height.length; i++){
        if(i === 0){
            maxLeft[i] = height[i];
        } else {
            maxLeft[i] = Math.max(height[i], maxLeft[i-1]);
        }
        
    }
    
    for(let j = height.length-1; j>=0; j--){
        if(j === height.length-1){
            maxRight[j] = height[j]
        }else {
            maxRight[j] = Math.max(height[j], maxRight[j+1])
        }
        
    }
    
    for(let l = 0; l<height.length; l++){
        let val = Math.min(maxLeft[l],maxRight[l]) - height[l] 
        result += val
    }
    console.log(maxLeft);
    console.log(maxRight);
    console.log(result)
    
    return result
};


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let q = []
    let am = amount
    let level = 1
    let possiblePaths = {0: [[amount]]}
    
    q.push(amount)
    q.push('*')
    
    while(q.length >=1){
        let a = q.shift()
        // console.log(a)
        if(a == "*"){
            level++
            continue;   
        }
        let changes = []

        for (let coin of coins) {
            changes.push(a-coin)
        }
        
          if(possiblePaths[level]){
                possiblePaths[level].push([...changes])
                
            }else {
                possiblePaths[level] = [[...changes]]
            }
        
        for (let change of changes) {
            if(change == 0 ){
               break;
            }
            if (change>=0) {
                q.push(change)
            }
        }
        q.push("*")
    }
    console.log(
        Object.values(possiblePaths).flatten()
    )

    return Math.max(...Object.keys(possiblePaths))
    
};


var wallsAndGates = function(rooms) {
    if (rooms.length === 0) {
        return []
    }
    const bfs = (gate) => {
        let m = rooms.length;
        let n = rooms[0].length;
        const visited = []
        for (let i = 0; i < m; i++) {
            visited.push(new Array(n).fill(false))    
        }
        const q = []
        q.push(gate)
        const [gateRow, gateCol] = gate
        visited[gateRow][gateCol] = true
        while (q.length) {
            const curr = q.shift()
            const [row, col] = curr
            const count = rooms[row][col]
            if(row+1 < m && !visited[row+1][col] && rooms[row+1][col] !== -1 && rooms[row+1][col] !== 0){
                q.push([row+1, col])
                visited[row+1][col] = true
                rooms[row+1][col] = Math.min(rooms[row+1][col], count+1)
            }
            if(row-1 >= 0 && !visited[row-1][col] && rooms[row-1][col] !== -1 && rooms[row-1][col] !== 0){
                q.push([row-1, col])
                visited[row-1][col] = true
                rooms[row-1][col] = Math.min(rooms[row-1][col], count+1)
            }
            if(col+1 < n && !visited[row][col+1] && rooms[row][col+1] !== -1 && rooms[row][col+1] !== 0){
                q.push([row, col+1])
                visited[row][col+1] = true
                rooms[row][col+1] = Math.min(rooms[row][col+1], count+1)
            }
            if(col-1 >= 0 && !visited[row][col-1] && rooms[row][col-1] !== -1 && rooms[row][col-1] !== 0){
                q.push([row, col-1])
                visited[row][col-1] = true
                rooms[row][col-1] = Math.min(rooms[row][col-1], count+1)
            }
        }
    }
    const gates = []
    for (let i = 0; i < rooms.length; i++) {
        for (let j = 0; j < rooms[i].length; j++) {
            if (rooms[i][j] === 0) {
                gates.push([i, j])
            }
        }
    }
    for (let gate of gates) {
        bfs(gate)
    }
    return rooms
};