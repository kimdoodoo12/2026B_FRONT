

let a = prompt("밑변과 높이를 입력하시오").split(" ").map(Number)
console.log(`${a[0] * a[1] / 2}`)

let C = Number(prompt("섭씨 온도"))
console.log(`${C* 9 / 5}`)

let year = Number(prompt("출생 연도"))
console.log(`${2025-year}`)

let height = Number(prompt("키: (cm)"))
height /= 100
let weight = Number(prompt("몸무게: (kg)"))
console.log(`BMI: ${weight / (height * height)}`)


let user_id = prompt("ID: ")
let user_email = prompt("EMAIL: ")
console.log(`${(user_id == "admin" || user_email == "admin@test.com" ? "관리자" : "일반사용자")}`)


let score = Number(prompt("점수: "))
document.querySelector("h2").innerHTML = `${(score > 90 ? "C": score > 80 && score < 90 ? "B" : "C")}`


let age = Number(prompt("나이: "))
console.log(`${age >= 20 && age <= 29 ? "이벤트 대상입니다" : "이벤트 대상이 아닙니다"}`)

let likeCount = 3
likeCount++
console.log(`종아요: ${likeCount}`)

let todoList = ['장보기', '과제하기']
todoList.push(prompt("새로운 할일을 입력하시오"))
console.log(todoList)

let waitingList = ['김민준', '이서연', '박도준', '최지우']
console.log(waitingList[waitingList.length - 1])