

function register(){
    const datetime = document.querySelector('.datetime-local').value
    const name = document.querySelector('.name').value
    const price = document.querySelector('.price').value
    price2 = price.toLocaleString();

    
    document.querySelector(`tbody`).innerHTML += `<tr> <td>${datetime}</td> <td>${name}</td> <td>${price2}</td> </tr>`
}

