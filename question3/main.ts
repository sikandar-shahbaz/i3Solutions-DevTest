export class Connect4 {
  board = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
  ];
  
  columnTracker = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  };      

  playerNumber = 2;
  gameOver = false;
    
  play(col: number){
    this.playerNumber = this.playerNumber === 2 ? 1 : 2;
    if(this.gameOver){
      return 'Game has finished!';
    }
    if(this.columnTracker[col] == 6){
      return 'Column full!';
    }
    else{
      this.columnTracker[col] += 1;
    }
    for(let i = this.board.length - 1; i >= 0; i--){
      let currentRow = this.board[i];
      if(currentRow[col] === 0){
        currentRow[col] = this.playerNumber;
        let playerWins = this.checkIfPlayerWon(col, i);
        if(playerWins){
          this.gameOver = true;
          return 'Player ' + this.playerNumber + ' wins!';
        }
        break;
      }
    }
    return 'Player ' + this.playerNumber + ' has a turn';
  };

  checkIfPlayerWon(col, row){
    if(this.getAdjacent(row,col,0,1)+this.getAdjacent(row,col,0,-1) > 2){
      return true;
    } 
    else {
      if(this.getAdjacent(row,col,1,0) > 2){
        return true;
      } 
      else {
        if(this.getAdjacent(row,col,-1,1)+this.getAdjacent(row,col,1,-1) > 2){
          return true;
        } 
        else {
          if(this.getAdjacent(row,col,1,1)+this.getAdjacent(row,col,-1,-1) > 2){
            return true;
          } 
          else {
            return false;
          }
        }
      }
    }
  };
    
  getAdjacent(row,col,row_inc,col_inc){
    if(this.getSpotValue(row,col) == this.getSpotValue(row+row_inc,col+col_inc)){
      return 1+this.getAdjacent(row+row_inc,col+col_inc,row_inc,col_inc);
    } 
    else {
      return 0;
    }
  }
  
  getSpotValue(row,col){
    if(this.board[row] == undefined || this.board[row][col] == undefined){
      return -1;
    } 
    else {
      return this.board[row][col];
    }
  }

}