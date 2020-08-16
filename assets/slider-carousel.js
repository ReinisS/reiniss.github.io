'use strict';

var slidesClasses = {
    "bandItSlides": 1,
    "pyPriceSlides": 1,
    "audioUpsamplerSlides": 1,
};

for (var slidesClass in slidesClasses) {
    // console.log(slidesClass, slidesClasses[slidesClass]);
    showDivs(slidesClasses[slidesClass], slidesClass);
}

// showDivs(slideIndex, slidesClass);

function plusDivs(n, slidesClass) {
    showDivs(slidesClasses[slidesClass] += n, slidesClass);
}

function showDivs(n, slidesClass) {
    var i;
    var x = document.getElementsByClassName(slidesClass);
    if (n > x.length) { slidesClasses[slidesClass] = 1 }
    if (n < 1) { slidesClasses[slidesClass] = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slidesClasses[slidesClass] - 1].style.display = "block";
}
