
// 세션 스토리지
// - 모든 바ㅡ라우저가 종료되면 자동 삭제
// - 서로 다른 브라우저/탭 자료 공유 안됨

// 로컬 스토리지
// - 모든 브라우저가 종료해도 저장 유지
// -서로 다른 브라우저/탭 자료 공유 됨. (동일한 도메인의 경우만)




// [1] 웹스토리지 객체 호출
console.log(localStorage)
console.log(sessionStorage)

// [2] 웹 스토리지 객체 내 자료 추가 
sessionStorage.setItem('name', '유재석')
localStorage.setItem('age', 40)

// [3] 웹 스토리지 객체 내 자료 호출 .getItem('key')
let name = sessionStorage.getItem('name')
let age = localStorage.getItem('age')
console.log(name); console.log(age)

// [4] 웹 스토리지 객체 내 자료 삭제
sessionStorage.removeItem('name'); console.log(sessionStorage)
localStorage.clear(); console.log(localStorage)

// 동적 타입
let a = 10 // js
a = 10 // python

// 정적 타입
// int a = 10 // C언어

// [5] JSON(자바스크립트 객체), 
// JSON.stringfy (객체) : 객체 타입 --> 문자 타입
sessionStorage.setItem('회원객체', JSON.stringify({'name': '유재석', 'age': 40}))

let 회원객체 = sessionStorage.getItem('회원객체') // 문자열로 나옴
console.log(회원객체)

let 회원객체2 = JSON.parse(sessionStorage.getItem('회원객체'))
console.log(회원객체2)

// JS는 브라우저가 새로고침 메모리가 초기화된다. 그래서 백엔드가 필요하다