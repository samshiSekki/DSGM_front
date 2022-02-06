import React, {useState} from 'react';
import PostList from './PostList';


function Grade() {
  const [major, setMajor] = useState('');
  const [name, setName] = useState('');
  const [firstSelect, setFirstSelect] = useState('');
  return (
  <div>
    <div className='mailTextContainer'>
      <PostList tabType={'grade'}/>
       {/*  교수님 안녕하세요! <br/>
        <input onChange={(e)=>{setMajor(e.target.value)}}/>학과 <input onChange={(e)=>{setName(e.target.value)}}/>입니다. <br/>
        이 페이지는 빌넣 페이지 <br/>
        <select onChange={(e)=>{setFirstSelect(e.target.value)}}>
          <option value="none">선택</option>
          <option value="text1">텍스트1</option>
          <option value="text2">텍스트2</option>
        </select>
        <br/>
        ㅎㅎㅎㅎㅎㅎㅎ <br/>
        감사합니다 */}
    </div>
    <div className='buttonContainer'>
      <div className='functionBtn'>맞춤법 검사하기</div>
      <div onClick={()=>{window.location.replace("/grade")}} className='functionBtn'>Clear</div>
      <div id='copyBtn'>복사하기</div>
    </div>
  </div>
  );
}

export default Grade;
