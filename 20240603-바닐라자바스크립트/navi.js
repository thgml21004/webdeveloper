const hd_yys ={
    logo : {
        Text : "uglyus",
        href : "/uglyus/",
        img : "/uglyus/img/img_yys/svg/ugly_us_logo.svg",
        cls : ["me-3"]
    },
    gnb : [
        {
        Text : "우리의미션",
        href : "misson.html",
        cls : ["nav-mission me-5 gnb_li rel","d-block gnb_a1","gnb_ul abs","gnb_ul_li"],
        gnb_ul_li : [
            {
                Text : "미션",
                href : "mission.html",
               
            },
            {
                Text : "소싱철학",
                href : "social.html"
            }
        ]
    },
    {
        Text : "정기배송",
        href : "misson.html",
        cls : ["nav-mission me-5 gnb_li rel","d-block gnb_a2","gnb_ul abs","gnb_ul_li"],
        gnb_ul_li : [
            {
                Text : "후기",
                href : "mission.html"
            },
            {
                Text : "혜택",
                href : "social.html"
            },
            {
                Text : "이용안내",
                href : "social.html"
            }
        ]
    },
    {
        Text : "싱싱마켓",
        href : "misson.html",
        cls : ["nav-mission me-5 gnb_li rel","d-block gnb_a3","gnb_ul abs","gnb_ul_li"],
        gnb_ul_li : [
        ]
    },
    {
        Text : "커뮤니티",
        href : "misson.html",
        cls : ["nav-mission me-5 gnb_li rel","d-block gnb_a4","gnb_ul abs","gnb_ul_li"],
        gnb_ul_li : [
            {
                Text : "오늘의레시피",
                href : "mission.html"
            },
            {
                Text : "채소이야기",
                href : "social.html"
            },
            {
                Text : "어글리어스밥풀루언서",
                href : "social.html"
            }
        ]
    }
    ],
    util : [
        {
            Text : "로그인",
            href : "login.html",
            cls : ["d-flex px-0 my-0","me-3 font_login","nav-link font_login"]
        },
        {
            Text : "회원가입",
            href : "consumer.html",
            cls : ["d-flex px-0 my-0","font_login","nav-link me-0 font_login"]
        }
    ]
}

window.onload = function() {  // 화면 로딩이 끝나면 실행되라 // 아래것 보다 이걸 씀 // 이벤트 저장
    let navitag = "";

    for(x in hd_yys.gnb) {
        navitag += `<li class='${hd_yys.gnb[x].cls[0]}'>
            <a href='${hd_yys.gnb[x].href}' class='${hd_yys.gnb[x].cls[1]}'>
                ${hd_yys.gnb[x].Text}                
            </a>`;
        if(hd_yys.gnb[x].gnb_ul_li.length > 0) navitag += `<ul class='${hd_yys.gnb[x].cls[2]}'>`; // 소메뉴에 데이터가 있을 때만 출력
        for(j in hd_yys.gnb[x].gnb_ul_li) {
            navitag += `<li class='${hd_yys.gnb[x].cls[3]}'><a href='${hd_yys.gnb[x].gnb_ul_li[j].href}'>${hd_yys.gnb[x].gnb_ul_li[j].Text}</a></li>`;
        }
        if(hd_yys.gnb[x].gnb_ul_li.length > 0) navitag += `</ul>`;
        navitag += `</li>`; // 대메뉴
    }

    
    // for(x in hd_yys.gnb) {
    //     navitag += `<li class='${hd_yys.gnb[x].cls[0]}'>
    //         <a href='${hd_yys.gnb[x].href}' class='${hd_yys.gnb[x].cls[1]}'>
    //             ${hd_yys.gnb[x].Text}                
    //         </a>
    //             <ul class='${hd_yys.gnb[x].cls[2]}'>`;
    //             for(i in hd_yys.gnb[x].gnb_ul_li) {
    //                 navitag += `<li class='${hd_yys.gnb[x].cls[3]}'>
    //                     <a href='${hd_yys.gnb[x].gnb_ul_li[i].href}'>${hd_yys.gnb[x].gnb_ul_li[i].Text}</a>
    //                 </li>`
    //             }
    //         navitag += `</ul>
    //         </li>`
    // }

    document.querySelector("#gnb").innerHTML = navitag;

}
// window.addEventListener('load', function() {}) // 위와 같은 역활 // 이벤트 중 load되었을 때 실행되라 // 이벤트 선택
// 두개의 문법 차이
// 데이터일 때는 최상단 두면 되고 기다릴 필요없다.
// onload -> 이벤트
// on.. -> 이벤트
// 로딩이 다 끝난 후 실행해라 
// 여러번 쓰면 안된다. -> 1개만 실행됨