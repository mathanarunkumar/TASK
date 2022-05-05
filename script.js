// api url
let API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json";
let data;
async function fechdata() {
    try {
        const respons = await fetch(API_URL);
        if (respons.status !== 200) throw new Error("not ok");

        data = await respons.json();
        console.log(data);
        if (data) {
            processingData(data);
        }
    } catch (err) {
        console.log(err.message)
    }
}
fechdata();

function lookup(arg) {
    var value = ''
    var id = arg.getAttribute('id');
    value = arg.value;
    console.log("value", value);
    const dataFilter = [];
    if (value) {
        //search url
        API_URL = API_URL +'?name='+value;
        fechdata();

        //manual
    //     for (var i = 0; i < data.length; i++) {
    //         if (value == data[i].name) {
    //             dataFilter.push(data[i]);
    //             console.log("filter data", data)
    //             processingData(dataFilter)
    //         } else if (value == '') {
    //             fechdata();
    //         } else {
    //             data = [];
    //         }
    //     }
    }
}

function processingData(dataArr) {
    let data = dataArr;
    console.log("dataArr", dataArr)
    if (dataArr.length > 0) {
        var html = document.getElementById('box');
        html.innerHTML = '';
        for (var i = 0; i < data.length; i++) {
            html += "<tr>";
            html += "<td>" + data[i].brand + "</td>";
            html += "<td>" + data[i].name + "</td>";
            html += "<td>" + data[i].price + "</td>";
            html += "<td>" + data[i].product_link + "</td>";
            html += "<td>" + data[i].description + "</td>";
            html += "</tr>";
        }
        document.getElementById("box").innerHTML = html;
        console.log(data[0].brand);
    }
}