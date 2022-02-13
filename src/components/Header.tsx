import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';
import styled from 'styled-components';

let TabWrap : any = styled.div`
  display: inline-block;
  margin-top: 0.4vh;
`;
let MenuTabBar :any = styled.div`
  display: flex;
  align-items: center;
  width: 75vw;
  height: 8.2vh;
  background: #191E24;
  border-radius: 33px;
  color: white;
`;
let TabBtn : any = styled.div`
  width: 19.1%;
  height: 100%;
  position: relative;
  float: left;
  font-weight: 800;
  font-size: 24px;
  line-height: 65px;
`;
let TabBtn2 : any = styled.div`
  width: 20.6%;
  height: 100%;
  position: relative;
  float: left;
  font-weight: 800;
  font-size: 24px;
  line-height: 65px;
`;
let TabBorder : any = styled.img`
  height: 60%;
  float: left;
`;
let CurrentIndicator : any = styled.img`
  position: absolute;
  width: 3%;
  height: auto;
  margin-left: 5.5vw;
`;

function Header() {
  return(
    <div>
      <div className='title'>
        <img src="img/dsgm_title.png" className='dsgmTitleImg'/>
      </div>
      {/*
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
      */}
      <CurrentIndicator src="img/Group 8.png"/>
      <TabWrap>
      <MenuTabBar>
        
        <TabBtn>
          <Link to='/'>
            기본
          </Link>
        </TabBtn>
        <TabBorder src='img/Line 4.png'></TabBorder>
        <TabBtn2>
          <Link to='/billnut'>
            빌넣
          </Link>
        </TabBtn2>
        
        <TabBorder src='img/Line 4.png'></TabBorder>
        <TabBtn2>추천서</TabBtn2>
        <TabBorder src='img/Line 4.png'></TabBorder>
        <TabBtn2>성적문의</TabBtn2>
        <TabBorder src='img/Line 4.png'></TabBorder>
        <TabBtn className="dropdown">기타
        <div className = 'dropdown-content'>
            <a>대학원 진학 문의</a>
            <a>조교 신청 문의</a>
            <a>진로 상담</a>
            <a>수업 내용 질문</a>
            <a>과제 질문</a>
          </div>
          </TabBtn>
      </MenuTabBar>
      </TabWrap>
    </div>
  );
}

export default Header;
