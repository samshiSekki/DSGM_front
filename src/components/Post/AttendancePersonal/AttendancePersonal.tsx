import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { connect, useDispatch } from "react-redux";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isIPad13,
} from "react-device-detect";

type ContentProps = {
  content: string;
};
interface NumberProps {
  num: number;
  setNum: (num: number) => void;
}

const AttendancePersonal = ({ num, setNum }: NumberProps) => {
  const [current, setCurrent] = useState<ContentProps | null>(null);
  const [state1, setState1] = useState<boolean>(false);
  const [state2, setState2] = useState<boolean>(false);
  const [state3, setState3] = useState<boolean>(false);

  const textRef1 = useRef<any>(null);
  const textRef2 = useRef<any>(null);
  const textRef3 = useRef<any>(null);

  let dispatch = useDispatch();

  const changeInput = (value: any) => {
    value.replace(value, `<div>${value}</div>`);
    if (value.search("*")) {
      value.replace("*", "<input></input>");
    }
    return value;
  };
  useEffect(() => {
    setNum(num);
    setState1(false);
    setState2(false);
    setState3(false);
    dispatch({
      type: "change",
      payload: { changeData: num, variableType: "attPersonalState" },
    });
  }, [num]);
  const handleResize = useCallback((value: number) => {
    if (value == 1) {
      if (textRef1 == null || textRef1.current == null) {
        return;
      }
      textRef1.current.style.height = "30px";
      textRef1.current.style.height = textRef1.current.scrollHeight + "px";
    } else if (value == 2) {
      if (textRef2 == null || textRef2.current == null) {
        return;
      }
      textRef2.current.style.height = "30px";
      textRef2.current.style.height = textRef2.current.scrollHeight + "px";
    } else if (value == 3) {
      if (textRef3 == null || textRef3.current == null) {
        return;
      }
      textRef3.current.style.height = "30px";
      textRef3.current.style.height = textRef3.current.scrollHeight + "px";
    }
  }, []);
  function changeInputValue(e: any, variableType: string) {
    dispatch({
      type: "change",
      payload: { changeData: e.target.value, variableType: variableType },
    });
  }

  return (
    <>
      {isIPad13 || isBrowser ? (
        <div>
          <>
            <div>
              다름이 아니라{" "}
              <InputDiv
                onChange={(e) => changeInputValue(e, "attPersonalContent0_1")}
              ></InputDiv>
              에{" "}
              <InputDiv
                onChange={(e) => changeInputValue(e, "attPersonalContent0_2")}
              ></InputDiv>
              로 인해 수업에 참석하지 못할 것 같습니다.
            </div>
            {state1 == false ? (
              <ButtonStyled onClick={() => setState1(true)}>+</ButtonStyled>
            ) : (
              <>
                <ButtonStyled onClick={() => setState1(false)}>-</ButtonStyled>{" "}
                <TextArea
                  ref={textRef1}
                  onInput={() => handleResize(1)}
                  onChange={(e) =>
                    changeInputValue(e, "attPersonalContent0_plus1")
                  }
                ></TextArea>
              </>
            )}
            <div>
              다른 날짜로 조정이 불가피한 상황이라, 출석 인정 받을 수 있는 다른
              방법이 있을 지 문의 드립니다.
            </div>
            {state2 == false ? (
              <ButtonStyled onClick={() => setState2(true)}>+</ButtonStyled>
            ) : (
              <>
                <ButtonStyled onClick={() => setState2(false)}>-</ButtonStyled>{" "}
                <TextArea
                  ref={textRef2}
                  onInput={() => handleResize(2)}
                  onChange={(e) =>
                    changeInputValue(e, "attPersonalContent0_plus2")
                  }
                ></TextArea>
              </>
            )}
            <div>
              출석인정이 가능하다면 관련 서류를 발급받을 수 있는지 확인해보고자
              합니다.
            </div>
            {state3 == false ? (
              <ButtonStyled onClick={() => setState3(true)}>+</ButtonStyled>
            ) : (
              <>
                <ButtonStyled onClick={() => setState3(false)}>-</ButtonStyled>{" "}
                <TextArea
                  ref={textRef3}
                  onInput={() => handleResize(3)}
                  onChange={(e) =>
                    changeInputValue(e, "attPersonalContent0_plus3")
                  }
                ></TextArea>
              </>
            )}
          </>
        </div>
      ) : null}
      {!isIPad13 && !isBrowser ? (
        <MobileView>
          <>
            <div style={{ whiteSpace: "pre" }}>
              다름이 아니라{" "}
              <MobileInputDiv
                style={{ width: "200px" }}
                onChange={(e) => changeInputValue(e, "attPersonalContent0_1")}
              ></MobileInputDiv>
              {"에\n"}{" "}
              <MobileInputDiv
                style={{ width: "220px" }}
                onChange={(e) => changeInputValue(e, "attPersonalContent0_2")}
              ></MobileInputDiv>
              {"로 인해 \n수업에 참석하지 못할 것 같습니다."}
            </div>
            {state1 == false ? (
              <MobileButtonStyled onClick={() => setState1(true)}>
                +
              </MobileButtonStyled>
            ) : (
              <>
                <MobileButtonStyled onClick={() => setState1(false)}>
                  -
                </MobileButtonStyled>{" "}
                <MobileTextArea
                  ref={textRef1}
                  onInput={() => handleResize(1)}
                  onChange={(e) =>
                    changeInputValue(e, "attPersonalContent0_plus1")
                  }
                ></MobileTextArea>
              </>
            )}
            <div style={{ whiteSpace: "pre" }}>
              {
                "다른 날짜로 조정이 불가피한 상황이라, 출석 인정 받을 수 있는 다른 \n방법이 있을 지 문의 드립니다."
              }
            </div>
            {state2 == false ? (
              <MobileButtonStyled onClick={() => setState2(true)}>
                +
              </MobileButtonStyled>
            ) : (
              <>
                <MobileButtonStyled onClick={() => setState2(false)}>
                  -
                </MobileButtonStyled>{" "}
                <MobileTextArea
                  ref={textRef2}
                  onInput={() => handleResize(2)}
                  onChange={(e) =>
                    changeInputValue(e, "attPersonalContent0_plus2")
                  }
                ></MobileTextArea>
              </>
            )}
            <div>
              출석인정이 가능하다면 관련 서류를 발급받을 수 있는지 확인해보고자
              합니다.
            </div>
            {state3 == false ? (
              <MobileButtonStyled onClick={() => setState3(true)}>
                +
              </MobileButtonStyled>
            ) : (
              <>
                <MobileButtonStyled onClick={() => setState3(false)}>
                  -
                </MobileButtonStyled>{" "}
                <MobileTextArea
                  ref={textRef3}
                  onInput={() => handleResize(3)}
                  onChange={(e) =>
                    changeInputValue(e, "attPersonalContent0_plus3")
                  }
                ></MobileTextArea>
              </>
            )}
          </>
        </MobileView>
      ) : null}
    </>
  );
};

