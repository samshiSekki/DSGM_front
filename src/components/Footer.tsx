import React, {useEffect, useState} from 'react';
import 'css/footer.css';
import styled from 'styled-components';
import {BrowserView, MobileView, isBrowser, isIPad13} from "react-device-detect";
import axios from 'axios';
import Github from '../components/asset/icon/icon-github.png';

function Footer() {
  
  return (
    <div>
        {(isIPad13 || isBrowser)?
        <div className='footerContainer'>
          {isIPad13
            ? <div className='ipadCopyRight'>Copyright(c)2022 삼시세끼 All rights reserved.</div>
            : <div className='copyright'>Copyright(c)2022 삼시세끼 All rights reserved.</div>
          }
            <div className='proposalBtn'><MicIcon src='img/Mic.png'/><a target="_blank" href="https://www.instagram.com/samshisaekki/">제안하기</a></div>
        </div>
        : null
        }

        {(!isIPad13)&&(!isBrowser)?
        <MobileView>

          <MobileFooterContainer>
            <MobileFooterContents>
              <MobileFooterLogoImg src='img/white_logo.png'/>
              <MobileFooterTitle>대설교메</MobileFooterTitle>
              <MobileFollowUs>
                <span style={{fontSize: '10px', fontWeight: '700'}}>Follow Us</span>
                <a target="_blank" href='https://www.instagram.com/samshisaekki/'>
                <MobileFollowLink>
                  <img src='img/instagram_logo.png' style={{width: '10px', height: '10px', float:'left'}}/>
                  <span style={{marginLeft: '4px'}}>samshisaekki</span>
                </MobileFollowLink>
                </a>
                <a target="_blank" href='https://github.com/samshiSekki'>
                <MobileFollowLink>
                  <img src='img/github_logo.png' style={{width: '10px', height: '10px', float:'left'}}/>
                  <span style={{marginLeft: '4px'}}>github</span>
                </MobileFollowLink>
                </a>
                <CopyrightMobile>
                  Copyright(c)2022 삼시세끼 All rights reserved.
                </CopyrightMobile>
                <div>
                  <MobileMemberPosition>Planner</MobileMemberPosition>
                  <MobileMemberName>이지영</MobileMemberName>

                  <MobileMemberPosition style={{marginLeft: '12px'}}>Designer</MobileMemberPosition>
                  <MobileMemberName>구지현</MobileMemberName>
                  <br/>
                  <MobileMemberPosition style={{}}>Front-end Developer</MobileMemberPosition>
                  <MobileMemberName>송재민</MobileMemberName>
                  <MobileMemberName>황남주</MobileMemberName>

                  <MobileMemberPosition style={{marginLeft: '12px'}}>Back-end Developer</MobileMemberPosition>
                  <MobileMemberName>송은주</MobileMemberName>
                  <MobileMemberName>오유정</MobileMemberName>
                </div>
              </MobileFollowUs>
            </MobileFooterContents>
          </MobileFooterContainer>
        </MobileView>
        :null
        }
    </div>
  );
}

export default Footer;

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


let MobileVisitCountContainer : any = styled.div`
  margin-bottom: 47px;
  font-size: 11px;
`;

let MobileFooterContainer : any = styled.div`
  width: 100%;
  height: 255px;
  background: #241E19;
  display: flex;
  justify-content: center;
`;

let MobileFooterContents : any = styled.div`
  width: 335px;
  height: 98px;
  margin-top: 37px;
  justify-content: center;
  text-align: left;
`;
let MobileFooterLogoImg : any = styled.img`
  float: left;
  width: 15px;
  height: 15px;
`;
let MobileFooterTitle : any = styled.div`
float: left;
  margin-left: 5.12px;
  font-weight: 800;
font-size: 15px;
line-height: 16px;
text-align: center;

color: #FFFFFF;

opacity: 0.8;
`;

let MobileFollowUs : any = styled.div`
  margin-top: 35px;
  color: white;
`;
let MobileFollowLink : any = styled.div`
  margin-top: 7px;
  font-weight: 400;
font-size: 10px;
line-height: 10px;
color: #FFFFFF;
`;

let CopyrightMobile : any = styled.div`
font-weight: 400;
font-size: 8px;
line-height: 10px;
color: #C2C2C2;
margin-top: 17px;
margin-bottom: 4px;
`;

let MobileMemberPosition : any = styled.span`
font-weight: 700;
font-size: 8px;
line-height: 6px;
color: #FFFFFF;
`;
let MobileMemberName : any = styled.span`
font-weight: 400;
font-size: 8px;
line-height: 6px;
color: #FFFFFF;
margin-left: 4px;
`;