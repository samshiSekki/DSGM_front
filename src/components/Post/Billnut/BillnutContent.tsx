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

const BillnutContent = ({ num, setNum }: NumberProps) => {
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
    dispatch({
      type: "change",
      payload: { changeData: num, variableType: "billnutState" },
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
                연락드리게 된 이유는 다름이 아니라
                <InputDiv
                  onChange={(e) => changeInputValue(e, "billnutContent0_1")}
                ></InputDiv>{" "}
                과목의 증원 가능성이 있는지 여쭙기 위함입니다.{" "}
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
                      changeInputValue(e, "billnutContent0_plus1")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                이 과목은 여러 분반이 있지만, 그럼에도 교수님의 수업을
                수강하고자 하는 이유는 다음과 같습니다.{" "}
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
                      changeInputValue(e, "billnutContent0_plus2")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                우선{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "billnutContent0_2")}
                ></InputDiv>{" "}
                과목이{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "billnutContent0_3")}
                ></InputDiv>{" "}
                과목의 선수과목이기 때문에, 이번 학기에 듣지 못하면 앞으로의
                강의 수강에 차질이 생깁니다.{" "}
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
                      changeInputValue(e, "billnutContent0_plus3")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                그리고{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "billnutContent0_4")}
                ></InputDiv>{" "}
                과목과 시간이 겹쳐 다른 분반을 듣는 것이 불가능합니다.
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
                      changeInputValue(e, "billnutContent0_plus4")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                이러한 이유들로 교수님의 해당 수업을 꼭 수강하고 싶습니다.
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
                      changeInputValue(e, "billnutContent0_plus5")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                <InputDiv
                  style={{ width: "50px" }}
                  onChange={(e) => changeInputValue(e, "billnutContent0_5")}
                ></InputDiv>
                학년 수강신청과 전학년 수강신청날 모두 신청을 시도하였지만 결국
                수강신청을 하지 못하였기에, 혹여나 정정기간에 증원해주실 수
                있는지 문의드립니다.
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
                      changeInputValue(e, "billnutContent0_plus6")
                    }
                  ></TextArea>
                </>
              )}
            </>
          ) : num == 1 ? (
            <>
              <div>
                다름 아니라, 교수님 수업 중{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "billnutContent1_1")}
                ></InputDiv>
                이 혹시라도 증원이 가능한지 조심스럽게 여쭤보고자 메일 드립니다.
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
                      changeInputValue(e, "billnutContent1_plus1")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                <InputDiv
                  onChange={(e) => changeInputValue(e, "billnutContent1_2")}
                ></InputDiv>
                는 제가{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "billnutContent1_3")}
                ></InputDiv>
                학과 수업들을 수강하며 꼭 듣고 싶었던 수업 중 하나입니다.{" "}
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
                      changeInputValue(e, "billnutContent1_plus2")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                또한, 이전에 교수님의 수업 중 하나인{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "billnutContent1_4")}
                ></InputDiv>
                을 수강한 적이 있었습니다.{" "}
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
                      changeInputValue(e, "billnutContent1_plus3")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                해당 수업들을 들으며 교수님의 강의를 다시 한 번 더 듣고 싶다는
                생각을 하였습니다.
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
                      changeInputValue(e, "billnutContent1_plus4")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                이번에 꼭 교수님 수업을 듣고 싶은 학생으로서, 불편하시지
                않으시다면 증원에 대해 생각해주시길 부탁드립니다.
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
                      changeInputValue(e, "billnutContent1_plus5")
                    }
                  ></TextArea>
                </>
              )}
            </>
          ) : (
            <>
              <div>
                이번 학기{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "billnutContent2_1")}
                ></InputDiv>{" "}
                수업 증원과 관련하여 여쭙고 싶어 메일 드립니다.
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
                      changeInputValue(e, "billnutContent2_plus1")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                교수님의 강의 계획서를 보고{" "}
                <InputDiv
                  onChange={(e) => changeInputValue(e, "billnutContent2_2")}
                ></InputDiv>
                내용에 대한 관심이 생겨, 이번 학기 해당 과목을 수강함으로써 관련
                분야에 대한 식견을 넓히고 싶습니다.{" "}
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
                      changeInputValue(e, "billnutContent2_plus2")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                <InputDiv
                  onChange={(e) => changeInputValue(e, "billnutContent2_3")}
                ></InputDiv>
                이유로 이 수업을 꼭 듣고 싶은데 추가 증원이 가능한지 궁금합니다.{" "}
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
                      changeInputValue(e, "billnutContent2_plus3")
                    }
                  ></TextArea>
                </>
              )}
              <div>
                이를 위해 학년별 수강신청, 전체 수강신청 등 수강신청 기간 내내
                교수님의 수업을 신청하기 위해 노력했지만 경쟁률이 너무 높아
                수강신청에 모두 실패하였고, 이렇게 증원 예정이 있으신지 여쭙게
                되었습니다.
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
                      changeInputValue(e, "billnutContent2_plus4")
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
              <div style={{ whiteSpace: "pre-line" }}>
                연락드리게 된 이유는 다름이 아니라
                <MobileInputDiv
                  style={{ width: "110px" }}
                  onChange={(e) => changeInputValue(e, "billnutContent0_1")}
                ></MobileInputDiv>{" "}
                {"과목의\n 증원 가능성이 있는지 여쭙기 위함입니다."}{" "}
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
                      changeInputValue(e, "billnutContent0_plus1")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div style={{ whiteSpace: "pre-line" }}>
                {
                  "이 과목은 여러 분반이 있지만, 그럼에도 교수님의 수업을 \n수강하고자 하는 이유는 다음과 같습니다."
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
                      changeInputValue(e, "billnutContent0_plus2")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div style={{ whiteSpace: "pre-line" }}>
                우선{" "}
                <MobileInputDiv
                  style={{ width: "130px" }}
                  onChange={(e) => changeInputValue(e, "billnutContent0_2")}
                ></MobileInputDiv>{" "}
                {"\n과목이"}{" "}
                <MobileInputDiv
                  style={{ width: "130px" }}
                  onChange={(e) => changeInputValue(e, "billnutContent0_3")}
                ></MobileInputDiv>{" "}
                {
                  "과목의 선수과목이기 때문에, \n이번 학기에 듣지 못하면 앞으로의 강의 수강에 차질이 생깁니다."
                }{" "}
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
                      changeInputValue(e, "billnutContent0_plus3")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div style={{ whiteSpace: "pre-line" }}>
                그리고{" "}
                <MobileInputDiv
                  style={{ width: "130px" }}
                  onChange={(e) => changeInputValue(e, "billnutContent0_4")}
                ></MobileInputDiv>{" "}
                {"과목과 시간이 겹쳐 \n다른 분반을 듣는 것이 불가능합니다."}
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
                      changeInputValue(e, "billnutContent0_plus4")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div>
                이러한 이유들로 교수님의 해당 수업을 꼭 수강하고 싶습니다.
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
                      changeInputValue(e, "billnutContent0_plus5")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div style={{ whiteSpace: "pre-line" }}>
                <MobileInputDiv
                  style={{ width: "20px" }}
                  onChange={(e) => changeInputValue(e, "billnutContent0_5")}
                ></MobileInputDiv>
                {
                  "학년 수강신청과 전학년 수강신청날 모두 신청을 시도하였지만 \n결국 수강신청을 하지 못하였기에, \n혹여나 정정기간에 증원해주실 수 있는지 문의드립니다."
                }
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
                      changeInputValue(e, "billnutContent0_plus6")
                    }
                  ></MobileTextArea>
                </>
              )}
            </>
          ) : num == 1 ? (
            <>
              <div style={{ whiteSpace: "pre-line" }}>
                다름 아니라, 교수님 수업 중{" "}
                <MobileInputDiv
                  style={{ width: "130px" }}
                  onChange={(e) => changeInputValue(e, "billnutContent1_1")}
                ></MobileInputDiv>
                {
                  "이 혹시라도 \n증원이 가능한지 조심스럽게 여쭤보고자 메일 드립니다."
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
                      changeInputValue(e, "billnutContent1_plus1")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div style={{ whiteSpace: "pre-line" }}>
                <MobileInputDiv
                  style={{ width: "130px" }}
                  onChange={(e) => changeInputValue(e, "billnutContent1_2")}
                ></MobileInputDiv>
                {"는 \n제가"}{" "}
                <MobileInputDiv
                  style={{ width: "130px" }}
                  onChange={(e) => changeInputValue(e, "billnutContent1_3")}
                ></MobileInputDiv>
                {"학과 수업들을 수강하며 \n꼭 듣고 싶었던 수업 중 하나입니다. "}
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
                      changeInputValue(e, "billnutContent1_plus2")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div style={{ whiteSpace: "pre-line" }}>
                {"또한, 이전에 교수님의 수업 중 하나인\n"}{" "}
                <MobileInputDiv
                  style={{ width: "130px" }}
                  onChange={(e) => changeInputValue(e, "billnutContent1_4")}
                ></MobileInputDiv>
                을 수강한 적이 있었습니다.{" "}
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
                      changeInputValue(e, "billnutContent1_plus3")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div style={{ whiteSpace: "pre-line" }}>
                {
                  "해당 수업들을 들으며 교수님의 강의를 다시 한 번 \n더 듣고 싶다는 생각을 하였습니다."
                }
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
                      changeInputValue(e, "billnutContent1_plus4")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div style={{ whiteSpace: "pre-line" }}>
                {
                  "이번에 꼭 교수님 수업을 듣고 싶은 학생으로서, \n불편하시지 않으시다면 증원에 대해 생각해주시길 부탁드립니다."
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
                      changeInputValue(e, "billnutContent1_plus5")
                    }
                  ></MobileTextArea>
                </>
              )}
            </>
          ) : (
            <>
              <div style={{ whiteSpace: "pre-line" }}>
                이번 학기{" "}
                <MobileInputDiv
                  style={{ width: "130px" }}
                  onChange={(e) => changeInputValue(e, "billnutContent2_1")}
                ></MobileInputDiv>{" "}
                {"수업 증원과 관련하여 \n여쭙고 싶어 메일 드립니다."}
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
                      changeInputValue(e, "billnutContent2_plus1")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div style={{ whiteSpace: "pre-line" }}>
                교수님의 강의 계획서를 보고{" "}
                <MobileInputDiv
                  onChange={(e) => changeInputValue(e, "billnutContent2_2")}
                ></MobileInputDiv>
                {
                  "내용에 대한 \n관심이 생겨, 이번 학기 해당 과목을 수강함으로써 관련 분야에 대한 \n식견을 넓히고 싶습니다. "
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
                      changeInputValue(e, "billnutContent2_plus2")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div style={{ whiteSpace: "pre-line" }}>
                <MobileInputDiv
                  onChange={(e) => changeInputValue(e, "billnutContent2_3")}
                ></MobileInputDiv>
                {
                  "이유로 \n이 수업을 꼭 듣고 싶은데 추가 증원이 가능한지 궁금합니다."
                }{" "}
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
                      changeInputValue(e, "billnutContent2_plus3")
                    }
                  ></MobileTextArea>
                </>
              )}
              <div style={{ whiteSpace: "pre-line" }}>
                {
                  "이를 위해 학년별 수강신청, 전체 수강신청 등 수강신청 기간 내내 \n교수님의 수업을 신청하기 위해 노력했지만 경쟁률이 너무 높아 \n수강신청에 모두 실패하였고, \n이렇게 증원 예정이 있으신지 여쭙게 되었습니다."
                }
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
                      changeInputValue(e, "billnutContent2_plus4")
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
export default connect(f1)(BillnutContent);

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
