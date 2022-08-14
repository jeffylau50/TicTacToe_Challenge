import React, { createContext , useEffect, useContext , useState } from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}



function Square(props) {
  
  return (
    <div
      className="square" style={squareStyle}> {props.value=='empty'&& ''} {props.value=='X'&& 'X'}
      {props.value=='O'&& 'O'}
      </div>
  );
}

function Board(props) {
  const [currentPlayer, setPlayer] = useState('X')
  const [winner, setWinner] = useState('None')
  const [boxSt1, setBox1] = useState('empty')
  const [boxSt2, setBox2] = useState('empty')
  const [boxSt3, setBox3] = useState('empty')
  const [boxSt4, setBox4] = useState('empty')
  const [boxSt5, setBox5] = useState('empty')
  const [boxSt6, setBox6] = useState('empty')
  const [boxSt7, setBox7] = useState('empty')
  const [boxSt8, setBox8] = useState('empty')
  const [boxSt9, setBox9] = useState('empty')

useEffect(()=>{
if(winner==='None'){
  if (boxSt1===boxSt2 && boxSt2===boxSt3){
  if(boxSt1!=='empty'){
   setWinner(boxSt1)}
 }
 if (boxSt4===boxSt5 && boxSt5===boxSt6){
  if(boxSt4!=='empty'){
   setWinner(boxSt4)}
 }
 if (boxSt7===boxSt8 && boxSt8===boxSt9){
  if(boxSt7!=='empty'){
   setWinner(boxSt7)}
 }
 if (boxSt1===boxSt4 && boxSt4===boxSt7){
  if(boxSt7!=='empty'){
   setWinner(boxSt7)}
 }
 if (boxSt2===boxSt5 && boxSt5===boxSt8){
  if(boxSt8!=='empty'){
   setWinner(boxSt8)}
 }
  if (boxSt3===boxSt6 && boxSt6===boxSt9){
  if(boxSt9!=='empty'){
   setWinner(boxSt9)}
 }
 if (boxSt1===boxSt5 && boxSt5===boxSt9){
  if(boxSt9!=='empty'){
   setWinner(boxSt9)}
 }
 if (boxSt3===boxSt5 && boxSt5===boxSt7){
  if(boxSt5!=='empty'){
   setWinner(boxSt5)}
 }
}
}, [currentPlayer])


 const checkWinner = (evt)=> {
 if (boxSt1=='X' && boxSt2=='X' && boxSt3=='X'){
   setWinner('X')
 }
 }


  const handleToggle1 = (evt) => {
    if(boxSt1=='empty'){
    setBox1(currentPlayer)
    if(currentPlayer==='X'){
      setPlayer('O')
    }else{ setPlayer('X')}} 

    checkWinner()
    
    }

const handleToggle2 = (evt) => {
    if(boxSt2=='empty'){
    setBox2(currentPlayer)
    if(currentPlayer==='X'){
      setPlayer('O')
    }else{setPlayer('X') }}      checkWinner()}

    const handleToggle3 = (evt) => {
    if(boxSt3=='empty'){
    setBox3(currentPlayer)
    if(currentPlayer==='X'){
      setPlayer('O')
    }else{setPlayer('X')}}     checkWinner()}

    const handleToggle4 = (evt) => {
    if(boxSt4=='empty'){
    setBox4(currentPlayer)
    if(currentPlayer==='X'){
      setPlayer('O')
    }else{setPlayer('X')}}  }

    const handleToggle5 = (evt) => {
    if(boxSt5=='empty'){
    setBox5(currentPlayer)
    if(currentPlayer==='X'){
      setPlayer('O')
    }else{setPlayer('X')}} }

    const handleToggle6 = (evt) => {
    if(boxSt6=='empty'){
    setBox6(currentPlayer)
    if(currentPlayer==='X'){
      setPlayer('O')
    }else{setPlayer('X')}} }

    const handleToggle7 = (evt) => {
    if(boxSt7=='empty'){
    setBox7(currentPlayer)
    if(currentPlayer==='X'){
      setPlayer('O')
    }else{setPlayer('X')}} }

    const handleToggle8 = (evt) => {
    if(boxSt8=='empty'){
    setBox8(currentPlayer)
    if(currentPlayer==='X'){
      setPlayer('O')
    }else{setPlayer('X')}} }

    const handleToggle9 = (evt) => {
    if(boxSt9=='empty'){
    setBox9(currentPlayer)
    if(currentPlayer==='X'){
      setPlayer('O')
    }else{setPlayer('X')}} }

    const handleReset = (evt) => {
      setBox1('empty'); setBox2('empty'); setBox3('empty');
      setBox4('empty'); setBox5('empty'); setBox6('empty');
      setBox7('empty'); setBox8('empty'); setBox9('empty');
      setWinner('None'); setPlayer('X');
    }

    
  return (

    <div style={containerStyle} className="gameBoard">

      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{currentPlayer}</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{winner}</span></div>
      <button style={buttonStyle} onClick={handleReset}>Reset</button>

      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          
          <div className="square" style={squareStyle} onClick={handleToggle1}> {boxSt1=='empty'&& ''} 
          {boxSt1=='X'&& 'X'} {boxSt1=='O'&& 'O'} </div>

          <div className="square" style={squareStyle} onClick={handleToggle2}> {boxSt2=='empty'&& ''} 
          {boxSt2=='X'&& 'X'} {boxSt2=='O'&& 'O'} </div>

        <div className="square" style={squareStyle} onClick={handleToggle3}> {boxSt3=='empty'&& ''}  
          {boxSt3=='X'&& 'X'} {boxSt3=='O'&& 'O'} </div>
        </div>

        <div className="board-row" style={rowStyle}>

          <div className="square" style={squareStyle} onClick={handleToggle4}> {boxSt4=='empty'&& ''} 
          {boxSt4=='X'&& 'X'} {boxSt4=='O'&& 'O'} </div>

          <div className="square" style={squareStyle} onClick={handleToggle5}> {boxSt5=='empty'&& ''} 
          {boxSt5=='X'&& 'X'} {boxSt5=='O'&& 'O'} </div>

          <div className="square" style={squareStyle} onClick={handleToggle6}> {boxSt6=='empty'&& ''} 
          {boxSt6=='X'&& 'X'} {boxSt6=='O'&& 'O'} </div>
        </div>
        <div className="board-row" style={rowStyle}>
          <div className="square" style={squareStyle} onClick={handleToggle7}> {boxSt6=='empty'&& ''} 
          {boxSt7=='X'&& 'X'} {boxSt7=='O'&& 'O'} </div>
          <div className="square" style={squareStyle} onClick={handleToggle8}> {boxSt8=='empty'&& ''} 
          {boxSt8=='X'&& 'X'} {boxSt8=='O'&& 'O'} </div>
          <div className="square" style={squareStyle} onClick={handleToggle9}> {boxSt9=='empty'&& ''} 
          {boxSt9=='X'&& 'X'} {boxSt9=='O'&& 'O'} </div>        </div>
      </div>

    </div>

  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);