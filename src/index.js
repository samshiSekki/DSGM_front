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
    if(action.payload.variableType == 'professorName'){
      copy.professorName= action.payload.changeData;
    }
    else if(action.payload.variableType == 'major'){
      copy.major = action.payload.changeData;
    }
    else if(action.payload.variableType == 'studentCode'){
      copy.studentCode = action.payload.changeData;
    }
    else if(action.payload.variableType == 'myName'){
      copy.myName = action.payload.changeData;
    }
    else if(action.payload.variableType == 'defaultContent'){
      copy.defaultContent = action.payload.changeData;
    }
    else if(action.payload.variableType == 'greeting'){
      copy.greeting = action.payload.changeData;
    }
    else if(action.payload.variableType == 'ending'){
      copy.ending = action.payload.changeData;
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
