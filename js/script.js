function toPage(e) {
    var i;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    
    switch (e) {
        case 12:
            document.getElementById("les12").style.display = "block";
            window.scroll(0,0);
            break;
        case "kickoff":
            document.getElementById("kickoff").style.display = "block";
            window.scroll(0,0);
            break;
        case "tricks":
            document.getElementById("tricks").style.display = "block";
            window.scroll(0,0);
        break;
        case "power":
            document.getElementById("tricks").style.display = "block";
            document.getElementById("power").scrollIntoView();
        break;
        case "double":
            document.getElementById("tricks").style.display = "block";
            document.getElementById("double").scrollIntoView();
        break;

    }
}