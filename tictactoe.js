
    
    var winningCombos= [["b0", "b1", "b2"], ["b3", "b4", "b5"], ["b6", "b7", "b8"], ["b0", "b4", "b8"], ["b2", "b4", "b6"], ["b0", "b3", "b6"], ["b1", "b4","b7"],["b2", "b5", "b8"]];

    
    var currentPlayer = 'X';
    const player1 = 'X';
    const player2 = 'O';

    var board = document.querySelector('.board');
    let turnCounter = 0;
    board.addEventListener('click', function(event) { 
    let box = event.target;
    console.log(box.textContent)
      if (box.tagName === "DIV") {
        if(turnCounter % 2 === 0) {
          box.textContent = 'O';
        } else {
          box.textContent = 'X';
        }
        turnCounter++
      }
  
     for (let j = 0; j < winningCombos.length; j++) { 
      
     } if (board[winningCombos[j][0]].includes(player1) && board[winningCombos[j][1]].includes(player1) && board[winningCombos[j][2]].includes(player1)) {
    //  var winnerScore = document.querySelector('#boxTopBottom')

      // winnerScore.textContent = 'currentPlayer' + ' winner'; 
      document.querySelector('#boxTopBottom').textContent = 'player1' + ' winner';

     } else if (board[winningCombos[j][0]].includes(player1) && board[winningCombos[j][1]].includes(player1) && board[winningCombos[j][2]].includes(player1)) {
      //  var winnerScore = document.querySelector('#boxTopBottom')
  
        // winnerScore.textContent = 'currentPlayer' + ' winner'; 
        document.querySelector('#boxTopBottom').textContent = 'player2' + ' winner';
      
     }
    
    } else { 
      document.querySelector('#boxTopBottom').textContent = 'Draw';
     }
    })



    //     board[i].addEventListener('click', function(event) { 
    //     board[i].textContent = player1;

    //     let box = event.target
    //      console.log(box.textContent)
    //      if (box.textContent === 'player1') {
    //         box.textContent ='player1';
    //      }
    

     