//Game objects:

//VIEW

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

//MODEL: information to pass on to view

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    //come back to these so they are at random
    //could these arrays be dynamic?
    ships: [{locations: ["06", "16", "26"], hits: ["", "", ""]},
            {locations: ["06", "16", "26"], hits: ["", "", ""]},
            {locations: ["06", "16", "26"], hits: ["", "", ""]}] 
}


