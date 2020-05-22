var maxAreaOfIsland = function(grid) {
    let area = 0
    let n = grid.length;
    let m = grid[0].length;
    
    const getSize = (grid, cell) => {
        const [row, col] = cell
        if(row<0 || col<0 || row>n-1 || col>m-1){
            return 0
        }
        if(grid[row][col] == 0){
            return 0
        }
        grid[row][col] = 0
        let size = 1
        for(let i = row -1; i<=row+1; i++){
            for(let j = col-1; j<=col+1; j++){
                if(i !== row || j !== col){
                    size = size + getSize(grid, [i, j])
                    console.log(getSize(grid, [i, j]))
                }
            }
        }
        //console.log(size)
        return size
        
    }
    let size = 0
    for(let row = 0; row<n; row++){
        for(let col =0; col<m; col++){
            if(grid[row][col] === 1){
                size = getSize(grid, [row, col])
                area = Math.max(area, size)
                
            }
                
        }
    }
    return area
    
};

var numIslands = function(grid) {
    let n = grid.length
    let m = grid[0].length
    let count = 0
    
    const isIsland = (grid, cell) => {
        const [row, col] = cell
        if(row<0 || col<0 || row>n-1 || col>m-1){
            return
        }
        if(grid[row][col] === "0"){
            return
        }
        grid[row][col] = "0"
        for(let i = row-1; i<=row+1; i++){
            for(let j = col-1; j<=col+1; j++){
                isIsland(grid, [i, j])
            }
        }
    }
    if(grid ==null || n == 0){
        return 0
    }
    
    for(let row = 0; row<n; row++){
        for(let col = 0; col<m; col++){
            if(grid[row][col] === "1"){
                count += 1 
                isIsland(grid, [row, col])
            }
            console.log(grid)
            
        }
    } 
    //console.log(grid)
    return count
}