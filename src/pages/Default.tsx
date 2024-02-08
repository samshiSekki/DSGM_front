import React, { useState } from "react";
import "../css/main.css";
import PostList from "./PostList";
import styled from "styled-components";
import { connect } from "react-redux";
import parse from "html-react-parser";
import { MobileView, isBrowser, isIPad13 } from "react-device-detect";
import Header from "../components/Header";
import { getParsedSpellCheckerResult } from "utils/spellChecker";

function Default(props: any) {
  let [showChecker, setShowChecker] = useState(false);
  let [checkerResult, setCheckerResult] = useState(""); //맞춤법 검사 결과 화면에 뿌리는 용도
  let copiedForm: string = "";

  const getChecker = async () => {
    let stringToCheck: string[] = [];
    let checking: any = async () => {
      stringToCheck = [
        `안녕하십니까 ${props.inputValue.professorName} 교수님,`,
        `저는 ${props.inputValue.myName}입니다.`,
        `${props.inputValue.greeting}`,
        `${props.inputValue.commonContent_plus}`,
        `다름이 아니라,`,
        `${props.inputValue.defaultContent}`,
        `${props.inputValue.ending}`,
      ];

      const result = await getParsedSpellCheckerResult(stringToCheck);
      setCheckerResult(result);
    };
    checking().then(setShowChecker(true));
  };

  function copyInClipboard() {
    const textarea = document.createElement("textarea");
    textarea.value = copiedForm;
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("복사되었습니다.");
  }

  function copyBtnClickHandler() {
    if (!document.queryCommandSupported("copy"))
      return alert("복사하기가 지원되지 않는 브라우저입니다");

    copiedForm =
      `안녕하십니까 ${props.inputValue.professorName} 교수님,\r\n` +
      `저는 ${props.inputValue.myName}입니다.\r\n` +
      `${props.inputValue.greeting}\r\n` +
      `${props.inputValue.commonContent_plus}\r\n` +
      `다름이 아니라,\r\n` +
      `${props.inputValue.defaultContent}\r\n` +
      `${props.inputValue.ending}\r\n`;
    copyInClipboard();
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header currentMenu="default" />
      {isIPad13 || isBrowser ? (
        <div>
          <CurrentNav src="img/Union.png" />
          {showChecker === true ? (
            <div className="checkerInfoContainer">
              <CheckerInfo src="img/Group 75.png" />
            </div>
          ) : null}
          <div className="mailTextContainer">
            <div
              className={showChecker === true ? "hideCheckcer" : "showChecker"}
            >
              <PostList tabType={""} />
            </div>
            {showChecker === true ? <div>{parse(checkerResult)}</div> : null}
          </div>
        </div>
      ) : null}
      {!isIPad13 && !isBrowser ? (
        <MobileView>
          <CurrentNavMobile src="img/Union.png" />

          {showChecker === true ? (
            <div className="checkerInfoContainerMobile">
              <img src="img/Group 75.png" className="checkerInfoMobile" />
            </div>
          ) : null}
          <div className="mailTextContainerMobile">
            <div
              className={showChecker === true ? "hideCheckcer" : "showChecker"}
            >
              <PostList tabType={""} />
            </div>
            {showChecker === true ? <div>{parse(checkerResult)}</div> : null}
          </div>
        </MobileView>
      ) : null}
      {isIPad13 || isBrowser ? (
        <div className="buttonContainer">
          {showChecker === false ? (
            <div onClick={getChecker} className="functionBtn">
              맞춤법 검사하기
            </div>
          ) : (
            <div
              onClick={() => {
                setShowChecker(!showChecker);
              }}
              className="functionBtn"
            >
              검사 종료하기
            </div>
          )}
          <div
            onClick={() => {
              window.location.replace("/");
            }}
            className="functionBtn"
          >
            Clear
          </div>
          <div onClick={copyBtnClickHandler} id="copyBtn">
            복사하기
          </div>
        </div>
      ) : null}
      {!isIPad13 && !isBrowser ? (
        <MobileView>
          <ButtonContainerMobile>
            <MobileButtonFlex>
              {showChecker === false ? (
                <FunctionBtnMobile onClick={getChecker}>
                  맞춤법 검사하기
                </FunctionBtnMobile>
              ) : (
                <FunctionBtnMobile
                  onClick={() => {
                    setShowChecker(!showChecker);
                  }}
                >
                  검사 종료하기
                </FunctionBtnMobile>
              )}
              <FunctionBtnMobile
                onClick={() => {
                  window.location.replace("/");
                }}
              >
                Clear
              </FunctionBtnMobile>
              <CopyBtnMobile onClick={copyBtnClickHandler}>
                복사하기
              </CopyBtnMobile>
            </MobileButtonFlex>
          </ButtonContainerMobile>
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
export default connect(f1)(Default);

let CurrentNav: any = styled.img`
  position: absolute;
  width: 3%;
  height: auto;
  margin-left: 5.5vw;
`;
let CurrentNavMobile: any = styled.img`
  position: absolute;
  width: 14.02px;
  height: auto;
  margin-left: 24.98px;
`;

let CheckerInfo: any = styled.img`
  margin-top: 5vh;
  margin-bottom: 3vh;
  width: 25vw;
  height: auto;
`;

let ButtonContainerMobile: any = styled.div`
  display: inline-block;
  margin-top: 12px;
  margin-bottom: 23px;
  width: 335px;
  height: 31px;
`;
let MobileButtonFlex: any = styled.div`
  display: flex;
  justify-content: space-between;
`;
let FunctionBtnMobile: any = styled.div`
  float: left;
  width: 105px;
  height: 31px;
  background: #241e19;
  color: white;
  border-radius: 7px;

  font-style: normal;
  font-weight: 800;
  font-size: 11px;
  line-height: 31px;
  text-align: center;
`;
let CopyBtnMobile: any = styled.div`
  float: left;
  width: 105px;
  height: 31px;
  background: #14b390;
  color: white;
  border-radius: 7px;

  font-style: normal;
  font-weight: 800;
  font-size: 11px;
  line-height: 31px;
  text-align: center;
`;