function f1(inputValue: any) {
  return {
    inputValue: inputValue,
  };
}
export default connect(f1)(AttendancePersonal);

const InputDiv = styled.input`
  background: #f7f8fa;
  border: none;
  border-bottom: 1px solid #a3a3a3;
  text-align: center;
  &:focus {
    outline: none;
  }
  //border: 1px solid #E2E2E2;
  //border-radius: 13px;
  -webkit-appearance: none;
  border-radius: 0;

  width: 500px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 5px;
  &:placeholder-shown {
    border-bottom: 1px solid #a3a3a3;
  }
`;
const ButtonStyled = styled.button`
  background-color: #f7f8fa;
  border: none;
  cursor: pointer;
  color: #a3a3a3;
`;
const TextArea = styled.textarea`
  width: 800px;
  border: none;
  background-image: repeating-linear-gradient(
    #f7f8fa,
    #f7f8fa 35px,
    #a3a3a3 36px,
    #a3a3a3 36px,
    #a3a3a3 36px
  );
  line-height: 36px;
  padding: 8px 10px;
  &:placeholder-shown {
    border-bottom: none;
  }
  &:focus {
    outline: none;
  }
  overflow-y: hidden;
  resize: none;
`;

//

const MobileContainer = styled.div`
  //margin-top:300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 10px;
  width: 335px;
`;

const MobileInputDiv = styled.input`
  background: #f7f8fa;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #a3a3a3;
  text-align: center;
  margin-bottom: 4px;
  line-height: 36px;
  &:focus {
    outline: none;
  }
  font-size: 10px;
  //border: 1px solid #E2E2E2;
  //border-radius: 13px;
  -webkit-appearance: none;

  width: 240px;
  height: 30px;
  margin-right: 5px;
  &:placeholder-shown {
    border-bottom: 1px solid #a3a3a3;
  }
`;

const MobileTextArea = styled.textarea`
  width: 270px;
  font-family: "Roboto";
  border: none;
  font-size: 10px;
  background-image: repeating-linear-gradient(
    #f7f8fa,
    #f7f8fa 35px,
    #a3a3a3 36px,
    #a3a3a3 36px,
    #a3a3a3 36px
  );
  line-height: 36px;
  padding: 8px 10px;
  &:placeholder-shown {
    border-bottom: none;
  }
  &:focus {
    outline: none;
  }
  overflow-y: hidden;
  resize: none;
`;

const MobileButtonStyled = styled.button`
  background-color: #f7f8fa;
  border: none;
  cursor: pointer;
  position: absolute;
  background: transparent;
  left: -15px;
  margin-top: -10px;
  color: #a3a3a3;
`;
