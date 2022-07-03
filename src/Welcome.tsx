import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';

export default function Welcome() {
 
  const [inputName, setInputName] = useState("");
  
  return (
    <div className="flex flex-col h-full">
      <div className="w-full h-20 bg-cusBrown"/>
      <div className="items-stretch w-full bg-cusYellow/70 h-5/6">
        <h1 className="pt-12 text-5xl font-welcomeTitle">
            <span className="text-cusYellowTitle">자신감 저장소</span>
            <span className="text-5xl font-welcomeTitle">에 오신 것을 환영합니다!</span>
        </h1>
        <p className="pt-16 text-2xl leading-10 font-welcomeContent">살다보면 누구나 지치고, 힘들때가 찾아오죠.<br />
            자신감 저장소는 바로 그때를 위해 존재합니다.<br />
            친구, 가족, 동료에게 들었던 칭찬의 말과 자신감을 북돋아주었던 말을 자신감 저장소에 저장해보세요!<br />
            그리고, 무기력해질 때, 자신감이 사라졌을 때 저장해두었던 자신감을 돌이켜보면 긍정의 기운을 얻을 수 있을 겁니다.<br />
        </p>
        <p className="pt-16 text-2xl leading-10 font-welcomeContent">
            "자신감 저장소"에 입장하기 전에, 이름을 입력해주세요!
        </p>
        <input id="name" type="text" placeholder="이름을 입력해주세요" 
        className="pl-3 mt-5 text-2xl leading-10 border rounded-lg input font-welcomeContent focus:border-transparent focus:ring-yellow-200 focus:ring-4 border-slate-500 " 
        onChange={(e)=>{
          setInputName(e.target.value);
        }} required/>
        <div className="pt-10 text-2xl font-welcomeContent hover:underline hover:text-[1.6rem]">
          <Link to={'/home'} state={{name: inputName}}>입장하기</Link>
        </div>
      </div>
      <div className="w-full h-20 bg-cusBrown" />
    </div>
  );
}