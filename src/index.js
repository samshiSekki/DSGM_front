import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { createStore } from 'redux';

let defaultInputValue = {
  professorName : '',
  major : '',
  studentCode : '',
  myName : '',
  defaultContent : '',
  greeting : '',
  ending : ''
};

function inputChanger(inputValue = defaultInputValue, action){
  if(action.type === 'change'){
    let copy = inputValue;
    
    switch(action.payload.variableType){
      case 'professorName' :
        copy.professorName= action.payload.changeData;
        break;
      case 'major' :
        copy.major= action.payload.changeData;
        break;
      case 'studentCode' :
        copy.studentCode= action.payload.changeData;
        break;
      case 'myName' :
        copy.myName= action.payload.changeData;
        break;
      case 'defaultContent' :
        copy.defaultContent= action.payload.changeData;
        break;
      case 'greeting' :
        copy.greeting= action.payload.changeData;
        break;
      case 'ending' :
        copy.ending= action.payload.changeData;
        break;
  }
    
    return copy;
  }else{
    return inputValue;
  }
}

let store = createStore(inputChanger);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
