/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-sequences */

import React, { useEffect,useState,useRef, useCallback, Props} from "react";
import axios from 'axios';
import styled from 'styled-components'
import Scroll from './Scroll';
import BillnutContent from '../components/Post/Billnut/BillnutContent';
import GradeContent from '../components/Post/Grade/GradeContent';
import RecommendContent from '../components/Post/Recommend/RecommendContent';
import { connect, useDispatch } from 'react-redux';
import ChangeIcon from '../components/asset/icon/icon-vector.svg';
import MessageIcon1 from '../components/asset/icon/icon-message1.svg';
import MessageIcon2 from '../components/asset/icon/icon-message2.svg';
import MessageIconDelete from '../components/asset/icon/icon-message-delete.svg';
import {BrowserView, MobileView, isBrowser, isMobile, isIPad13} from "react-device-detect";
import AttendanceSchool from "components/Post/AttendanceSchool/AttendanceSchool";
import AttendancePersonal from "components/Post/AttendancePersonal/AttendancePersonal";
import Questions from "components/Post/Questions/Questions";
import GraduateSchool from "./Others/GraduateSchool";
import Undergraduate from "components/Post/Undergraduate/Undergraduate";

interface PostListProps {
    tabType?: string,
    inputValue?: any
}


const PostList = ({tabType, inputValue}:PostListProps) => {
    const [visit, setVisit] = useState(-1);
    const [firstState, setFirstState] = useState(`교수님의 가르침 덕분에, 저의 학문적 호기심을 기를 수 있었습니다. 감사합니다.`);
    const [lastState, setLastState] = useState("항상 좋은 수업 감사드립니다.");
    const [firstMent, setFirstMent] = useState([]);
    const [lastMent, setLastMent] = useState([]);
    const [type, setType] = useState('default'); // 첫인사
    const [type2, setType2] = useState('default'); // 끝인사
    
    const [state, setState] = useState(false);
    const [state1, setState1]= useState<boolean>(false);
    const [state2, setState2] = useState(false);
    const myRef = useRef<any>(null);

    const textRef = useRef<any>(null);
    const textRef1 = useRef<any>(null);

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

    let dispatch: any = useDispatch();

    function changeInputValue(e: any, variableType: string){
        dispatch({type: 'change', payload:{changeData:e.target.value, variableType: variableType}});
    }
    function changeScrollValue(ment: string, variableType: string){
        dispatch({type: 'change', payload:{changeData: ment, variableType: variableType}});
    }

    useEffect(()=>{        
            axios.get('http://mail-helper.com/mail-forms/first',{params: {
                category: type
            }}).then(function(response){
                setFirstMent(response.data);
            })
                   

    },[type,tabType]);
    useEffect(() => {

        axios.get('http://mail-helper.com/mail-forms/last',{params: {
            category: type2
        }}).then(function(response){
            setLastMent(response.data);
        })
        
    },[type2])

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
            if (textRef == null || textRef.current == null)
        {
            return;
        }
        textRef.current.style.height = '30px';
        textRef.current.style.height = textRef.current.scrollHeight +'px';
        }
        
      },
      [],
    )
    

    useEffect(() => {
        setState1(false);
        document.addEventListener('mousedown', handleClickOption);
        document.addEventListener('mousedown', handleClickOption2);
        return () =>{
            document.removeEventListener('mousedown', handleClickOption);
            document.removeEventListener('mousedown', handleClickOption2);
        }
    },[]);
    
    useEffect(()=>{
        //console.log(firstState);
        changeScrollValue(firstState, "greeting");
    }, [firstState])
    useEffect(()=>{
        //console.log(firstState);
        changeScrollValue(lastState, "ending");
    }, [lastState])
    

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOption);
        document.addEventListener('mousedown', handleClickOption2);
        return () =>{
            document.removeEventListener('mousedown', handleClickOption);
            document.removeEventListener('mousedown', handleClickOption2);
        }
    },[]);
    
    
    const [showImage, setShowImage] = useState(false);
    const [showImage2, setShowImage2] = useState(false);

    const HAS_VISITED_BEFORE : any = window.localStorage.getItem('hasVisitedBefore');
    const handleShowModal = () => {
        console.log(HAS_VISITED_BEFORE);
        if (HAS_VISITED_BEFORE && HAS_VISITED_BEFORE > new Date()) {
          return;
        }        
  
        if (!HAS_VISITED_BEFORE) {
          setShowImage(true);
          let expires : any = new Date();
          expires = expires.setMinutes(expires.getMinutes() + 1);
          window.localStorage.setItem('hasVisitedBefore', expires);
        }
      };

    useEffect(() => {
        //window.localStorage.removeItem('hasVisitedBefore');
        //console.log(1);
        const handleShowModal = () => {
            if (HAS_VISITED_BEFORE && HAS_VISITED_BEFORE > new Date()) {
                if (showImage == false) setShowImage(false);
                if (showImage2 == false) setShowImage2(false);
              return;
            }       
      
            if (!HAS_VISITED_BEFORE) {
              setShowImage(true);
              setShowImage2(true);
              let expires : any = new Date();
              expires = expires.setTime(expires.getTime() + (30*24*60*60*1000));
              window.localStorage.setItem('hasVisitedBefore', expires);
            }
          };
          window.setTimeout(handleShowModal,200);
      
    }, [HAS_VISITED_BEFORE]);
  
    const handleClose = () => {

        setShowImage(false);
        
    };

    const handleClose2 = () => {

        setShowImage2(false);
        
    };
  
    function clearCommonPlus(){
        dispatch({type: 'change', payload:{changeData:'', variableType: 'commonContent_plus'}});
    }

    return (
        <>
        {(isIPad13 || isBrowser)?
        <div>
        {tabType === '' ? <></>
            : tabType==='please' ?<TabBox><Tab onClick={()=>{setNum(0); clearCommonPlus()}}>양식1</Tab><Tab onClick={()=>{setNum(1); clearCommonPlus()}}>양식2</Tab><Tab onClick={()=>{setNum(2); clearCommonPlus()}}>양식3</Tab></TabBox>
            : tabType === 'recommend' ? <TabBox><Tab onClick={()=>{setNum(0); clearCommonPlus()}}>양식1</Tab></TabBox>
            : tabType === 'grade' ? <TabBox><Tab onClick={()=>{setNum(0); clearCommonPlus()}}>양식1</Tab><Tab onClick={()=>{setNum(1); clearCommonPlus()}}>양식2</Tab></TabBox>
            : tabType === 'graduateschool' ? <TabBox><Tab onClick={()=>{setNum(0); clearCommonPlus()}}>양식1</Tab><Tab onClick={()=>{setNum(1); clearCommonPlus()}}>양식2</Tab></TabBox>
            : <div></div>}
        <Container>
          
        <div>안녕하십니까 <InputDiv style={{width:'200px'}} placeholder='ex) 김철수' onChange={(e)=>changeInputValue(e, 'professorName')}></InputDiv> 교수님, </div>
        <div>저는  <InputDiv placeholder='ex) 컴퓨터공학과 00학번 이빛나' onChange={(e)=>changeInputValue(e, 'myName')}></InputDiv>입니다.
            
            </div>
            <div ref={myRef} style={{position:'relative'}}>
            <div onClick={()=>setState(!state)} style={{cursor:'pointer', display:'flex', alignItems:'center',backgroundColor:'#14B3901A', width:'fit-content', paddingLeft:'3px', paddingRight:'5px'}}><div style={{fontWeight:'bold',color:'#14B390',marginRight:'10px'}}>{firstState}</div><img width='20px' height='20px' src={ChangeIcon}></img></div>
            {showImage2 && <div style={{position:'absolute',left:'610px',top:'-110px'}}><div style={{position:'relative'}}><img src={MessageIcon2}></img><img onClick = {()=>handleClose2()} style={{position:'absolute', right:'15px', top:'10px'}} src={MessageIconDelete}></img></div></div>}
            {state1 == false ? <ButtonStyled onClick={()=>setState1(true)}>+</ButtonStyled> :
             <><ButtonStyled onClick={()=>setState1(false)}>-</ButtonStyled> <TextArea ref={textRef1} onInput={()=>handleResize(1)} onChange={(e)=>changeInputValue(e, 'commonContent_plus')}></TextArea></>}
            {state && <Scroll isFirst={true} ment = {firstMent} state = {firstState} setState={setFirstState} type= {type} setType={setType}/>}
            {showImage && <div style={{position:'absolute',left:'-200px',top:'-70px'}}><div style={{position:'relative'}}><img src={MessageIcon1}></img><img onClick = {()=>handleClose()} style={{position:'absolute', left:'15px', top:'10px'}} src={MessageIconDelete}></img></div></div>}
            {tabType === '' ? <><div>다름이 아니라,</div><TextArea onInput={()=>handleResize(2)} ref={textRef} placeholder='ex) 메일 보낼 내용' onChange={(e)=>changeInputValue(e, 'defaultContent')}></TextArea></>
            : tabType==='please' ?<BillnutContent num = {num} setNum={setNum}/> 
            : tabType === 'recommend' ? <RecommendContent num = {num} setNum={setNum}/>
            : tabType === 'grade' ? <GradeContent num = {num} setNum={setNum}/>
            : tabType === 'attendanceschool' ? <AttendanceSchool num = {num} setNum={setNum}/>
            : tabType === 'attendancepersonal' ? <AttendancePersonal num = {num} setNum={setNum}/>
            : tabType === 'questions' ? <Questions num = {num} setNum={setNum}/>
            : tabType === 'graduateschool' ? <Undergraduate num = {num} setNum={setNum}/>
            :
            <div></div>}
                        
                        <div onClick={()=>setState2(!state2)} style={{cursor:'pointer', display:'flex', alignItems:'center', backgroundColor:'#14B3901A', width:'fit-content', paddingLeft:'3px', paddingRight:'5px'}}><div style={{fontWeight:'bold',color:'#14B390',marginRight:'10px'}}>{lastState}</div><img width='20px' height='20px' src={ChangeIcon}></img></div>
            {state2 && <Scroll isFirst={false} ment = {lastMent} state = {lastState} setState={setLastState} type= {type2} setType={setType2}/>}
                        </div>
                        </Container>
                        </div>
        : null
        }

        {(!isIPad13)&&(!isBrowser)?
        <MobileView>
        {tabType === '' ? <></>
            : tabType==='please' ?<MobileTabBox><MobileTab onClick={()=>{setNum(0); clearCommonPlus()}}>양식1</MobileTab><MobileTab onClick={()=>{setNum(1); clearCommonPlus()}}>양식2</MobileTab><MobileTab onClick={()=>{setNum(2); clearCommonPlus()}}>양식3</MobileTab></MobileTabBox>
            : tabType === 'recommend' ? <MobileTabBox><MobileTab onClick={()=>{setNum(0); clearCommonPlus()}}>양식1</MobileTab></MobileTabBox>
            : tabType === 'grade' ? <MobileTabBox><MobileTab onClick={()=>{setNum(0); clearCommonPlus()}}>양식1</MobileTab><MobileTab onClick={()=>{setNum(1); clearCommonPlus()}}>양식2</MobileTab></MobileTabBox>
            : tabType === 'graduateschool' ? <MobileTabBox><MobileTab onClick={()=>{setNum(0); clearCommonPlus()}}>양식1</MobileTab><MobileTab onClick={()=>{setNum(1); clearCommonPlus()}}>양식2</MobileTab></MobileTabBox>
            :
            <div></div>}
        <MobileContainer>
          
        <div>안녕하십니까 <MobileInputDiv style={{width:'50px'}} placeholder='ex) 김철수' onChange={(e)=>changeInputValue(e, 'professorName')}></MobileInputDiv> 교수님, </div>
        <div>저는  <MobileInputDiv placeholder='ex) 컴퓨터공학과 00학번 이빛나' onChange={(e)=>changeInputValue(e, 'myName')}></MobileInputDiv>입니다.
            
            </div>
            <div ref={myRef} style={{position:'relative'}}>
            <div onClick={()=>setState(!state)} style={{display:'flex', alignItems:'center'}}><div style={{paddingLeft:'3px', paddingRight:'5px', fontWeight:'bold',color:'#14B390',marginRight:'10px',width:'290px'}}><div style={{background:'#14B3901A', width:'fit-content', padding:'0px 5px'}}>{firstState}<img style={{marginLeft:'3px'}} src={ChangeIcon}></img></div></div></div>
            {/* {showImage2 && <div style={{position:'absolute',left:'610px',top:'-110px'}}><div style={{position:'relative'}}><img src={MessageIcon2}></img><img onClick = {()=>handleClose2()} style={{position:'absolute', right:'15px', top:'10px'}} src={MessageIconDelete}></img></div></div>} */}
            {state1 == false ? <MobileButtonStyled onClick={()=>setState1(true)}>+</MobileButtonStyled> :
             <><ButtonStyled onClick={()=>setState1(false)}>-</ButtonStyled> <MobileTextArea style={{width:'250px'}} ref={textRef1} onInput={()=>handleResize(1)} onChange={(e)=>changeInputValue(e, 'commonContent_plus')}></MobileTextArea></>}
            {state && <Scroll isFirst={true} ment = {firstMent} state = {firstState} setState={setFirstState} type= {type} setType={setType}/>}
            {/* {showImage && <div style={{position:'absolute',left:'-200px',top:'-70px'}}><div style={{position:'relative'}}><img src={MessageIcon1}></img><img onClick = {()=>handleClose()} style={{position:'absolute', left:'15px', top:'10px'}} src={MessageIconDelete}></img></div></div>} */}
            {tabType === '' ? <><div>다름이 아니라,</div><MobileTextArea onInput={()=>handleResize(2)} ref={textRef} placeholder='ex) 메일 보낼 내용' onChange={(e)=>changeInputValue(e, 'defaultContent')}></MobileTextArea></>
            : tabType==='please' ?<BillnutContent num = {num} setNum={setNum}/> 
            : tabType === 'recommend' ? <RecommendContent num = {num} setNum={setNum}/>
            : tabType === 'grade' ? <GradeContent num = {num} setNum={setNum}/>
            : tabType === 'attendanceschool' ? <AttendanceSchool num = {num} setNum={setNum}/>
            : tabType === 'attendancepersonal' ? <AttendancePersonal num = {num} setNum={setNum}/>
            : tabType === 'questions' ? <Questions num = {num} setNum={setNum}/>
            : tabType === 'graduateschool' ? <Undergraduate num = {num} setNum={setNum}/>
            :
            <div></div>}
                        
                        <div onClick={()=>setState2(!state2)} style={{display:'flex', alignItems:'center'}}><div style={{paddingLeft:'3px', paddingRight:'5px',fontWeight:'bold',color:'#14B390',width:'290px', marginRight:'10px'}}><div style={{background:'#14B3901A', width:'fit-content', padding:'0px 5px'}}>{lastState}<img style={{ marginLeft:'3px'}} src={ChangeIcon}></img></div></div></div>
            {state2 && <Scroll isFirst={false} ment = {lastMent} state = {lastState} setState={setLastState} type= {type2} setType={setType2}/>}
                        </div>
                        </MobileContainer>

        </MobileView>
        :null
        }
        </>
    );


};

