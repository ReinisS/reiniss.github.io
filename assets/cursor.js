// https://medium.com/@bharatgupta_2334/how-to-create-blinking-cursor-effect-using-javascript-fad099e8bcb9

'use strict';

var cursor = true;
var speed = 500;
setInterval(() => {
    if (cursor) {
        // document.getElementById('cursor').style.opacity = 0;
        $('.cursor').css({ opacity: 0 });
        cursor = false;
    } else {
        // document.getElementById('cursor').style.opacity = 1;
        $('.cursor').css({ opacity: 1 });
        cursor = true;
    }
}, speed);
