// let korean = prompt("국어 점수: ")
// let english = prompt("영어 점수: ")
// let math = prompt("수학 점수: ")
// korean = parseInt(korean)
// english = parseInt(english)
// math = parseInt(math)

// let total_score = 0
// total_score += korean
// total_score += english
// total_score += math

// let average_score = 0
// average_score = total_score/3
// console.log("총점: " + total_score + " 평균점수: " + average_score)


// let r = prompt("반지름 길이 입력: ")
// r = parseFloat(r)
// console.log(`원넓이: ${r*r*3.14}`)

// let a = prompt("두 실수를 입력하시오").split(" ").map(Number)
// console.log(a[0]/a[1])

// let b = Number(prompt("정수를 입력하시오"))
// console.log((b%7==0) ? true : false)


// let user_id = prompt("ID: ")
// let user_password = prompt("Password")

// console.log(Boolean(user_id == "admin" && user_password == "1234"))


// let c = Number(prompt("정수를 입력하시오"))
// console.log(`${Boolean(c%7==0 || c%2==1)}`)


// let first_score = Number(prompt("1차 점수: "))
// let second_score = Number(prompt("2차 점수: "))
// console.log(`${(first_score + second_score > 150 ? "합격" : "불합격")}`)


let name1 = prompt("이름1: ")
let name2 = prompt("이름2: ")
document.querySelector("ol").innerHTML = `<li>${(name1 == "유재석" ? name1 + "(방장)" : name1)}</li> <li>${(name2 == "유재석" ? name2 + "(방장)" : name2)}</li>`
