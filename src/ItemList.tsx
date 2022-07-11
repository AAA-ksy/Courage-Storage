import React, { useState } from "react";
import SingleItem from "./SingleItem";
import './index.css';

export default function ItemList() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [when, setWhen] = useState("");
    const [who, setWho] = useState("");
    const [situation, setSituation] = useState("");
    const [comment, setComment] = useState("");
    const [feeling, setFeeling] = useState("");

    //localStorage 데이터 불러오기
    const items = Object.keys(window.localStorage); //localStorage의 key 목록 조회
    for(const item of items){   //key에 해당하는 value 찾기
        const value = localStorage.getItem(item);   //value : string
            if(!value){                             // value의 null 예외처리
                throw new Error('No saved value');
            }
        const objValue = JSON.parse(value);         //value값을 객체로 변환
    }
    // const list = items.map((item) => { <div key={item.id} className="h-1/6 w-60 m-5 flex-col justify-center flex rounded-[45px] bg-[#d8e2dc] 
    // hover:scale-105 cursor-pointer" onClick={handleModalOpen}>?</div> });

    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
        console.log("isModalOpen in handleModalOpen : "+isModalOpen);
    }

    const handleSubmit = (e:React.FormEvent) => {
        //submit 기본동작 방지
        e.preventDefault();

        //item번호 지정
        var tmpid = localStorage.length+1;
        //localStorage에 저장할 데이터 구조
        const objData = {
            id : tmpid,
            data : {
                objWhen: when,
                objWho : who,
                objSituation: situation,
                objComment : comment,
                objFeeling: feeling
            }
        };

        //localStorage에 JSON 형식으로 저장
        localStorage.setItem(tmpid.toString(),JSON.stringify(objData));

        //input 입력값 초기화
        setWhen("");
        setWho("");
        setSituation("");
        setComment("");
        setFeeling("");

        //모달창 닫기
        //handleModalOpen();
        setIsModalOpen(!isModalOpen);
        console.log("isModalOpen in handleSubmit : "+isModalOpen);
    
    }

    return (
        <div className="flex flex-row flex-wrap h-full border-t-2 border-t-cusHeaderBorder">
            <div className="h-1/6 w-60 m-5 flex-col justify-center flex rounded-[45px] bg-[#d8e2dc] 
            hover:scale-105 cursor-pointer" onClick={handleModalOpen}>
                <span className="text-4xl text-white font-addItem ">+</span>
            </div>
            <div className={"fixed bg-black/50 top-0 left-0 w-full h-full z-10 "+(isModalOpen ? "" : "hidden" )}>
                <form className="flex flex-col justify-between justify-items-end items-center fixed top-1/2 left-1/2 w-[800px] h-[600px] 
                -translate-x-1/2 -translate-y-1/2 bg-[#e8e8e4] rounded-[60px] z-[11] p-10" onSubmit={handleSubmit}>
                    <div className="items-center w-full pb-4 text-2xl border-b-2 border-black font-itemHeader">
                        {localStorage.length == 0 ? 1 : localStorage.length}번째 자신감
                    </div>
                    <div className="label-input">
                        <label className="label-style" htmlFor="when">언제?</label>
                        <input className="input-style" id="when" type="text" placeholder="대학교 1학년 때" value={when}
                        onChange={(e)=>{setWhen(e.target.value)}} required />
                    </div>

                    <div className="label-input">
                        <label className="label-style" htmlFor="who">누가?</label>
                        <input className="input-style" id="who" type="text" placeholder="룸메이트가" value={who}
                        onChange={(e)=>{setWho(e.target.value)}} required/>
                    </div>

                    <div className="label-input">
                        <label className="label-style" htmlFor="situation">어떤 상황에서?</label>
                        <input className="input-style" id="situation" type="text" placeholder="시험 공부하고 있는 기숙사에서" value={situation}
                        onChange={(e)=>{setSituation(e.target.value)}} required />
                    </div>

                    <div className="label-input">
                        <label className="label-style" htmlFor="comment">어떤 말을?</label>
                        <input className="input-style" id="comment" type="text" placeholder="ㅇㅇ이는 게으름 안 피우고 시험 대비 잘하는 것 같아" value={comment}
                        onChange={(e)=>{setComment(e.target.value)}} required/>
                    </div>

                    <div className="label-input">
                        <label className="label-style" htmlFor="feeling">그때 내 기분은?</label>
                        <input className="input-style" id="feeling" type="text" placeholder="내 성실함을 인정받은 것 같아 기분 좋았음!" value={feeling}
                        onChange={(e)=>{setFeeling(e.target.value)}}  required/>
                    </div>

                    <div className="pb-5">
                        <button className="absolute text-lg font-itemContent left-1/3" type="submit">저장하기</button>
                        <button type="button" className="absolute text-lg font-itemContent right-1/3" onClick={handleModalOpen}>취소</button>
                    </div>
                </form>
            </div>
            <SingleItem />
        </div>
    );
  }