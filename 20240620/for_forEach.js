const store = ["사과", "파인애플", "수박", "체리"];
// 변수 const
// 변수 존재여부

//for문
for(let x = 0; x < store.length; x++) {
    console.log("for문", store[x]);
}

//for in 문
for(x in store) {
    console.log("for in문", store[x]);
}

store.forEach((i, x) => {
    //console.log("forEach", store[x]);
    console.log("forEach", i);
});

const storetest = [
    ["사과", 10000, 7000], 
    ["파인애플", 5000, ""],
    ["수박", 15000, ""],
    ["체리", 13000, 9000]
];

// 체리는 원가가 13000원이고 할인해서 9000원에 판매
// EC6 표현식
// 1. 하나의 패턴 확인
console.log(`${storetest[3][0]}는 원가가 ${storetest[3][1]}원이고 할인해서 ${storetest[3][2]}원에 판매`)

// for in문
// 2. x가 받아야 할 변수 확인
for(x in storetest) {
    console.log(`${storetest[x][0]}는 원가가 ${storetest[x][1]}원이고 할인해서 ${storetest[x][2]}원에 판매`)
}

// forEach문
// 3. forEach value 타입확인 정렬임
storetest.forEach((e, i) => {
    console.log(`${e[0]}는 원가가 ${e[1]}원이고 할인해서 ${e[2]}원에 판매`)
})


// join 메서드
let charArray = ["H", "e", "l", "l", "o"];
let word = charArray.join("");
console.log(word, typeof word);
// 출력: "Hello", string

// split 메서드
let characters = "Hello";
let charArray2 = characters.split("");
console.log(charArray, typeof word);
// 출력: ["H", "e", "l", "l", "o"]


const stringdataapi = "서울|종로구|명륜3가|감나무집"
// string [], {} => JSON, parse
// string => array 전환 split 메서드
// array => string 전환 join 메서드

// 문제 서울 종로구 까지만 출력되도록 한다. (split을 사용)
const wordsplit = stringdataapi.split("|"); // [ '서울', '종로구', '명륜3가', '감나무집' ]
console.log(wordsplit[0]+" "+wordsplit[1]); // 서울 종로구
