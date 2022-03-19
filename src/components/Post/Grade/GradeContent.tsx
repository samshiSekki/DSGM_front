import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {connect, useDispatch} from 'react-redux';
import {BrowserView, MobileView, isBrowser, isIPad13} from "react-device-detect";

type ContentProps = {
    content : string
}
interface NumberProps {
    num : number
    setNum: (num:number) => void
}
const GradeContent = ({num,setNum}:NumberProps) => {
    const [current, setCurrent] = useState<ContentProps | null>(null);
    const [state1, setState1]= useState<boolean>(false);
    const [state2, setState2]= useState<boolean>(false);
    const [state3, setState3]= useState<boolean>(false);
    const [state4, setState4]= useState<boolean>(false);

    const textRef1 = useRef<any>(null);
    const textRef2 = useRef<any>(null);
    const textRef3 = useRef<any>(null);
    const textRef4 = useRef<any>(null);

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
            }
    },
        [],
      )

    useEffect(() =>{
        setNum(num);
        setState1(false);
        setState2(false);
        setState3(false);
        setState4(false);
        /* axios.get('http://13.125.177.135:5000/mail-forms/contents',{params: {
                category: 'grade'
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
        {(!isIPad13)&&(!isBrowser)?
        <MobileView>
        <div>
        {num == 0?
            <>
             <div style={{whiteSpace:'pre-line'}}>다름이 아니라, 이번 <MobileInputDiv style={{width: '170px'}} onChange={(e)=>changeInputValue(e, 'gradeContent0_1')}></MobileInputDiv>수업에서 <MobileInputDiv  style={{width: '170px'}} onChange={(e)=>changeInputValue(e, 'gradeContent0_2')}></MobileInputDiv>{'부분에 대해 저는 최선을 \n다했습니다. '}</div>
             {state1 == false ? <MobileButtonStyled onClick={()=>setState1(true)}>+</MobileButtonStyled> :
             <><MobileButtonStyled onClick={()=>setState1(false)}>-</MobileButtonStyled> <MobileTextArea ref={textRef1} onInput={()=>handleResize(1)} onChange={(e)=>changeInputValue(e, 'gradeContent0_plus1')}></MobileTextArea></>}
            <div>그럼에도 예상과 달리 다소 낮은 성적을 받아 조금 아쉽습니다. </div>
            {state2 == false ? <MobileButtonStyled onClick={()=>setState2(true)}>+</MobileButtonStyled> :
             <><MobileButtonStyled onClick={()=>setState2(false)}>-</MobileButtonStyled> <MobileTextArea ref={textRef2} onInput={()=>handleResize(2)} onChange={(e)=>changeInputValue(e, 'gradeContent0_plus2')}></MobileTextArea></>}
            <div style={{whiteSpace:'pre-line'}}>{'어떤 부분이 부족하여 이런 성적을 받았는지 여쭙고 싶어\n 메일을 작성하게 되었습니다.'} </div>
            {state3 == false ? <MobileButtonStyled onClick={()=>setState3(true)}>+</MobileButtonStyled> : 
             <><MobileButtonStyled onClick={()=>setState3(false)}>-</MobileButtonStyled><MobileTextArea ref={textRef3} onInput={()=>handleResize(3)} onChange={(e)=>changeInputValue(e, 'gradeContent0_plus3')}></MobileTextArea></>}
            <div style={{whiteSpace:'pre-line'}}>{'교수님의 피드백을 바탕으로 이후 부족한 점을 보완하고자 하니, \n바쁘시겠지만 꼭 한 번 다시 검토해주시면 감사하겠습니다.'}</div>
            {state4 == false ? <MobileButtonStyled onClick={()=>setState4(true)}>+</MobileButtonStyled> : 
             <><MobileButtonStyled onClick={()=>setState4(false)}>-</MobileButtonStyled><MobileTextArea ref={textRef4} onInput={()=>handleResize(4)} onChange={(e)=>changeInputValue(e, 'gradeContent0_plus4')}></MobileTextArea></>}
            </>
            :
            <>
             <div style={{whiteSpace:'pre-line'}}>{'다름이 아니라 각 항목에 대한 취득 점수 및 상세 성적을 알 수 있을까 싶어\n 메일을 보내게 되었습니다.'} </div>
             {state1 == false ? <MobileButtonStyled onClick={()=>setState1(true)}>+</MobileButtonStyled> :
             <><MobileButtonStyled onClick={()=>setState1(false)}>-</MobileButtonStyled> <MobileTextArea ref={textRef1} onInput={()=>handleResize(1)} onChange={(e)=>changeInputValue(e, 'gradeContent1_plus1')}></MobileTextArea></>}
            <div style={{whiteSpace:'pre-line'}}>{'과제와 시험 모두 나름대로 열심히 준비했는데, \n예상한 결과보다는 아쉬운 결과에 문의를 드리게 되었습니다.'}  </div>
            {state2 == false ? <MobileButtonStyled onClick={()=>setState2(true)}>+</MobileButtonStyled> :
             <><MobileButtonStyled onClick={()=>setState2(false)}>-</MobileButtonStyled> <MobileTextArea ref={textRef2} onInput={()=>handleResize(2)} onChange={(e)=>changeInputValue(e, 'gradeContent1_plus2')}></MobileTextArea></>}
            <div style={{whiteSpace:'pre-line'}}>{'제가 어떤 부분에서 부족했고, 앞으로 어떠한 부분을 보완하는 것이 좋을지 \n의견을 여쭙고 싶어 실례를 무릅쓰고 메일 드립니다.'}</div>
            {state3 == false ? <MobileButtonStyled onClick={()=>setState3(true)}>+</MobileButtonStyled> :
             <><MobileButtonStyled onClick={()=>setState3(false)}>-</MobileButtonStyled> <MobileTextArea ref={textRef3} onInput={()=>handleResize(3)} onChange={(e)=>changeInputValue(e, 'gradeContent1_plus3')}></MobileTextArea></>}
            <div>제가 어떤 부분이 부족했는지 알려주시면 학업에 참고하여 보완하고 싶습니다.</div>
            {state4 == false ? <MobileButtonStyled onClick={()=>setState4(true)}>+</MobileButtonStyled> :
             <><MobileButtonStyled onClick={()=>setState4(false)}>-</MobileButtonStyled> <MobileTextArea ref={textRef4} onInput={()=>handleResize(4)} onChange={(e)=>changeInputValue(e, 'gradeContent1_plus4')}></MobileTextArea></>}
            </>}
           
        </div>
        </MobileView>
        :null}
        {(isIPad13 || isBrowser)?
        <div>
        {num == 0?
            <>
             <div>다름이 아니라, 이번 <InputDiv onChange={(e)=>changeInputValue(e, 'gradeContent0_1')}></InputDiv>수업에서 <InputDiv onChange={(e)=>changeInputValue(e, 'gradeContent0_2')}></InputDiv>부분에 대해 저는 최선을 다했습니다. </div>
             {state1 == false ? <ButtonStyled onClick={()=>setState1(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState1(false)}>-</ButtonStyled> <TextArea ref={textRef1} onInput={()=>handleResize(1)} onChange={(e)=>changeInputValue(e, 'gradeContent0_plus1')}></TextArea></>}
            <div>그럼에도 예상과 달리 다소 낮은 성적을 받아 조금 아쉽습니다. </div>
            {state2 == false ? <ButtonStyled onClick={()=>setState2(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState2(false)}>-</ButtonStyled> <TextArea ref={textRef2} onInput={()=>handleResize(2)} onChange={(e)=>changeInputValue(e, 'gradeContent0_plus2')}></TextArea></>}
            <div>어떤 부분이 부족하여 이런 성적을 받았는지 여쭙고 싶어 메일을 작성하게 되었습니다. </div>
            {state3 == false ? <ButtonStyled onClick={()=>setState3(true)}>+</ButtonStyled> : 
             <><ButtonStyled onClick={()=>setState3(false)}>-</ButtonStyled><TextArea ref={textRef3} onInput={()=>handleResize(3)} onChange={(e)=>changeInputValue(e, 'gradeContent0_plus3')}></TextArea></>}
            <div>교수님의 피드백을 바탕으로 이후 부족한 점을 보완하고자 하니, 바쁘시겠지만 꼭 한 번 다시 검토해주시면 감사하겠습니다.</div>
            {state4 == false ? <ButtonStyled onClick={()=>setState4(true)}>+</ButtonStyled> : 
             <><ButtonStyled onClick={()=>setState4(false)}>-</ButtonStyled><TextArea ref={textRef4} onInput={()=>handleResize(4)} onChange={(e)=>changeInputValue(e, 'gradeContent0_plus4')}></TextArea></>}
            </>
            :
            <>
             <div>다름이 아니라 각 항목에 대한 취득 점수 및 상세 성적을 알 수 있을까 싶어 메일을 보내게 되었습니다. </div>
             {state1 == false ? <ButtonStyled onClick={()=>setState1(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState1(false)}>-</ButtonStyled> <TextArea ref={textRef1} onInput={()=>handleResize(1)} onChange={(e)=>changeInputValue(e, 'gradeContent1_plus1')}></TextArea></>}
            <div>과제와 시험 모두 나름대로 열심히 준비했는데, 예상한 결과보다는 아쉬운 결과에 문의를 드리게 되었습니다.  </div>
            {state2 == false ? <ButtonStyled onClick={()=>setState2(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState2(false)}>-</ButtonStyled> <TextArea ref={textRef2} onInput={()=>handleResize(2)} onChange={(e)=>changeInputValue(e, 'gradeContent1_plus2')}></TextArea></>}
            <div>제가 어떤 부분에서 부족했고, 앞으로 어떠한 부분을 보완하는 것이 좋을지 의견을 여쭙고 싶어 실례를 무릅쓰고 메일 드립니다.</div>
            {state3 == false ? <ButtonStyled onClick={()=>setState3(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState3(false)}>-</ButtonStyled> <TextArea ref={textRef3} onInput={()=>handleResize(3)} onChange={(e)=>changeInputValue(e, 'gradeContent1_plus3')}></TextArea></>}
            <div>제가 어떤 부분이 부족했는지 알려주시면 학업에 참고하여 보완하고 싶습니다.</div>
            {state4 == false ? <ButtonStyled onClick={()=>setState4(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState4(false)}>-</ButtonStyled> <TextArea ref={textRef4} onInput={()=>handleResize(4)} onChange={(e)=>changeInputValue(e, 'gradeContent1_plus4')}></TextArea></>}
            </>}
           
        </div>
        
        :null}
        </>

    );

};

function f1(inputValue: any){
    return {
      inputValue : inputValue
    }
}
export default connect(f1)(GradeContent);

const InputDiv = styled.input`
    background: #F7F8FA;
    border:none;
    border-bottom: 1px solid #A3A3A3 ;
    text-align:center;
    &:focus{
        outline:none;
    }
    //border: 1px solid #E2E2E2;
    //border-radius: 13px;
    -webkit-appearance: none;
    border-radius : 0;
    
    width: 500px;
    height: 30px;
    margin-top:10px;
    margin-bottom:10px;
    margin-right:5px;
    &:placeholder-shown{
        border-bottom: 1px solid #A3A3A3;

    }
    `;
const InputDiv2 = styled.input`
    background: #FFFFFF;
    border: 1px solid #E2E2E2;
    border-radius: 13px;
    width: 900px;
    height: 30px;
    margin-top:10px;
    margin-bottom:10px;
    margin-right:5px;
    -webkit-appearance: none;
    border-radius : 0;

`;
const ButtonStyled = styled.button`
background-color:#F7F8FA;
border:none;
cursor:pointer;
color:#A3A3A3; 
    
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
    border-bottom: 1px solid #A3A3A3;
    text-align:center;
    margin-bottom: 4px;
    line-height: 36px;
    &:focus{
        outline:none;
    }
    font-size: 10px;
    -webkit-appearance: none;
    border-radius : 0;
    //border: 1px solid #E2E2E2;
    //border-radius: 13px;
    
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
color:#A3A3A3;      
`;

