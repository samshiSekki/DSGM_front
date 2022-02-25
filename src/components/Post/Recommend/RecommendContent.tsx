import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {connect, useDispatch} from 'react-redux';
import { BrowserView, MobileView } from "react-device-detect";

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

    let dispatch = useDispatch();

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
        dispatch({type: 'change', payload:{changeData: num, variableType: 'recommendState'}});
    },[num]);

    function changeInputValue(e: any, variableType: string){
        dispatch({type: 'change', payload:{changeData: e.target.value, variableType: variableType}});
    }

    return (
        <>
        <BrowserView>
        <div>
        {num == 0 ?
            <>
             <div>다름이 아니라, <InputDiv onChange={(e)=>changeInputValue(e, 'recommendContent0_1')}></InputDiv>에 지원하고자 하는데, 교수님의 추천서가 필요하다고 합니다.</div>
             {state1 == false ? <ButtonStyled onClick={()=>setState1(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState1(false)}>-</ButtonStyled> <TextArea ref={textRef1} onInput={()=>handleResize(1)} onChange={(e)=>changeInputValue(e, 'recommendContent0_plus1')}></TextArea></>}
            <div>교수님의 <InputDiv onChange={(e)=>changeInputValue(e, 'recommendContent0_2')}></InputDiv>강의를 통해<InputDiv onChange={(e)=>changeInputValue(e, 'recommendContent0_3')}></InputDiv>에 대한 관심을 발견한 것은 <InputDiv onChange={(e)=>changeInputValue(e, 'recommendContent0_4')}></InputDiv>을 선택하는 동기가 되었습니다.</div>
            {state2 == false ? <ButtonStyled onClick={()=>setState2(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState2(false)}>-</ButtonStyled> <TextArea ref={textRef2} onInput={()=>handleResize(2)} onChange={(e)=>changeInputValue(e, 'recommendContent0_plus2')}></TextArea></>}
            <div>따라서 교수님께 <InputDiv onChange={(e)=>changeInputValue(e, 'recommendContent0_5')}></InputDiv>지원을 위한 추천서를 부탁드리고자 메일을 드립니다.</div>
            {state4 == false ? <ButtonStyled onClick={()=>setState4(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState4(false)}>-</ButtonStyled> <TextArea ref={textRef4} onInput={()=>handleResize(4)} onChange={(e)=>changeInputValue(e, 'recommendContent0_plus3')}></TextArea></>}
            <div>교수님의 승낙 이후에 추천서 일정 및 양식, 저에 대한 정보 등을 다시 첨부해드리고 방문 상담 일정을 잡고 싶습니다.</div>
            {state5 == false ? <ButtonStyled onClick={()=>setState5(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState5(false)}>-</ButtonStyled> <TextArea ref={textRef5} onInput={()=>handleResize(5)} onChange={(e)=>changeInputValue(e, 'recommendContent0_plus4')}></TextArea></>}
            </>
            : <div></div>}
                   
        </div>
        </BrowserView>
        <MobileView>
        <div>
        {num == 0 ?
            <>
             <div style={{whiteSpace:'pre-line'}}>다름이 아니라, <MobileInputDiv style={{width:'140px'}} onChange={(e)=>changeInputValue(e, 'recommendContent0_1')}></MobileInputDiv>{'에 지원하고자 하는데, \n교수님의 추천서가 필요하다고 합니다.'}</div>
             {state1 == false ? <MobileButtonStyled onClick={()=>setState1(true)}>+</MobileButtonStyled> :
             <><MobileButtonStyled onClick={()=>setState1(false)}>-</MobileButtonStyled> <MobileTextArea ref={textRef1} onInput={()=>handleResize(1)} onChange={(e)=>changeInputValue(e, 'recommendContent0_plus1')}></MobileTextArea></>}
            <div style={{whiteSpace:'pre-line'}}>교수님의 <MobileInputDiv style={{width:'140px'}} onChange={(e)=>changeInputValue(e, 'recommendContent0_2')}></MobileInputDiv>강의를 통해<MobileInputDiv onChange={(e)=>changeInputValue(e, 'recommendContent0_3')}></MobileInputDiv>{'에 대한 \n관심을 발견한 것은'} <MobileInputDiv style={{width:'140px'}}  onChange={(e)=>changeInputValue(e, 'recommendContent0_4')}></MobileInputDiv>{'을 선택하는 \n동기가 되었습니다.'}</div>
            {state2 == false ? <MobileButtonStyled onClick={()=>setState2(true)}>+</MobileButtonStyled> :
             <><MobileButtonStyled onClick={()=>setState2(false)}>-</MobileButtonStyled> <MobileTextArea ref={textRef2} onInput={()=>handleResize(2)} onChange={(e)=>changeInputValue(e, 'recommendContent0_plus2')}></MobileTextArea></>}
            <div style={{whiteSpace:'pre-line'}}>따라서 교수님께 <MobileInputDiv style={{width:'140px'}} onChange={(e)=>changeInputValue(e, 'recommendContent0_5')}></MobileInputDiv>{'지원을 위한 추천서를 \n부탁드리고자 메일을 드립니다.'}</div>
            {state4 == false ? <MobileButtonStyled onClick={()=>setState4(true)}>+</MobileButtonStyled> :
             <><MobileButtonStyled onClick={()=>setState4(false)}>-</MobileButtonStyled> <MobileTextArea ref={textRef4} onInput={()=>handleResize(4)} onChange={(e)=>changeInputValue(e, 'recommendContent0_plus3')}></MobileTextArea></>}
            <div style={{whiteSpace:'pre-line'}}>{'교수님의 승낙 이후에 추천서 일정 및 양식, 저에 대한 정보 등을 \n다시 첨부해드리고 방문 상담 일정을 잡고 싶습니다.'}</div>
            {state5 == false ? <MobileButtonStyled onClick={()=>setState5(true)}>+</MobileButtonStyled> :
             <><MobileButtonStyled onClick={()=>setState5(false)}>-</MobileButtonStyled> <MobileTextArea ref={textRef5} onInput={()=>handleResize(5)} onChange={(e)=>changeInputValue(e, 'recommendContent0_plus4')}></MobileTextArea></>}
            </>
            : <div></div>}
                   
        </div>

        </MobileView>
        </>

    );

};

function f1(inputValue: any){
    return {
      inputValue : inputValue
    }
}
export default connect(f1)(RecommendContent);

const ButtonStyled = styled.button`
background-color:#F7F8FA;
border:none;
cursor:pointer;
    
`;
const InputDiv = styled.input`
font-weight:bold;
    background: #F7F8FA;
    border:none;
    border-bottom: 1px solid #A3A3A3;
    text-align:center;
    &:focus{
        outline:none;
    }
    //border: 1px solid #E2E2E2;
    //border-radius: 13px;
    -webkit-appearance: none;
    
    width: 500px;
    height: 30px;
    margin-top:10px;
    margin-bottom:10px;
    margin-right:5px;
    &:placeholder-shown{
        border-bottom: 1px solid #A3A3A3;

    }
    `;
    const TextArea = styled.textarea`
    width:800px;
    border:none;
    background-image:
    repeating-linear-gradient(#F7F8FA, #F7F8FA 35px, #A3A3A3 36px, #A3A3A3 36px, #A3A3A3 36px);
    line-height: 36px;
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

//

const MobileContainer = styled.div`
    //margin-top:300px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    font-size:10px;
    width: 335px;
`;

const MobileInputDiv = styled.input`
    background: #F7F8FA;
    border:none;
    border-bottom: 1px solid #14B390;
    color: #14B390;
    text-align:center;
    margin-bottom: 4px;
    line-height: 36px;
    &:focus{
        outline:none;
    }
    font-size: 10px;
    //border: 1px solid #E2E2E2;
    //border-radius: 13px;
    -webkit-appearance: none;
    
    width: 240px;
    height: 30px;
    margin-right:5px;
    &:placeholder-shown{
        border-bottom: 1px solid #A3A3A3;

    }
    

`;

const MobileTextArea = styled.textarea`
    width:270px;
    font-family: 'Roboto';
    border:none;
    font-size: 10px;
    background-image:
    repeating-linear-gradient(#F7F8FA, #F7F8FA 35px, #A3A3A3 36px, #A3A3A3 36px, #A3A3A3 36px);
    line-height: 36px;
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

const MobileButtonStyled = styled.button`
background-color:#F7F8FA;
border:none;
cursor:pointer;
position: absolute;
background: transparent;
left: -15px;
margin-top: -10px;        
`;
