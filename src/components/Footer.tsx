import React from 'react';
import 'css/footer.css';

function Footer() {
  return (
    <div>
        <div className='footerContainer'>
            <div className='copyright'>Copyright(c)2022 삼시세끼 All rights reserved.</div>
            <div className='accessCounter'>지금까지 n명이 접속했어요!</div>
            <div className='proposalBtn'><a target="_blank"href="https://www.instagram.com/samshisaekki/">제안하기</a></div>
        </div>
    </div>
  );
}

export default Footer;
