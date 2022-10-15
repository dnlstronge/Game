//Game objects:

var view = {
    displayMessage: function(msg) {
        var messageArea = document.get("messageArea");
        messageArea.innerHTML = msg;
    },

    // adds a ship img if location(guess) is a hit
    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
       
    },

    //displays miss if location(guess) is a miss
    displayMiss: function(location) {
        var cell = document.getElementById(location)
        cell.setAttribute("class", "miss");
        
    }
};
/* TEST
view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.displayMiss("Testing, one... two...test") */


