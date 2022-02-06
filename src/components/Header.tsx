import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';

function Header() {
  return(
    <div>
      <div className='title'>
        <img src="img/dsgm_title.png" className='dsgmTitleImg'/>
      </div>
      <div className='tabmenuContainer'>
        <Link to='/'>
          <button className='tabButton'>기본</button>
        </Link>
        <Link to='/billnut'>
          <button className='tabButton'>빌넣</button>
        </Link>
        <Link to='recommend'>
        <button className='tabButton'>추천서</button>
        </Link> 
        <Link to='grade'>
        <button className='tabButton'>성적문의</button>
        </Link>
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
