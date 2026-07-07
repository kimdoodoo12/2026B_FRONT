let name = prompt("주무하는 손님의 이름")
let menu = prompt("메뉴")
let amount = prompt("수량")

let name2 = prompt("운동한 사람의 이름")
let exercise = prompt("운동종류")
let time = prompt("운동시간 (분 단위)")

document.querySelector("p1").innerHTML = "[주문 접수]<br /> 이름<br />  " + name + "<br />메뉴<br />  " + menu + "<br />수량<br />" + amount
console.log("[운동기록]\n" + name2 + "\n운동종류\n" + exercise + "\n운동시간\n" + time + "\n칼로리\n" + 7*time)