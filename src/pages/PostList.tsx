/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-sequences */
import react, { useEffect,useState,useRef} from "react";
import axios from 'axios';
import jsonp from 'axios';
import styled from 'styled-components'
import React from "react";

const PostList = () => {
    
    const url2 = "http://13.125.158.209:5000/mail-forms/last"
    const [firstState, setFirstState] = useState(`교수님의 가르침 덕분에, 저의 학문적 호기심을 기를 수 있었습니다. 감사합니다.`);
    const [lastState, setLastState] = useState("항상 좋은 수업 감사드립니다.");
    const [firstMent, setFirstMent] = useState([]);
    const [lastMent, setLastMent] = useState([]);
    
    const firstMoment = [
        `교수님의  수업 덕분에 몰랐던 부분을 확실히 배울 수 있었습니다. 항상 감사드립니다.`,
        "교수님의 가르침 덕분에, 저의 학문적 호기심을 기를 수 있었습니다. 감사합니다.",
        "교수님의 수업을 수강하며 [전공 지식/교양/기타]에 좀 더 폭넓은 이해를 쌓을 수 있어서 너무 좋은 기회였습니다. 교수님의 열띤 가르침에 항상 감사드립니다.",
        "요즘 화창한 날씨에 맑은 하늘이 기분을 참 좋아지게 하는 것 같습니다. 잘 지내시고 계시는지요😊",
        "요즘 비가 자주 오면서 날씨도 많이 쌀쌀해지고 습해졌는데, 편안한 실내에서 건강하게 잘 지내시고 계시는지요😊",
        "오늘은 비가 내리네요. 빗길 다치지 않도록 조심하시길 바랍니다!",
        "요즘 눈 내리는 날이 잦아졌는데, 편안한 실내에서 건강하게 잘 지내고 계시는지요😊",
        "어느덧 햇살이 따스히 내리쬐는 봄이 되었습니다. 건강하게 잘 지내고 계시는지요😊",
        "쏟아지는 폭염의 날씨에 실내에서 시원하고 건강하게 잘 지내고 계시는지요😊",
        "어느덧 선선해진 날씨 덕분에 여름이 지나가고 가을이 성큼 다가왔음을 느낍니다. 일교차가 큰 환절기인 요즘 건강 잘 챙기고 계시는지요😊",
        "날씨가 정말 많이 추워졌습니다. 따뜻한 실내에서 건강하게 잘 지내고 계시는지요😊"
    ]
    const lastMoment = [
        "항상 좋은 수업 감사드립니다.",
        "다음 수업시간에 뵙겠습니다. 읽어주셔서 감사합니다.",
        "다음 학기에 또 만나 뵐 수 있으면 좋겠습니다. 감사합니다.",
        "이번 학기 강의 진행하시느라 노고가 많으셨습니다. 교수님의 강의를 바탕으로 한층 더 성장한 학생이 될 수 있을 것 같습니다.",
        "바쁘신 와중에 메일 읽어주셔서 감사드립니다.",
        "메일 읽어주셔서 감사합니다. ",
        "오늘도 좋은 하루 보내세요.",
        "회신 기다리겠습니다. 감사합니다",
        "답장 기다리고 있겠습니다. 오늘도 좋은 하루 보내시길 바랍니다. 감사합니다!",
        "답장 기다리고 있겠습니다. 편안한 밤 보내시길 바랍니다. 감사합니다",
        "답장 기다리고 있겠습니다. 얼른 코로나19 상황이 끝나고 교수님을 직접 뵐 수 있는 날이 왔으면 좋겠습니다. 감사합니다!",
        "긴 메일 읽어주셔서 감사드립니다.",
        "요즘 일교차가 큰데, 항상 감기 조심하시길 바랍니다. 햇살이 따뜻한 봄 날입니다. 기분 좋은 하루 되시길 바랍니다.",
        "요즘 미세먼지가 심한데, 건강 유의하시길 바랍니다.",
        "무더위에 건강 유의하시길 바랍니다.",
        "환절기에 건강 유의하시길 바랍니다.",
        "점점 날씨가 추워지는데, 감기 조심하시길 바랍니다.",
        "추석 잘 보내시고, 건강 유의하시길 바랍니다.",
        "요즘 기온이 떨어지고 바람이 찬데, 건강 유의하시길 바랍니다.",
        "날이 추운데 항상 건강하세요. 감사합니다.",
        "추운 날씨에 건강 주의하시고, 행복한 한 해 되시길 바랍니다. "
    ]
    const [state, setState] = useState(false);
    const [state2, setState2] = useState(false);
    const myRef = useRef<any>(null);

    const handleClickOption = (e:any) => {
        if (myRef.current && !myRef.current.contains(e.target)) {
            setState(false);
        }

    };
    const handleClickOption2 = (e:any) => {
        if (myRef.current && !myRef.current.contains(e.target)) {
            setState2(false);
        }

    };

    useEffect(()=>{
       /*  async () => {
            await axios.get(`http://13.125.158.209:5000/mail-forms/first`)
              .then((response) => {
                  console.log(response);
                setFirstMent(response.data);
                //setDoubleMajorList(response[1].data.data);
              });
            };
             */
        
            axios.get('http://13.125.158.209:5000/mail-forms/first').then(function(response){
                console.log(response.data);
                setFirstMent(response.data);
            })
        
        console.log(firstMent)
        document.addEventListener('mousedown', handleClickOption);
        document.addEventListener('mousedown', handleClickOption2);
        return () =>{
            document.removeEventListener('mousedown', handleClickOption);
            document.removeEventListener('mousedown', handleClickOption2);
        }
        

    },[]);


    return (
        <>
        <Container>
        <div>안녕하십니까 <input placeholder='교수님 성함'></input> 교수님 </div>
        <div>저는  <input placeholder='과 이름'></input> <input placeholder='학번'></input>  <input placeholder='학생 이름'></input>입니다.
            
            </div>
            <div ref={myRef} style={{position:'relative'}}>
            <div onClick={()=>setState(!state)} style={{fontWeight:'bold'}}>{firstState}</div>
            {state && <FirstLastScroll>
                {firstMoment.map(i=>
                <div>
                    <div onClick={()=>setFirstState(i)}>{i}</div>
                </div>)
                        }</FirstLastScroll>}
                        <input></input>
                        <div onClick={()=>setState2(!state)} style={{fontWeight:'bold'}}>{lastState}</div>
            {state2 && <FirstLastScroll>
                {lastMoment.map(i => 
                    <div>
                        <div onClick={()=>setLastState(i)}>{i}
                        </div> </div>)} </FirstLastScroll>}
                        </div>
                        </Container>
        </>
    );


};

export default PostList;

const Container = styled.div`
    //margin-top:300px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
`;

const FirstLastScroll = styled.div`
    position:absolute;
    background-color:#ffffff;
    overflow:scroll;
    width:800px;
    height:200px;
    overflow-x:hidden;
    
`;