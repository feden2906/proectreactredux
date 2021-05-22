import './App.css';
import React from "react";
import { useSelector, useDispatch } from "react-redux";


const Counter = () => {
  const counter = useSelector(({ counter }) => counter);
  const dispatch = useDispatch();
  const [value, setValue]=React.useState(0);

  return (
    <>
      <h1>counter:{counter}</h1>
      <button onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}>increment</button>

      <button onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}>decrement</button>

      <button onClick={() => {
          dispatch({ type: "RESET" });
        }}>reset</button>
      <hr/>
         <p>Введіть число на яке потрібно збільшити counter</p>

        <input type="number" value={value} onChange={({target:{value}})=>setValue(value)}/>

     <button
        onClick={() => {
          dispatch({ type: "INC_CUSTOM", payload: Number(value) });
        }}
      >
        incustom
      </button>
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <h3>Завдання</h3>
      <h4>
        Зробити компоненту Counter, в якій будуть кнопки +1, -1, +100, -100. Де
        Counter це окрема компонента, на яку ми попадаємо через роути. Функція
        reducer винесена в окремий файл!
      </h4>
      <hr/>
        <Counter />
    </div>
  );
}