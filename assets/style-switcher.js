'use strict';

$('.style-switcher__link--light').hide();

//Open switcher menu
$('.style-switcher__control').on('click', function () {
    $('.style-switcher').toggleClass('style-switcher--active');
});

//Change dark_theme.css to color.css
$('.style-switcher__link--light').click(function (){
    $('link[href="./assets/dark_theme.css"]').attr('href','./assets/color.css');
    // $('img[src$="./assets/images/img_avatar_monochrome.webp"]').attr("src","./assets/images/img_avatar.webp");
    $('.style-switcher__link--light').toggle();
    $('.style-switcher__link--dark').toggle();
});

//Change color.css to dark_theme.css
$('.style-switcher__link--dark').click(function (){
    $('link[href="./assets/color.css"]').attr('href','./assets/dark_theme.css');
    // $('img[src$="./assets/images/img_avatar.webp"]').attr("src","./assets/images/img_avatar_monochrome.webp");
    $('.style-switcher__link--light').toggle();
    $('.style-switcher__link--dark').toggle();
});