function f1(inputValue: any){
    return {
      inputValue : inputValue
    }
};

export default connect(f1)(PostList);
//export default PostList;

const Container = styled.div`
    //margin-top:300px;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

const TabBox = styled.div`
    height:39px;
    display:flex;
    flex-direction:row;
    margin-bottom:20px;
    width: 307px;
    
`;
const Tab = styled.div`
background-color:#EFEFEF;
width: 89px;
height:100%;
color:black;
margin-right:20px;
border-radius: 19.5px;

display:flex;
align-items:center;
justify-content:center;
:hover{
    background-color:#C4C4C4;
}
    
`
const InputDiv = styled.input`
    background: #F7F8FA;
    border:none;
    border-bottom: 1px solid #14B390;
    color: #14B390;
    text-align:center;
    line-height: 36px;
    &:focus{
        outline:none;
    }
    -webkit-appearance: none;
    border-radius : 0;
    //border: 1px solid #E2E2E2;
    //border-radius: 13px;
    
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
    width:80%;
    font-family: 'Roboto';
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
const ButtonStyled = styled.button`
background-color:#F7F8FA;
border:none;
cursor:pointer;
color:#A3A3A3; 
    
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

const MobileTabBox = styled.div`
    height:19px;
    display:flex;
    flex-direction:row;
    margin-bottom:13px;
    
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
    -webkit-appearance: none;
    border-radius : 0;
    font-size: 10px;
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
    white-space:pre-line;

`;

const MobileButtonStyled = styled.button`
    background-color:#F7F8FA;
    border:none;
    cursor:pointer;
    position:absolute;
    top: 35px;
    left: -15px;
    background: transparent;
    color:#A3A3A3; 
        
`;

const MobileTab = styled.div`
background-color:#EFEFEF;
width: 39px;
height:100%;
color:black;
margin-right:20px;
border-radius: 19.5px;
font-weight: bold;
font-size: 7px;
line-height: 8px;

display:flex;
align-items:center;
justify-content:center;
:hover{
    background-color:#C4C4C4;
}
    
`;