/***
 * qr code
 */
var qrcode1 = new QRCode(document.getElementById("qrcode1"), {
    width: 55,
    height: 55
});
var qrcode2 = new QRCode(document.getElementById("qrcode2"), {
    width: 55,
    height: 55
});
var qrcode3 = new QRCode(document.getElementById("qrcode3"), {
    width: 55,
    height: 55
});
var qrcode4 = new QRCode(document.getElementById("qrcode4"), {
    width: 55,
    height: 55
});

function makeCode() {
    var stockIdEle = document.getElementById("stock");
    let batchNumberEle = document.getElementById("batch-number");

    if (!stockIdEle.value) {
        alert("Input a text");
        stockIdEle.focus();
        return;
    }

    qrcode1.makeCode(`${stockIdEle.value}*${batchNumberEle.value}`);
    qrcode2.makeCode(`${stockIdEle.value}*${batchNumberEle.value}`);
    qrcode3.makeCode(`${stockIdEle.value}*${batchNumberEle.value}`);
    qrcode4.makeCode(`${stockIdEle.value}*${batchNumberEle.value}`);
}

makeCode();
// "#stock #batch-number"

/**
 * Document ready
 */
$(document).ready(() => {
    // get params
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const stock = urlParams.get('stock');
    console.log(stock);

    if (stock) {
        $('#stock').val(stock);
        $('.stock').text(stock)
    } else {
        $('#batch-number').val('');
        $('.stock').text('')
    }
    // shirt

    const batchNumber = urlParams.get('batch-number');
    console.log(batchNumber);
    if (batchNumber) {
        $('#stock').val(batchNumber);
        $('.batch-id').text(batchNumber);
    } else {
        $('#batch-number').val('');
        $('.batch-id').text('');
    }

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
