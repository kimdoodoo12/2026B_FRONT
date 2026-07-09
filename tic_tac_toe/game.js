

let count = 1
let shape ="O"
let arr = new Array(8)

// 테이블로부터 각 id와 숫자를 매개변수로 받음
function table_click_function(id, number){



    // count가 짝수면 Player O의 차례
    // count가 홀수면 Player X의 차례
    if (count % 2 == 1) shape = "O"
    else if (count % 2 == 0) shape = "X"

    // 각 player의 차례에 맞는 shape로 변경
    document.getElementById(id).innerHTML = shape
    // 틱택토 배열에 삽입
    arr[number] = shape
    console.log(arr)
    // 테이블 값을 넣으면 다음턴을 위한 count 증가
    count++

    // 게임 끝나는 조건


    // 1. 이기는 경우의 수가 "O" 또는 "x" 중 하나라도 나왔을 때

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

    // 2. 보드가 꽉찼을 때 무승부
    else if (count == 10) alert("무승부")
    }
