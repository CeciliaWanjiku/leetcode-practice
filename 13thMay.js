const insertionSort = (list) => {
  for (let i = 1; i < list.length; i++){
    let currItem = list[i]
    let prevItem = list[i - 1]
    let j = i

    while (j > 0 && currItem < prevItem) {
      let temp = prevItem
      prevItem = currItem
      currItem = temp
      j--
    }
  }
}

//909. Snakes and Ladders
var snakesAndLadders = function(board) {
  const N = board.length;
  const getLoc = (pos) => {
    let row = Math.floor((pos - 1) / N);
    let col = (pos - 1) % N;
    col = (row % 2) === 1 ? N - col - 1 : col;
    row = N - row - 1;
    return [row,col];
  }
  const q = [1];
  const v = {'1': 0};
  while(q.length) {
    const n = q.shift();
    if(n === N*N) return v[n];
    for(let i = n+1; i <= Math.min(n+6, N*N); i++) {
      const [r, c] = getLoc(i);
      const next = board[r][c] === -1 ? i : board[r][c];
      if(v[next] === undefined) {
        q.push(next);
        v[next] = v[n] + 1;
      }
    }
  }
  
  return -1;
};