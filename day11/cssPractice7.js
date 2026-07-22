let 가계부 = [
    {datetime: "", name: "", price: ""},
]
function register(){
    const datetime = document.querySelector('.datetime-local').value
    const name = document.querySelector('.name').value
    const price = document.querySelector('.price').value
    let price2 = Number(price).toLocaleString();

    let history = {datetime, name, price2}
    가계부.push(history)
    document.querySelector(`tbody`).innerHTML += `<tr> <td>${datetime}</td> <td>${name}</td> <td>${price2}</td> </tr>`
}

// 기본적으로 등록함수와 출력함수를 나누어야 한다
// 1. 어디에 2. 무엇을 3. 출력

// 1,000,000,000
// 1,000,000,000