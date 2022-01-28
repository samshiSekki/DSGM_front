import React from 'react';
import '../css/main.css';

function Header() {
  return(
    <div>
      <div className='title'>
        대설교메
      </div>

      <div className='tabmenuContainer'>
        <button className='tabButton'>기본</button>
        <button className='tabButton'>빌넣</button>
        <button className='tabButton'>추천서</button>
        <button className='tabButton'>성적문의</button>
        <div className='dropdown'>
          <button className='dropButton'>기타</button>
          <div className = 'dropdown-content'>
            <a>대학원 진학 문의</a>
            <a>조교 신청 문의</a>
            <a>진로 상담</a>
            <a>수업 내용 질문</a>
            <a>과제 질문</a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
