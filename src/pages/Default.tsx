import React, { useState } from 'react';
import Header from './Header';
import '../css/main.css';

function Default() {
  
  const [major, setMajor] = useState('');
  const [name, setName] = useState('');
  const [firstSelect, setFirstSelect] = useState('');
  let copiedForm: string = '';

  function copyInClipboard(){
    //console.log(copiedForm);
    const textarea = document.createElement("textarea");
    textarea.value = copiedForm;
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert('복사되었습니다.');
  }

  function copyBtnClickHandler(){
    if (!document.queryCommandSupported("copy"))
      return alert("복사하기가 지원되지 않는 브라우저입니다");

    copiedForm = `교수님 안녕하세요!\r\n${major}학과 ${name}입니다.\r\n비대면 어쩌구저쩌구\r\n${firstSelect}\r\nㅎㅎㅎㅎㅎㅎㅎ\r\n감사합니다`;
    copyInClipboard();
  }

  return(
  <div>
    {/*<textarea className="copy_text"></textarea>*/}
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
      <div onClick={copyBtnClickHandler}>복사하기</div>
      <div onClick={()=>{window.location.replace("/")}}>clear</div>
      <div>맞춤법 검사</div>
    </div>
  </div>);
}

export default Default;
