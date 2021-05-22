import './index.css';
import reportWebVitals from './reportWebVitals';

import React from 'react';
import App from "./App";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

// початковий стан стану
const initialstate = {
  counter: 0
};
//Створюємо функцію яка змінюватиме початковий стан
// на початковому етапі state має undefined
const storeChanger = (state = initialstate, action) => {
  console.log("called store changer", state, action);

  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    case "RESET": {
      return {
        ...state,
        counter: 0
      };
    }
    case "INC_CUSTOM": {
      return {
        ...state,
        counter: state.counter + action.payload
      };
    }
    default:
      return state;
  }

  //return state;
};

const store = createStore(storeChanger);
console.log(store);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);


reportWebVitals();
