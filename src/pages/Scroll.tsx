import axios from 'axios';
import e from 'express';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {connect, useDispatch} from 'react-redux';
import ChangeIcon from '../components/asset/icon/icon-active.svg';
import DefaultIcon from '../components/asset/icon/icon-inactive.svg';
import {BrowserView, MobileView} from "react-device-detect";

interface ScrollProps {
    isFirst:boolean
    ment : Array<any>
    state: string
    setState : (state: string) => void
    type: string
    setType: (type : string) => void
    inputValue : any
}

interface TextProps {
    greeting : string

}

interface IsSelectProps {
    isSelect: boolean
}

const Scroll = ({isFirst, ment, state, setState, type, setType} : ScrollProps, props: any) => {
    //const tabMenu:Array<string> = ["기본", "계절","학업","날씨"];
    const [menu, setMenu] = useState<string>('');
    const [suggestion, setSuggestion] = useState<string>('');
    const [isSelect, setIsSelect] = useState<number>(0);

    const onSuggest = () =>{
        axios.post('http://mail-helper.com/mail-forms/suggestion', {
            type: type,
            suggestion: suggestion
        })
        .then(function (response) {
            alert(suggestion); 
        }).catch(function (error) {
            console.log(error);
        })

    };

    const handleInput = (e:any) => {
        setSuggestion(e.target.value);
    }

    const selectInput = (idx: number) => () => {
		setIsSelect(idx); 

		//setOpen(false);
	};

    useEffect(() =>{
        //setState(state);
        setIsSelect(isSelect);
        console.log(isSelect);
    },[isSelect,state]);

    let dispatch = useDispatch();

    return (
        <>
        <BrowserView>
        <Container>
        <TabBox>
            {isFirst ?
            <><Tab onClick={()=>setType('default')}>💌기본💌</Tab>
            <Tab onClick={()=>setType('season')}>🌱계절🌱</Tab>
            <Tab onClick={()=>setType('weather')}>❄️날씨❄️</Tab>
            <Tab onClick={()=>setType('study')}>📚학업📚</Tab></>
            : <><Tab onClick={()=>setType('default')}>💌기본💌</Tab>
            <Tab onClick={()=>setType('season')}>🌱계절🌱</Tab>
            <Tab onClick={()=>setType('weather')}>❄️날씨❄️</Tab>
            <Tab onClick={()=>setType('time')}>💧하루💧</Tab></> }
        </TabBox>
        <ScrollBox>
            {ment.map((m:TextProps, idx:number) => 
            {
                /* if (m.greeting.includes('*')) {
                    return <SelectBox>{'hi'}</SelectBox>

                } */
                if ( m.greeting== state) {
                    return <SelectBox isSelect={true} onClick={()=>{setState(m.greeting); selectInput(idx);}}>{m.greeting} <div style={{marginLeft:'10px',marginTop:'5px'}}><img src={DefaultIcon}></img></div></SelectBox>
                }else{
                    return <SelectBox isSelect={false} onClick={()=>{setState(m.greeting); selectInput(idx);}}>{m.greeting} <div style={{marginLeft:'10px',marginTop:'5px'}}><img src={ChangeIcon}></img></div></SelectBox>
                }
            }
            )}
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <InputDiv placeholder={"멘트를 제안해주세요!"} value={suggestion} onChange={handleInput}></InputDiv><ButtonDiv onClick={onSuggest}>{'💌보내기💌'}</ButtonDiv>
            </div>
        </ScrollBox>
        </Container>
        </BrowserView>
        <MobileView>
        <MobileContainer>
        <MobileTabBox>
            {isFirst ?
            <><MobileTab onClick={()=>setType('default')}>💌기본💌</MobileTab>
            <MobileTab onClick={()=>setType('season')}>🌱계절🌱</MobileTab>
            <MobileTab onClick={()=>setType('weather')}>❄️날씨❄️</MobileTab>
            <MobileTab onClick={()=>setType('study')}>📚학업📚</MobileTab></>
            : <><MobileTab onClick={()=>setType('default')}>💌기본💌</MobileTab>
            <MobileTab onClick={()=>setType('season')}>🌱계절🌱</MobileTab>
            <MobileTab onClick={()=>setType('weather')}>❄️날씨❄️</MobileTab>
            <MobileTab onClick={()=>setType('time')}>💧하루💧</MobileTab></> }
        </MobileTabBox>
        <MobileScrollBox>
            {ment.map((m:TextProps, idx:number) => 
            {
                /* if (m.greeting.includes('*')) {
                    return <SelectBox>{'hi'}</SelectBox>

                } */
                if ( m.greeting== state) {
                    return <MobileSelectBox isSelect={true} onClick={()=>{setState(m.greeting); selectInput(idx);}}>{m.greeting} </MobileSelectBox>
                }else{
                    return <MobileSelectBox isSelect={false} onClick={()=>{setState(m.greeting); selectInput(idx);}}>{m.greeting} </MobileSelectBox>
                }
            }
            )}
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <MobileInputDiv placeholder={"멘트를 제안해주세요!"} value={suggestion} onChange={handleInput}></MobileInputDiv><MobileButtonDiv onClick={onSuggest}>{'💌'}</MobileButtonDiv>
            </div>
        </MobileScrollBox>
        </MobileContainer>

        </MobileView>
        </>
    )


}

