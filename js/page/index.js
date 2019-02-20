require(['./js/config.js'], function() {
    require(['arr'], function(arr) {
        arr.arr(['1', '2', '3']);
        arr.fun(['2'], function() {
            console.log(1);
        })
    })
})