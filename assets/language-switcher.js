'use strict';

// Change input form placeholder text
var changeOtherText = function() {
    if (lang ==='lv') {
        $('#name_field').attr('placeholder', 'Jūsu vārds');
        $('#email_field').attr('placeholder', 'Jūsu e-pasts');
        $('#message_field').attr('placeholder', 'Ziņas teksts');
        $('#cv').attr('href', './assets/Resume_ReinisSestakovskis_LV.pdf');
    }
    else {
        $('#name_field').attr('placeholder', 'Your name');
        $('#email_field').attr('placeholder', 'Your e-mail');
        $('#message_field').attr('placeholder', 'Your message');
        $('#cv').attr('href', './assets/Resume_ReinisSestakovskis_EN.pdf');
    }
}

var lang = 'en';
$('[lang="lv"]').hide();
changeOtherText();

// https://stackoverflow.com/a/43033380
$('.switch-lang').click(function () {
    $('[lang="lv"]').toggle();
    $('[lang="en"]').toggle();
    if (lang === 'en') {
        lang = 'lv';
    }
    else {
        lang = 'en';
    }

    changeOtherText();
});

