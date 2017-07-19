
// Return an excuse
function getExcuse(json) {
    var index = rand(json.excuses.length);
    return json.excuses[index].excuse;
}

// David you're a butt.
function getButt(json) {
    var index = rand(json.butts.length);
    return json.butts[index].butt;
}

// Misnomer. It's not a coin flip, 80/20 split
function flip() {
    return (Math.floor(Math.random() * 100)) < 80;
}

// Random helper
function rand(max) {
    return (Math.floor(Math.random() * max));
}

function updateMessage(json) {
    if (flip()) {
        $(".yesno").text("Sorry, I can't play BG2 tonight because");
        $(".excuse").text(getExcuse(json));
    }
    else {
        $(".yesno").text("I can play BG2, but...");
        $(".excuse").text(getButt(json));
    }
}

$(document).ready(function() {
    $.getJSON("excuses.json", function(json) {
        updateMessage(json);
    });
    updateMessage();
    
});