import axios from 'axios';
import e from 'express';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

interface ScrollProps {
    isFirst:boolean
    ment : Array<any>
    state: string
    setState : (state: string) => void
    type: string
    setType: (type : string) => void
}

interface TextProps {
    greeting : string

}

interface IsSelectProps {
    isSelect: boolean
}

const Scroll = ({isFirst, ment, state, setState, type, setType} : ScrollProps) => {
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
            <Tab onClick={()=>setType('time')}>☀️하루☀️</Tab></> }
        </TabBox>
        <ScrollBox>
            {ment.map((m:TextProps, idx:number) => 
            {
                /* if (m.greeting.includes('*')) {
                    return <SelectBox>{'hi'}</SelectBox>

                } */
                if ( m.greeting== state) {
                    return <SelectBox isSelect={true} onClick={()=>{setState(m.greeting); selectInput(idx);}}>✔ {m.greeting}</SelectBox>
                }else{
                    return <SelectBox isSelect={false} onClick={()=>{setState(m.greeting); selectInput(idx);}}>{m.greeting}</SelectBox>
                }
            }
            )}
            <InputDiv placeholder={"멘트를 제안해주세요!"} value={suggestion} onChange={handleInput}></InputDiv><ButtonDiv onClick={onSuggest}>{'💌보내기💌'}</ButtonDiv>
        </ScrollBox>
        </Container>
        </>
    )


}

export default Scroll;

const Container = styled.div`
 position:absolute;
    background-color:#ffffff;
    width:800px;
    height:300px;
    
    
`
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
background-color:#EAEAEA;
:hover{
    background-color:#C4C4C4;
}
    
`

const ScrollBox = styled.div`
   
   /*  overflow:scroll;
    overflow-x:hidden;
    height:400px; */
    overflow:scroll;
    height:250px;
    
`;

const SelectBox = styled.div<IsSelectProps>`
    margin:10px 10px;
    font-weight:${props => props.isSelect ? 'bold' :'none' };
`
const InputDiv = styled.input`
    background: #FFFFFF;
    border: 1px solid #E2E2E2;
    border-radius: 13px;
    width: 550px;
    height: 30px;
    margin-top:10px;
    margin-bottom:10px;
    margin-right:5px;

`;
const ButtonDiv = styled.button`
    background-color:#EAEAEA;
:hover{
    background-color:#C4C4C4;
}
margin-left:20px;
height:30px;
width:100px;
font-weight:bold;
    
`;