/* eslint-disable default-case */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import {BrowserRouter} from 'react-router-dom';

let defaultInputValue = {
  currentMenu : 'default',

  professorName : '',
  myName : '',
  defaultContent : '',
  commonContent_plus :'',
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

  recommendState : 0,
  recommendContent0_1 : '',
  recommendContent0_2 : '',
  recommendContent0_3 : '',
  recommendContent0_4 : '',
  recommendContent0_5 : '',
  recommendContent0_plus1 : '',
  recommendContent0_plus2 : '',
  recommendContent0_plus3 : '',
  recommendContent0_plus4 : '',

  gradeState : 0,
  gradeContent0_1 : '',
  gradeContent0_2 : '',
  gradeContent0_plus1 : '',
  gradeContent0_plus2 : '',
  gradeContent0_plus3 : '',
  gradeContent0_plus4 : '',

  gradeContent1_plus1 : '',
  gradeContent1_plus2 : '',
  gradeContent1_plus3 : '',
  gradeContent1_plus4 : '',

  graduateState: 0,
  graduateContent0_1 : '',
  graduateContent0_2 : '',
  graduateContent0_3 : '',
  graduateContent0_4 : '',

  graduateContent0_plus1 : '',
  graduateContent0_plus2 : '',
  graduateContent0_plus3 : '',
  graduateContent0_plus4 : '',
  graduateContent0_plus5 : '',
  graduateContent0_plus6 : '',

  graduateContent1_1 : '',
  graduateContent1_2 : '',
  graduateContent1_3 : '',
  graduateContent1_4 : '',
  graduateContent1_5 : '',
  graduateContent1_6 : '',
  graduateContent1_7 : '',
  graduateContent1_8 : '',
  graduateContent1_9 : '',
  graduateContent1_10 : '',
  graduateContent1_11 : '',

  graduateContent1_plus1 : '',
  graduateContent1_plus2 : '',
  graduateContent1_plus3 : '',
  graduateContent1_plus4 : '',
  graduateContent1_plus5 : '',

  attSchoolState : 0,
  attSchoolContent0_1 : '',
  attSchoolContent0_2 : '',
  attSchoolContent0_3 : '',

  attSchoolContent0_plus1 : '',
  attSchoolContent0_plus2 : '',
  attSchoolContent0_plus3 : '',

  attPersonalState : 0,
  attPersonalContent0_1 : '',
  attPersonalContent0_2 : '',

  attPersonalContent0_plus1 : '',
  attPersonalContent0_plus2 : '',
  attPersonalContent0_plus3 : '',

  questionState : 0,
  questionContent0_1 : '',
  questionContent0_2 : '',

  questionContent0_plus1 : '',
  questionContent0_plus2 : '',
  questionContent0_plus3 : '',
  questionContent0_plus4 : ''
};

