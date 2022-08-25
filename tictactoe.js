
    
    var winningCombos= [["b0", "b1", "b2"], ["b3", "b4", "b5"], ["b6", "b7", "b8"], ["b0", "b4", "b8"], ["b2", "b4", "b6"], ["b0", "b3", "b6"], ["b1", "b4","b7"],["b2", "b5", "b8"]];

    
    var currentPlayer = 'X';
    const player1 = 'X';
    const player2 = 'O';

    var board = document.querySelector('.board');
    let turnCounter = 0;
    board.addEventListener('click', function(event) { 
    let box = event.target;
    console.log(box.textContent)
      if (box.tagName === "DIV" && box.textContent != 'O' && box.textContent != 'X') {
        if(turnCounter % 2 === 0) {
          box.textContent = 'X';
        } else {
          box.textContent = 'O';
        }
        turnCounter++
      } 
      winningCondition()  
    })
    
    function winningCondition () {
      if (b0.textContent === 'X' && b1.textContent === 'X' && b2.textContent === 'X') {
        document.querySelector('#boxTop').textContent = 'Winner';
      } else if (b3.textContent === 'X' && b4.textContent === 'X' && b5.textContent === 'X' ){
        document.querySelector('#boxTop').textContent = 'Winner';
      } else if (b6.textContent === 'X' && b7.textContent === 'X' && b8.textContent === 'X' ){
        document.querySelector('#boxTop').textContent = 'Winner';
      } else if (b0.textContent === 'X' && b4.textContent === 'X' && b8.textContent === 'X' ){
        document.querySelector('#boxTop').textContent = 'Winner';
      } else if (b2.textContent === 'X' && b4.textContent === 'X' && b6.textContent === 'X' ){
        document.querySelector('#boxTop').textContent = 'Winner';
      } else if (b0.textContent === 'X' && b3.textContent === 'X' && b6.textContent === 'X' ){
        document.querySelector('#boxTop').textContent = 'Winner';
      } else if (b1.textContent === 'X' && b4.textContent === 'X' && b7.textContent === 'X' ){
        document.querySelector('#boxTop').textContent = 'Winner';
      } else if (b2.textContent === 'X' && b5.textContent === 'X' && b8.textContent === 'X' ){
        document.querySelector('#boxTop').textContent = 'Winner';
      } else if (b0.textContent === 'O' && b1.textContent === 'O' && b2.textContent === 'O') {
        document.querySelector('#boxBottom').textContent = 'Winner';
      } else if (b3.textContent === 'O' && b4.textContent === 'O' && b5.textContent === 'O' ){
          document.querySelector('#boxBottom').textContent = 'Winner';
      } else if (b6.textContent === 'O' && b7.textContent === 'O' && b8.textContent === 'O' ){
          document.querySelector('#boxBottom').textContent = 'Winner';
      } else if (b0.textContent === 'O' && b4.textContent === 'O' && b8.textContent === 'O' ){
          document.querySelector('#boxBottom').textContent = 'Winner';
      } else if (b2.textContent === 'O' && b4.textContent === 'O' && b6.textContent === 'O' ){
          document.querySelector('#boxBottom').textContent = 'Winner';
      } else if (b0.textContent === 'O' && b3.textContent === 'O' && b6.textContent === 'O' ){
          document.querySelector('#boxBottom').textContent = 'Winner';
      } else if (b1.textContent === 'O' && b4.textContent === 'O' && b7.textContent === 'O'){
          document.querySelector('#boxBottom').textContent = 'Winner';
      } else if (b2.textContent === 'O' && b5.textContent === 'O' && b8.textContent === 'O' ){
          document.querySelector('#boxBottom').textContent = 'Winner';
      } else if(turnCounter === 9) {
        document.querySelector('#boxTop').textContent = 'Draw';
        document.querySelector('#boxBottom').textContent = 'Draw';
      } else {
        console.log('keep Playing')
      }
    }



      

   







    // for (let j = 0; j < winningCombos.length; j++) { 
      
    // } if (board[winningCombos[j][0]].includes(player1) && board[winningCombos[j][1]].includes(player1) && board[winningCombos[j][2]].includes(player1)) {
    // //  var winnerScore = document.querySelector('#boxTopBottom')

    //   // winnerScore.textContent = 'currentPlayer' + ' winner'; 
    // document.querySelector('#boxTopBottom').textContent = 'player1' + ' winner';

    // } else if (board[winningCombos[j][0]].includes(player2) && board[winningCombos[j][1]].includes(player2) && board[winningCombos[j][2]].includes(player2)) {
    //   //  var winnerScore = document.querySelector('#boxTopBottom')
  
    //     // winnerScore.textContent = 'currentPlayer' + ' winner'; 
    // document.querySelector('#boxTopBottom').textContent = 'player2' + ' winner';
      
    //  }
    
    // } else { 
    //   document.querySelector('#boxTopBottom').textContent = 'Draw';
    // }







    //     board[i].addEventListener('click', function(event) { 
    //     board[i].textContent = player1;

    //     let box = event.target
    //      console.log(box.textContent)
    //      if (box.textContent === 'player1') {
    //         box.textContent ='player1';
    //      }
    

     