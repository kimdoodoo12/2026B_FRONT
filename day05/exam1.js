let name = prompt("type 3 names").split(" ").map(String)
console.log(name)
for (let i=0; i < name.length; i++){    console.log(name[i]) }


let html = ``
for (let i=0; i<= name.length - 1; i++){
    html += `<li> ${name[i]} </li>`
}
document.querySelector("ol").innerHTML = html