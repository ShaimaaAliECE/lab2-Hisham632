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
     // console.log("Empty: "+tie)

    }
  }

 
  const win=calcWinner();
  //console.log("Click")
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
    //let winner=false;
    let count=true;
    //console.log("IN");
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
        //console.log("IN2 "+ cell);

        //console.log("HELPPPPPPPPPP "+ cell);
        //console.log(squares[8])

        if(squares[cell]== squares[cell+(1*x)])
        {
         // console.log("IN4");  create a if statement to keeep track if its player 1 or 2
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
          //console.log("WON")

          //return true;
        }


      }
      //console.log("LEFT ")

      

   
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

            {status}
        </div>
  );
 
}




/*
class Board2 extends React.Component
{
   constructor(props)
    {
      super(props);
      this.handleClick = this.handleClick.bind(this);

      this.state={
        'gameBoard':[
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0]
        ],
        'turn':0,
        'player':1
      }

    }
   

    handleClick() 
    {

      count++;
      if(count%2==0)
      {
        player=1
      }
      else
      {
        player=2;
      }
      this.setState({'turn': count})
      this.setState({'player':player})
      this.setState({'gameBoard':[1][1]=1})
    }

    render()
    {
      
      return (
        <div > 
              <div> 
            <button id="1" className="player2" onClick={this.handleClick}> </button>
            <button id="2" className="blank" onClick={this.handleClick}> </button>
            <button id="3" className="blank" onClick={this.handleClick}> </button>
            <button id="4" className="blank" onClick={this.handleClick}> </button>
            <button id="5" className="blank" onClick={this.handleClick}> </button>
            <button id="6" className="blank" onClick={this.handleClick}> </button>
            <button id="7" className="blank" onClick={this.handleClick}> </button>
            </div>

            <div> 
            <button id="8" className="blank" onClick={this.handleClick}> </button>
            <button id="9" className="blank" onClick={this.handleClick}> </button>
            <button id="10" className="blank" onClick={this.handleClick}> </button>
            <button id="11" className="blank" onClick={this.handleClick}> </button>
            <button id="12" className="blank" onClick={this.handleClick}> </button>
            <button id="13" className="blank" onClick={this.handleClick}> </button>
            <button id="14" className="blank" onClick={this.handleClick}> </button>
            </div>

            <div>
            <p>Turn number = {this.state.turn} </p>
            <p>Player {this.state.player} turn</p>
            </div>
        </div> 

     
       
      );
    }
}*/

export default Board;