import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import styled from "styled-components";
import { connect, useDispatch } from "react-redux";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isIPad13,
} from "react-device-detect";
import ReactGA from "react-ga";

function Header(props: any) {
  const [currentMenu, setCurrentMenu] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  let dispatch = useDispatch();

  const el: any = useRef();
  const handleCloseDropDown = (e: any) => {
    if (el.current && !el.current.contains(e.target)) setShowDropdown(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleCloseDropDown);
    return () => {
      window.removeEventListener("click", handleCloseDropDown);
    };
  }, []);

  function clearCommonPlus() {
    dispatch({
      type: "change",
      payload: { changeData: "", variableType: "commonContent_plus" },
    });
  }

  return (
    <div>
      {isIPad13 || isBrowser ? (
        <div>
          <div className="title">
            <img src="img/dsgm_title.png" className="dsgmTitleImg" />
          </div>

          <IndicatorWrapper>
            {props.currentMenu === "default" ? (
              <CurrentIndicator0 src="img/Group 8.png" />
            ) : props.currentMenu === "billnut" ? (
              <CurrentIndicator1 src="img/Group 8.png" />
            ) : props.currentMenu === "recommend" ? (
              <CurrentIndicator2 src="img/Group 8.png" />
            ) : props.currentMenu === "grade" ? (
              <CurrentIndicator3 src="img/Group 8.png" />
            ) : (
              <CurrentIndicator4 src="img/Group 8.png" />
            )}
          </IndicatorWrapper>
          <TabWrap>
            <MenuTabBar>
              <TabBtn>
                <Link to="/">
                  <div
                    onClick={() => {
                      clearCommonPlus();
                    }}
                  >
                    기본
                  </div>
                </Link>
              </TabBtn>
              <TabBorder src="img/Line 4.png"></TabBorder>
              <TabBtn2>
                <Link to="/billnut">
                  <div
                    onClick={() => {
                      clearCommonPlus();
                    }}
                  >
                    빌넣
                  </div>
                </Link>
              </TabBtn2>

              <TabBorder src="img/Line 4.png"></TabBorder>
              <TabBtn2>
                <Link to="/recommend">
                  <div
                    onClick={() => {
                      clearCommonPlus();
                    }}
                  >
                    추천서
                  </div>
                </Link>{" "}
              </TabBtn2>
              <TabBorder src="img/Line 4.png"></TabBorder>
              <TabBtn2>
                <Link to="/grade">
                  <div
                    onClick={() => {
                      clearCommonPlus();
                    }}
                  >
                    성적문의
                  </div>
                </Link>
              </TabBtn2>
              <TabBorder src="img/Line 4.png"></TabBorder>
              <TabBtn
                className="dropdown"
                onMouseOver={() => {
                  setShowDropdown(true);
                }}
              >
                기타
              </TabBtn>
            </MenuTabBar>
          </TabWrap>

          <DropdownWrapper>
            {showDropdown && (
              <DivDropdown ref={el}>
                <Link to="/graduateschool">
                  <div
                    className="dropdown_selection"
                    onClick={() => {
                      clearCommonPlus();
                    }}
                  >
                    대학원 진학 문의
                  </div>
                </Link>
                <hr className="dropdown-hr" />
                <Link to="/attendanceschool">
                  <div
                    className="dropdown_selection"
                    onClick={() => {
                      clearCommonPlus();
                    }}
                  >
                    출석인정 (학교행사)
                  </div>
                </Link>
                <hr className="dropdown-hr" />
                <Link to="/attendancepersonal">
                  <div
                    className="dropdown_selection"
                    onClick={() => {
                      clearCommonPlus();
                    }}
                  >
                    출석인정 (개인사정)
                  </div>
                </Link>
                <hr className="dropdown-hr" />
                <Link to="/questions">
                  <div
                    className="dropdown_selection"
                    onClick={() => {
                      clearCommonPlus();
                    }}
                  >
                    수업 내용 질문
                  </div>
                </Link>
              </DivDropdown>
            )}
          </DropdownWrapper>
        </div>
      ) : null}
      {!isIPad13 && !isBrowser ? (
        <MobileView>
          <MobileTitleContainer>
            <MobileTitle src="img/dsgm_title_mobile.png" />
          </MobileTitleContainer>
          <br />
          <IndicatorWrapperMobile>
            {props.currentMenu === "default" ? (
              <CurrentIndicatorMobile0 src="img/Group 8.png" />
            ) : props.currentMenu === "billnut" ? (
              <CurrentIndicatorMobile1 src="img/Group 8.png" />
            ) : props.currentMenu === "recommend" ? (
              <CurrentIndicatorMobile2 src="img/Group 8.png" />
            ) : props.currentMenu === "grade" ? (
              <CurrentIndicatorMobile3 src="img/Group 8.png" />
            ) : (
              <CurrentIndicatorMobile4 src="img/Group 8.png" />
            )}
          </IndicatorWrapperMobile>
          <TabWrapMobile>
            <MenuTabBarMobile>
              <TabBtnMobile1>
                <Link to="/">
                  <div
                    onClick={() => {
                      clearCommonPlus();
                      ReactGA.event({
                        category: "Button",
                        action: "default button",
                        label: "menu",
                      });
                    }}
                  >
                    기본
                  </div>
                </Link>
              </TabBtnMobile1>
              <TabBtnMobile2>
                <Link to="/billnut">
                  <div
                    onClick={() => {
                      clearCommonPlus();
                      ReactGA.event({
                        category: "Button",
                        action: "billnut button",
                        label: "menu",
                      });
                    }}
                  >
                    빌넣
                  </div>
                </Link>
              </TabBtnMobile2>
              <TabBtnMobile2>
                <Link to="/recommend">
                  <div
                    onClick={() => {
                      clearCommonPlus();
                      ReactGA.event({
                        category: "Button",
                        action: "recommend button",
                        label: "menu",
                      });
                    }}
                  >
                    추천서
                  </div>
                </Link>
              </TabBtnMobile2>
              <TabBtnMobile2>
                <Link to="/grade">
                  <div
                    onClick={() => {
                      clearCommonPlus();
                      ReactGA.event({
                        category: "Button",
                        action: "grade button",
                        label: "menu",
                      });
                    }}
                  >
                    성적문의
                  </div>
                </Link>
              </TabBtnMobile2>
              <TabBtnMobile1 style={{ borderRight: "0px" }}>
                <Link to="/graduateschool">기타</Link>
              </TabBtnMobile1>
            </MenuTabBarMobile>
          </TabWrapMobile>
        </MobileView>
      ) : null}
    </div>
  );
}

