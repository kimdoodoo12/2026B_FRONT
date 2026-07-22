let partList = [
    {pcode: 0, pname: '개발팀'},
    {pcode: 1, pname: '디자인팀'},
    {pcode: 2, pname: '기획팀'}
]

let vacationList=[					
	{mcode:1,vstart:'2025-08-04',vend:'2025-08-04',vreason:'병원진료'},					
	{mcode:2,vstart:'2025-07-21',vend:'2025-07-25',vreason:'여름휴가'}					
]					
						
let memberList=[					
	{mcode:1, mname:'김민준',mposition:'신입 개발자',mimg:'https://placehold.co/100x100',pcode:0},					
	{mcode:2, mname:'이서연',mposition:'수석 디자이너',mimg:'https://placehold.co/100x100',pcode:1},					
	{mcode:3, mname:'박도윤',mposition:'팀장',mimg:'https://placehold.co/100x100',pcode:2},					
	{mcode:4, mname:'유재석',mposition:'대리',mimg:'https://placehold.co/100x100',pcode:0}					
]					

function showMember() {
    
    let html = ''
    // pcode에 맞는 pname 찾기
    // pcode는 partList에 있음

    for (let index = 0; index < memberList.length; index++){

        // pcode에 맞는 pname을 찾고, pname에 선언
        let temp = memberList[index].pcode
    
        result = partList.find(item => item.pcode == temp)


        html += `
            <tr>
              <td><img src=${memberList[index].mimg} alt="프로필" class="profile-img"></td>
              <td>${memberList[index].mname}</td>
              <td>${result.pname}</td>
              <td>${memberList[index].mposition}</td>
              <td class="action-links align-right">
                <a href="#" onclick="memberUpdate(${memberList[index].mcode})" class="link-edit">수정</a>
                <a href="#" onclick="memberDelete(${memberList[index].mcode})" class="link-delete">삭제</a>
              </td>
            </tr>
        `
    }
    document.querySelector('.card.sub-section tbody').innerHTML = html
} showMember(); // 함수선언 후 사원목록 출력

function memberUpdate(mcode){

    for (index=0; index<memberList.length; index++){
        if(mcode == memberList[index].mcode){
            let newMebmerName = prompt("새로운 이름을 입력하시오")
            let newMemberPart = prompt("새로운 부서를 입력하시오")

            // 없는 부서일 경우 실패
            for (j=0; j<partList.length; j++){
                if (partList.find(item => item.pname === newMemberPart)){
                    newMemberPart = partList[j].pcode
                    break;
                }
                else{
                    alert("없는 부서입니다")
                    return
                }
            }

            let newMemberPosition = prompt("새로운 직급을 입력하시오")

            memberList[index].mname = newMebmerName
            memberList[index].pcode = newMemberPart
            memberList[index].mposition = newMemberPosition
            break;
        }
    }

    showMember()
    return
}
function memberDelete(mcode){
    for (index=0; index <memberList.length; index++){
        if(mcode == memberList[index].mcode){
            memberList.splice(index, 1)
            alert("삭제성공")
            break;
        }
    }
    showMember()
    return
}

let memberCode = memberList[memberList.length-1].mcode
function memberAdd(){
    
    memberCode += 1
    let memberName = document.querySelector('.memberName').value
    let memberPosition = document.querySelector('.memberPosition').value
    let memberPart = document.querySelector('.memberPart').value
    let memberImage = document.querySelector('.memberImg').files[0]

    
    let object = {mcode: memberCode, mname: memberName, mposition:memberPosition, mimg: memberImage == undefined ? 'https://placehold.co/100' : URL.createObjectURL(image),pcode:0}
    console.log(memberCode)	
    memberList.push(object)
    showMember();
}