import React, { useState } from 'react';
import '../css/main.css';
import PostList from './PostList';
import axios from 'axios';
import styled from 'styled-components';
import {connect, useDispatch} from 'react-redux';

let CurrentNav : any = styled.img`
  position: absolute;
  width: 3%;
  height: auto;
  margin-left: 5vw;
`;

function Default(props: any) {

  const [showChecker, setShowChecker] = useState(false);
  let checkerResultDataString: string;
  let copiedForm: string = '';
  let naverCheckerURL: string;
  let dispatch: any = useDispatch();

  const getChecker = async() => {
    naverCheckerURL = 'https://m.search.naver.com/p/csearch/ocontent/util/SpellerProxy?_callback=mycallback&q=' + '교수님안녕하새요!' + '&where=nexearch&color_blindness=0&_=1643811632694';
    let checkResult : any = axios.get(naverCheckerURL);
    let getData = ()=>{
      checkResult.then((appData : any)=>{
        checkerResultDataString = appData.data;
        checkerResultDataString = checkerResultDataString.replace('mycallback(','').replace(');', '');
        checkerResultDataString = JSON.parse(checkerResultDataString).message.result.notag_html;
        console.log(checkerResultDataString);
      });
    };
    getData();
  }

  function checkerBtnClickHandler(){
    setShowChecker(!showChecker);
    getChecker();
  }

  function copyInClipboard(){
    //console.log(copiedForm);
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

    copiedForm = `안녕하십니까 ${props.inputValue.professorName} 교수님\r\n`
    +`저는 ${props.inputValue.myName}입니다.\r\n`
    +`${props.inputValue.greeting}\r\n`
    +`${props.inputValue.defaultContent_plus1}\r\n`
    +`다름이 아니라, ${props.inputValue.defaultContent}.\r\n`
    +`${props.inputValue.ending}\r\n`;
    copyInClipboard();
  }

  return(
  <div>
    <CurrentNav src="img/Union.png"></CurrentNav>
    <textarea className="copy_text"></textarea>
    <div className='mailTextContainer'>
        <PostList tabType={''}/>
    </div>
    {/*
    <button onClick={()=>{console.log(firstSelect)}}></button>
    */
    }
    <div className='buttonContainer'>
      <div onClick={checkerBtnClickHandler} className='functionBtn'>맞춤법 검사하기</div>
      <div onClick={()=>{window.location.replace("/")}} className='functionBtn'>Clear</div>
      <div onClick={copyBtnClickHandler} id='copyBtn'>복사하기</div>
    </div>

    <textarea className={showChecker==true?'showTextArea':'hideTextArea'}></textarea>
  </div>);
}

function f1(inputValue: any){
  return {
    inputValue : inputValue
  }
}
export default connect(f1)(Default);

//export default Default;
