
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