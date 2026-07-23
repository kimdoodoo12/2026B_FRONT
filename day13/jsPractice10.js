



// 회원가입 기능
function signup(){
    let users = JSON.parse(localStorage.getItem('memberList'))
    if (users == null) {
    users = [{"no": 0, "id": 'admin', "password": 'admin'}, ]
    localStorage.setItem('memberList', JSON.stringify(users))
    }
    // 회원 번호, 회원이 증감함에 따라 회원번호는 증가
    let no = users.length-1
    // input 값의 id와 password을 꺼내옴
    let signId = document.querySelector('.signId').value
    let signPw = document.querySelector('.signPw').value

    // 이미 존재하는 id인 경우 alert와 return
    for (i in users){
        if(signId == users[i].id){
            alert("이미 존재하는 아이디입니다")
            return;
        }
    }



    // 객체화 및 푸쉬 로컬 스토리지 저장
    let user = {"no": no ,"id": signId, "password": signPw}
    users.push(user)
    
    localStorage.setItem("memberList", JSON.stringify(users))
    
    alert("회원 가입 성공")
    return
}

function login(){
    let users = JSON.parse(localStorage.getItem('memberList'))
    if (users == null) {
    users = [{"no": 0, "id": 'admin', "password": 'admin'}, ]
    localStorage.setItem('memberList', JSON.stringify(users))
}
    // input 값의 id와 password을 꺼내옴
    let loginId = document.querySelector('.loginId').value
    let loginPw = document.querySelector('.loginPw').value

    for (i in users){
        if (loginId == users[i].id){
            if(loginPw == users[i].password){
                alert("로그인 성공")
                return
            }
            else{alert("비밀번호 틀리심"); return;}
        }
    }
    alert("로그인 실패")

}