/**
 * Document ready
 */
var qrcode1 = new QRCode(document.getElementById("qrcode1"), {
    width: 45,
    height: 45
});
var qrcode2 = new QRCode(document.getElementById("qrcode2"), {
    width: 45,
    height: 45
});
var qrcode3 = new QRCode(document.getElementById("qrcode3"), {
    width: 45,
    height: 45
});
var qrcode4 = new QRCode(document.getElementById("qrcode4"), {
    width: 45,
    height: 45
});

function makeCode() {
    var stockIdEle = document.getElementById("stock");
    let batchNumber = document.getElementById("batch-number");

    if (!stockIdEle.value) {
        alert("Input a text");
        stockIdEle.focus();
        return;
    }

    qrcode1.makeCode(`${stockIdEle.value}*${batchNumber.value}`);
    qrcode2.makeCode(`${stockIdEle.value}*${batchNumber.value}`);
    qrcode3.makeCode(`${stockIdEle.value}*${batchNumber.value}`);
    qrcode4.makeCode(`${stockIdEle.value}*${batchNumber.value}`);
}

makeCode();
// "#stock #batch-number"


$(document).ready(() => {
    $('#print-all').on('click', () => {
        console.log('Print all');
        window.print();
    });
    $("#stock").on("blur", function () {
        makeCode();
    }).on("keydown", function (e) {
        if (e.keyCode === 13) {
            makeCode();
        }
    });
    $("#batch-number").on("blur", function () {
        makeCode();
    }).on("keydown", function (e) {
        if (e.keyCode === 13) {
            makeCode();
        }
    });
});
