/**************************************** NAVBAR ********************************************/

function goActive(b) {
    $(b).parent().addClass('active').siblings().removeClass('active');
}

function goActiveGreatGrandParent(b) {
    $(b).parent().parent().parent().addClass('active').siblings().removeClass('active');
}

function toPage(e, b, drop) {
    var i, content;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    document.getElementById(e).style.display = "block";
    if (drop === 1) {
        goActiveGreatGrandParent(b)
    } else {
        goActive(b);
    }
    window.scroll(0,0);
}

function withinPage(page, target, b) {
    var i, content;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    document.getElementById(page).style.display = "block";
    document.getElementById(target).scrollIntoView();
    goActiveGreatGrandParent(b);
    
}

$('ul.nav li.dropdown').hover(function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(200);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(0);
});

/********************************************************************************************/

