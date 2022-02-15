import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

type ContentProps = {
    content : string
}
interface NumberProps {
    num : number
    setNum: (num:number) => void
}
const RecommendContent = ({num,setNum}:NumberProps) => {
    const [current, setCurrent] = useState<ContentProps | null>(null);
    const [state1, setState1]= useState<boolean>(false);
    const [state2, setState2]= useState<boolean>(false);
    const [state3, setState3]= useState<boolean>(false);
    const [state4, setState4]= useState<boolean>(false);
    const [state5, setState5]= useState<boolean>(false);

    const textRef1 = useRef<any>(null);
    const textRef2 = useRef<any>(null);
    const textRef3 = useRef<any>(null);
    const textRef4 = useRef<any>(null);
    const textRef5 = useRef<any>(null);

    const handleResize = useCallback(
        (value:number) => {
            if (value == 1)
            {
                if (textRef1 == null || textRef1.current == null)
                {
                    return;
                }
            textRef1.current.style.height = '30px';
            textRef1.current.style.height = textRef1.current.scrollHeight +'px';
            } else if (value == 2)
            {
                if (textRef2 == null || textRef2.current == null)
                {
                    return;
                }
                textRef2.current.style.height = '30px';
                textRef2.current.style.height = textRef2.current.scrollHeight +'px';
            } else if (value == 3)
            {
                if (textRef3 == null || textRef3.current == null)
                {
                    return;
                }
                textRef3.current.style.height = '30px';
                textRef3.current.style.height = textRef3.current.scrollHeight +'px';
            } else if (value == 4)
            {
                if (textRef4 == null || textRef4.current == null)
                {
                    return;
                }
                textRef4.current.style.height = '30px';
                textRef4.current.style.height = textRef4.current.scrollHeight +'px';
            } else if (value == 5)
            {
                if (textRef5 == null || textRef5.current == null)
                {
                    return;
                }
                textRef5.current.style.height = '30px';
                textRef5.current.style.height = textRef5.current.scrollHeight +'px';
            }
    },
        [],
      )

    useEffect(() =>{
        setNum(num);
        /* axios.get('http://13.125.177.135:5000/mail-forms/contents',{params: {
                category: 'recommend'
            }}).then(function(response){
                setCurrent(response.data[num]);
                console.log(response.data[num]);
            }) */

    },[num]);
    return (
        <>
        <div>
        {num == 0 ?
            <>
             <div>다름이 아니라, <InputDiv></InputDiv>에 지원하고자 하는데, 교수님의 추천서가 필요하다고 합니다.</div>
             {state1 == false ? <ButtonStyled onClick={()=>setState1(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState1(false)}>-</ButtonStyled> <TextArea ref={textRef1} onInput={()=>handleResize(1)}></TextArea></>}
            <div>교수님의 <InputDiv></InputDiv>강의를 통해<InputDiv></InputDiv>에 대한 관심을 발견한 것은 <InputDiv></InputDiv>을 선택하는 동기가 되었습니다.</div>
            {state2 == false ? <ButtonStyled onClick={()=>setState2(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState2(false)}>-</ButtonStyled> <TextArea ref={textRef2} onInput={()=>handleResize(2)}></TextArea></>}
            <div><InputDiv></InputDiv>이유로 이 수업을 꼭 듣고 싶은데 추가 증원이 가능한지 궁금합니다. </div>
            {state3 == false ? <ButtonStyled onClick={()=>setState3(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState3(false)}>-</ButtonStyled> <TextArea ref={textRef3} onInput={()=>handleResize(3)}></TextArea></>}
            <div>따라서 교수님께 <InputDiv></InputDiv>지원을 위한 추천서를 부탁드리고자 메일을 드립니다.</div>
            {state4 == false ? <ButtonStyled onClick={()=>setState4(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState4(false)}>-</ButtonStyled> <TextArea ref={textRef4} onInput={()=>handleResize(4)}></TextArea></>}
            <div>교수님의 승낙 이후에 추천서 일정 및 양식, 저에 대한 정보 등을 다시 첨부해드리고 방문 상담 일정을 잡고 싶습니다.</div>
            {state5 == false ? <ButtonStyled onClick={()=>setState5(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState5(false)}>-</ButtonStyled> <TextArea ref={textRef5} onInput={()=>handleResize(5)}></TextArea></>}
            </>
            : <div></div>}
                   
        </div>
        </>

    );

};

export default RecommendContent;

const ButtonStyled = styled.button`
background-color:#F7F8FA;
border:none;
cursor:pointer;
    
`;
const InputDiv = styled.input`
font-weight:bold;
    background: #F7F8FA;
    border:none;
    border-bottom: 3px solid;
    text-align:center;
    &:focus{
        outline:none;
    }
    //border: 1px solid #E2E2E2;
    //border-radius: 13px;
    
    width: 500px;
    height: 30px;
    margin-top:10px;
    margin-bottom:10px;
    margin-right:5px;
    &:placeholder-shown{
        border-bottom: 3px solid black;

    }
    `;
    const TextArea = styled.textarea`
    font-weight:bold;
    width:800px;
    border:none;
    background-image:
        linear-gradient(to right, #F7F8FA 10px, transparent 10px),
    linear-gradient(to left, #F7F8FA 10px, transparent 10px),
    repeating-linear-gradient(#F7F8FA, #F7F8FA 34px, #000000 36px, #000000 37px, #000000 37px);
    line-height: 37px;
    padding: 8px 10px;
    &:placeholder-shown{
        border-bottom: none;
    }
    &:focus{
        outline:none;
    }
    overflow-y:hidden;
    resize:none;
    
`;

