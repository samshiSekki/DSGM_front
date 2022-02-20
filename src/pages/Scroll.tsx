import axios from 'axios';
import e from 'express';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {connect, useDispatch} from 'react-redux';
import ChangeIcon from '../components/asset/icon/icon-active.svg';
import DefaultIcon from '../components/asset/icon/icon-inactive.svg';

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
        axios.post('http://13.125.177.135:5000/mail-forms/suggestion', {
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
            <InputDiv placeholder={"멘트를 제안해주세요!"} value={suggestion} onChange={handleInput}></InputDiv><ButtonDiv onClick={onSuggest}>{'💌보내기💌'}</ButtonDiv>
        </ScrollBox>
        </Container>
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
    width:381px;
    height:300px;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);
    border-radius: 17px;
    border: 1px solid #A3A3A3;
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
font-size: 12px;

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
    border: 1px solid #E2E2E2;
    border-radius: 10px;
    width: 250px;
    height: 30px;
    margin-top:10px;
    margin-bottom:10px;
    margin-right:5px;
    float:left;

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