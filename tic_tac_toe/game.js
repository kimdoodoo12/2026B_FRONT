

let count = 1
let shape ="O"
let max_size = 8
let arr = new Array(8)

function table_click_function(id, number){



    // 게임 진행
    if (count % 2 == 1) shape = "O"
    else if (count % 2 == 0) shape = "X"
    document.getElementById(id).innerHTML = shape
    arr[number] = shape
    console.log(arr)
    count++

    // 게임 끝나는 조건
    // 1. 보드가 꽉찼을 때
    if (arr.length)
    // 2. 이기는 경우의 수가 "O" 또는 "x" 중 하나라도 나왔을 때

    if (arr[0] == "X" && arr[1] == "X" && arr[2] == "X") alert("player X 승리")
    else if (arr[3] == "X" && arr[4] == "X" && arr[5] == "X") alert("player X 승리")
    else if (arr[6] == "X" && arr[7] == "X" && arr[8] == "X") alert("player X 승리")
    else if (arr[0] == "X" && arr[3] == "X" && arr[6] == "X") alert("player X 승리")
    else if (arr[1] == "X" && arr[4] == "X" && arr[7] == "X") alert("player X 승리")
    else if (arr[2] == "X" && arr[5] == "X" && arr[8] == "X") alert("player X 승리")
    else if (arr[0] == "X" && arr[4] == "X" && arr[8] == "X") alert("player X 승리")
    else if (arr[2] == "X" && arr[4] == "X" && arr[6] == "X") alert("player X 승리")
    else if (arr[3] == "X" && arr[4] == "X" && arr[5] == "X") alert("player X 승리")

    else if (arr[0] == "O" && arr[1] == "O" && arr[2] == "O") alert("player O 승리")
    else if (arr[3] == "O" && arr[4] == "O" && arr[5] == "O") alert("player O 승리")
    else if (arr[6] == "O" && arr[7] == "O" && arr[8] == "O") alert("player O 승리")
    else if (arr[0] == "O" && arr[3] == "O" && arr[6] == "O") alert("player O 승리")
    else if (arr[1] == "O" && arr[4] == "O" && arr[7] == "O") alert("player O 승리")
    else if (arr[2] == "O" && arr[5] == "O" && arr[8] == "O") alert("player O 승리")
    else if (arr[0] == "O" && arr[4] == "O" && arr[8] == "O") alert("player O 승리")
    else if (arr[2] == "O" && arr[4] == "O" && arr[6] == "O") alert("player O 승리")
    else if (arr[3] == "O" && arr[4] == "O" && arr[5] == "O") alert("player O 승리")
    }
