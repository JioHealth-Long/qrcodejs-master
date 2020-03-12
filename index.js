/**
 * Document ready
 */
var qrcode = new QRCode(document.getElementById("qrcode"), {
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

    qrcode.makeCode(`${stockIdEle.value}*${batchNumber.value}`);
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
