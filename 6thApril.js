function validTree(n, edges) { 
    let arr = []
    for(let i = 0; i<n; i++){
        arr[i] = []
    }
    
    for(let edge of edges){
        let parent = edge[0]
        let child = edge[1]
        arr[parent].push(child)
        arr[child].push(parent)
    }
    
    let parent = {}
    parent[0] = -1
    let stack = []
    stack.push(0)
    while(stack.length){
        console.log(stack)
        let curr = stack.pop()
        
        for(let neigh of arr[curr]){
            if(parent[curr] == neigh){
                console.log("here")
                continue;
            }
            if(parent[neigh]){
                return false
            }
            stack.push(neigh)
            parent[neigh] = curr
        }
    }
    console.log(",,,", parent, n)
    return Object.keys(parent).length == n
}

function validTree(n, edges) { 
    let arr = []
    for(let i = 0; i<n; i++){
        arr[i] = []
    }
    
    for(let edge of edges){
        let parent = edge[0]
        let child = edge[1]
        arr[parent].push(child)
        arr[child].push(parent)
    }
    let seen = new Set()
    
    const dfs = (node, parent) => {
        if(seen.has(node)){
            return false
        }
        seen.add(node)
        for(let neigh of arr[node]){
            if(parent !== neigh){
                let result = dfs(neigh, node)
                if(!result){
                    return false
                }
            }
        }
        return true
    }
    
    return dfs(0, -1) && seen.size == n
}

var solveSudoku = (board) =>{
    
    const isValid = (cell,num) => {
        const [row, col] = cell
        for(let i = 0; i<9; i++){
            if(board[i][col] == num){
                return false
            }
        }
        for(let j = 0; j<9; j++){
            if(board[row][j] == num){
                return false
            }
        }
        let boxRowIndex = row - (row % 3)
        let boxColIndex = col - (col % 3)
        
        for(let r = 0; r<3; r++){
            for(let c = 0; c<3; c++){
                console.log(row, boxRowIndex,col, boxColIndex )
                if(board[boxRowIndex + r][boxColIndex + c] == num){
                    return false
                }
            }
        }
        return true
    }
    
    const fillSudoku = (row, col) => {
        if(row == 9){
            return true
        }
        if(col == 9){
            return fillSudoku(row+1,0)
        }
        if(board[row][col] == '.'){
            for(let i = 1; i<=9; i++){
                if(isValid([row, col], i)){
                    board[row][col] = ''+i
                    if(fillSudoku(row, col+1)){
                        return true
                    }
                    board[row][col] = '.'
                }
            }
        }else {
            return fillSudoku(row, col+1)
        }
        return false
        
    }
    
    fillSudoku(0,0)


};
var solve = function(board) {
    const m = board.length
    if(!m){
        return
    }
    const n = board[0].length

    let borders = []
    
    for(let i = 0; i<m; i++){
        for(let j = 0; j<n; j++){
            if(i == 0 || j == 0 || i == m-1 || j == n-1){
                borders.push([i,j])
            }
        }
    }
    
    const bfs = (matrix, cell) => {
        let q = []
        q.push(cell)
        while(q.length){
            let curr = q.shift()
            const [row, col] = cell
            if(matrix[row][col] !== "O"){
                continue;
            }
            matrix[row][col] = "E"
            if(col<n-1){
                q.push([row, col+1])
            }
            if(row<m-1){
                q.push([row+1, col])
            }
            if(row >0){
                q.push([row-1, col])
            }
            if(col >0){
                q.push([row, col-1])
            }
            
        }
    }
    
    for(let b of borders){
        bfs(board, b)
    }
    console.log( board)
    for(let r = 0; r<m; r++){
        for(let c = 0; c<n; c++){
            if(board[r][c] == "O"){
                board[r][c] = "X"
            }
            if(board[r][c] == "E"){
                board[r][c] = "O"
            }
        }
    }
    
    return board
    
};