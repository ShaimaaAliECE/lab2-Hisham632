import React from 'react';
import './App.css';



function Squares(props)
{
  return(
        <div>
            <button className={props.color} onClick={()=> props.onClick()}></button>
        </div>

  );
}

export default Squares;