function f1(inputValue: any) {
  return {
    inputValue: inputValue,
  };
}

let MobileTitle: any = styled.img`
  margin-top: 40px;
  margin-bottom: 5px;
  width: 115.07px;
  height: auto;
`;
let MobileTitleContainer: any = styled.div`
  width: 100%;
  display: block;
`;

let TabWrap: any = styled.div`
  display: inline-block;
  margin-top: 0.4vh;
`;
let TabWrapMobile: any = styled.div`
  display: inline-block;
  margin-top: 2px;
`;
let MenuTabBar: any = styled.div`
  display: flex;
  align-items: center;
  width: 75vw;
  height: 100%;
  background: #191e24;

  border-radius: 26px;
  color: white;
`;
let MenuTabBarMobile: any = styled.div`
  display: flex;
  align-items: center;
  width: 335px;
  height: 31px;
  background: #241e19;
  border-radius: 10px;
`;
let TabBtn: any = styled.div`
  width: 19.09%;
  height: 100%;
  position: relative;
  float: left;
  font-weight: 800;
  font-size: 24px;
  line-height: 65px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
let TabBtn2: any = styled.div`
  width: 20.6%;
  height: 100%;
  position: relative;
  float: left;
  font-weight: 800;
  font-size: 24px;
  line-height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
let TabBtnMobile1: any = styled.div`
  width: 63.73px;
  height: 31px;
  position: relative;
  float: left;
  font-weight: 800;
  font-size: 11px;
  line-height: 12px;
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
let TabBtnMobile2: any = styled.div`
  width: 68.84px;
  height: 31px;
  position: relative;
  float: left;
  font-weight: 800;
  font-size: 11px;
  line-height: 12px;
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

let TabBorder: any = styled.img`
  height: 30px;
  float: left;
`;
let IndicatorWrapper: any = styled.div`
  float: left;
  position: absolute;
  display: inline-block;
  width: 75vw;
`;
let IndicatorWrapperMobile: any = styled.div`
  position: absolute;
  display: inline-block;
  width: 335px;
`;
let CurrentIndicator0: any = styled.img`
  float: left;
  width: 4%;
  height: auto;
  margin-left: 5.5vw;
`;
let CurrentIndicatorMobile0: any = styled.img`
  float: left;
  width: 14.02px;
  height: auto;
  margin-left: 24.98px;
`;

let CurrentIndicator1: any = styled.img`
  float: left;
  width: 4%;
  height: auto;
  margin-left: 20.5vw;
`;
let CurrentIndicatorMobile1: any = styled.img`
  float: left;
  width: 14.02px;
  height: auto;
  margin-left: 92px;
`;

let CurrentIndicator2: any = styled.img`
  float: left;
  width: 4%;
  height: auto;
  margin-left: 36vw;
`;
let CurrentIndicatorMobile2: any = styled.img`
  float: left;
  width: 14.02px;
  height: auto;
  margin-left: 161px;
`;

let CurrentIndicator3: any = styled.img`
  float: left;
  width: 4%;
  height: auto;
  margin-left: 51.5vw;
`;
let CurrentIndicatorMobile3: any = styled.img`
  float: left;
  width: 14.02px;
  height: auto;
  margin-left: 230px;
`;

let CurrentIndicator4: any = styled.img`
  float: left;
  width: 4%;
  height: auto;
  margin-left: 66.5vw;
`;
let CurrentIndicatorMobile4: any = styled.img`
  float: left;
  width: 14.02px;
  height: auto;
  margin-left: 297px;
`;

let DivDropdown: any = styled.div`
  float: right;
  width: 19.1%;
  height: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #ffffff;
  border: 0.3px solid #241e19;
  box-sizing: border-box;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(0, 0, 0, 0.08),
    0px 1px 9px rgba(0, 0, 0, 0.1);
  border-radius: 14px 18px 14px 14px;
  display: inline-block;
`;

let DropdownWrapper: any = styled.div`
  margin-top: 11px;
  width: 75vw;
  height: auto;
  position: absolute;
  padding-left: 12.5vw;
  padding-right: 12.5vw;
  z-index: 999;
`;

export default connect(f1)(Header);
