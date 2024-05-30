
for(let i = 0; i < 10; i++) {
//    console.log("나 열번 나오게 해줘");
}


// for문에 메서드 넣지 말고, if문 넣지 말기, 초기 선언하지 말기
// 변수에 넣고 저장 > 메서드 양 줄이기

// 효율적인 식 구사하기
let meg = ""; // 초기 선언
for(let i = 0; i < 10; i++) { // i++ : 10번 출력 됨 , i += 2 : 5번 출력 됨
    meg += "나 \"열번\" 나오게 해줘 \n"; // \n : 줄바꿈 // \ : 건너뛰겠다. \" : "가 그대로 표현 됨
}

// console.log(meg);

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

//object 접근 법
// console.log(nav_data[1].gnb_li_href); //./product.html
// console.log(nav_data[1]["gnb_li_href"]); // ./product.html
// object를 array 식으로 접근

// for 문
let mygnb = ""; // 어떤식으로 인식될지 알 수 없음 null로 인식될수도 string으로 인식 될 수도 있다. => console로 확인해보기 // let mygnb = null; // 이런식으로도 쓸 수 있음
for(let liea = 0; liea < nav_data.length; liea++) { // length : 자연어, 몇개냐
    mygnb += nav_data[liea].gnb_li_href;
}
// console.log(mygnb);


// for in 문
let mygnb2 = "";
for(let v in nav_data) { // in 뒤에 있는거는 object나 array가 나와야된다. object 일 때는 v가 키를 담고, array일 때는 v가 인덱스을 담는다.
    // console.log("for in문 처리 : ", v); // 0, 1, 2, 3 : 인덱스이 출력 됨
    mygnb2 += `${nav_data[v].gnb_li_href}\n`;
}
console.log(mygnb2);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 이 방법으로는 쓸 수 없다.
// document는 html에서 쓰는 것이기 때문에.
// document.getElementsByClassName("gnb").length; // gnb 클래스명 몇개냐
// document.querySelectorAll(".gnb").length; // gnb 클래스명 몇개냐