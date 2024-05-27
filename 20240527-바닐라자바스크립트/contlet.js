let study = "바닐라 자바스크립트";
// const myword = "그래 나도 "+ study +" 해보자!";
const myword = `그래 나도 ${study} 해보자!`;
console.log(myword);

const num = 12;
const program = "html+css";
const name = "박소희";
const result = `저는 ${num}개월간의 ${program} 공부를 한 ${name}입니다.`;
console.log(result);

//집합체, 아파트, 배열, array
let _month = [2,3,7];
let _study = ['피그마','뷰','리액트'];
let _name = ['홍길도','나훈아','조명섭'];
const words0 = `저는 ${_month[0]}개월간의 ${_study[0]} 공부를 한 ${_name[0]}입니다.`;
const words1 = `저는 ${_month[1]}개월간의 ${_study[1]} 공부를 한 ${_name[1]}입니다.`;
const words2 = `저는 ${_month[2]}개월간의 ${_study[2]} 공부를 한 ${_name[2]}입니다.`;
console.log(words0,words1,words2);


//-----------------null, undefined

let myNull = "";
let myUndefined;
const myNull2 = "";
// const myUndefined2; // error

console.log(myNull, myUndefined, myNull2);


//-----------------let, const
let a = 1;
// let a = 2 ; // error
a = 3;
const b = "가";
// b = "나"; // error
// const b = "나"; // error

console.log(a, b);
