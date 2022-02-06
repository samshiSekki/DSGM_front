import axios from 'axios';
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

const Scroll = ({isFirst, ment, state, setState, type, setType} : ScrollProps) => {
    //const tabMenu:Array<string> = ["기본", "계절","학업","날씨"];
    const [menu, setMenu] = useState<string>('');
    const [suggestion, setSuggestion] = useState<string>('');

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

   /*  useEffect(() =>{
        setState(state);
    },[])
 */
    return (
        <>
        <Container>
        <TabBox>
            {isFirst ?
            <><Tab onClick={()=>setType('default')}>기본</Tab>
            <Tab onClick={()=>setType('season')}>계절</Tab>
            <Tab onClick={()=>setType('weather')}>날씨</Tab>
            <Tab onClick={()=>setType('study')}>학업</Tab></>
            : <><Tab onClick={()=>setType('default')}>기본</Tab>
            <Tab onClick={()=>setType('season')}>계절</Tab>
            <Tab onClick={()=>setType('weather')}>날씨</Tab>
            <Tab onClick={()=>setType('time')}>하루</Tab></> }
        </TabBox>
        <ScrollBox>
            {ment.map((m:TextProps, idx:number) => 
            {
                if (m.greeting.includes('*')) {
                    return <SelectBox>{'hi'}</SelectBox>

                }
                else {
                    return <SelectBox onClick={()=>setState(m.greeting)}>{m.greeting}</SelectBox>
                }
            }
            )}
            <input placeholder={"멘트를 제안해주세요!"} value={suggestion} onChange={handleInput}></input><button onClick={onSuggest}>{'보내기'}</button>
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
    height:200px;
    
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
    
`

const ScrollBox = styled.div`
   
    overflow:scroll;
    overflow-x:hidden;
    height:200px;
    
`;

const SelectBox = styled.div`
    margin:10px 10px;
`