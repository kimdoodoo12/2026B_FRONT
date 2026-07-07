

10 // 숫자
"유재석" // 문자열
true // 논리
{ } // 객체
[ ] //
function fx() {} //
undefined //
null //

console.log("wsg")

// 변수: 하나의 자료 저장하나는 메모리(컴퓨터 저장 단위) 공간
// 1. let 2. 변수 이름 
let ten = 100

console.log(ten)

ten = 200
console.log(ten)

// 상수 정의 (수정불가)
// 1. const 2.초기값 필수
const twoHundred = 200

// 출력함수
// 1. console.log (출력할 자료)
console.log("sup")
// 2. alert (출력할 자료)
alert("wsp")
// 3. document(html문서), query(질의), Selector(선택자), inner(마크업 사이에 있는 본문)HTML
document.querySelector("p1").innerHTML = "JS에서 대입한 값"


//입력함수
// 1. confirm(출력 메시지) YES OR NO
let feeling = confirm("u good?")
console.log("u good: " + feeling)

// 2. prompt
let user_prompt = prompt("type anything")
console.log("what you typed: " + user_prompt)