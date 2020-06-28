'use strict';

//Open swtcher menu
$('.style-switcher__control').on('click', function () {
    $('.style-switcher').toggleClass('style-switcher--active');
});

//Change monochrome.css to color.css
$('.style-switcher__link--color').click(function (){
    $('link[href="./assets/monochrome.css"]').attr('href','./assets/color.css');
    $('img[src$="./assets/img_avatar_monochrome.jpg"]').attr("src","./assets/img_avatar.jpg");
});

//Change color.css to monochrome.css
$('.style-switcher__link--mono').click(function (){
    $('link[href="./assets/color.css"]').attr('href','./assets/monochrome.css');
    $('img[src$="./assets/img_avatar.jpg"]').attr("src","./assets/img_avatar_monochrome.jpg");
});