import React, { useState, useEffect, useCallback } from 'react';
import '../css/main.css';
import PostList from './PostList';
import axios from 'axios';
import styled from 'styled-components';
import {connect, useDispatch} from 'react-redux';
import parse from 'html-react-parser';

let CurrentNav : any = styled.img`
  position: absolute;
  width: 3%;
  height: auto;
  margin-left: 5.5vw;
`;

let CheckerInfo : any = styled.img`
  margin-top: 5vh;
  margin-bottom: 3vh;
  width: 25vw;
  height: auto;
`;

function Default(props: any) {

  let [showChecker, setShowChecker] = useState(false);
  let [checkerResult1, setCheckerResult1] = useState('');//맞춤법 검사 결과 화면에 뿌리는 용도
  let checkFinal: string = '';
  let checkerResultDataString: string = '초기값';
  let copiedForm: string = '';
  let naverCheckerURL: string;
  let stringToCheck: string[];

  const getChecker = async() => {
    stringToCheck = [];
    let checking: any = async() => {
    stringToCheck = [`안녕하십니까 ${props.inputValue.professorName} 교수님,`, `저는 ${props.inputValue.myName}입니다.`, `${props.inputValue.greeting}`, `${props.inputValue.commonContent_plus}`,`다름이 아니라,`, `${props.inputValue.defaultContent}`, `${props.inputValue.ending}`];

    for(let i=0; i<stringToCheck.length; i++){
      
      if(stringToCheck[i] !== ''){
        naverCheckerURL = 'https://m.search.naver.com/p/csearch/ocontent/util/SpellerProxy?_callback=mycallback&q=' + stringToCheck[i] + '&where=nexearch&color_blindness=0&_=1643811632694';
          await axios.get(naverCheckerURL).then((appData : any)=>{
            checkerResultDataString = appData.data;
            checkerResultDataString = checkerResultDataString.replace('mycallback(','').replace(');', '');
            checkerResultDataString = JSON.parse(checkerResultDataString).message.result.html+'<br>';
            checkFinal = checkFinal + checkerResultDataString;
          }).then(()=>{setCheckerResult1(checkFinal)});
      }
    }
  }
  checking().then(setShowChecker(true)); 
  }
  
  function copyInClipboard(){
    const textarea = document.createElement("textarea");
    textarea.value = copiedForm;
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert('복사되었습니다.');
  }

  function copyBtnClickHandler(){
    if (!document.queryCommandSupported("copy"))
      return alert("복사하기가 지원되지 않는 브라우저입니다");

    copiedForm = `안녕하십니까 ${props.inputValue.professorName} 교수님,\r\n`
    +`저는 ${props.inputValue.myName}입니다.\r\n`
    +`${props.inputValue.greeting}\r\n`
    +`${props.inputValue.commonContent_plus}\r\n`
    +`다름이 아니라,\r\n`
    +`${props.inputValue.defaultContent}\r\n`
    +`${props.inputValue.ending}\r\n`;
    copyInClipboard();
  }
  
  return(
  <div>
    <CurrentNav src="img/Union.png"/>
    {
        showChecker === true?
        <div className='checkerInfoContainer'>
        <CheckerInfo src="img/Group 75.png"/>
        </div>
      : null
      }
    <div className='mailTextContainer'>
      
      <div className={showChecker === true? 'hideCheckcer' : 'showChecker'}>
        <PostList tabType={''}/>
      </div>
      {
        showChecker === true?
        <div>
          {parse(checkerResult1)}
        </div>
      : null
      }
    </div>
      
    <div className='buttonContainer'>
      {
        showChecker === false?
        <div onClick={getChecker} className='functionBtn'>맞춤법 검사하기</div>
        :<div onClick={()=>{setShowChecker(!showChecker)}} className='functionBtn'>검사 종료하기</div>
      }
      <div onClick={()=>{window.location.replace("/")}} className='functionBtn'>Clear</div>
      <div onClick={copyBtnClickHandler} id='copyBtn'>복사하기</div>
    </div>

  </div>);
}

function f1(inputValue: any){
  return {
    inputValue : inputValue
  }
}
export default connect(f1)(Default);