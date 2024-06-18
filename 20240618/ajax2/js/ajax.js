$(document).ready(function() {
    $.ajax({
        url : "/20240618/ajax2/json/data.json",
        type : "GET",
        dataType : "json",
        success : function(data) {
            console.log(data, typeof data);
            let gnbli = "";
            data["menu"].forEach(function(ele, idx) {
                gnbli +=`<li>${ele["category"]}</li>`
            });
            $(".gnb").html(gnbli);
        },
        error : function(a, b, c) {
            console.log(a, b, c);
        }
    })
})