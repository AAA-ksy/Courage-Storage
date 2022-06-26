# 자신감 저장소(Courage Storage) 프로젝트
- 칭찬이나 자신감을 북돋아주는 말을 들었을 때 저장해놓는 사이트
- https://courage-storage.vercel.app/

## 목차
- [설계](#설계)
- [프로토타입 및 기능](#프로토타입-및-기능)
- [개발일지](#개발일지)
  
## 설계
### 목표
- `react`와 `typescript` 사용에 익숙해지기
- 설계에 맞게 프로젝트 **완성**

### 기술스택
| 구분 | 사용 |
|:---:|:---:|
|Lang|Typescript|
|Library|React, Redux|
|CSS Framework|Tailwind|

## 프로토타입 및 기능
### Welcome 페이지
![Welcome](./public/Prototype/Welcome.JPG)
- 사용자 이름 입력받기(고유id X)
   - 이름은 props로 Homepage 컴포넌트로 전달
- '입장하기' 클릭 시, 홈페이지로 이동

### Homepage
![Homepage](./public/Prototype/Homepage.JPG)
- 헤더 : 웰컴페이지에서 입력받은 사용자 이름 출력
- '+' 버튼 클릭 시, 모달창 생성
- 아이템
   - 클릭 시, 내용 확인
   - 호버링 시, 확대or축소 모션
   - 생성 순서대로 id(number) 부여
   - 색은 무작위로 선정
   - 앞에서부터 추가
   - 화면 사이즈에 따라 위치 변화

### View-Item
![View-Item](./public/Prototype/View-Item.JPG)
- 내용 확인
   - 새로운 모달창 팝업
- '수정하기' 클릭시, 내용 수정 가능
- '삭제하기' 클릭시, 알림창으로 삭제의사 확인 후 삭제
- 창 닫기
   - 우측 상단의 X 버튼 클릭

### Add-Item
![Add-Item](./public/Prototype/Add-Item.JPG)
- 내용 추가(Form)
   - 새로운 모달창 팝업
   - 헤더의 N은 마지막 아이템의 id+1
   - placeholder로 예시 문구 지정
   - '저장하기' 클릭 시, 입력 내용 저장 및 홈페이지에 새로운 아이템 추가
- 데이터 저장
   - 현재 `localStorage`
   - 추후 서버리스(cloudeflare, firebase 등) 사용

## 개발일지
- [개발일지1](https://yeon-blog.vercel.app/blog/Self-Project1)