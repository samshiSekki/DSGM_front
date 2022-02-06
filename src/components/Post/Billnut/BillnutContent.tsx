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

const BillnutContent = ({num,setNum}:NumberProps) => {
    const [current, setCurrent] = useState<ContentProps | null>(null);
    const changeInput = (value:any) => {
        value.replace(value,`<div>${value}</div>`)
        if (value.search('*')){
            value.replace('*','<input></input>');
        }
        return value;
    }
    useEffect(() =>{
        setNum(num);
        /* axios.get('http://13.125.177.135:5000/mail-forms/contents',{params: {
                category: 'please'
            }}).then(function(response){
                setCurrent(response.data[num]);
                console.log(response.data[num]);
            }) */

    },[num]);

    return (
        <>
        {num == 0 ?
        <>
        <div>연락드리게 된 이유는 다름이 아니라<InputDiv></InputDiv> 과목의 증원 가능성이 있는지 여쭙기 위함입니다. </div>
        <div>이 과목은 여러 분반이 있지만, 그럼에도 교수님의 수업을 수강하고자 하는 이유는 다음과 같습니다. </div>
        <div>우선 <InputDiv></InputDiv> 과목이 <InputDiv></InputDiv> 과목의 선수과목이기 때문에, 이번 학기에 듣지 못하면 앞으로의 강의 수강에 차질이 생깁니다. </div>
        <div>그리고 <InputDiv></InputDiv> 과목과 시간이 겹쳐 다른 분반을 듣는 것이 불가능합니다.</div>
        <div>이러한 이유들로 교수님의 해당 수업을 꼭 수강하고 싶습니다.</div>
        <div><InputDiv></InputDiv>학년 수강신청과 전학년 수강신청날 모두 신청을 시도하였지만 결국 수강신청을 하지 못하였기에, 혹여나 정정기간에 증원해주실 수 있는지 문의드립니다.</div>
        </>
        : num == 1 ?
        <>
        <div>다름 아니라, 교수님 수업 중 <InputDiv></InputDiv>이 혹시라도 증원이 가능한지 조심스럽게 여쭤보고자 메일 드립니다.</div>
        <div><InputDiv></InputDiv>는 제가 <InputDiv></InputDiv>학과 수업들을 수강하며 꼭 듣고 싶었던 수업 중 하나입니다. </div>
        <div>또한, 이전에 교수님의 수업 중 하나인 <InputDiv></InputDiv>을 수강한 적이 있었습니다. </div>
        <div>해당 수업들을 들으며 교수님의 강의를 다시 한 번 더 듣고 싶다는 생각을 하였습니다.</div>
        <div>이번에 꼭 교수님 수업을 듣고 싶은 학생으로써, 불편하시지 않으시다면 증원에 대해 생각해주시길 부탁드립니다.</div>
        </>
        : <>
        <div>이번 학기 <InputDiv></InputDiv> 수업 증원과 관련하여 여쭙고 싶어 메일 드립니다.</div>
        <div>교수님의 강의 계획서를 보고 <InputDiv></InputDiv>내용에 대한 관심이 생겨, 이번 학기 해당 과목을 수강함으로써 관련 분야에 대한 식견을 넓히고 싶습니다.  </div>
        <div><InputDiv></InputDiv>이유로 이 수업을 꼭 듣고 싶은데 추가 증원이 가능한지 궁금합니다. </div>
        <div>이를 위해 학년별 수강신청, 전체 수강신청 등 수강신청 기간 내내 교수님의 수업을 신청하기 위해 노력했지만 경쟁률이 너무 높아 수강신청에 모두 실패하였고, 이렇게 증원 예정이 있으신지 여쭙게 되었습니다.</div>
        </>}
       
        </>

    );

};

export default BillnutContent;

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

