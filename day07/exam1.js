
// 1. 객체 선언 {} 2. 배열선언 []
// 
let object1 = {}
console.log(object1)

// 3. 객체 내 속성(properties) 구성, {속성명: 속성값, '속성명': 속성값}
const object2 = {type1: 10, 'type2':'hi', type3: "stfu"}
console.log(object2)

// 4. 객체 내 속성 호출, .(점/도트)연산자, 왼족자료의 참조
console.log(object2.type1)
console.log( )
console.log(object2.type2)
console.log(Object.keys(object2)) // 객체내 모든 속성명 출력
console.log(Object.values(object2)) // 객체 내 모든 속성값 출력
console.log(Object.entries(object2)) // 객체 내 모든 속성명/값

// 객체 내 속성 삭제, delete 변수명, 삭제할 속성명
delete object2.type3
console.log(object2)

const object3 = {prop1: 1, prop2: [1, 2, 3], prop3: {age: 40}, prop4: function(){}}
console.log(object3.prop3.age) // 40
console.log('prop1' in object3) // true

let students = [{name: '', major: '', number: ''}, ]
let subject = [{subject_name: '', code: '', category: '', semester: '', grade: '', professor: ''}, ] 
let info_major = [{field: '', Department: '', phone_nuber: ''}, ]
let history = [{code: '', subject_name: ''}, ]

subject.push({subject_name: '데이터베이스', code: '',})
history.push({code: subject.code, subject_name: subject.subject_name})
console.log(history)