
// 이중 array = arr
const myarr = [
    ["네이버", "https://www.naver.com"],
    ["다음", "https://www.daum.net"],
    ["구글", "https://www.google.com"],
];

// typeof : 타입 알아보는 연산자
console.log("첫번째 배열", myarr[0], typeof myarr[0],"첫번째 배열의 첫번째 값", myarr[0][0], typeof myarr[0][0]);
// 첫번째 배열 [ '네이버', 'https://www.naver.com' ] object 첫번째 배열의 첫번째 값 네이버 string

// EC6 표현
console.log("네이버 :",`<a href='${myarr[0][1]}'>${myarr[0][0]}</a>`)
console.log("다음 :",`<a href='${myarr[1][1]}'>${myarr[1][0]}</a>`)
console.log("구글 :",`<a href='${myarr[2][1]}'>${myarr[2][0]}</a>`)
// 네이버 : <a href='https://www.naver.com'>네이버</a>        
// 다음 : <a href='https://www.daum.net'>다음</a>
// 구글 : <a href='https://www.google.com'>구글</a>


let _month = [2,3,7];
let _study = ['피그마','뷰','리액트'];
let _name = ['홍길도','나훈아','조명섭'];
const words0 = `저는 ${_month[0]}개월간의 ${_study[0]} 공부를 한 ${_name[0]}입니다.`;
const words1 = `저는 ${_month[1]}개월간의 ${_study[1]} 공부를 한 ${_name[1]}입니다.`;
const words2 = `저는 ${_month[2]}개월간의 ${_study[2]} 공부를 한 ${_name[2]}입니다.`;



// object = obj
const myarrobj = {
    _month : [2,3,7],
    _study : ['피그마','뷰','리액트'],
    _name : ['홍길도','나훈아','조명섭']
}
console.log(myarrobj._study[0])
//피그마


// obj => key : { value };
// arr => [ value ];

const gnb = {
    d1:{
        text : "회사소개",
        href : "./company.html"
    },
    d2:[
        {
            text : "CEO 인사말",
            href : "./ceo.html"
        },
        {
            text : "조직도",
            href : "./organ.html"
        }
    ]
}

console.log(`<a href="${gnb.d1.href}">${gnb.d1.text}</a>`)
// <a href="./company.html">회사소개</a>
console.log(`<a href="${gnb.d2[0].href}">${gnb.d2[0].text}</a>`, `<a href="${gnb.d2[1].href}">${gnb.d2[1].text}</a>`)
// <a href="./ceo.html">CEO 인사말</a> <a href="./organ.html">조직도</a>