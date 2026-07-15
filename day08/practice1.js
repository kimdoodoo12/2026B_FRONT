// 사용자로부터 제품명, 가격, 제조사를 입력받음
let name = prompt("제품명")
let price = prompt("가격")
let madeby = prompt("제조사")

// product 구조체를 선언과 동시에 사용자에게 입력 받은 값을 대입
const product = {name: name, price: price, madeby: madeby}

console.log(product)

// members 구조체 선언
const members = [
    {id: 'user1', password: `pass1`, name:`사용자1`},
    {id: `user2`, password: `pass2`, name:`사용자2`}
]


// 사용자로부터 아이디, 비밀번호, 이름을 입력받음
let user_id = prompt("아이디")
let user_password = prompt("비밀번호")
let user_name = prompt("이름")

// members 구조체를 순회, 이 때 i는 문자열이 index로 취급
for(i in members){
    // 입력받은 id가 구조체[i]번 째의 id와 같으면 콘솔 출력 및 반복문 탈출
    if (user_id == members[i].id){
        console.log("존재하는 아이디입니다")
        break
    }
    // 그 외에는 입력받은 정보들을 모두 members 구조체에 push하고 반복문 탈출
    else{
        members.push({user_id, user_password, user_name})
        break
    }
}

console.log(members)



// 평균점수 선언과 scores 구조체 선언
let average_score = 0
const scores = [
    {name: 'A', math:80, science:92},
    {name: 'B', math:95, science:88},
    {name: 'C', math:76, science:78},
]

// scores 구조체 순회
for (i in scores){
    // 평균점수에 scores[i]번째의 수학점수만 계속해서 합
    average_score +=scores[i].math
}
// 합한 점수와 scores 구조체 길이를 나누어 평균값으로 콘솔 출력
console.log(`${average_score/scores.length}`)



// products 구조체 배열 선언
const products = [
    {id: 1, name:'사과'},
    {id: 2, name:'바나나'},
    {id: 3, name:'포도'},
    {id: 4, name:'딸기'},
]

// find함수를 통해 id가 2인 item 콘솔 출력
console.log(products.find(item => item.id == 2))


// users 구조체 배열 선언과 activeUsers 선언
const users = [
    {id: 1, name:'유저1', isActive:true},
    {id: 2, name:'유저2', isActive:false},
    {id: 3, name:'유저3', isActive:true},
    {id: 4, name:'유저4', isActive:false},
]
const activeUsers = [
    {},
]

// users 구조체 순회
for (i in users){
    // user[i]번째가 isActive가 true 인경우 그 요소를 activeUsers에 push
    if (users[i].isActive == true){
        activeUsers.push(users[i])
    }
}

console.log(activeUsers)


// movies 구조체 선언과 moiveTitles 구조체 선언
const movies = [
    {title:'인셉션', director:'크리스토퍼 놀란'},
    {title:'기생충', director:'봉준호'},
    {title:'매트릭스', director:'워쇼스키 자매'},
]
const movieTitles = [ {}]

// movies 전체 순회
for (i in movies){
    // movies[i]번째의 title만 movieTitles 구조체에 push
    movieTitles.push(movies[i].title)
}
console.log(movieTitles)


// team 구조체 선언과 result 구조체 선언
const team = [
    {name: '철수', department: '개발팀'},
    {name: '영희', department: '기획팀'},
    {name: '민수', department: '개발팀'},
    {name: '지혜', department: '기획팀'},
]
const result = {'개발팀': [ ], '기획팀': [ ]}

// team 구조체 순회
for (i in team){
    // team[i]번째의 department가 '개발팀'이면 result의 개발팀 속성에 team[i]번째의 이름 push
    if(team[i].department == '개발팀'){
        result.개발팀.push(team[i].name)
    }
    // team[i]번째의 department가 '기획팀'이면 result의 기획팀 속성에 team[i]번째의 이름 push
    else if (team[i].department == '기획팀'){
        result.기획팀.push(team[i].name)
    }
}

console.log(result)


// 장바구니 구조체와 상품 정보 구조체 선언
const cart = [{id:1, quantity:2}, {id:3, quantity: 1}]
const productsInfo = [
    {id:1, price:1000},
    {id:2, price:5000},
    {id:3, price:2500}
]
let total = 0

// cart 구조체 순회
for (i in cart){
    // productsInfo에서 cart[i]번째의 id를 찾아 price 속성값을 cart[i]번째의 quantity를 곱해 대입한다
    total += productsInfo.find(item => item.id == cart[i].id).price * cart[i].quantity
}

console.log(total)


// 투표 결과 배열 선언과 투표 결과 구조체 선언
const votes = ['A', 'B', 'B', 'C', 'A', 'B', 'A']
const voteResult = {A: 0, B: 0, C: 0}

// votes 배열 순회
for (i in votes){
    // votes[i]가 A 인경우 투표결과 구조체 A 속성에 1을 더함
    if (votes[i] == 'A'){
        voteResult.A += 1
    }
    // votes[i]가 B 인경우 투표결과 구조체 B 속성에 1을 더함
    else if (votes[i] == 'B'){
        voteResult.B += 1
    }
    // votes[i]가 C 인경우 투표결과 구조체 C 속성에 1을 더함
    else if (votes[i] == 'C'){
        voteResult.C += 1
    }
}

console.log(voteResult)


// ★ ☆
const webtoons = [
    {title: '나 혼자만 레벨업', rating: 9.8},
    {title: '유미의 세포들', rating: 9.9},
    {title: '전지작 독자 시점', rating: 9.7},
]

// webtoons 구조체 순회
for (i in webtoons){
    // id가 rating인 html을 찾아 webtoons[i]번째의 title, webtoons[i]번째의 rating을 정수부분만큼 repeat을 통해 ★문자 반복, 만점 10점에서 뺀 수만큼 ☆문자 반복, 줄바꿈 br을 더함
    document.getElementById("rating").innerHTML += `<span>${webtoons[i].title} ${"★".repeat(parseInt(webtoons[i].rating))}${"☆".repeat((10-parseInt(webtoons[i].rating)))}</span> <br />`
}
