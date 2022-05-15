import React, {useState} from 'react';
import PostList from './PostList';
import {connect} from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import parse from 'html-react-parser';
import {MobileView, isBrowser, isIPad13} from "react-device-detect";
import Header from '../components/Header';


function Others(props: any) {

  let [showChecker, setShowChecker] = useState(false);
  let [checkerResult, setCheckerResult] = useState('');
  let copiedForm: string = '';
  let checkerResultDataString: string = '초기값';
  let naverCheckerURL: string;
  let stringToCheck: string[];
  let checkFinal: string = '';

  return (
  <div style={{overflowX:'hidden'}}>
    <Header currentMenu = 'others'/>
    
    {(isIPad13 || isBrowser)?
    <div>
      <CurrentNav src="img/Union.png"/>
    <div className='loadingContainer'>

        <img src='img/loading_screen.png'/>
    </div>
    </div>
    :null}
    {(!isIPad13)&&(!isBrowser)?
    <MobileView>
    <CurrentNavMobile src="img/Union.png"/>
      <div className='MobileOthersTabContainer'>
        <div className='MobileOthersTabBtnContainer'>
        <div className='MobileOthersTabBtn'>대학원 진학 문의</div>
        <div className='MobileOthersTabBtn'>출석인정 (학교행사)</div>
        <div className='MobileOthersTabBtn'>출석인정 (개인사정)</div>
        <div className='MobileOthersTabBtn'>수업내용 질문</div>
        </div>
      </div>
    <div className='loadingContainerMobile'>
        <LoadingMobile src='img/loading_screen.png'/>

    </div>

      </MobileView>
      :null}
    {(isIPad13 || isBrowser)?
    <div className='buttonContainer'>
    {
        showChecker === false?
        <div className='functionBtn'>맞춤법 검사하기</div>
        :<div onClick={()=>{setShowChecker(!showChecker)}} className='functionBtn'>검사 종료하기</div>
      }
      <div onClick={()=>{window.location.replace("/others")}} className='functionBtn'>Clear</div>
      <div id='copyBtn'>복사하기</div>
    </div>
    :null}
    {(!isIPad13)&&(!isBrowser)?
    <MobileView>
      <ButtonContainerMobile>
        <MobileButtonFlex>
          {
            showChecker === false?
            <FunctionBtnMobile>맞춤법 검사하기</FunctionBtnMobile>
            :<FunctionBtnMobile onClick={()=>{setShowChecker(!showChecker)}}>검사 종료하기</FunctionBtnMobile>
          }
          <FunctionBtnMobile onClick={()=>{window.location.replace("/others")}}>Clear</FunctionBtnMobile>
          <CopyBtnMobile>복사하기</CopyBtnMobile>
        </MobileButtonFlex>
      </ButtonContainerMobile>
    </MobileView>
    :null}
  </div>
  );
}

function f1(inputValue: any){
  return {
    inputValue : inputValue
  }
}
export default connect(f1)(Others);

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

let LoadingMobile : any = styled.img`
    width: 230px;
    height: auto;
`;
