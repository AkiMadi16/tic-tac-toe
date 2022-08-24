
    // var player2 = "O";
    var winningPattern = [["box0", "box1", "box2"], ["box3", "box4", "box5"], ["box6", "box7", "box8"], ["box0", "box4", "box8"], ["box2", "box4", "box6"], ["box0", "box3", "box6"], ["box1", "box4","box7"],["box2", "box5", "box8"]];

    var player1 = "X";
    var board= document.querySelectorAll('.box');

           
      for (let i = 0; i < board.length; i++) {

        board[i].addEventListener('click', function(event) { 
        board[i].textContent = player1;

        let box = event.target
         console.log(box.textContent)
         if (box.textContent === 'player1') {
            box.textContent ='player1';
         }
       })
    }
      

        
    //      for (let j = 0; j < winner.length; j++) { 

    //      winner[j].style.textDecoration = 'line-through';   
    //     }
    
    //       }
    //     })
         
    //   }

     