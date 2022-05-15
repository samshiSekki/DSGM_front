import React, {useState} from 'react';
import PostList from '../PostList'
import {connect} from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import parse from 'html-react-parser';
import {MobileView, isBrowser, isIPad13} from "react-device-detect";
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

function Question(props: any) {
  
  let [showChecker, setShowChecker] = useState(false);
  let [checkerResult, setCheckerResult] = useState('');
  let copiedForm: string = '';
  let checkerResultDataString: string = '초기값';
  let naverCheckerURL: string;
  let stringToCheck: string[];
  let checkFinal: string = '';

  const getChecker = async() => {
    let checking: any = async() => {
    if(props.inputValue.attSchoolState == 0){
      stringToCheck = [
        `안녕하십니까 ${props.inputValue.professorName}교수님,`,
        `저는 ${props.inputValue.myName}입니다.`,
        `${props.inputValue.greeting}`,
        `${props.inputValue.commonContent_plus}`,
        `${props.inputValue.questionContent0_1} 수업에서 이해가 어려운 부분이 있어 몇가지 질문 드리고 싶습니다.`,
        `${props.inputValue.questionContent0_plus1}`,
        `질문드릴 내용은 아래와 같습니다.`,
        `${props.inputValue.questionContent0_plus2}`,
        `${props.inputValue.questionContent0_2}`,
        `${props.inputValue.questionContent0_plus3}`,
        `바쁘시겠지만 시간내주시면 감사하겠습니다.`,
        `${props.inputValue.questionContent0_plus4}`,
        `${props.inputValue.ending}`
      ];
    }

    for(let i=0; i<stringToCheck.length; i++){
      
      if(stringToCheck[i] !== ''){
        naverCheckerURL = 'https://m.search.naver.com/p/csearch/ocontent/util/SpellerProxy?_callback=mycallback&q=' + stringToCheck[i] + '&where=nexearch&color_blindness=0&_=1643811632694';
          await axios.get(naverCheckerURL).then((appData : any)=>{
            checkerResultDataString = appData.data;
            checkerResultDataString = checkerResultDataString.replace('mycallback(','').replace(');', '');
            checkerResultDataString = JSON.parse(checkerResultDataString).message.result.html+'<br>';
            checkFinal = checkFinal + checkerResultDataString;
          }).then(()=>{setCheckerResult(checkFinal)});
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

    if(props.inputValue.attSchoolState == 0){
      copiedForm = `안녕하십니까 ${props.inputValue.professorName}교수님,\r\n`
      +`저는 ${props.inputValue.myName}입니다.\r\n`
      +`${props.inputValue.greeting}\r\n`
      +`${props.inputValue.commonContent_plus}\r\n`
      +`${props.inputValue.questionContent0_1} 수업에서 이해가 어려운 부분이 있어 몇가지 질문 드리고 싶습니다.\r\n`
      +`${props.inputValue.questionContent0_plus1}\r\n`
      +`질문드릴 내용은 아래와 같습니다.\r\n`
      +`${props.inputValue.questionContent0_plus2}\r\n`
      +`${props.inputValue.questionContent0_2}\r\n`
      +`${props.inputValue.questionContent0_plus3}\r\n`
      +`바쁘시겠지만 시간내주시면 감사하겠습니다.\r\n`
      +`${props.inputValue.questionContent0_plus4}\r\n`
      +`${props.inputValue.ending}`;
    }
    
    copyInClipboard();
  }

  return (
    <div style={{overflowX:'hidden'}}>
        <Header currentMenu = 'others'/>
      {(isIPad13 || isBrowser)?
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
        <PostList tabType={'questions'}/>
        </div>

        {
    showChecker === true?
    <div>
      {parse(checkerResult)}
    </div>
  : null
  }
    </div>
    </div>
    : null
    }
    {(!isIPad13)&&(!isBrowser)?
    <MobileView>
    <CurrentNavMobile src="img/Union.png"/>

    <div className='MobileOthersTabContainer'>
        <div className='MobileOthersTabBtnContainer'>
        <Link to='/graduateschool'>
        <div className='MobileOthersTabBtn'>대학원 진학 문의</div>
        </Link>
        <Link to='/attendanceschool'>
        <div className='MobileOthersTabBtn'>출석인정 (학교행사)</div>
        </Link>
        <Link to='/attendancepersonal'>
        <div className='MobileOthersTabBtn'>출석인정 (개인사정)</div>
        </Link>
        <div className='MobileOthersTabBtnSelected'>수업내용 질문</div>
        </div>
      </div>

      {
        showChecker === true?
        <div className='checkerInfoContainerMobile'>
        <img src="img/Group 75.png" className='checkerInfoMobile'/>
        </div>
      : null
      }
    <div className='mailTextContainerMobile'>
    <div className={showChecker === true? 'hideCheckcer' : 'showChecker'}>
        <PostList tabType={'questions'}/>
        </div>

        {
    showChecker === true?
    <div>
      {parse(checkerResult)}
    </div>
  : null
  }
      

    </div>
    </MobileView>
    :null
    }
    {(isIPad13 || isBrowser)?
<div className='buttonContainer'>
{
    showChecker === false?
    <div onClick={getChecker} className='functionBtn'>맞춤법 검사하기</div>
    :<div onClick={()=>{setShowChecker(!showChecker)}} className='functionBtn'>검사 종료하기</div>
  }
  <div onClick={()=>{window.location.replace("/questions")}} className='functionBtn'>Clear</div>
  <div id='copyBtn' onClick={copyBtnClickHandler}>복사하기</div>
</div>
:null}
{(!isIPad13)&&(!isBrowser)?
<MobileView>
  <ButtonContainerMobile>
    <MobileButtonFlex>
      {
        showChecker === false?
        <FunctionBtnMobile onClick={getChecker}>맞춤법 검사하기</FunctionBtnMobile>
        :<FunctionBtnMobile onClick={()=>{setShowChecker(!showChecker)}}>검사 종료하기</FunctionBtnMobile>
      }
      <FunctionBtnMobile onClick={()=>{window.location.replace("/questions")}}>Clear</FunctionBtnMobile>
      <CopyBtnMobile onClick={copyBtnClickHandler}>복사하기</CopyBtnMobile>
    </MobileButtonFlex>
  </ButtonContainerMobile>
</MobileView>
:null}
    </div>
  )
}

function f1(inputValue: any){
  return {
    inputValue : inputValue
  }
}
export default connect(f1)(Question);

let MobileTitle: any = styled.img`
  margin-top: 38.95px;
  margin-bottom: 22.95px;
`;
let MobileTitleContainer: any = styled.div`
  width: 100%;
`;
let CurrentNav : any = styled.img`
  position: absolute;
  width: 3%;
  height: auto;
  margin-left: 66.5vw;
`;
let CurrentNavMobile : any = styled.img`
  position: absolute;
  width: 14.02px;
  height: auto;
  margin-left: 297px;
`;

let CheckerInfo : any = styled.img`
  margin-top: 5vh;
  margin-bottom: 3vh;
  width: 25vw;
  height: auto;
`;

let ButtonContainerMobile : any = styled.div`
  display: inline-block;
  margin-top: 12px;
  margin-bottom: 23px;
  width: 335px;
  height: 31px;
`;
let MobileButtonFlex : any = styled.div`
  display: flex;
  justify-content: space-between;
`;
let FunctionBtnMobile : any = styled.div`
  float: left;
  width: 105px;
  height: 31px;
  background: #241E19;
  color: white;
  border-radius: 7px;

  font-style: normal;
font-weight: 800;
font-size: 11px;
line-height: 31px;
text-align: center;
`;
let CopyBtnMobile : any = styled.div`
  float: left;
  width: 105px;
  height: 31px;
  background: #14B390;
  color: white;
  border-radius: 7px;

  font-style: normal;
font-weight: 800;
font-size: 11px;
line-height: 31px;
text-align: center;
`;