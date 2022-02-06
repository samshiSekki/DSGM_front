/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-sequences */
import React, { useEffect,useState,useRef} from "react";
import axios from 'axios';
import styled from 'styled-components'
import Scroll from './Scroll';
import BillnutContent from '../components/Post/Billnut/BillnutContent';
import GradeContent from '../components/Post/Grade/GradeContent';
import RecommendContent from '../components/Post/Recommend/RecommendContent';

interface PostListProps {
    tabType?: string
}


const PostList = ({tabType}:PostListProps) => {
    const [firstState, setFirstState] = useState(`교수님의 가르침 덕분에, 저의 학문적 호기심을 기를 수 있었습니다. 감사합니다.`);
    const [lastState, setLastState] = useState("항상 좋은 수업 감사드립니다.");
    const [firstMent, setFirstMent] = useState([]);
    const [lastMent, setLastMent] = useState([]);
    const [type, setType] = useState('default'); // 첫인사
    const [type2, setType2] = useState('default'); // 끝인사
    
    const [state, setState] = useState(false);
    const [state2, setState2] = useState(false);
    const myRef = useRef<any>(null);

    const [num, setNum] = useState(0);
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
            axios.get('http://13.125.177.135:5000/mail-forms/first',{params: {
                category: type
            }}).then(function(response){
                setFirstMent(response.data);
            })
            /* axios.get('http://13.125.177.135:5000/mail-forms/contents',{params: {
                category: tabType
            }}).then(function(response){
                setContent(response.data);
                console.log(response.data);
                setCurrentContent(content[0]);
            }) */
           
        
        document.addEventListener('mousedown', handleClickOption);
        document.addEventListener('mousedown', handleClickOption2);
        return () =>{
            document.removeEventListener('mousedown', handleClickOption);
            document.removeEventListener('mousedown', handleClickOption2);
        }
        

    },[type,tabType]);
    useEffect(() => {

        axios.get('http://13.125.177.135:5000/mail-forms/last',{params: {
            category: type2
        }}).then(function(response){
            setLastMent(response.data);
        })
        
    },[type2])


    return (
        <>
        {tabType === '' ? <></>
            : tabType==='please' ?<TabBox><Tab onClick={()=>{setNum(0)}}>양식1</Tab><Tab onClick={()=>{setNum(1)}}>양식2</Tab><Tab onClick={()=>{setNum(2)}}>양식3</Tab></TabBox>
            : tabType === 'recommend' ? <TabBox><Tab onClick={()=>{setNum(0)}}>양식1</Tab></TabBox>
            : tabType === 'grade' ? <TabBox><Tab onClick={()=>{setNum(0)}}>양식1</Tab><Tab onClick={()=>{setNum(1)}}>양식2</Tab></TabBox>
            :
            <div></div>}
        <Container>
        <div>안녕하십니까 <input placeholder='교수님 성함'></input> 교수님 </div>
        <div>저는  <input placeholder='과 이름'></input> <input placeholder='학번'></input>  <input placeholder='학생 이름'></input>입니다.
            
            </div>
            <div ref={myRef} style={{position:'relative'}}>
            <div onClick={()=>setState(!state)} style={{fontWeight:'bold'}}>{firstState}</div>
            {state && <Scroll isFirst={true} ment = {firstMent} state = {firstState} setState={setFirstState} type= {type} setType={setType}/>}
            {tabType === '' ? <input></input>
            : tabType==='please' ?<BillnutContent num = {num} setNum={setNum}/> 
            : tabType === 'recommend' ? <RecommendContent num = {num} setNum={setNum}/>
            : tabType === 'grade' ? <GradeContent num = {num} setNum={setNum}/>
            :
            <div></div>}
                        
            <div onClick={()=>setState2(!state)} style={{fontWeight:'bold'}}>{lastState}</div>
            {state2 && <Scroll isFirst={false} ment = {lastMent} state = {lastState} setState={setLastState} type= {type2} setType={setType2}/>}
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
`;

const TabBox = styled.div`
    height:50px;
    display:flex;
    flex-direction:row;
    
`;
const Tab = styled.div`
background-color:#fff111;
width: 25%;
height:100%;
color:black;

display:flex;
align-items:center;
justify-content:center;
    
`