function f1(inputValue: any){
    return {
      inputValue : inputValue
    }
};

export default connect(f1)(Scroll);

//export default Scroll;

const Container = styled.div`
    position:absolute;
    background-color:#ffffff;
    width:600px;
    height:300px;
    box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 8px 10px rgba(0, 0, 0, 0.1);
    border-radius: 17px;
    border:  0.5px solid #CBCBCB;
    padding-top:10px;
    padding-left:27px;
    padding-right:27px;
    margin-left:250px;
    
`
const TabBox = styled.div`
    height:50px;
    display:flex;
    flex-direction:row;
    
`;
const Tab = styled.div`
    width: 25%;
    height:100%;
    color:black;
font-size: 15px;

display:flex;
align-items:center;
justify-content:center;
background-color:#ffffff;
border-radius: 17px 17px 0px 0px;
:hover{
    font-weight:bold;
}
border-bottom:1px solid #A3A3A3;
    
`

const ScrollBox = styled.div`
   
   /*  overflow:scroll;
    overflow-x:hidden;
    height:400px; */
    overflow:scroll;
    height:216px;
    font-size:14px;
    padding-top:20px;
    overflow-x:hidden;
    padding-right:10px;
    &::-webkit-scrollbar{
        width: 7px;
    }
    &::-webkit-scrollbar-thumb {
    background-color: #E2E2E2;
    border-radius: 10px;
  }
  /* &::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  } */
    
`;

const SelectBox = styled.div<IsSelectProps>`
    font-weight:${props => props.isSelect ? 'bold' :'none' };
    color:${props => props.isSelect? '#14B390' : 'black'};
    display:flex;
    justify-content:space-between;
    :hover{
    background-color: #D6EEE8;
    border-radius: 6px;
    }
`
const InputDiv = styled.input`
    background: #FFFFFF;
    font-family: 'Roboto';
    border: 1px solid #E2E2E2;
    border-radius: 10px;
    width: 450px;
    height: 30px;
    margin-top:10px;
    margin-bottom:10px;
    margin-right:5px;
    float:left;
    -webkit-appearance: none;

`;
const ButtonDiv = styled.button`
    background-color:#ffffff;
:hover{
    background-color:#D6EEE8;
}
margin-left:10px;
height:30px;
width:90px;
font-weight:bold;
margin-top:10px;
border:none;
    
`;

//


const MobileContainer = styled.div`
    position:absolute;
    background-color:#ffffff;
    width:220px;
    height:146px;
    box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 8px 10px rgba(0, 0, 0, 0.1);
    border-radius: 17px;
    border: 0.5px solid #CBCBCB;
    padding-top:15px;
    padding-left:15px;
    padding-right:15px;
    margin-left:30px;
    
`
const MobileTabBox = styled.div`
    height:30px;
    display:flex;
    flex-direction:row;
    font-size: 3px;
    
`;
const MobileTab = styled.div`
    width: 25%;
    height:100%;
    color:black;

    font-size: 3px;

display:flex;
align-items:center;
justify-content:center;
background-color:#ffffff;
border-radius: 17px 17px 0px 0px;
:hover{
    font-weight:bold;
}
border-bottom:1px solid #A3A3A3;
    
`

const MobileScrollBox = styled.div`
   
   /*  overflow:scroll;
    overflow-x:hidden;
    height:400px; */
    overflow:scroll;
    height:86px;
    padding-top:10px;
    overflow-x:hidden;
    padding-right:10px;
    &::-webkit-scrollbar{
        width: 7px;
    }
    &::-webkit-scrollbar-thumb {
    background-color: #E2E2E2;
    border-radius: 10px;
  }
  /* &::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  } */
    
`;

const MobileSelectBox = styled.div<IsSelectProps>`
    font-weight:${props => props.isSelect ? 'bold' :'none' };
    color:${props => props.isSelect? '#14B390' : 'black'};
    display:flex;
    justify-content:space-between;
    :hover{
    background-color: #D6EEE8;
    border-radius: 6px;
    }
    font-size: 5px;
`
const MobileInputDiv = styled.input`
    background: #FFFFFF;
    font-family: 'Roboto';
    border: 1px solid #E2E2E2;
    border-radius: 10px;
    width: 140px;
    height: 20px;
    margin-top:10px;
    margin-bottom:10px;
    float:left;
    font-size:5px;
    -webkit-appearance: none;

`;
const MobileButtonDiv = styled.button`
    background-color:#ffffff;
:hover{
    background-color:#D6EEE8;
}
height:30px;
width:30px;
font-weight:bold;
margin-top:10px;
border:none;
font-size:7px;
    
`;