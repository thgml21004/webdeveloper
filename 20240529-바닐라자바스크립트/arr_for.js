console.log("한번만 실행되지");


for(var i = 0; i < 5; i++) { // var i = 0; : 초기화, 변수선언, let으로 작성 가능  /  i < 5; : 조건식  / i++ : 증감식, 연산식, 1씩 더해라
    console.log("다섯번 실행되지");
}

// 연산식

// let count = 10;
// count++; // 10 // 후치연산 : 예약 // conum +=1 : 추가 대입
// count; // 11
// ++count; // 12 // 전치연산

// 더하기
let count = 10;
count +=100;
count +=1; // 111
++count; // 112
count++; // 112

console.log(count); // 113

// 빼기
let count2 = 10;
count2 +=100;
count2 -=1; // 109
--count2; // 108
count2--; // 108

console.log(count2); // 107

// 대입식
let count3 = 10;
count3 +=100;
count3 =1; // 1 // 대입식이 이루어짐
--count3; // 0
count3--; // 0

console.log(count3); //-1

// 곱하기
let multy = 10;
multy = multy * 3; // multu *=3

console.log(multy); // 30

// 나누기
let multy2 = 10;
multy2 = multy2 / 3; // multu /=3

console.log(multy2); // 3.333

// 문자 연산식 // 결합 연산자
let mystudy = "리액트";
mystudy = "리액트" + "뷰"; // mystudy += "뷰"

console.log(mystudy); // 리액트뷰

// 형 변환
let startjs = 10;
startjs +=20; // 30 // 숫자
startjs += "원"; // 30원 // 문자
startjs += 100; // 30원100 // 문자
startjs += 100; // 30원100100 // 문자

console.log(startjs);