function inputChanger(inputValue = defaultInputValue, action){
  if(action.type === 'change'){
    let copy = inputValue;
    
    switch(action.payload.variableType){
      case 'currentMenu' :
        copy.currentMenu = action.payload.changeData;
        break;

      case 'professorName' :
        copy.professorName= action.payload.changeData;
        break;
      case 'myName' :
        copy.myName= action.payload.changeData;
        break;
      case 'defaultContent' :
        copy.defaultContent= action.payload.changeData;
        break;
      case 'commonContent_plus' :
        copy.commonContent_plus= action.payload.changeData;
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

      case 'recommendState':
        copy.recommendState = action.payload.changeData;
        break;
      case 'recommendContent0_1' :
        copy.recommendContent0_1 = action.payload.changeData;
        break;
      case 'recommendContent0_2' :
        copy.recommendContent0_2 = action.payload.changeData;
        break;
      case 'recommendContent0_3' :
        copy.recommendContent0_3 = action.payload.changeData;
        break;
      case 'recommendContent0_4' :
        copy.recommendContent0_4 = action.payload.changeData;
        break;
      case 'recommendContent0_5' :
        copy.recommendContent0_5 = action.payload.changeData;
        break;
      case 'recommendContent0_plus1' :
        copy.recommendContent0_plus1 = action.payload.changeData;
        break;
      case 'recommendContent0_plus2' :
        copy.recommendContent0_plus2 = action.payload.changeData;
        break;
      case 'recommendContent0_plus3' :
        copy.recommendContent0_plus3 = action.payload.changeData;
        break;
      case 'recommendContent0_plus4' :
        copy.recommendContent0_plus4 = action.payload.changeData;
        break;

      case 'gradeState':
        copy.gradeState = action.payload.changeData;
        break;
      case 'gradeContent0_1' :
        copy.gradeContent0_1 = action.payload.changeData;
        break;
      case 'gradeContent0_2' :
        copy.gradeContent0_2 = action.payload.changeData;
        break;
      case 'gradeContent0_plus1' :
        copy.gradeContent0_plus1 = action.payload.changeData;
        break;
      case 'gradeContent0_plus2' :
        copy.gradeContent0_plus2 = action.payload.changeData;
        break;
      case 'gradeContent0_plus3' :
        copy.gradeContent0_plus3 = action.payload.changeData;
        break;
      case 'gradeContent0_plus4' :
        copy.gradeContent0_plus4 = action.payload.changeData;
        break;

      case 'gradeContent1_plus1' :
        copy.gradeContent1_plus1 = action.payload.changeData;
        break;
      case 'gradeContent1_plus2' :
        copy.gradeContent1_plus2 = action.payload.changeData;
        break;
      case 'gradeContent1_plus3' :
        copy.gradeContent1_plus3 = action.payload.changeData;
        break;
      case 'gradeContent1_plus4' :
        copy.gradeContent1_plus4 = action.payload.changeData;
        break;

      case 'graduateState':
        copy.graduateState = action.payload.changeData;
        break;
      case 'graduateContent0_1' :
        copy.graduateContent0_1 = action.payload.changeData;
        break;
      case 'graduateContent0_2' :
        copy.graduateContent0_2 = action.payload.changeData;
        break;
      case 'graduateContent0_3' :
        copy.graduateContent0_3 = action.payload.changeData;
        break;
      case 'graduateContent0_4' :
        copy.graduateContent0_4 = action.payload.changeData;
        break;
      case 'graduateContent0_plus1' :
        copy.graduateContent0_plus1 = action.payload.changeData;
        break;
      case 'graduateContent0_plus2' :
        copy.graduateContent0_plus2 = action.payload.changeData;
        break;
      case 'graduateContent0_plus3' :
        copy.graduateContent0_plus3 = action.payload.changeData;
        break;
      case 'graduateContent0_plus4' :
        copy.graduateContent0_plus4 = action.payload.changeData;
        break;
      case 'graduateContent0_plus5' :
        copy.graduateContent0_plus5 = action.payload.changeData;
        break;
      case 'graduateContent0_plus6' :
        copy.graduateContent0_plus6 = action.payload.changeData;
        break;

        case 'graduateContent1_1' :
          copy.graduateContent1_1 = action.payload.changeData;
          break;
        case 'graduateContent1_2' :
          copy.graduateContent1_2 = action.payload.changeData;
          break;
        case 'graduateContent1_3' :
          copy.graduateContent1_3 = action.payload.changeData;
          break;
        case 'graduateContent1_4' :
          copy.graduateContent1_4 = action.payload.changeData;
          break;
        case 'graduateContent1_5' :
          copy.graduateContent1_5 = action.payload.changeData;
          break;
        case 'graduateContent1_6' :
          copy.graduateContent1_6 = action.payload.changeData;
          break;
        case 'graduateContent1_7' :
          copy.graduateContent1_7 = action.payload.changeData;
          break;
        case 'graduateContent1_8' :
          copy.graduateContent1_8 = action.payload.changeData;
          break;
        case 'graduateContent1_9' :
          copy.graduateContent1_9 = action.payload.changeData;
          break;
        case 'graduateContent1_10' :
          copy.graduateContent1_10 = action.payload.changeData;
          break;
        case 'graduateContent1_11' :
          copy.graduateContent1_11 = action.payload.changeData;
          break;
        case 'graduateContent1_plus1' :
          copy.graduateContent1_plus1 = action.payload.changeData;
          break;
        case 'graduateContent1_plus2' :
          copy.graduateContent1_plus2 = action.payload.changeData;
          break;
        case 'graduateContent1_plus3' :
          copy.graduateContent1_plus3 = action.payload.changeData;
          break;
        case 'graduateContent1_plus4' :
          copy.graduateContent1_plus4 = action.payload.changeData;
          break;
        case 'graduateContent1_plus5' :
          copy.graduateContent1_plus5 = action.payload.changeData;
          break;

       case 'attSchoolState':
        copy.attSchoolState = action.payload.changeData;
        break;
      case 'attSchoolContent0_1' :
        copy.attSchoolContent0_1 = action.payload.changeData;
        break;
      case 'attSchoolContent0_2' :
        copy.attSchoolContent0_2 = action.payload.changeData;
        break;
      case 'attSchoolContent0_3' :
        copy.attSchoolContent0_3 = action.payload.changeData;
        break;
      case 'attSchoolContent0_plus1' :
        copy.attSchoolContent0_plus1 = action.payload.changeData;
        break;
      case 'attSchoolContent0_plus2' :
        copy.attSchoolContent0_plus2 = action.payload.changeData;
        break;
      case 'attSchoolContent0_plus3' :
        copy.attSchoolContent0_plus3 = action.payload.changeData;
        break;

      case 'attPersonalState':
        copy.attPersonalState = action.payload.changeData;
        break;
      case 'attPersonalContent0_1' :
        copy.attPersonalContent0_1 = action.payload.changeData;
        break;
      case 'attPersonalContent0_2' :
        copy.attPersonalContent0_2 = action.payload.changeData;
        break;
      case 'attPersonalContent0_plus1' :
        copy.attPersonalContent0_plus1 = action.payload.changeData;
        break;
      case 'attPersonalContent0_plus2' :
        copy.attPersonalContent0_plus2 = action.payload.changeData;
        break;
      case 'attPersonalContent0_plus3' :
        copy.attPersonalContent0_plus3 = action.payload.changeData;
        break;
      case 'questionState':
        copy.questionState = action.payload.changeData;
        break;
      case 'questionContent0_1' :
        copy.questionContent0_1 = action.payload.changeData;
        break;
      case 'questionContent0_2' :
        copy.questionContent0_2 = action.payload.changeData;
        break;
      case 'questionContent0_plus1' :
        copy.questionContent0_plus1 = action.payload.changeData;
        break;
      case 'questionContent0_plus2' :
        copy.questionContent0_plus2 = action.payload.changeData;
        break;
      case 'questionContent0_plus3' :
        copy.questionContent0_plus3 = action.payload.changeData;
        break;
      case 'questionContent0_plus4' :
        copy.questionContent0_plus4 = action.payload.changeData;
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
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
