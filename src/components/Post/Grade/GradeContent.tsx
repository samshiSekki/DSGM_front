import axios from "axios";
import React, { useEffect, useState } from "react";

type ContentProps = {
    content : string
}
interface NumberProps {
    num : number
    setNum: (num:number) => void
}
const GradeContent = ({num,setNum}:NumberProps) => {
    const [current, setCurrent] = useState<ContentProps | null>(null);
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
            {num == 0 ?
            <>
             <div>다름이 아니라, <input></input>에 지원하고자 하는데, 교수님의 추천서가 필요하다고 합니다.</div>
            <div>교수님의 <input></input>강의를 통해<input></input>에 대한 관심을 발견한 것은 [       ]을 선택하는 동기가 되었습니다.</div>
            <div><input></input>이유로 이 수업을 꼭 듣고 싶은데 추가 증원이 가능한지 궁금합니다. </div>
            <div>따라서 교수님께 <input></input>지원을 위한 추천서를 부탁드리고자 메일을 드립니다.</div>
            <div>교수님의 승낙 이후에 추천서 일정 및 양식, 저에 대한 정보 등을 다시 첨부해드리고 방문 상담 일정을 잡고 싶습니다.</div>
            </>
            : <div></div>}
           
        </div>
        </>

    );

};

export default GradeContent;