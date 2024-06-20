const mydata = ["영어", "중국어", "일본어"]

mydata.forEach(function(value, i) {
//    console.log("첫번째 매개인자 : ", value);
//    console.log("array문을 그대로 가져다 씀 : ", mydata[i]);
})

for(i in mydata) {
//    console.log("for in문 : ", mydata[i]);
}

const testdata = [
    ["네이버", "Naver"],
    ["다음", "Daum"],
    ["구글", "Google"],
]

// 퀴즈 1. 콘솔창에 Daum이 출력

console.log("퀴즈 1. ",testdata[1][1]);

// 퀴즈 2. 콘솔창에 네이버, 다음, 구글이 출력되도록 한다. (forEach 사용)

testdata.forEach((ele, idx) => {
    //console.log("퀴즈 2. ",testdata[idx][0]);
    console.log("퀴즈 2. ",ele[0]);
})


const testdata2 = [
    {"nm" : "네이버"},
    {"nm" : "다음"},
    {"nm" : "구글"},
]

// 퀴즈 3. 콘솔창에 네이버, 다음, 구글이 출력되도록 한다.

testdata2.forEach((ele, idx) => {
    console.log("퀴즈 3. ", ele.nm);
    console.log("퀴즈 3. ", ele["nm"]);
})


const testdata3 = [
    {
        "nm" : "네이버",
        "href" : "http://www.naver.com",
        "cls" : "naver"
    },
    {
        "nm" : "다음",
        "href" : "http://www.daum.com",
        "cls" : "daum"
    },
    {
        "nm" : "구글",
        "href" : "http://www.google.com",
        "cls" : "google"
    },
]

testdata3.forEach((v, i) => {
    //벡틱을 사용해서
    //<li><a href="http://www.naver.com">네이버</a></li>
    //<li><a href="http://www.daum.com">다음</a></li>
    //<li><a href="http://www.google.com">구글</a></li>
    //위 3출 출력
    console.log(`<li class="${v.cls}"><a href="${v.href}">${v["nm"]}</a></li>`);
})

function nomalfun(a, b) {
    // 중요한 함수, 무겁다
    // 선언적 함수 => 위치상관없이
}

const nomalfun = (a, b) => {
    // 1회용 함수
    // 실행위치 엄청 중요
}

