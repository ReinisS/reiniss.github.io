'use strict';

$('.fontawesomebg--light').hide();

//Change dark_theme.css to color.css
$('.fontawesomebg--light').click(function (){
    $('link[href="./assets/dark_theme.css"]').attr('href','./assets/color.css');
    // $('img[src$="./assets/images/img_avatar_monochrome.jpg"]').attr("src","./assets/images/img_avatar.jpg");
    $('.fontawesomebg--light').toggle();
    $('.fontawesomebg--dark').toggle();
});

//Change color.css to dark_theme.css
$('.fontawesomebg--dark').click(function (){
    $('link[href="./assets/color.css"]').attr('href','./assets/dark_theme.css');
    // $('img[src$="./assets/images/img_avatar.jpg"]').attr("src","./assets/images/img_avatar_monochrome.jpg");
    $('.fontawesomebg--light').toggle();
    $('.fontawesomebg--dark').toggle();
});