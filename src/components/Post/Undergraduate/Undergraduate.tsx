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

const Undergraduate = ({ num, setNum }: NumberProps) => {
  const [current, setCurrent] = useState<ContentProps | null>(null);
  const [state1, setState1] = useState<boolean>(false);
  const [state2, setState2] = useState<boolean>(false);
  const [state3, setState3] = useState<boolean>(false);
  const [state4, setState4] = useState<boolean>(false);
  const [state5, setState5] = useState<boolean>(false);
  const [state6, setState6] = useState<boolean>(false);

  const textRef1 = useRef<any>(null);
  const textRef2 = useRef<any>(null);
  const textRef3 = useRef<any>(null);
  const textRef4 = useRef<any>(null);
  const textRef5 = useRef<any>(null);
  const textRef6 = useRef<any>(null);

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
    setState4(false);
    setState5(false);
    setState6(false);
    dispatch({
      type: "change",
      payload: { changeData: num, variableType: "graduateState" },
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
    } else if (value == 4) {
      if (textRef4 == null || textRef4.current == null) {
        return;
      }
      textRef4.current.style.height = "30px";
      textRef4.current.style.height = textRef4.current.scrollHeight + "px";
    } else if (value == 5) {
      if (textRef5 == null || textRef5.current == null) {
        return;
      }
      textRef5.current.style.height = "30px";
      textRef5.current.style.height = textRef5.current.scrollHeight + "px";
    } else if (value == 6) {
      if (textRef6 == null || textRef6.current == null) {
        return;
      }
      textRef6.current.style.height = "30px";
      textRef6.current.style.height = textRef6.current.scrollHeight + "px";
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
          {num == 0 ? (
            <>
              <div>
                졸업 후의 진로에 대해 고민하던 중 교수님의{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "graduateContent0_1")}
                ></InputDiv>
                부분에 특히 관심이 가서 해당 분야로의 진학이나 진로에 대한
                교수님의 조언을 듣고 싶습니다.
              </div>
              {state1 == false ? (
                <ButtonStyled onClick={() => setState1(true)}>+</ButtonStyled>
              ) : (
                <>
                  <ButtonStyled onClick={() => setState1(false)}>
                    -
                  </ButtonStyled>{" "}
                  <TextArea
                    ref={textRef1}
                    onInput={() => handleResize(1)}
                    onChange={(e) =>
                      changeInputValue(e, "graduateContent0_plus1")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                연구와 강의로 많이 바쁘신 줄 잘 알고 있기에 면담을 요청드리기가
                무척 송구스럽습니다.{" "}
              </div>
              {state2 == false ? (
                <ButtonStyled onClick={() => setState2(true)}>+</ButtonStyled>
              ) : (
                <>
                  <ButtonStyled onClick={() => setState2(false)}>
                    -
                  </ButtonStyled>{" "}
                  <TextArea
                    ref={textRef2}
                    onInput={() => handleResize(2)}
                    onChange={(e) =>
                      changeInputValue(e, "graduateContent0_plus2")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                하지만 잠깐이라도 시간을 내주신다면{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "graduateContent0_2")}
                ></InputDiv>{" "}
                진학에 대한 말씀 뿐만 아니라 진로에 관한 어떤 조언이라도
                감사하게 새겨듣도록 하겠습니다.
              </div>
              {state3 == false ? (
                <ButtonStyled onClick={() => setState3(true)}>+</ButtonStyled>
              ) : (
                <>
                  <ButtonStyled onClick={() => setState3(false)}>
                    -
                  </ButtonStyled>{" "}
                  <TextArea
                    ref={textRef3}
                    onInput={() => handleResize(3)}
                    onChange={(e) =>
                      changeInputValue(e, "graduateContent0_plus3")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                제 전화번호는{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "graduateContent0_3")}
                ></InputDiv>
                입니다.
              </div>
              {state4 == false ? (
                <ButtonStyled onClick={() => setState4(true)}>+</ButtonStyled>
              ) : (
                <>
                  <ButtonStyled onClick={() => setState4(false)}>
                    -
                  </ButtonStyled>{" "}
                  <TextArea
                    ref={textRef4}
                    onInput={() => handleResize(4)}
                    onChange={(e) =>
                      changeInputValue(e, "graduateContent0_plus4")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                저는{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "graduateContent0_4")}
                ></InputDiv>
                에 면담이 가능합니다.
              </div>
              {state5 == false ? (
                <ButtonStyled onClick={() => setState5(true)}>+</ButtonStyled>
              ) : (
                <>
                  <ButtonStyled onClick={() => setState5(false)}>
                    -
                  </ButtonStyled>{" "}
                  <TextArea
                    ref={textRef5}
                    onInput={() => handleResize(5)}
                    onChange={(e) =>
                      changeInputValue(e, "graduateContent0_plus5")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                교수님께서 괜찮으신 시간을 전화나 문자, 이메일로 알려주시면 그
                시각에 맞춰 찾아뵙겠습니다.
              </div>
              {state6 == false ? (
                <ButtonStyled onClick={() => setState6(true)}>+</ButtonStyled>
              ) : (
                <>
                  <ButtonStyled onClick={() => setState6(false)}>
                    -
                  </ButtonStyled>{" "}
                  <TextArea
                    ref={textRef6}
                    onInput={() => handleResize(6)}
                    onChange={(e) =>
                      changeInputValue(e, "graduateContent0_plus6")
                    }
                  ></TextArea>
                </>
              )}
            </>
          ) : (
            <>
              <div>
                교수님의{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "graduateContent1_1")}
                ></InputDiv>
                에{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "graduateContent1_2")}
                ></InputDiv>
                과정으로 진학을 희망해 메일 드립니다.
              </div>
              {state1 == false ? (
                <ButtonStyled onClick={() => setState1(true)}>+</ButtonStyled>
              ) : (
                <>
                  <ButtonStyled onClick={() => setState1(false)}>
                    -
                  </ButtonStyled>{" "}
                  <TextArea
                    ref={textRef1}
                    onInput={() => handleResize(1)}
                    onChange={(e) =>
                      changeInputValue(e, "graduateContent1_plus1")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                저는{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "graduateContent1_3")}
                ></InputDiv>
                학과에 재학하며,{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "graduateContent1_4")}
                ></InputDiv>
                를 공부하던 도중{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "graduateContent1_5")}
                ></InputDiv>
                를 추가로 더 배우며,{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "graduateContent1_6")}
                ></InputDiv>
                를 하고자하는 꿈이 생겼습니다.
              </div>
              {state2 == false ? (
                <ButtonStyled onClick={() => setState2(true)}>+</ButtonStyled>
              ) : (
                <>
                  <ButtonStyled onClick={() => setState2(false)}>
                    -
                  </ButtonStyled>{" "}
                  <TextArea
                    ref={textRef2}
                    onInput={() => handleResize(2)}
                    onChange={(e) =>
                      changeInputValue(e, "graduateContent1_plus2")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                특히 제게 흥미를 주신{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "graduateContent1_7")}
                ></InputDiv>
                교수님께 더 배우고 싶었고, 이에{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "graduateContent1_8")}
                ></InputDiv>
                를 연구하고자 진학을 희망하게 되었습니다.
              </div>
              {state3 == false ? (
                <ButtonStyled onClick={() => setState3(true)}>+</ButtonStyled>
              ) : (
                <>
                  <ButtonStyled onClick={() => setState3(false)}>
                    -
                  </ButtonStyled>{" "}
                  <TextArea
                    ref={textRef3}
                    onInput={() => handleResize(3)}
                    onChange={(e) =>
                      changeInputValue(e, "graduateContent1_plus3")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                <InputDiv
                  onChange={(e) => changeInputValue(e, "graduateContent1_9")}
                ></InputDiv>
                년{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "graduateContent1_10")}
                ></InputDiv>{" "}
                TO가 있는지 궁금합니다.
              </div>
              {state4 == false ? (
                <ButtonStyled onClick={() => setState4(true)}>+</ButtonStyled>
              ) : (
                <>
                  <ButtonStyled onClick={() => setState4(false)}>
                    -
                  </ButtonStyled>{" "}
                  <TextArea
                    ref={textRef4}
                    onInput={() => handleResize(4)}
                    onChange={(e) =>
                      changeInputValue(e, "graduateContent1_plus4")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                또한 입학하기 전 제가 특히 부족한 부분들에 대해 조언을 받을 수
                있다면{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "graduateContent1_11")}
                ></InputDiv>{" "}
                과정에 지원하는 데 있어 많은 도움이 될거라는 생각에 이렇게
                메일을 보내게 되었습니다.
              </div>
              {state5 == false ? (
                <ButtonStyled onClick={() => setState5(true)}>+</ButtonStyled>
              ) : (
                <>
                  <ButtonStyled onClick={() => setState5(false)}>
                    -
                  </ButtonStyled>{" "}
                  <TextArea
                    ref={textRef5}
                    onInput={() => handleResize(5)}
                    onChange={(e) =>
                      changeInputValue(e, "graduateContent1_plus5")
                    }
                  ></TextArea>
                </>
              )}
            </>
          )}
        </div>
      ) : null}
      {!isIPad13 && !isBrowser ? (
        <MobileView>
          {num == 0 ? (
            <>
              <div style={{ whiteSpace: "pre" }}>
                {"졸업 후의 진로에 대해 고민하던 중 교수님의\n"}{" "}
                <MobileInputDiv
                  style={{ width: "190px" }}
                  onChange={(e) => changeInputValue(e, "graduateContent0_1")}
                ></MobileInputDiv>
                {
                  "부분에 특히 관심이 가서\n 해당 분야로의 진학이나 진로에 대한 교수님의 조언을 듣고 싶습니다."
                }
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
                      changeInputValue(e, "graduateContent0_plus1")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div style={{ whiteSpace: "pre" }}>
                {
                  "연구와 강의로 많이 바쁘신 줄 잘 알고 있기에 면담을 요청드리기가 \n무척 송구스럽습니다."
                }{" "}
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
                      changeInputValue(e, "graduateContent0_plus2")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div style={{ whiteSpace: "pre" }}>
                {"하지만 잠깐이라도 시간을 내주신다면\n"}{" "}
                <MobileInputDiv
                  style={{ width: "200px" }}
                  onChange={(e) => changeInputValue(e, "graduateContent0_2")}
                ></MobileInputDiv>{" "}
                {
                  "진학에 대한 말씀 뿐만\n 아니라 진로에 관한 어떤 조언이라도 감사하게 새겨듣도록 하겠습니다."
                }
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
                      changeInputValue(e, "graduateContent0_plus3")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div>
                제 전화번호는{" "}
                <MobileInputDiv
                  style={{ width: "130px" }}
                  onChange={(e) => changeInputValue(e, "graduateContent0_3")}
                ></MobileInputDiv>
                입니다.
              </div>
              {state4 == false ? (
                <MobileButtonStyled onClick={() => setState4(true)}>
                  +
                </MobileButtonStyled>
              ) : (
                <>
                  <MobileButtonStyled onClick={() => setState4(false)}>
                    -
                  </MobileButtonStyled>{" "}
                  <MobileTextArea
                    ref={textRef4}
                    onInput={() => handleResize(4)}
                    onChange={(e) =>
                      changeInputValue(e, "graduateContent0_plus4")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div>
                저는{" "}
                <MobileInputDiv
                  style={{ width: "140px" }}
                  onChange={(e) => changeInputValue(e, "graduateContent0_4")}
                ></MobileInputDiv>
                에 면담이 가능합니다.
              </div>
              {state5 == false ? (
                <MobileButtonStyled onClick={() => setState5(true)}>
                  +
                </MobileButtonStyled>
              ) : (
                <>
                  <MobileButtonStyled onClick={() => setState5(false)}>
                    -
                  </MobileButtonStyled>{" "}
                  <MobileTextArea
                    ref={textRef5}
                    onInput={() => handleResize(5)}
                    onChange={(e) =>
                      changeInputValue(e, "graduateContent0_plus5")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div>
                교수님께서 괜찮으신 시간을 전화나 문자, 이메일로 알려주시면 그
                시각에 맞춰 찾아뵙겠습니다.
              </div>
              {state6 == false ? (
                <MobileButtonStyled onClick={() => setState6(true)}>
                  +
                </MobileButtonStyled>
              ) : (
                <>
                  <MobileButtonStyled onClick={() => setState6(false)}>
                    -
                  </MobileButtonStyled>{" "}
                  <MobileTextArea
                    ref={textRef6}
                    onInput={() => handleResize(6)}
                    onChange={(e) =>
                      changeInputValue(e, "graduateContent0_plus6")
                    }
                  ></MobileTextArea>
                </>
              )}
            </>
          ) : (
            <>
              <div>
                교수님의{" "}
                <MobileInputDiv
                  style={{ width: "140px" }}
                  onChange={(e) => changeInputValue(e, "graduateContent1_1")}
                ></MobileInputDiv>
                에{" "}
                <InputDiv
                  style={{ width: "140px" }}
                  onChange={(e) => changeInputValue(e, "graduateContent1_2")}
                ></InputDiv>
                과정으로 진학을 희망해 메일 드립니다.
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
                      changeInputValue(e, "graduateContent1_plus1")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div>
                저는{" "}
                <MobileInputDiv
                  style={{ width: "140px" }}
                  onChange={(e) => changeInputValue(e, "graduateContent1_3")}
                ></MobileInputDiv>
                학과에 재학하며,{" "}
                <MobileInputDiv
                  style={{ width: "180px" }}
                  onChange={(e) => changeInputValue(e, "graduateContent1_4")}
                ></MobileInputDiv>
                를 공부하던 도중{" "}
                <MobileInputDiv
                  style={{ width: "180px" }}
                  onChange={(e) => changeInputValue(e, "graduateContent1_5")}
                ></MobileInputDiv>
                를 추가로 더 배우며,{" "}
                <MobileInputDiv
                  style={{ width: "140px" }}
                  onChange={(e) => changeInputValue(e, "graduateContent1_6")}
                ></MobileInputDiv>
                를 하고자하는 꿈이 생겼습니다.
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
                      changeInputValue(e, "graduateContent1_plus2")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div style={{ whiteSpace: "pre" }}>
                특히 제게 흥미를 주신{" "}
                <MobileInputDiv
                  style={{ width: "100px" }}
                  onChange={(e) => changeInputValue(e, "graduateContent1_7")}
                ></MobileInputDiv>
                {"교수님께 더 배우고 싶었고, \n이에"}{" "}
                <MobileInputDiv
                  style={{ width: "200px" }}
                  onChange={(e) => changeInputValue(e, "graduateContent1_8")}
                ></MobileInputDiv>
                {"를 연구하고자 \n진학을 희망하게 되었습니다."}
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
                      changeInputValue(e, "graduateContent1_plus3")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div>
                <MobileInputDiv
                  style={{ width: "50px" }}
                  onChange={(e) => changeInputValue(e, "graduateContent1_9")}
                ></MobileInputDiv>
                년{" "}
                <MobileInputDiv
                  style={{ width: "130px" }}
                  onChange={(e) => changeInputValue(e, "graduateContent1_10")}
                ></MobileInputDiv>{" "}
                TO가 있는지 궁금합니다.
              </div>
              {state4 == false ? (
                <MobileButtonStyled onClick={() => setState4(true)}>
                  +
                </MobileButtonStyled>
              ) : (
                <>
                  <MobileButtonStyled onClick={() => setState4(false)}>
                    -
                  </MobileButtonStyled>{" "}
                  <MobileTextArea
                    ref={textRef4}
                    onInput={() => handleResize(4)}
                    onChange={(e) =>
                      changeInputValue(e, "graduateContent1_plus4")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div style={{ whiteSpace: "pre" }}>
                {
                  "또한 입학하기 전 제가 특히 부족한 부분들에 대해 \n조언을 받을 수 있다면"
                }{" "}
                <MobileInputDiv
                  style={{ width: "200px" }}
                  onChange={(e) => changeInputValue(e, "graduateContent1_11")}
                ></MobileInputDiv>{" "}
                {
                  "\n과정에 지원하는 데 있어 많은 도움이 될거라는 생각에 \n이렇게 메일을 보내게 되었습니다."
                }
              </div>
              {state5 == false ? (
                <MobileButtonStyled onClick={() => setState5(true)}>
                  +
                </MobileButtonStyled>
              ) : (
                <>
                  <MobileButtonStyled onClick={() => setState5(false)}>
                    -
                  </MobileButtonStyled>{" "}
                  <MobileTextArea
                    ref={textRef5}
                    onInput={() => handleResize(5)}
                    onChange={(e) =>
                      changeInputValue(e, "graduateContent1_plus5")
                    }
                  ></MobileTextArea>
                </>
              )}
            </>
          )}
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
export default connect(f1)(Undergraduate);

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
