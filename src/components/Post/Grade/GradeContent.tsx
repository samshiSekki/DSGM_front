import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
    useEffect(() =>{
        setNum(num);
        /* axios.get('http://13.125.177.135:5000/mail-forms/contents',{params: {
                category: 'grade'
            }}).then(function(response){
                setCurrent(response.data[num]);
                console.log(response.data[num]);
            }) */

    },[num]);
    return (
        <>
        <div>
        {num == 0?
            <>
             <div>다름이 아니라, 이번 <InputDiv></InputDiv>수업에서 <InputDiv></InputDiv>부분에 대해 저는 최선을 다했습니다. </div>
             {state1 == false ? <ButtonStyled onClick={()=>setState1(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState1(false)}>-</ButtonStyled> <InputDiv2></InputDiv2></>}
            <div>그럼에도 예상과 달리 다소 낮은 성적을 받아 조금 아쉽습니다. </div>
            {state2 == false ? <ButtonStyled onClick={()=>setState2(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState2(false)}>-</ButtonStyled> <InputDiv2></InputDiv2></>}
            <div>어떤 부분이 부족하여 이런 성적을 받았는지 여쭙고 싶어 메일을 작성하게 되었습니다. </div>
            {state3 == false ? <ButtonStyled onClick={()=>setState3(true)}>+</ButtonStyled> : 
             <><ButtonStyled onClick={()=>setState3(false)}>-</ButtonStyled><InputDiv2></InputDiv2></>}
            <div>교수님의 피드백을 바탕으로 이후 부족한 점을 보완하고자 하니, 바쁘시겠지만 꼭 한 번 다시 검토해주시면 감사하겠습니다.</div>
            {state4 == false ? <ButtonStyled onClick={()=>setState4(true)}>+</ButtonStyled> : 
             <><ButtonStyled onClick={()=>setState4(false)}>-</ButtonStyled><InputDiv2></InputDiv2></>}
            </>
            :
            <>
             <div>다름이 아니라 각 항목에 대한 취득 점수 및 상세 성적을 알 수 있을까 싶어 메일을 보내게 되었습니다. </div>
            <div>과제와 시험 모두 나름대로 열심히 준비했는데, 예상한 결과보다는 아쉬운 결과에 문의를 드리게 되었습니다.  </div>
            <div>제가 어떤 부분에서 부족했고, 앞으로 어떠한 부분을 보완하는 것이 좋을지 의견을 여쭙고 싶어 실례를 무릅쓰고 메일 드립니다.</div>
            <div>제가 어떤 부분이 부족했는지 알려주시면 학업에 참고하여 보완하고 싶습니다.</div>
            </>}
           
        </div>
        </>

    );

};

export default GradeContent;

const InputDiv = styled.input`
    background: #FFFFFF;
    border: 1px solid #E2E2E2;
    border-radius: 13px;
    width: 213px;
    height: 30px;
    margin-top:10px;
    margin-bottom:10px;
    margin-right:5px;

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

`;
const ButtonStyled = styled.button`
background-color:#fffff2;
border:none;
    :hover{
        background-color: silver;
    }
    
`;
