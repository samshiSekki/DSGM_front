import React, {useState} from 'react';
import PostList from './PostList';
import {connect} from 'react-redux';
import styled from 'styled-components';

let CurrentNav : any = styled.img`
  position: absolute;
  width: 3%;
  height: auto;
  margin-left: 36vw;
`;

function Recommend(props: any) {
  let copiedForm: string = '';

  function copyInClipboard(){
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

    if(props.inputValue.recommendState == 0){
      copiedForm = `안녕하십니까 ${props.inputValue.professorName}교수님\r\n`
      +`저는 ${props.inputValue.myName}입니다.\r\n`
      +`${props.inputValue.greeting}\r\n`
      +`${props.inputValue.commonContent_plus}\r\n`
      +`다름이 아니라, ${props.inputValue.recommendContent0_1}에 지원하고자 하는데, 교수님의 추천서가 필요하다고 합니다.\r\n`
      +`${props.inputValue.recommendContent0_plus1}\r\n`
      +`교수님의 ${props.inputValue.recommendContent0_2} 강의를 통해 ${props.inputValue.recommendContent0_3}에 대한 관심을 발견한 것은 ${props.inputValue.recommendContent0_4}을 선택하는 동기가 되었습니다.\r\n`
      +`${props.inputValue.recommendContent0_plus2}\r\n`
      +`따라서 교수님께 ${props.inputValue.recommendContent0_5} 지원을 위한 추천서를 부탁드리고자 메일을 드립니다.\r\n`
      +`${props.inputValue.recommendContent0_plus3}\r\n`
      +`교수님의 승낙 이후에 추천서 일정 및 양식, 저에 대한 정보 등을 다시 첨부해드리고 방문 상담 일정을 잡고 싶습니다.\r\n`
      +`${props.inputValue.recommendContent0_plus4}\r\n`
      +`${props.inputValue.ending}`;
    }
    
    copyInClipboard();
  }

  return (
  <div>
    <CurrentNav src="img/Union.png"/>
    <div className='mailTextContainer'>
      <PostList tabType={'recommend'}/>
    </div>
    <div className='buttonContainer'>
      <div className='functionBtn'>맞춤법 검사하기</div>
      <div onClick={()=>{window.location.replace("/recommend")}} className='functionBtn'>Clear</div>
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
export default connect(f1)(Recommend);
