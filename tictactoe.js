
    
    var winningCombos= [["b0", "b1", "b2"], ["b3", "b4", "b5"], ["b6", "b7", "b8"], ["b0", "b4", "b8"], ["b2", "b4", "b6"], ["b0", "b3", "b6"], ["b1", "b4","b7"],["b2", "b5", "b8"]];

    
   
    const player1 = 'X';
    const player2 = 'O';

    var board = document.querySelector('.board');
    let turnCounter = 0;
    board.addEventListener('click', function(event) { 
    let box = event.target;
    console.log(box.textContent)
      if (box.tagName === "DIV" && box.textContent != player2 && box.textContent != player1) {
        if(turnCounter % 2 === 0) {
          box.textContent = player1;
        } else {
          box.textContent = player2;
        }
        //Increment count on each click
        turnCounter++
      } 
      //Check for win on every click
      winningCondition()  
    })
    
    function winningCondition () {
      if (b0.textContent === player1 && b1.textContent === player1 && b2.textContent === player1) {
        document.querySelector('#boxTop').textContent = 'Winner';
      } else if (b3.textContent === player1 && b4.textContent === player1 && b5.textContent === player1 ){
        document.querySelector('#boxTop').textContent = 'Winner';
      } else if (b6.textContent === player1 && b7.textContent === player1 && b8.textContent === player1 ){
        document.querySelector('#boxTop').textContent = 'Winner';
      } else if (b0.textContent === player1 && b4.textContent === player1 && b8.textContent === player1 ){
        document.querySelector('#boxTop').textContent = 'Winner';
      } else if (b2.textContent === player1 && b4.textContent === player1 && b6.textContent === player1 ){
        document.querySelector('#boxTop').textContent = 'Winner';
      } else if (b0.textContent === player1 && b3.textContent === player1 && b6.textContent === player1 ){
        document.querySelector('#boxTop').textContent = 'Winner';
      } else if (b1.textContent === player1 && b4.textContent === player1 && b7.textContent === player1 ){
        document.querySelector('#boxTop').textContent = 'Winner';
      } else if (b2.textContent === player1 && b5.textContent === player1 && b8.textContent === player1 ){
        document.querySelector('#boxTop').textContent = 'Winner';
      } else if (b0.textContent === player2 && b1.textContent === player2 && b2.textContent === player2) {
        document.querySelector('#boxBottom').textContent = 'Winner';
      } else if (b3.textContent === player2 && b4.textContent === player2 && b5.textContent === player2 ){
          document.querySelector('#boxBottom').textContent = 'Winner';
      } else if (b6.textContent === player2 && b7.textContent === player2 && b8.textContent === player2 ){
          document.querySelector('#boxBottom').textContent = 'Winner';
      } else if (b0.textContent === player2 && b4.textContent === player2 && b8.textContent === player2 ){
          document.querySelector('#boxBottom').textContent = 'Winner';
      } else if (b2.textContent === player2 && b4.textContent === player2 && b6.textContent === player2 ){
          document.querySelector('#boxBottom').textContent = 'Winner';
      } else if (b0.textContent === player2 && b3.textContent === player2 && b6.textContent === player2 ){
          document.querySelector('#boxBottom').textContent = 'Winner';
      } else if (b1.textContent === player2 && b4.textContent === player2 && b7.textContent === player2){
          document.querySelector('#boxBottom').textContent = 'Winner';
      } else if (b2.textContent === player2 && b5.textContent === player2 && b8.textContent === player2 ){
          document.querySelector('#boxBottom').textContent = 'Winner';
      } else if(turnCounter === 9) {
        document.querySelector('#boxTop').textContent = 'Draw';
        document.querySelector('#boxBottom').textContent = 'Draw';
      } else {
        console.log('keep Playing')
      }
    }
    
    // Enable Buttons for start, restart and quit

    var restartButton = document.querySelector('#restart')
    restartButton.addEventListener('click', function()  {
      var boxes = document.querySelectorAll('.box')
      for(let i = 0; i < boxes.length; i++) {
          boxes[i].textContent = '';
      }  
      document.querySelector('#boxTop').textContent = '';
      document.querySelector('#boxBottom').textContent = '';
      document.querySelector('#player1Name').textContent = '';
      document.querySelector('#player2Name').textContent = '';
      turnCounter = 0;

      var playerOne = prompt('Enter your Name?')
      document.querySelector('#player1Name').textContent = playerOne;
  
      var playerTwo = prompt('Enter your Name')
      document.querySelector('#player2Name').textContent = playerTwo;
    })

    var playerOne = prompt('Enter your Name?')
      document.querySelector('#player1Name').textContent = playerOne;
  
      var playerTwo = prompt('Enter your Name')
      document.querySelector('#player2Name').textContent = playerTwo;
  
      

   







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
    

     