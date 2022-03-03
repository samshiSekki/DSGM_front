import React, {useEffect, useState} from 'react';
import 'css/footer.css';
import styled from 'styled-components';
import {BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";
import axios from 'axios';
import Github from '../components/asset/icon/icon-github.png';

let HeartIcon : any = styled.img`
  width: 16px;
  height: auto;
  margin-right: 10px;
`;

let MicIcon : any = styled.img`
  width: 13px;
  height: auto;
  margin-right: 10px;
`;

let FooterContainerMobile : any = styled.div`
  width: 335px;
  height: 8px;
  display: inline-block;
`;

let CopyrightMobile : any = styled.div`
  float:left;
  color: #6A6A6A;
  line-height: 8px;
  font-size: 7px;
`;
let AccessCounterMobile : any = styled.div`
  float: left;
  color: #241E19;
  font-size: 7px;
  line-height: 8px;
`;
let HeartIconMobile : any = styled.img`
  width: 8px;
  height: auto;
  margin-right: 4px;
`;
let MicIconMobile : any = styled.img`
  width: 7px;
  height: auto;
  margin-right: 4px;
  float: right;
`;



function Footer() {
  const HAS_VISITED_BEFORE : any = window.localStorage.getItem('hasVisitedBefore');
  
  const [visit, setVisit] = useState(0);
  const visitUrl: any = process.env.REACT_APP_VISIT_PUT_URL;
  useEffect(() => {
    axios.get(`http://mail-helper.com/mail-forms/visit`).then(function(response){
                //console.log(response.data);
                setVisit(response.data);
                if (!HAS_VISITED_BEFORE){
                setVisit(response.data + 1);
                axios.put(`http://mail-helper.com/mail-forms${process.env.REACT_APP_VISIT_PUT_URL}`, {
                  "counter": response.data + 1
              });
              let expires : any = new Date();
              expires = expires.setTime(expires.getTime() + (30*24*60*60*1000));
              window.localStorage.setItem('hasVisitedBefore', expires);
            }
            
            })
  }, []);
  
  
  return (
    <div>
        <BrowserView>
        <div className='footerContainer'>
            <div className='copyright'>Copyright(c)2022 삼시세끼 All rights reserved.</div>
            <div className='accessCounter'><HeartIcon src='img/Heart.png'/>지금까지 {visit}명이 접속했어요!</div>
            <div className='proposalBtn'><MicIcon src='img/Mic.png'/><a target="_blank" href="https://www.instagram.com/samshisaekki/">제안하기</a></div>
        </div>
        </BrowserView>

        <MobileView>
          <FooterContainerMobile>
            
            <AccessCounterMobile><HeartIconMobile src='img/Heart.png'/>지금까지 {visit}명이 접속했어요!</AccessCounterMobile>
            <div className='proposalMobile'><a target="_blank" href="https://www.instagram.com/samshisaekki/">제안하기</a><MicIconMobile src='img/Mic.png'/></div>
            <br/>
            <CopyrightMobile>Copyright(c)2022 삼시세끼 All rights reserved.</CopyrightMobile>
          </FooterContainerMobile>
        </MobileView>
    </div>
  );
}

export default Footer;
