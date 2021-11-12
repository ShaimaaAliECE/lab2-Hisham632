import React, { useState } from 'react';
import './App.css';
import Square from './Square'



function Board()
{
  const [square, setSquare]= useState(Array(42).fill("blank"));
  const[color, setColor]= useState(true);
  

  
  
  const squares=square.slice();

  let status=null;


  const handleClick= (i) => 
  {
    if(status==null)
    {
      if(squares[i]=="blank")
      {
        squares[i] = color ? "player1": "player2";
        setSquare(squares);
        setColor(!color);
      }
    }
   
   
    
  }
  let tie=0;
  for(let s=0; s<42;s++)
  {
    if(squares[s]!="blank")
    {
      tie++;
    }
  }

 
  const win=calcWinner();
  if(win)
  {
    status=win
  }
  else if(tie==42)
  {
    status="A Tie has occured"
  }

 

  function calcWinner()
  {
    let count=true;
    var index=0;
    let player1R=1;
    let player2R=1;
    let player1V=1;
    let player2V=1;

    for(;index<42; index++)
    {
        player1R=1;
        player2R=1;
        player1V=1;
        player2V=1;
        
        let cell=index;
        count=true

      for(let x=1, y=1;count&&(player1R!=4||player2R!=4||player1V!=4||player2V!=4)&&squares[cell]!="blank";)
      {


        if(squares[cell]== squares[cell+(1*x)])
        {
          if(square[cell]=="player1")
          {
            player1R++;
          }
          else if(square[cell]=="player2")
          {
            player2R++;
          }

          if(cell%7==5||cell%7==6)
          {
            player2R--;
            player1R--;
          }
            x++;
          
          console.log(" Player1Num: "+player1R)
          console.log(" Player2Num: "+player2R)

        }
        if(squares[cell]==squares[cell+(7*y)])
        {
          if(square[cell]=="player1")
          {
            console.log(cell+(7*y))
            player1V++;
          }
          else if(square[cell]=="player2")
          {
            player2V++;
          }
          y++;

          console.log(" Player1VerticalNum: "+player1V)
          console.log(" Player2VerticalNum: "+player2V)
        }



        if(!(squares[cell]==squares[cell+(7*y)]||squares[cell]== squares[cell+(1*x)]))
        {
          console.log("HEKO "+ cell)
          count=false;
        }

        if(player1R==4||player2R==4||player1V==4||player2V==4)
        {
           if(player1R==4||player1V==4)
           {
             return "Winner: Red"
           }

           if(player2R==4||player2V==4)
           {
             return "Winner: Yellow"
           }
        
        }


      }

      

   
    }
    if(!(player1R==4||player2R==4||player1V==4||player2V==4))
      {
        console.log("Lost")

        return false;
      }
    

  }







  const renderSquare= (i) =>
  {
      return(
          <Square color={square[i]}  onClick={() => handleClick(i) }/>
      );
  }

  return(
        <div className="board">

            <div className="Rows">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
            </div>
            
            <div className="Rows">
                {renderSquare(7)}
                {renderSquare(8)}
                {renderSquare(9)}
                {renderSquare(10)}
                {renderSquare(11)}
                {renderSquare(12)}
                {renderSquare(13)}
            </div>

            <div className="Rows">
                {renderSquare(14)}
                {renderSquare(15)}
                {renderSquare(16)}
                {renderSquare(17)}
                {renderSquare(18)}
                {renderSquare(19)}
                {renderSquare(20)}
            </div>

            <div className="Rows">
                {renderSquare(21)}
                {renderSquare(22)}
                {renderSquare(23)}
                {renderSquare(24)}
                {renderSquare(25)}
                {renderSquare(26)}
                {renderSquare(27)}
            </div>

            <div className="Rows">
                {renderSquare(28)}
                {renderSquare(29)}
                {renderSquare(30)}
                {renderSquare(31)}
                {renderSquare(32)}
                {renderSquare(33)}
                {renderSquare(34)}

            </div>

            <div className="Rows">
                {renderSquare(35)}
                {renderSquare(36)}
                {renderSquare(37)}
                {renderSquare(38)}
                {renderSquare(39)}
                {renderSquare(40)}
                {renderSquare(41)}
            </div>

            <h1 >{status}</h1>
        </div>
  );
 
}

export default Board;