import React, {useState} from 'react';
import PostList from '../PostList'
import {connect} from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import parse from 'html-react-parser';
import {MobileView, isBrowser, isIPad13} from "react-device-detect";
import Header from '../../components/Header';

function Attendance1() {
  return (
    <div style={{overflowX:'hidden'}}>
        <Header currentMenu = 'others'/>
        {(isIPad13 || isBrowser)?
    <div>
    <CurrentNav src="img/Union.png"/>
        <div className='mailTextContainer'>
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
    </div>
  )
}

export default Attendance1

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
  margin-left: 5.5vw;
`;
let CurrentNavMobile : any = styled.img`
  position: absolute;
  width: 14.02px;
  height: auto;
  margin-left: 24.98px;
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