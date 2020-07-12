'use strict';

// Animate headers of .section
var hideHeader = function(header) {
    header.css('text-indent', '-9999px');
};

var showHeader = function(header) {
    header.css('text-indent', '0px');
};

var animateHeader = function(header, text) {
    // Clear header text
    header.text("");
    // And animate it
    var nextAnimationStep = function() {
        if (text.length > 0) {
            header.text(header.text() + text.substr(0,1));
            text = text.substr(1);
            setTimeout(nextAnimationStep, 100);
        }
        // Add blinking cursor.js cursor at the end
        else {
            header.append('<span class="cursor">_</span>');
        }
    };
    nextAnimationStep();
};

var animateHeaders = function(headers) {
    return Object.keys(headers).map(function(key, _) {
        var elementSelector = key;
        var offset = headers[key];
        var header = $(elementSelector);
        hideHeader(header);
        var waypoint = {};
        waypoint[key] = header.waypoint({
            handler: function() {
                showHeader(header);
                animateHeader(header, header.text());
                this.destroy();
            },
            offset: offset
        })[0];
        return waypoint;
    }).reduce(Object.assign, {});
};

// All ids of titles should be written here for animation to work
var animatedHeaders = animateHeaders({
    "#name_header": '90%',
    "#hello_header_en": '90%',
    "#hello_header_lv": '90%',
    "#resume_header_en": '90%',
    "#resume_header_lv": '90%',
    "#portfolio_header_en": '90%',
    "#portfolio_header_lv": '90%',
    "#contacts_header_en": '90%',
    "#contacts_header_lv": '90%',
});