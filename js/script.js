function toPage(e) {
    var i;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    document.getElementById(e).style.display = "block";
    window.scroll(0,0);
}

function wihinPage(page, target) {
    var i;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    document.getElementById(page).style.display = "block";
    document.getElementById(target).scrollIntoView();
    
}