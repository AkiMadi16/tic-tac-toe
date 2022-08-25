
    
    var winningCombos= [["box0", "box1", "box2"], ["box3", "box4", "box5"], ["box6", "box7", "box8"], ["box0", "box4", "box8"], ["box2", "box4", "box6"], ["box0", "box3", "box6"], ["box1", "box4","box7"],["box2", "box5", "box8"]];

    
    var currentPlayer = 'X';
    const player1 = 'X';
    const player2 = 'O';

    var board= document.querySelectorAll('.box');

      for (let i = 0; i < board.length; i++) {
       
        board[i].addEventListener('click', function(event) { 
        let box = event.target;
        console.log(box.textContent)
         if(i % 2 === 0) {
           box.textContent = 'X';
          }
          else
              box.textContent = 'O';
      })
    }
     for (let j = 0; j < winningCombos.length; j++) { 
      
    if (winningCombos[j].includes(player1) || winningCombos[j].includes(player1)) {
      var winnerScore = document.querySelector('#boxTopBottom')

        winnerScore.textContent = 'currentPlayer';   
      }
      else
        winnerScore.textContent = 'Draw';
     }




    //     board[i].addEventListener('click', function(event) { 
    //     board[i].textContent = player1;

    //     let box = event.target
    //      console.log(box.textContent)
    //      if (box.textContent === 'player1') {
    //         box.textContent ='player1';
    //      }
    

     