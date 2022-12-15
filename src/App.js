import './App.css';
import {useState} from 'react';


export default function App() {
const [total, setTotal] = useState();
const [Num1, SetNum1] = useState();
const [Num2, SetNum2] = useState();

const calculate = (e)=> {
const Num1= document.querySelector(".Num1").value;
const Num2= document.querySelector(".Num2").value;
setTotal(Number(Num1)+Number(Num2))
};
  return (
    <div className="App">
      <h1>Sum of Two Number with disable of button</h1>
     Number 1: <input type="number" onChange={(e) => {SetNum1(e.currentTarget.value)}} className="Num1"/><br/><br/>
     Number 2: <input type="number" onChange={(e) => {SetNum2(e.currentTarget.value)}} className="Num2"/><br/><br/>
    <button onClick={calculate} disabled ={!Num1 || !Num2 ? true : false}> Calculate </button>

    <p>{total}</p>
    </div>
  );
}
