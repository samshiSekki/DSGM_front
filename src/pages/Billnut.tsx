import React, {useState, useEffect} from 'react';
import PostList from './PostList';
import {connect, useDispatch} from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import parse from 'html-react-parser';
import {BrowserView, MobileView} from "react-device-detect";
import Header from '../components/Header';

let CurrentNav : any = styled.img`
  position: absolute;
  width: 3%;
  height: auto;
  margin-left: 20.5vw;
`;
let CurrentNavMobile : any = styled.img`
  position: absolute;
  width: 14.02px;
  height: auto;
  margin-left: 92px;
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


function Billnut(props: any) {

  let [showChecker, setShowChecker] = useState(false);
  let [checkerResult, setCheckerResult] = useState('');
  let copiedForm: string = '';
  let checkerResultDataString: string = '초기값';
  let naverCheckerURL: string;
  let stringToCheck: string[];
  let checkFinal: string = '';
  let dispatch : any = useDispatch();

  const getChecker = async() => {
    let checking: any = async() => {
    if(props.inputValue.billnutState == 0){
      stringToCheck = [`안녕하십니까 ${props.inputValue.professorName}교수님,`,`저는 ${props.inputValue.myName}입니다.`, `${props.inputValue.greeting}`, `${props.inputValue.commonContent_plus}`, `연락드리게 된 이유는 다름이 아니라 ${props.inputValue.billnutContent0_1} 과목의 증원 가능성이 있는지 여쭙기 위함입니다.`,
      `${props.inputValue.billnutContent0_plus1}`, `이 과목은 여러 분반이 있지만, 그럼에도 교수님의 수업을 수강하고자 하는 이유는 다음과 같습니다.`, `${props.inputValue.billnutContent0_plus2}`, `우선 ${props.inputValue.billnutContent0_2} 과목이 ${props.inputValue.billnutContent0_3} 과목의 선수과목이기 때문에, 이번 학기에 듣지 못하면 앞으로의 강의 수강에 차질이 생깁니다.`,
      `${props.inputValue.billnutContent0_plus3}`, `그리고 ${props.inputValue.billnutContent0_4} 과목과 시간이 겹쳐 다른 분반을 듣는 것이 불가능합니다.`, `${props.inputValue.billnutContent0_plus4}`,`이러한 이유들로 교수님의 해당 수업을 꼭 수강하고 싶습니다.`, `${props.inputValue.billnutContent0_plus5}`,
      `${props.inputValue.billnutContent0_5}학년 수강신청과 전학년 수강신청날 모두 신청을 시도하였지만 결국 수강신청을 하지 못하였기에, 혹여나 정정기간에 증원해주실 수 있는지 문의드립니다.`, `${props.inputValue.billnutContent0_plus6}`, `${props.inputValue.ending}`];
    }
    else if(props.inputValue.billnutState == 1){
      stringToCheck = [`안녕하십니까 ${props.inputValue.professorName}교수님,`, `저는 ${props.inputValue.myName}입니다.`, `${props.inputValue.greeting}`, `${props.inputValue.commonContent_plus}`, `다름 아니라, 교수님 수업 중 ${props.inputValue.billnutContent1_1}이 혹시라도 증원이 가능한지 조심스럽게 여쭤보고자 메일 드립니다.`,
      `${props.inputValue.billnutContent1_plus1}`, `${props.inputValue.billnutContent1_2}는 제가 ${props.inputValue.billnutContent1_3}학과 수업들을 수강하며 꼭 듣고 싶었던 수업 중 하나입니다.`, `${props.inputValue.billnutContent1_plus2}`,
      `또한, 이전에 교수님의 수업 중 하나인 ${props.inputValue.billnutContent1_4}을 수강한 적이 있었습니다.`, `${props.inputValue.billnutContent1_plus3}`, `해당 수업들을 들으며 교수님의 강의를 다시 한 번 더 듣고 싶다는 생각을 하였습니다.`,
      `${props.inputValue.billnutContent1_plus4}`, `이번에 꼭 교수님 수업을 듣고 싶은 학생으로써, 불편하시지 않으시다면 증원에 대해 생각해주시길 부탁드립니다.`, `${props.inputValue.billnutContent1_plus5}`, `${props.inputValue.ending}`];
    }
    else if(props.inputValue.billnutState == 2){
      stringToCheck = [`안녕하십니까 ${props.inputValue.professorName}교수님,`,
      `저는 ${props.inputValue.myName}입니다.`,
      `${props.inputValue.greeting}`,
      `${props.inputValue.commonContent_plus}`,
      `이번 학기 ${props.inputValue.billnutContent2_1} 수업 증원과 관련하여 여쭙고 싶어 메일 드립니다.`,
      `${props.inputValue.billnutContent2_plus1}`,
      `교수님의 강의 계획서를 보고 ${props.inputValue.billnutContent2_2} 내용에 대한 관심이 생겨, 이번 학기 해당 과목을 수강함으로써 관련 분야에 대한 식견을 넓히고 싶습니다.`,
      `${props.inputValue.billnutContent2_plus2}`,
      `${props.inputValue.billnutContent2_3} 이유로 이 수업을 꼭 듣고 싶은데 추가 증원이 가능한지 궁금합니다.`,
      `${props.inputValue.billnutContent2_plus3}`,
      `이를 위해 학년별 수강신청, 전체 수강신청 등 수강신청 기간 내내 교수님의 수업을 신청하기 위해 노력했지만 경쟁률이 너무 높아 수강신청에 모두 실패하였고, 이렇게 증원 예정이 있으신지 여쭙게 되었습니다.`,
      `${props.inputValue.billnutContent2_plus4}`,
      `${props.inputValue.ending}`];
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

    if(props.inputValue.billnutState == 0){
      copiedForm = `안녕하십니까 ${props.inputValue.professorName}교수님,\r\n`
      +`저는 ${props.inputValue.myName}입니다.\r\n`
      +`${props.inputValue.greeting}\r\n`
      +`${props.inputValue.commonContent_plus}\r\n`
      +`연락드리게 된 이유는 다름이 아니라 ${props.inputValue.billnutContent0_1} 과목의 증원 가능성이 있는지 여쭙기 위함입니다.\r\n`
      +`${props.inputValue.billnutContent0_plus1}\r\n`
      +`이 과목은 여러 분반이 있지만, 그럼에도 교수님의 수업을 수강하고자 하는 이유는 다음과 같습니다.\r\n`
      +`${props.inputValue.billnutContent0_plus2}\r\n`
      +`우선 ${props.inputValue.billnutContent0_2} 과목이 ${props.inputValue.billnutContent0_3} 과목의 선수과목이기 때문에, 이번 학기에 듣지 못하면 앞으로의 강의 수강에 차질이 생깁니다.\r\n`
      +`${props.inputValue.billnutContent0_plus3}\r\n`
      +`그리고 ${props.inputValue.billnutContent0_4} 과목과 시간이 겹쳐 다른 분반을 듣는 것이 불가능합니다.\r\n`
      +`${props.inputValue.billnutContent0_plus4}\r\n`
      +`이러한 이유들로 교수님의 해당 수업을 꼭 수강하고 싶습니다.\r\n`
      +`${props.inputValue.billnutContent0_plus5}\r\n`
      +`${props.inputValue.billnutContent0_5}학년 수강신청과 전학년 수강신청날 모두 신청을 시도하였지만 결국 수강신청을 하지 못하였기에, 혹여나 정정기간에 증원해주실 수 있는지 문의드립니다.\r\n`
      +`${props.inputValue.billnutContent0_plus6}\r\n`
      +`${props.inputValue.ending}\r\n`;
    }
    else if(props.inputValue.billnutState == 1){
      copiedForm = `안녕하십니까 ${props.inputValue.professorName}교수님,\r\n`
      +`저는 ${props.inputValue.myName}입니다.\r\n`
      +`${props.inputValue.greeting}\r\n`
      +`${props.inputValue.commonContent_plus}\r\n`
      +`다름 아니라, 교수님 수업 중 ${props.inputValue.billnutContent1_1}이 혹시라도 증원이 가능한지 조심스럽게 여쭤보고자 메일 드립니다.\r\n`
      +`${props.inputValue.billnutContent1_plus1}\r\n`
      +`${props.inputValue.billnutContent1_2}는 제가 ${props.inputValue.billnutContent1_3}학과 수업들을 수강하며 꼭 듣고 싶었던 수업 중 하나입니다.`
      +`${props.inputValue.billnutContent1_plus2}\r\n`
      +`또한, 이전에 교수님의 수업 중 하나인 ${props.inputValue.billnutContent1_4}을 수강한 적이 있었습니다.\r\n`
      +`${props.inputValue.billnutContent1_plus3}\r\n`
      +`해당 수업들을 들으며 교수님의 강의를 다시 한 번 더 듣고 싶다는 생각을 하였습니다.\r\n`
      +`${props.inputValue.billnutContent1_plus4}\r\n`
      +`이번에 꼭 교수님 수업을 듣고 싶은 학생으로써, 불편하시지 않으시다면 증원에 대해 생각해주시길 부탁드립니다.\r\n`
      +`${props.inputValue.billnutContent1_plus5}\r\n`
      +`${props.inputValue.ending}\r\n`;
    }
    else if(props.inputValue.billnutState == 2){
      copiedForm = `안녕하십니까 ${props.inputValue.professorName}교수님,\r\n`
      +`저는 ${props.inputValue.myName}입니다.\r\n`
      +`${props.inputValue.greeting}\r\n`
      +`${props.inputValue.commonContent_plus}\r\n`
      +`이번 학기 ${props.inputValue.billnutContent2_1} 수업 증원과 관련하여 여쭙고 싶어 메일 드립니다.\r\n`
      +`${props.inputValue.billnutContent2_plus1}\r\n`
      +`교수님의 강의 계획서를 보고 ${props.inputValue.billnutContent2_2} 내용에 대한 관심이 생겨, 이번 학기 해당 과목을 수강함으로써 관련 분야에 대한 식견을 넓히고 싶습니다.\r\n`
      +`${props.inputValue.billnutContent2_plus2}\r\n`
      +`${props.inputValue.billnutContent2_3} 이유로 이 수업을 꼭 듣고 싶은데 추가 증원이 가능한지 궁금합니다.\r\n`
      +`${props.inputValue.billnutContent2_plus3}\r\n`
      +`이를 위해 학년별 수강신청, 전체 수강신청 등 수강신청 기간 내내 교수님의 수업을 신청하기 위해 노력했지만 경쟁률이 너무 높아 수강신청에 모두 실패하였고, 이렇게 증원 예정이 있으신지 여쭙게 되었습니다.\r\n`
      +`${props.inputValue.billnutContent2_plus4}\r\n`
      +`${props.inputValue.ending}\r\n`;
    }
    copyInClipboard();
  }
  return (
  <div>
    <Header currentMenu = 'billnut'/>
    
      <BrowserView>
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
        <PostList tabType={'please'}/>
      </div>
      {
        showChecker === true?
        <div>
          {parse(checkerResult)}
        </div>
      : null
      }
    </div>
    </BrowserView>
    <MobileView>
    <CurrentNavMobile src="img/Union.png"/>
    {
        showChecker === true?
        <div className='checkerInfoContainerMobile'>
        <img src="img/Group 75.png" className='checkerInfoMobile'/>
        </div>
      : null
      }
    <div className='mailTextContainerMobile'>

    <div className={showChecker === true? 'hideCheckcer' : 'showChecker'}>
      <PostList tabType={'please'}/>
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
    <BrowserView>
    <div className='buttonContainer'>
      {
        showChecker === false?
        <div onClick={getChecker} className='functionBtn'>맞춤법 검사하기</div>
        :<div onClick={()=>{setShowChecker(!showChecker)}} className='functionBtn'>검사 종료하기</div>
      }
      <div onClick={()=>{window.location.replace("/billnut")}} className='functionBtn'>Clear</div>
      <div id='copyBtn' onClick={copyBtnClickHandler}>복사하기</div>
    </div>
    </BrowserView>
    <MobileView>
      <ButtonContainerMobile>
        <MobileButtonFlex>
          {
            showChecker === false?
            <FunctionBtnMobile onClick={getChecker}>맞춤법 검사하기</FunctionBtnMobile>
            :<FunctionBtnMobile onClick={()=>{setShowChecker(!showChecker)}}>검사 종료하기</FunctionBtnMobile>
          }
          <FunctionBtnMobile onClick={()=>{window.location.replace("/billnut")}}>Clear</FunctionBtnMobile>
          <CopyBtnMobile onClick={copyBtnClickHandler}>복사하기</CopyBtnMobile>
        </MobileButtonFlex>
      </ButtonContainerMobile>
    </MobileView>
  </div>
  );
}

function f1(inputValue: any){
  return {
    inputValue : inputValue
  }
}
export default connect(f1)(Billnut);