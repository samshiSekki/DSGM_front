import React, { useState } from "react";
import PostList from "../PostList";
import { connect } from "react-redux";
import styled from "styled-components";
import parse from "html-react-parser";
import { MobileView, isBrowser, isIPad13 } from "react-device-detect";
import Header from "../../components/Header";
import Footer from "components/Footer";
import { Link } from "react-router-dom";
import { getParsedSpellCheckerResult } from "utils/spellChecker";

function GraduateSchool(props: any) {
  let [showChecker, setShowChecker] = useState(false);
  let [checkerResult, setCheckerResult] = useState("");
  let copiedForm: string = "";

  const getChecker = async () => {
    let stringToCheck: string[] = [];
    let checking: any = async () => {
      if (props.inputValue.graduateState === 0) {
        stringToCheck = [
          `안녕하십니까 ${props.inputValue.professorName}교수님,`,
          `저는 ${props.inputValue.myName}입니다.`,
          `${props.inputValue.greeting}`,
          `${props.inputValue.commonContent_plus}`,
          `졸업 후의 진로에 대해 고민하던 중 교수님의 ${props.inputValue.graduateContent0_1} 부분에 특히 관심이 가서 해당 분야로의 진학이나 진로에 대한 교수님의 조언을 듣고 싶습니다.`,
          `${props.inputValue.graduateContent0_plus1}`,
          `연구와 강의로 많이 바쁘신 줄 잘 알고 있기에 면담을 요청드리기가 무척 송구스럽습니다.`,
          `${props.inputValue.graduateContent0_plus2}`,
          `하지만 잠깐이라도 시간을 내주신다면 ${props.inputValue.graduateContent0_2} 진학에 대한 말씀 뿐만 아니라 진로에 관한 어떤 조언이라도 감사하게 새겨듣도록 하겠습니다.`,
          `${props.inputValue.graduateContent0_plus3}`,
          `제 전화번호는 ${props.inputValue.graduateContent0_3}입니다.`,
          `${props.inputValue.graduateContent0_plus4}`,
          `저는 ${props.inputValue.graduateContent0_4}에 면담이 가능합니다.`,
          `${props.inputValue.graduateContent0_plus5}`,
          `교수님께서 괜찮으신 시간을 전화나 문자, 이메일로 알려주시면 그 시각에 맞춰 찾아뵙겠습니다.`,
          `${props.inputValue.graduateContent0_plus4}`,
          `${props.inputValue.ending}`,
        ];
      } else if (props.inputValue.graduateState == 1) {
        stringToCheck = [
          `안녕하십니까 ${props.inputValue.professorName}교수님,`,
          `저는 ${props.inputValue.myName}입니다.`,
          `${props.inputValue.greeting}`,
          `${props.inputValue.commonContent_plus}`,
          `교수님의 ${props.inputValue.graduateContent1_1}에 ${props.inputValue.graduateContent1_2} 과정으로 진학을 희망해 메일 드립니다.`,
          `${props.inputValue.graduateContent1_plus1}`,
          `저는 ${props.inputValue.graduateContent1_3} 학과에 재학하며, ${props.inputValue.graduateContent1_4}를 공부하던 도중 ${props.inputValue.graduateContent1_5}를 추가로 더 배우며, ${props.inputValue.graduateContent1_6}를 하고자하는 꿈이 생겼습니다.`,
          `${props.inputValue.graduateContent1_plus2}`,
          `특히 제게 흥미를 주신 ${props.inputValue.graduateContent1_7} 교수님께 더 배우고 싶었고, 이에 ${props.inputValue.graduateContent1_8}를 연구하고자 진학을 희망하게 되었습니다.`,
          `${props.inputValue.gradeContent1_plus3}`,
          `${props.inputValue.graduateContent1_9}년 ${props.inputValue.graduateContent1_10} TO가 있는지 궁금합니다.`,
          `${props.inputValue.graduateContent1_plus4}`,
          `또한 입학하기 전 제가 특히 부족한 부분들에 대해 조언을 받을 수 있다면 ${props.inputValue.graduateContent1_11} 과정에 지원하는 데 있어 많은 도움이 될거라는 생각에 이렇게 메일을 보내게 되었습니다.`,
          `${props.inputValue.graduateContent1_plus5}`,
          `${props.inputValue.ending}`,
        ];
      }

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

    if (props.inputValue.graduateState == 0) {
      copiedForm =
        `안녕하십니까 ${props.inputValue.professorName}교수님,\r\n` +
        `저는 ${props.inputValue.myName}입니다.\r\n` +
        `${props.inputValue.greeting}\r\n` +
        `${props.inputValue.commonContent_plus}\r\n` +
        `졸업 후의 진로에 대해 고민하던 중 교수님의 ${props.inputValue.graduateContent0_1} 부분에 특히 관심이 가서 해당 분야로의 진학이나 진로에 대한 교수님의 조언을 듣고 싶습니다.\r\n` +
        `${props.inputValue.graduateContent0_plus1}\r\n` +
        `연구와 강의로 많이 바쁘신 줄 잘 알고 있기에 면담을 요청드리기가 무척 송구스럽습니다.\r\n` +
        `${props.inputValue.graduateContent0_plus2}\r\n` +
        `하지만 잠깐이라도 시간을 내주신다면 ${props.inputValue.graduateContent0_2} 진학에 대한 말씀 뿐만 아니라 진로에 관한 어떤 조언이라도 감사하게 새겨듣도록 하겠습니다.\r\n` +
        `${props.inputValue.graduateContent0_plus3}\r\n` +
        `제 전화번호는 ${props.inputValue.graduateContent0_3}입니다.\r\n` +
        `${props.inputValue.graduateContent0_plus4}\r\n` +
        `저는 ${props.inputValue.graduateContent0_4}에 면담이 가능합니다. \r\n` +
        `${props.inputValue.graduateContent0_plus5}\r\n` +
        `교수님께서 괜찮으신 시간을 전화나 문자, 이메일로 알려주시면 그 시각에 맞춰 찾아뵙겠습니다.\r\n` +
        `${props.inputValue.graduateContent0_plus4}\r\n` +
        `${props.inputValue.ending}`;
    } else if (props.inputValue.graduateState == 1) {
      copiedForm =
        `안녕하십니까 ${props.inputValue.professorName}교수님,\r\n` +
        `저는 ${props.inputValue.myName}입니다.\r\n` +
        `${props.inputValue.greeting}\r\n` +
        `${props.inputValue.commonContent_plus}\r\n` +
        `교수님의 ${props.inputValue.graduateContent1_1}에 ${props.inputValue.graduateContent1_2} 과정으로 진학을 희망해 메일 드립니다.\r\n` +
        `${props.inputValue.graduateContent1_plus1}\r\n` +
        `저는 ${props.inputValue.graduateContent1_3} 학과에 재학하며, ${props.inputValue.graduateContent1_4}를 공부하던 도중 ${props.inputValue.graduateContent1_5}를 추가로 더 배우며, ${props.inputValue.graduateContent1_6}를 하고자하는 꿈이 생겼습니다.\r\n` +
        `${props.inputValue.graduateContent1_plus2}\r\n` +
        `특히 제게 흥미를 주신 ${props.inputValue.graduateContent1_7} 교수님께 더 배우고 싶었고, 이에 ${props.inputValue.graduateContent1_8}를 연구하고자 진학을 희망하게 되었습니다.\r\n` +
        `${props.inputValue.gradeContent1_plus3}\r\n` +
        `${props.inputValue.graduateContent1_9}년 ${props.inputValue.graduateContent1_10} TO가 있는지 궁금합니다.\r\n` +
        `${props.inputValue.graduateContent1_plus4}\r\n` +
        `또한 입학하기 전 제가 특히 부족한 부분들에 대해 조언을 받을 수 있다면 ${props.inputValue.graduateContent1_11} 과정에 지원하는 데 있어 많은 도움이 될거라는 생각에 이렇게 메일을 보내게 되었습니다.\r\n` +
        `${props.inputValue.graduateContent1_plus5}\r\n` +
        `${props.inputValue.ending}`;
    }

    copyInClipboard();
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header currentMenu="others" />
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
              <PostList tabType={"graduateschool"} />
            </div>

            {showChecker === true ? <div>{parse(checkerResult)}</div> : null}
          </div>
        </div>
      ) : null}
      {!isIPad13 && !isBrowser ? (
        <MobileView>
          <CurrentNavMobile src="img/Union.png" />

          <div className="MobileOthersTabContainer">
            <div className="MobileOthersTabBtnContainer">
              <div className="MobileOthersTabBtnSelected">대학원 진학 문의</div>
              <Link to="/attendanceschool">
                <div className="MobileOthersTabBtn">출석인정 (학교행사)</div>
              </Link>
              <Link to="/attendancepersonal">
                <div className="MobileOthersTabBtn">출석인정 (개인사정)</div>
              </Link>
              <Link to="/questions">
                <div className="MobileOthersTabBtn">수업내용 질문</div>
              </Link>
            </div>
          </div>
          {showChecker === true ? (
            <div className="checkerInfoContainerMobile">
              <img src="img/Group 75.png" className="checkerInfoMobile" />
            </div>
          ) : null}
          <div className="mailTextContainerMobile">
            <div
              className={showChecker === true ? "hideCheckcer" : "showChecker"}
            >
              <PostList tabType={"graduateschool"} />
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
              window.location.replace("/graduateschool");
            }}
            className="functionBtn"
          >
            Clear
          </div>
          <div id="copyBtn" onClick={copyBtnClickHandler}>
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
                  window.location.replace("/graduateschool");
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
      <Footer />
    </div>
  );
}

function f1(inputValue: any) {
  return {
    inputValue: inputValue,
  };
}
export default connect(f1)(GraduateSchool);

let MobileTitle: any = styled.img`
  margin-top: 38.95px;
  margin-bottom: 22.95px;
`;
let MobileTitleContainer: any = styled.div`
  width: 100%;
`;

let CurrentNav: any = styled.img`
  position: absolute;
  width: 3%;
  height: auto;
  margin-left: 66.5vw;
`;
let CurrentNavMobile: any = styled.img`
  position: absolute;
  width: 14.02px;
  height: auto;
  margin-left: 297px;
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
