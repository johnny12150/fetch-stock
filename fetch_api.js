$(document).ready(function () {
    $.ajax({
        url: 'http://mis.twse.com.tw/stock/api/getStock.jsp?ch=3711.tw&json=1',
        method: "GET",
        async: false, //同步處理
        dataType: "JSON",
        crossDomain: true,
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status, error) {
            console.log("xhr:" + xhr + '\n' + "status:" + status + '\n' + "error:" + error);
        }
    });
});


fetch('http://mis.twse.com.tw/stock/api/getStock.jsp?ch=3711.tw&json=1', {
    method: "GET",
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
    });