define('arr', function() {
    var arr = function(arr) {
        return console.log(arr);
    }
    var fun = function(arr, ck) {
        console.log(arr);
        ck && ck(arr);
    }
    return arry = {
        arr: arr,
        fun: fun
    }
});