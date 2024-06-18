$(document).ready(function() {
    $.ajax({
        url : "/20240618/ajax2/json/data.json",
        type : "GET",
        dataType : "json",
        success : function(data) {

        },
        error : function() {}
    })
})