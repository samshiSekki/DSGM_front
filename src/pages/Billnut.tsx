import React, {useState} from 'react';
import PostList from './PostList';
import {connect} from 'react-redux';


function Billnut(props: any) {
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

    if(props.inputValue.billnutState == 0){
      copiedForm = `안녕하십니까 ${props.inputValue.professorName}교수님\r\n`
      +`저는 ${props.inputValue.myName}입니다.\r\n`
      +`${props.inputValue.greeting}\r\n`
      +`연락드리게 된 이유는 다름이 아니라 ${props.inputValue.billnutContent0_1} 과목의 증원 가능성이 있는지 여쭙기 위함입니다.\r\n`
      +`${props.inputValue.billnutContent0_1_plus}\r\n`
      +`${props.inputValue.ending}\r\n`;
    }
    copyInClipboard();
  }
  return (
  <div>
    <div className='mailTextContainer'>
      <PostList tabType={'please'}/>
       
    </div>
    <div className='buttonContainer'>
      <div className='functionBtn'>맞춤법 검사하기</div>
      <div onClick={()=>{window.location.replace("/")}} className='functionBtn'>Clear</div>
      <div id='copyBtn' onClick={copyBtnClickHandler}>복사하기</div>
    </div>
  </div>
  );
}

function f1(inputValue: any){
  return {
    inputValue : inputValue
  }
}
export default connect(f1)(Billnut);