class TicTacToe {
    constructor() {
        this.field=[[null,null,null],[null,null,null],[null,null,null]];
        this.playerOne='x';
        this.playerTwo='o';
        this.currentPlayer=this.playerOne;
        this.Winner=0;
        this.prevPlayer=null;
        this.count=0;
        this.lastTurn=[];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        
        if (this.field[rowIndex][columnIndex]===null) {
            this.field[rowIndex][columnIndex]=this.currentPlayer;

            if (this.currentPlayer===this.playerOne) {
                this.currentPlayer=this.playerTwo;
                this.prevPlayer=this.playerOne;
            }
            else {  
                this.currentPlayer=this.playerOne;
                this.prevPlayer=this.playerTwo;
            };
            this.count++;
            this.lastTurn.length=0;
            this.lastTurn.push(rowIndex,columnIndex);
        }
    }

    isFinished() {

        if (this.count<6) {
            return false;
        }

        var trueWinnerX=0,
            trueWinnerY=0,
            trueWinnerDiagonalX=0,
            trueWinnerDiagonalY=0;
        var lastTurnX = this.lastTurn[0];
        var lastTurnY = this.lastTurn[1];

        for (var i=0; i<3;i++ ) {
            

                if (this.field[lastTurnX][i]===this.prevPlayer) {
                    trueWinnerX++;
                }
                if (this.field[i][lastTurnY]===this.prevPlayer) {
                    trueWinnerY++;
                }
                if (this.field[i][i]===this.prevPlayer) {
                    trueWinnerDiagonalX++;
                }
                if (this.field[i][2-i]===this.prevPlayer) {
                    trueWinnerDiagonalY++;
                }
            }

            if((trueWinnerX===3)||(trueWinnerY===3)||(trueWinnerDiagonalX===3)||(trueWinnerDiagonalY===3)) {
                this.Winner=1;
                return true;
            }
            if (this.count===9) {
                return true;
            }
        return false;
    }

    getWinner() {
        if (this.count<6) {
            return null;
        }
       var trueWinnerX=0,
            trueWinnerY=0,
            trueWinnerDiagonalX=0,
            trueWinnerDiagonalY=0;
        var lastTurnX = this.lastTurn[0];
        var lastTurnY = this.lastTurn[1];

        for (var i=0; i<3;i++ ) {
            

                if (this.field[lastTurnX][i]===this.prevPlayer) {
                    trueWinnerX++;
                }
                if (this.field[i][lastTurnY]===this.prevPlayer) {
                    trueWinnerY++;
                }
                if (this.field[i][i]===this.prevPlayer) {
                    trueWinnerDiagonalX++;
                }
                if (this.field[i][2-i]===this.prevPlayer) {
                    trueWinnerDiagonalY++;
                }
            }

            if((trueWinnerX===3)||(trueWinnerY===3)||(trueWinnerDiagonalX===3)||(trueWinnerDiagonalY===3)) {
                this.Winner=1;
                return this.prevPlayer;
            }
        return null;
    }

    noMoreTurns() {
        if (this.count===9) {
            return true;
        }
        else {return false;}
    }

    isDraw() {
        var trueWinnerX=0,
            trueWinnerY=0,
            trueWinnerDiagonalX=0,
            trueWinnerDiagonalY=0;
        var lastTurnX = this.lastTurn[0];
        var lastTurnY = this.lastTurn[1];

        for (var i=0; i<3;i++ ) {
            

                if (this.field[lastTurnX][i]===this.prevPlayer) {
                    trueWinnerX++;
                }
                if (this.field[i][lastTurnY]===this.prevPlayer) {
                    trueWinnerY++;
                }
                if (this.field[i][i]===this.prevPlayer) {
                    trueWinnerDiagonalX++;
                }
                if (this.field[i][2-i]===this.prevPlayer) {
                    trueWinnerDiagonalY++;
                }
            }

            if((trueWinnerX===3)||(trueWinnerY===3)||(trueWinnerDiagonalX===3)||(trueWinnerDiagonalY===3)) {
                this.Winner=1;              
            }
        if((this.count===9)&&(this.Winner===0)) {
            return true;
        }
        else{return false;}
    }

    getFieldValue(rowIndex, colIndex) {

        return this.field[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
