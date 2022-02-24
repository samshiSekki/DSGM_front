import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';

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
  color: white;
`;
let TabBtn2 : any = styled.div`
  width: 20.6%;
  height: 100%;
  position: relative;
  float: left;
  font-weight: 800;
  font-size: 24px;
  line-height: 65px;
  color: white;
`;
let TabBorder : any = styled.img`
  height: 60%;
  float: left;
`;
let CurrentIndicator0 : any = styled.img`
  position: absolute;
  width: 3%;
  height: auto;
  margin-left: 5.5vw;
`;
let CurrentIndicator1 : any = styled.img`
  position: absolute;
  width: 3%;
  height: auto;
  margin-left: 20.5vw;
`;
let CurrentIndicator2 : any = styled.img`
  position: absolute;
  width: 3%;
  height: auto;
  margin-left: 36vw;
`;
let CurrentIndicator3 : any = styled.img`
  position: absolute;
  width: 3%;
  height: auto;
  margin-left: 51.5vw;
`;

function Header() {
  const [currentMenu, setCurrentMenu] = useState(0);
  let dispatch = useDispatch();

  function clearCommonPlus(){
    dispatch({type: 'change', payload:{changeData:'', variableType: 'commonContent_plus'}});
  }

  return(
    <div>
      <div className='title'>
        <img src="img/dsgm_title.png" className='dsgmTitleImg'/>
      </div>
      {currentMenu === 0?<CurrentIndicator0 src="img/Group 8.png"/>
        : currentMenu === 1?<CurrentIndicator1 src="img/Group 8.png"/>
        : currentMenu === 2?<CurrentIndicator2 src="img/Group 8.png"/>
        : <CurrentIndicator3 src="img/Group 8.png"/>
      }
      <TabWrap>
      <MenuTabBar>
        
        <TabBtn>
          <Link to='/'>
            <div onClick={()=>{setCurrentMenu(0); clearCommonPlus()}}>기본</div>
          </Link>
        </TabBtn>
        <TabBorder src='img/Line 4.png'></TabBorder>
        <TabBtn2>
          <Link to='/billnut'>
            <div onClick={()=>{setCurrentMenu(1); clearCommonPlus()}}>빌넣</div>
          </Link>
        </TabBtn2>
        
        <TabBorder src='img/Line 4.png'></TabBorder>
        <TabBtn2><Link to='recommend'>
            <div onClick={()=>{setCurrentMenu(2); clearCommonPlus()}}>추천서</div>
        </Link> </TabBtn2>
        <TabBorder src='img/Line 4.png'></TabBorder>
        <TabBtn2><Link to='grade'>
        <div onClick={()=>{setCurrentMenu(3); clearCommonPlus()}}>성적문의</div>
        </Link></TabBtn2>
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

function f1(inputValue: any){
  return {
    inputValue : inputValue
  }
};

export default connect(f1)(Header);
