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
    },
    generateShipsLocations: function() {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
            }
        },
    generateShip: function () {
        var direction = Math.floor(Math.random() * 2);
        var row;
        var col;
        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - (this.shipLength + 1)));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - (this.shipLength + 1)));
            col = Math.floor(Math.random() * this.boardSize);
        }
        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
          
          if (direction === 1) {
              newShipLocations.push(row + "" + (col + 1));
        } else {
              newShipLocations.push((row + 1) + "" + col);
        }
      }
        return newShipsLocations;  
    },
    collision: function(locations) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            for (var j = 0; j < this.locations.length; j++) {
            if (ship.locations.indexOf(locations[j]) >= 0) {
                return true;
            }
        }
      } 
      return false;
    } 
};

// GAME CONTROLLER - player guesses etc

var controller = {
        guesses: 0,

        processGuess: function(guess) {
            var location = parseGuess(guess);
            if (location) {
                this.guesses++;
                var hit = model.fire(location);
                if (hit && model.shipsSunk === model.numShips) {
                    view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
           }
       }
    }
}


// VALIDATE GUESS


function parseGuess(guess) {
    var alphabet = ["A","B","C","D","E","F","G"];

    if (guess === null || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board.");
    } else {
        var firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that is isn't on the board");
        } else if (row < 0 || row >= model.boardSize || 
                      column < 0 || column >= model.boardSize) {
            alert("Oops, that's off the board");
        } else {
            return row + column;
            }
            
         }
         return null;

    }
// EVENT HANDLERS

function handleFireButton() {
   var guessInput = document.getElementById("guessInput");
   var guess = guessInput.value;
   controller.processGuess(guess);
   guess.value = "";
}
function handleKeyPress(e) {
	var fireButton = document.getElementById("fireButton");

	// in IE9 and earlier, the event object doesn't get passed
	// to the event handler correctly, so we use window.event instead.
	e = e || window.event;

	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
}
window.onload = init;

function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;
}