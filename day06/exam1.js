let result = ""

for (a=1; a<9; a++){
    for (i=a; i<9; i++){
        result += " "
    }
    for (j=1; j<=a; j++){
        result += "* "
    }
    result += "\n"
}

for (a=9; a>=1; a--){
    for (i=a; i<9; i++){
        result += " "
    }
    for (j=1; j<=a; j++){
        result += "* "
    }
    result += "\n"
}


console.log(result)




// 1. 공백 4번 별 하나
// 2. 공백 3번 별 둘
// 3. 공백 2번 별 셋
// 4. 공백 1번 별 하나



//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *