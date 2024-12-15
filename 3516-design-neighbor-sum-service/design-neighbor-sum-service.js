function findIndexOfHouse(val,grid){
    for(let i = 0 ; i <grid.length ; i++){
        for(let j = 0 ; j < grid[i].length ; j++){
            if(grid[i][j] == val) return [i , j]
        }
    }
}
var NeighborSum = function(grid) {
    this.grid = grid;
};
NeighborSum.prototype.adjacentSum = function(value) {
   let [i , j ] = findIndexOfHouse(value , this.grid);
 
    let sum = 0 ;


    sum += i>0 ?this.grid[i-1][j] : 0;
    sum += i < this.grid.length - 1 ? this.grid[i+1][j] : 0 
    sum += j > 0 ? this.grid[i][j-1] : 0
    sum += j < this.grid[i].length - 1 ? this.grid[i][j+1] : 0;
    return sum
    
}
NeighborSum.prototype.diagonalSum = function(value) {
    let [i , j ] = findIndexOfHouse(value , this.grid);
 
    let sum = 0 ;
    
    if(i > 0 && j > 0) sum += this.grid[i-1][j-1];
    if(i < this.grid.length - 1 && j > 0) sum += this.grid[i+1][j-1] 
    if( i>0 && j < this.grid[i].length - 1) sum += this.grid[i-1][j+1];
    if(i < this.grid.length - 1  && j < this.grid[i].length - 1) sum += this.grid[i+1][j+1];
    return sum 
};
 