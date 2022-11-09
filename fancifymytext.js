function enlargeText() {
    var text = document.getElementById("textInput");
    text.style.fontSize = "24pt";
}

function fancify() {
    var text = document.getElementById("textInput");
    var fancified = document.getElementById("fancy").checked;
    if(fancified) {
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    }

    else {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function moo() {
    var text = document.getElementById("textInput");
    var parts = text.value.split(".");
    text.value = parts.join("-Moo.");
}
