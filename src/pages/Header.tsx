import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';

function Header() {
  return(
    <div>
      <div className='title'>
        대학생이나 돼서 설마 교수님한테 메일 보내는 법도 몰라?
      </div>

      <div className='tabmenuContainer'>
        <Link to='/'>
          <button className='tabButton'>기본</button>
        </Link>
        <Link to='/billnut'>
          <button className='tabButton'>빌넣</button>
        </Link>
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
