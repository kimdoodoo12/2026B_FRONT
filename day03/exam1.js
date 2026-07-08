console.log("JS 실행")


// [1] 숫자 타입
// 1. 정수
console.log(10)
console.log(typeof(10))
// 2. 실수: 부동소수점,
console.log(3.14)
console.log(typeof(3.14))

// [2] 문자열 타입
// 1. ' ', " ", ` `
console.log("bro")
console.log('bro')
console.log(`bro`)



// 2. 문자열 연결
console.log( 'br' , 'uh')
console.log('br' + 'uh')
console.log(`br${ 3 }`) // 문자열 템플릿 ? 문자열대 코드 포함
console.log('br' + 3) // 문자열 + 숫자 -> 문자열

let a = 10
console.log("안녕" + a) // 문자열 + 변수(숫자) => 문자열
console.log(`안녕 ${ a }`)

// 3. 이스케이프(제어) 문자, \ 백슬래시

console.log('\\안녕')
console.log('\n안녕')
console.log('\'안녕')
console.log('\t안녕')

// [3] Boolean(논리) 타입, 논리연산자 사용
console.log(true)
console.log(false)
console.log( 10 > 3)

// [4] 
let shit // 변수선언만
console.log(shit) // undefined
let dogshit = null // 변수 선언, 초기화
console.log(dogshit)

// [5] 배열
// 대괄호안에 , 쉼표 이용하여 여러개 자료들을 하나의 자료에 표현, 배열중첩가능
// 인덱스
let array = ['bro', 'fam', 'dawg', 'homie', ['dude', 'man']]
console.log(array)
console.log(array[0])

array.splice(3, 1) // 3번 인덱스 자리에 요소 1개를 삭제한다

// inedxOf(찾을값), 만약에 찾을 값이 존재하지않으면 -1 반환
let index = array.indexOf('fam')
console.log(index)

// includes(찾을값), 만약에 찾을 값이 존재하면 true, 존재하지 않으면 false
console.log(array.includes('fam'))


// 자바 스크립트는 원시값은 값처럼 동작하지만 객체는 참조값을 통해 다룬다
// 그러나 파이썬은 모든 변수에 대해서 참조를 한다.



// [6] 타입변환, 3 vs "3" 숫자 3과 문자 3은 다르다.
//1. 자동타입 변환
console.log(3 + 3.14) // 정수 + 실수 = 실수
console.log('age:' + 40) // 문자 + 숫자 => 문자
console.log(3 + true) // 숫자 + 논리 => 숫자

// 2. 직접 타입변환
console.log(Number("10"))
console.log(Number("10A")) // NaN(Not a Number) 오류
console.log(parseInt("10")) // 문자열 10 => 숫자(정수) 10으로 변환
console.log(parseFloat("10")) // 문자열 10 => 숫자(실수) 10.0 으로 변환
console.log(String(10)) // 숫자 10 => 문자열 "10"으로 변환
console.log(10 + "")

// [7] 연산자
// 1.산술연산자: + - / %
// 2.연결연산자: +연결
// 3.비교연산자: > < >= <= == ===(값/타입) !==(값/타입)
// 4.논리연산자: && || !
// 5.대입연산자: =
// +복합연산자: += -= *= /= %=
// ++변수명: 선위증가, 변수명++: 후위 증가, --변수명: 선위감소, 변수명--: 후위감소
// 7.삼항연산자: 조건 ? 참 : 거짓