let gnb = [
    {
        li_text : "대메뉴1",
        li_href : "./menu1.html"
    },
    {
        li_text : "대메뉴2",
        li_href : "./menu2.html"
    },
    {
        li_text : "대메뉴3",
        li_href : "./menu3.html"
    },
    {
        li_text : "대메뉴4",
        li_href : "./menu4.html"
    }
]

console.log(gnb[2].li_text); // 대메뉴3

// 기본 for 문
let text = "";
for(let i = 0; i < 4; i++) {
    text += gnb[i].li_text;
}
console.log(text);

// length로 for문 돌리기
let text2 = "";
for(let i = 0; i < gnb.length; i++) {
    text2 += gnb[i].li_text;
}
console.log(text2);

// for in 문
let text3 = "";
for(let i in gnb) {
    text3 += gnb[i].li_text;
}
console.log(text3);

// 다시한번 연습
for(let v in gnb) {
    text3 += `\n${gnb[v].li_href}`;
}
console.log(text3);

// object
let data = {
    text : "박소희",
    date : "6월 19일",
    height : "156cm"
}

console.log("콘솔 : ", data.text);

let myinfo = "";
for(let i in data) {
    console.log(i); // text, date, height 키를 출력함
    myinfo += data[i]; // myinfo += data['text']; // object를 배열로 담아서 표현해주는 것
}


console.log("object 데이터 출력 : ", myinfo);
