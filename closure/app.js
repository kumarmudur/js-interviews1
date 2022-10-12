
function x() {
    for (let i = 0; i <= 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
    console.log('Javascript');
}


function x1() {
    for (var i = 0; i <= 5; i++) {
       function close(x) {
        setTimeout(function() {
            console.log(x);
        }, x * 1000);
       }
       close(i);
    }
}

x1();