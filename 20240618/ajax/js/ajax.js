$(document).ready(function() {
    $.ajax({
        url : "/20240618/ajax/json/data.json",
        type : "GET",
        dataType : "json",
        success : function(data) {
            console.log(data, typeof data)
            // JSON.parse(data) -> 자바스크립트가 쓸 수 있게 object
            // $("#here").html(data.menu[0].category) // 메서드로 착각할 수 있기 때문에 .으로 하지 않는게 좋다.
            $("#here").html(data["menu"][0]["category"]) // 의류

            let gnbli = "";
            data["menu"].forEach(function(ele, idx) {
                // 순서대로 순회하면서 실행
                console.log(`${idx}번째 데이터는 ${ele}`);
                gnbli +=`<li>${ele["category"]}</li>`
            });
            $(".gnb").html(gnbli)
        },
        error : function(a, b, c) {
            console.log(a, b, c,);

        }
    })
})
