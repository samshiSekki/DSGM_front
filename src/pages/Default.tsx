import React, { useState } from 'react';
import Header from './Header';
import '../css/main.css';

function Default() {
  const [major, setMajor] = useState('');
  const [name, setName] = useState('');
  const [firstSelect, setFirstSelect] = useState('');
  return(
  <div>
    <Header/>
    <div className='mailTextContainer'>
        교수님 안녕하세요! <br/>
        <input onChange={(e)=>{setMajor(e.target.value)}}/>학과 <input onChange={(e)=>{setName(e.target.value)}}/>입니다. <br/>
        비대면 어쩌구저쩌구 <br/>
        <select onChange={(e)=>{setFirstSelect(e.target.value)}}>
          <option value="none">선택</option>
          <option value="text1">텍스트1</option>
          <option value="text2">텍스트2</option>
        </select>
        <br/>
        ㅎㅎㅎㅎㅎㅎㅎ <br/>
        감사합니다
    </div>
    {/*
    <button onClick={()=>{console.log(firstSelect)}}></button>
    */
    }
    <div className='buttonContainer'>
      <div>복사하기</div>
      <div>clear</div>
      <div>맞춤법 검사</div>
    </div>
  </div>);
}

export default Default;
