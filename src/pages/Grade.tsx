import React, {useState} from 'react';
import PostList from './PostList';
import {connect} from 'react-redux';
import styled from 'styled-components';

let CurrentNav : any = styled.img`
  position: absolute;
  width: 3%;
  height: auto;
  margin-left: 51.5vw;
`;


function Grade(props: any) {
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
      +`다름이 아니라, 이번 ${props.inputValue.gradeContent0_1} 수업에서 ${props.inputValue.gradeContent0_2} 부분에 대해 저는 최선을 다했습니다.\r\n`
      +`${props.inputValue.gradeContent0_plus1}\r\n`
      +`그럼에도 예상과 달리 다소 낮은 성적을 받아 조금 아쉽습니다.\r\n`
      +`${props.inputValue.gradeContent0_plus2}\r\n`
      +`어떤 부분이 부족하여 이런 성적을 받았는지 여쭙고 싶어 메일을 작성하게 되었습니다.\r\n`
      +`${props.inputValue.gradeContent0_plus3}\r\n`
      +`교수님의 피드백을 바탕으로 이후 부족한 점을 보완하고자 하니, 바쁘시겠지만 꼭 한 번 다시 검토해주시면 감사하겠습니다.\r\n`
      +`${props.inputValue.gradeContent0_plus4}\r\n`
      +`${props.inputValue.ending}`;
    }
    else if(props.inputValue.recommendState == 1){
      copiedForm = `안녕하십니까 ${props.inputValue.professorName}교수님\r\n`
      +`저는 ${props.inputValue.myName}입니다.\r\n`
      +`${props.inputValue.greeting}\r\n`
      +`${props.inputValue.commonContent_plus}\r\n`
      +`다름이 아니라 각 항목에 대한 취득 점수 및 상세 성적을 알 수 있을까 싶어 메일을 보내게 되었습니다.\r\n`
      +`${props.inputValue.gradeContent1_plus1}\r\n`
      +`과제와 시험 모두 나름대로 열심히 준비했는데, 예상한 결과보다는 아쉬운 결과에 문의를 드리게 되었습니다.\r\n`
      +`${props.inputValue.gradeContent1_plus2}\r\n`
      +`제가 어떤 부분에서 부족했고, 앞으로 어떠한 부분을 보완하는 것이 좋을지 의견을 여쭙고 싶어 실례를 무릅쓰고 메일 드립니다.\r\n`
      +`${props.inputValue.gradeContent1_plus3}\r\n`
      +`제가 어떤 부분이 부족했는지 알려주시면 학업에 참고하여 보완하고 싶습니다.\r\n`
      +`${props.inputValue.gradeContent1_plus4}\r\n`
      +`${props.inputValue.ending}`;
    }
    
    copyInClipboard();
  }
  return (
  <div>
    <CurrentNav src="img/Union.png"/>
    <div className='mailTextContainer'>
      <PostList tabType={'grade'}/>
      
    </div>
    <div className='buttonContainer'>
      <div className='functionBtn'>맞춤법 검사하기</div>
      <div onClick={()=>{window.location.replace("/grade")}} className='functionBtn'>Clear</div>
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
export default connect(f1)(Grade);