//Game objects:

//VIEW (display)

var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
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



//MODEL: games-state data

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    //come back to these so they are at random
    //could these arrays be dynamic?
    ships: [{locations: ["06", "16", "26"], hits: ["", "", ""]},
            {locations: ["06", "16", "26"], hits: ["", "", ""]},
            {locations: ["06", "16", "26"], hits: ["", "", ""]}
        ], 
   
            //Firing method/function

    fire: function(guess) {
        for (var i = 0; i  < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);

        if (index >= 0) {
            ship.hits[index] = "hit";
            view.displayHit(guess);
            view.displayMessage("HIT!");

            if (this.isSunk(ship)) {
                view.displayMessage("You sank my battleship!");
                this.shipsSunk++;
            }
            return true;
          }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },

          // method to determine if ship is sunk
     isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }

        }
        return true;
    }
}
var controller = {
        guesses: 0,
        processGuess: function(guess) {
            //code to follow
        }

};



