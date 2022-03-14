import React, {useState} from 'react';
import PostList from '../PostList'
import {connect} from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import parse from 'html-react-parser';
import {MobileView, isBrowser, isIPad13} from "react-device-detect";
import Header from '../../components/Header';

function AttPersonal(props: any) {

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
      `다름이 아니라 ${props.inputValue.attPersonalContent0_1}에 ${props.inputValue.attPersonalContent0_2} 로 인해 수업에 참석하지 못할 것 같습니다.`,
      `${props.inputValue.attPersonalContent0_plus1}`,
      `다른 날짜로 조정이 불가피한 상황이라, 출석 인정 받을 수 있는 다른 방법이 있을 지 문의 드립니다.`,
      `${props.inputValue.attPersonalContent0_plus2}`,
      `출석인정이 가능하다면 관련 서류를 발급받을 수 있는지 확인해보고자 합니다.`,
      `${props.inputValue.attPersonalContent0_plus3}`,
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
      +`다름이 아니라 ${props.inputValue.attPersonalContent0_1}에 ${props.inputValue.attPersonalContent0_2} 로 인해 수업에 참석하지 못할 것 같습니다.\r\n`
      +`${props.inputValue.attPersonalContent0_plus1}\r\n`
      +`다른 날짜로 조정이 불가피한 상황이라, 출석 인정 받을 수 있는 다른 방법이 있을 지 문의 드립니다.\r\n`
      +`${props.inputValue.attPersonalContent0_plus2}\r\n`
      +`출석인정이 가능하다면 관련 서류를 발급받을 수 있는지 확인해보고자 합니다.\r\n`
      +`${props.inputValue.attPersonalContent0_plus3}\r\n`
      +`${props.inputValue.ending}`;
    }
    
    copyInClipboard();
  }

  return (
    <div>
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
        <PostList tabType={'attendancepersonal'}/>
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

    <div className='mailTextContainerMobile'>
      

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
  <div onClick={()=>{window.location.replace("/attendancepersonal")}} className='functionBtn'>Clear</div>
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
      <FunctionBtnMobile onClick={()=>{window.location.replace("/attendancepersonal")}}>Clear</FunctionBtnMobile>
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
export default connect(f1)(AttPersonal);

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