const nav_data = [
    {
        gnb_li_a : "회사소개",
        gnb_li_href : "./company.html"
    },
    {
        gnb_li_a : "제품소개",
        gnb_li_href : "./product.html"
    },
    {
        gnb_li_a : "커뮤니티",
        gnb_li_href : "./board.html",
    },
    {
        gnb_li_a : "인트라넷",
        gnb_li_href : "./intro.html",
    }
]
console.log("기본 : ", nav_data[0]["gnb_li_a"]); // ./company.html



// array일 때만 쓸 수 있는 방법
let mygnb = "";
for(let liea = 0; liea < nav_data.length; liea++) {
    mygnb += nav_data[liea].gnb_li_href;
}
console.log("array : ",mygnb);


// array, object일 때 쓸 수 있는 방법
let mygnb2 = "";
for(let v in nav_data) {
    mygnb2 += `${nav_data[v].gnb_li_href}\n`;
}
console.log("array, object : ", mygnb2);


//object 데이터 출력
let mygnb3 = "";
for(let v in nav_data[0]) {
    mygnb3 += nav_data[0][v]; // [0] : 숫자, [v] : 키
}
console.log("object : ", mygnb3);
