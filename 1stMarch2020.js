/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    let newRooms = rooms
    let len = rooms.length
    let len2 = rooms[0].length
    
    const fill = (cell, rooms, newRooms) => {
        const [row, col] = cell
        if(rooms[row][col] === -1 || rooms[row][col] === -1){
            return 0
        }
        newRooms[row][col] = 1 + Math.min(
            row+1 < len ?
            fill([row+1, col], rooms, newRooms) : Number.MAX_VALUE,
            row+1 >=0 ?
            fill([row-1, col], rooms, newRooms) : Number.MAX_VALUE,
            col+1 < len2 ?
            fill([row, col+1], rooms, newRooms) : Number.MAX_VALUE,
            col-1>=0 ?
            fill([row, col-1], rooms, newRooms) : Number.MAX_VALUE 
        )
    }
    for(let i = 0; i<len; i++){
        for (let j= 0; j<len2; j++){
            fill([i,j], rooms, newRooms)
        }
    }
//     const fillRooms = (rooms) => {
//         for(let i = 0; i< rooms.length; i++){
//             for(let j = 0; j<rooms[i].length; j++){
//                 if(rooms[i][j]== -1){
//                     newRooms[i][j] = Number.MAX_VALUE
//                 } else if {
//                     newRooms[i][j] = Number.MAX_VALUE    
//                 }else {
//                     newRooms[i][j] = 1+ Math.min(
//                         i+1 < len ? newRooms[i+1][j] :Number.MAX_VALUE,
//                         i-1 >= 0 ? newRooms[i-1][j] :Number.MAX_VALUE,
//                         j+1 < len2 ? newRooms[i][j+1] :Number.MAX_VALUE,
//                         j-1 >=0 len ? newRooms[i][j-1] :Number.MAX_VALUE,
                        
//                     )
//                 }
//             }
//         }
//     }
    console.log(newRooms)
    //return newRooms
    
};

wallsAndGates([[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]])