import React, { useState, useEffect, useCallback } from 'react';
import '../css/main.css';
import PostList from './PostList';
import axios from 'axios';
import styled from 'styled-components';
import {connect, useDispatch} from 'react-redux';

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
  let [checkerResult, setCheckerResult] = useState('테스트');//맞춤법 검사 결과 화면에 뿌리는 용도
  let checkerResultDataString: string = '초기값';
  let copiedForm: string = '';
  let naverCheckerURL: string;
  let stringToCheck: string
  //let dispatch: any = useDispatch();

  const getChecker = async() => {
    stringToCheck = `안녕하십니까 ${props.inputValue.professorName} 교수님\r\n`
    +`저는 ${props.inputValue.myName}입니다.\r\n`
    +`${props.inputValue.greeting}\r\n`
    +`${props.inputValue.commonContent_plus}\r\n`
    +`다름이 아니라, ${props.inputValue.defaultContent}.\r\n`
    +`${props.inputValue.ending}\r\n`;
    naverCheckerURL = 'https://m.search.naver.com/p/csearch/ocontent/util/SpellerProxy?_callback=mycallback&q=' + stringToCheck + '&where=nexearch&color_blindness=0&_=1643811632694';
    let checkResult : any = axios.get(naverCheckerURL).then((appData : any)=>{
      checkerResultDataString = appData.data;
      checkerResultDataString = checkerResultDataString.replace('mycallback(','').replace(');', '');
      checkerResultDataString = JSON.parse(checkerResultDataString).message.result.notag_html;

      //console.log(checkerResultDataString.length);
      //console.log(checkerResultDataString.slice(0, 3) + '\r\n');
      
      for(let i=0; i<checkerResultDataString.length; i++){
        if(checkerResultDataString[i] == '.' || checkerResultDataString[i] == ','){
          //console.log(i);
          //console.log(checkerResultDataString.slice(0,i+1));
          //console.log(checkerResultDataString.slice(i+1));
          checkerResultDataString = checkerResultDataString.slice(0,i+1) + '\n' + checkerResultDataString.slice(i+1);
        }
      }
      console.log(checkerResultDataString);
      setCheckerResult(checkerResultDataString);
      return checkerResultDataString;
    });
    checkerResultDataString = await checkResult.then(setShowChecker(true));
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
    +`다름이 아니라, ${props.inputValue.defaultContent}.\r\n`
    +`${props.inputValue.ending}\r\n`;
    copyInClipboard();
  }
  
  useEffect(() => {
    console.log(checkerResult);
  }, [checkerResult])
  
  
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
        <div id='resultTest'>
          {checkerResult}
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