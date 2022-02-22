import React from 'react';
import 'css/footer.css';
import styled from 'styled-components';

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

function Footer() {
  return (
    <div>
        <div className='footerContainer'>
            <div className='copyright'>Copyright(c)2022 삼시세끼 All rights reserved.</div>
            <div className='accessCounter'><HeartIcon src='img/Heart.png'/>지금까지 n명이 접속했어요!</div>
            <div className='proposalBtn'><MicIcon src='img/Mic.png'/><a target="_blank"href="https://www.instagram.com/samshisaekki/">제안하기</a></div>
        </div>
    </div>
  );
}

export default Footer;
