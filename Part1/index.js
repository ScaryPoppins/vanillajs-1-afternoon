
var board = [];




     
// changes board
function play(clickedId){

    const clickedElement = document.getElementById(clickedId)

    const playerSpan = document.getElementById('player')

    if(playerSpan.innerText === 'X' && board[clickedId] === undefined){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
            board[clickedId] = 'X';
      
    }
    else if (playerSpan.innerText = 'O' && board[clickedId] === undefined){
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }

    //board lablels
const topLeft = board[0];
const topCenter = board[1];
const topRight = board[2];
const middleLeft = board[3];
const middleCenter = board[4];
const middleRight = board[5];
const bottomLeft = board[6];
const bottomCenter = board[7];
const bottomRight = board[8];


// checks for winner
if (topRight !== undefined && topRight === topCenter && topRight === topLeft)
{alert(topRight + " " + "is the winner")
    reset();}
if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
    alert(topRight + " " + "is the winner")
    reset();}
if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
     alert(topRight + " " + "is the winner")
     reset();}    
if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
     alert(topCenter + " " + "is the winner")
     reset();}   
if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomleft){
     alert(topLeft + " " + "is the winner")
     reset();}     
if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
     alert(`${topLeft} is the winner`)
     reset();}   
if (middleRight !== undefined && middleRight === middleCenter && middleRight === middleLeft){
     alert(middleRight + " " + "is the winner")
     reset();}    
if (bottomRight !== undefined && bottomRight === bottomCenter && bottomRight === bottomLeft){
     alert(bottomRight + " " + "is the winner")
    reset();}   

      // determines if board is full    
var boardFull = true;
for(i = 0; i < 9; i++){
    if(board[i] === undefined){
        boardFull = false;
    }
  }
if (boardFull === true ) {
    alert("Cat's game, there is no winner");

    }  
}
//reset button
function reset(){
  //  console.log('do stuff')
    board = [];
    for(let i = 0; i <= 8; i++) {
        document.getElementById(i).innerText = '';
    }
}