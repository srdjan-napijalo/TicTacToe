import React from 'react';
import Block from './Block';

function Game() {

  const [isXcurrentPlayer, setNextPlayer] = React.useState(true);

    function changePlayer(){
    setNextPlayer(prevState => {
      if(prevState) return false; 
      else return true;
        })
    }

    function draw(e){        
      if(e.target.textContent !== "") return;
      isXcurrentPlayer? e.target.textContent = "X": e.target.textContent = "O";
      checkForWinner();
      changePlayer();
      }

  const boxfields =  document.getElementsByClassName("box--field");
  //its collection so we must use .textContent

  const winCombinations = [
    [0, 1 ,2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 9],
    [0, 4, 8],
    [2, 4, 6],
];


    function checkForWinner(){
        for(let i=0; i<8; i++){
            const [a, b, c] = winCombinations[i];
            if(boxfields[a].textContent !== "" && boxfields[a].textContent === boxfields[b].textContent 
                && boxfields[b].textContent === boxfields[c].textContent){
                    alert("WE GOT WINNER!")
                    restartGame();
                }
        
        }
    } 

    
    function restartGame(){
        for(var field of boxfields){
            field.textContent = "";
       }    
   }

  return (
    <>
    <h1>Tic Tac Toe</h1>
    <div className='main--box' onClick={draw}>
          <div className='box--row'>
             <Block></Block>
             <Block></Block>
             <Block></Block>      
          </div>
          <div className='box--row'>
             <Block></Block>
             <Block></Block>
             <Block></Block>           
          </div>
          <div className='box--row'>
             <Block></Block>
             <Block></Block>
             <Block></Block>             
          </div>    
    </div>

    <div className='game--info'>
    Player on turn: {isXcurrentPlayer? "X": "O"} 
    <button onClick={restartGame}>Restart</button>
    </div>
    </>)
  }
export default App;  