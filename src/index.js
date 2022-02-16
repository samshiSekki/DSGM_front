import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { createStore } from 'redux';

let defaultInputValue = {
  professorName : '',
  myName : '',
  defaultContent : '',
  greeting : '',
  ending : '',

  billnutState: 0,
  billnutContent0_1 : '',
  billnutContent0_2 : '',
  billnutContent0_3 : '',
  billnutContent0_4 : '',
  billnutContent0_5 : '',
  billnutContent0_plus1 : '',
  billnutContent0_plus2 : '',
  billnutContent0_plus3 : '',
  billnutContent0_plus4 : '',
  billnutContent0_plus5 : '',
  billnutContent0_plus6 : '',

  billnutContent1_1 : '',
  billnutContent1_2 : '',
  billnutContent1_3 : '',
  billnutContent1_4 : '',
  billnutContent1_plus1 : '',
  billnutContent1_plus2 : '',
  billnutContent1_plus3 : '',
  billnutContent1_plus4 : '',
  billnutContent1_plus5 : '',

  billnutContent2_1 : '',
  billnutContent2_2 : '',
  billnutContent2_3 : '',
  billnutContent2_plus1 : '',
  billnutContent2_plus2 : '',
  billnutContent2_plus3 : '',
  billnutContent2_plus4 : '',
};

function inputChanger(inputValue = defaultInputValue, action){
  if(action.type === 'change'){
    let copy = inputValue;
    
    switch(action.payload.variableType){
      case 'professorName' :
        copy.professorName= action.payload.changeData;
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

      case 'billnutState':
        copy.billnutState = action.payload.changeData;
        break;
      case 'billnutContent0_1':
        copy.billnutContent0_1 = action.payload.changeData;
        break;
      case 'billnutContent0_2':
        copy.billnutContent0_2 = action.payload.changeData;
        break;
      case 'billnutContent0_3':
        copy.billnutContent0_3 = action.payload.changeData;
        break;
      case 'billnutContent0_4':
        copy.billnutContent0_4 = action.payload.changeData;
        break;
      case 'billnutContent0_5':
        copy.billnutContent0_5 = action.payload.changeData;
        break;
      case 'billnutContent0_plus1':
        copy.billnutContent0_plus1 = action.payload.changeData;
        break;
      case 'billnutContent0_plus2':
        copy.billnutContent0_plus2 = action.payload.changeData;
        break;
      case 'billnutContent0_plus3':
        copy.billnutContent0_plus3 = action.payload.changeData;
        break;
      case 'billnutContent0_plus4':
        copy.billnutContent0_plus4 = action.payload.changeData;
        break;
      case 'billnutContent0_plus5':
        copy.billnutContent0_plus5 = action.payload.changeData;
        break;
      case 'billnutContent0_plus6':
        copy.billnutContent0_plus6 = action.payload.changeData;
        break;
        
      case 'billnutContent1_1':
        copy.billnutContent1_1 = action.payload.changeData;
        break;
      case 'billnutContent1_2':
        copy.billnutContent1_2 = action.payload.changeData;
        break;
      case 'billnutContent1_3':
        copy.billnutContent1_3 = action.payload.changeData;
        break;
      case 'billnutContent1_4':
        copy.billnutContent1_4 = action.payload.changeData;
        break;
      case 'billnutContent1_plus1':
        copy.billnutContent1_plus1 = action.payload.changeData;
        break;
      case 'billnutContent1_plus2':
        copy.billnutContent1_plus2 = action.payload.changeData;
        break;
      case 'billnutContent1_plus3':
        copy.billnutContent1_plus3 = action.payload.changeData;
        break;
      case 'billnutContent1_plus4':
        copy.billnutContent1_plus4 = action.payload.changeData;
        break;
      case 'billnutContent1_plus5':
        copy.billnutContent1_plus5 = action.payload.changeData;
        break;

      case 'billnutContent2_1':
        copy.billnutContent2_1 = action.payload.changeData;
        break;
      case 'billnutContent2_2':
        copy.billnutContent2_2 = action.payload.changeData;
        break;
      case 'billnutContent2_3':
        copy.billnutContent2_3 = action.payload.changeData;
        break;
      case 'billnutContent2_plus1':
        copy.billnutContent2_plus1 = action.payload.changeData;
        break;
      case 'billnutContent2_plus2':
        copy.billnutContent2_plus2 = action.payload.changeData;
        break;
      case 'billnutContent2_plus3':
        copy.billnutContent2_plus3 = action.payload.changeData;
        break;
      case 'billnutContent2_plus4':
        copy.billnutContent2_plus4 = action.payload.changeData;
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
