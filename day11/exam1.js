// HTML 전체 DOM 확인
console.log(document)

// HTML내 특정 마크업 확인
const div = document.querySelector('div')
console.log(div)

const box2 = document.querySelector('.box2')
console.log(box2)

const box3 = document.querySelector('#box3')
console.log(box3)


// 가져온 DOM 마크업 전체 확인
const divHTML = div.innerHTML // <마크업> inner </마크업>
console.log(divHTML)

divHTML.innerHTML = '상자 1'

// 입력받은 값 가져오는 속성
const name = document.querySelector('.name')
const value = name.value
console.log(value)
name.value = "제목입력해!"

// 함수활용: 입력받은 값 함수 내 가져오기

function register(){
    // 특정 마크업 DOM 가져오기
    const title = document.querySelector('.title')

    // 가져온 마크업 DOM에서 value 속성 가져오기
    const value = title.value

    // 특정 위치에 출력
    box2.innerHTML = value
}

// CSS 활용
const title2 = document.querySelector('.title2')
title2.style = "color:red; font-size:5px"