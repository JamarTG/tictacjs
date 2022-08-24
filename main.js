var squares = document.querySelectorAll('.square');
var marker = document.querySelector('.marker');
// decide who's turn it is
var isPlayersTurn = true;
var unchosenSquareNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var chosenSquareIndex;
var chosenSquareNumber;
var chosenSquare;
var humanLetter = 'X';
var computerLetter = 'O';
var lastCharAsNumber;
var gameEnded = false;
var positionEvaluation;
var minmax = function () {
};
//make the values passed an optional parameter in the evaluation function
var random = function (min, max) { return Math.floor(Math.random() * (max - min)) + min; };
var getSquareContent = function (sqIdx) { var _a; return (_a = document.getElementById("square".concat(sqIdx))) === null || _a === void 0 ? void 0 : _a.textContent; };
var boardEvaluation = function () {
    var arr = [];
    for (var i = 1; i < 10; i++) {
        arr.push(getSquareContent(i));
    }
    if (arr[0] === arr[1] && arr[1] === arr[2] && arr[2] != '') {
        marker === null || marker === void 0 ? void 0 : marker.classList.add('marker-r1');
        marker === null || marker === void 0 ? void 0 : marker.classList.remove('marker');
        return arr[0] === 'X' ? -1 : 1;
    }
    else if (arr[3] === arr[4] && arr[4] === arr[5] && arr[5] != '') {
        marker === null || marker === void 0 ? void 0 : marker.classList.add('marker-r2');
        marker === null || marker === void 0 ? void 0 : marker.classList.remove('marker');
        return arr[3] === 'X' ? -1 : 1;
    }
    else if (arr[6] === arr[7] && arr[7] === arr[8] && arr[8] != '') {
        marker === null || marker === void 0 ? void 0 : marker.classList.add('marker-r3');
        marker === null || marker === void 0 ? void 0 : marker.classList.remove('marker');
        return arr[6] === 'X' ? -1 : 1;
    }
    else if (arr[0] === arr[3] && arr[3] === arr[6] && arr[6] != '') {
        marker === null || marker === void 0 ? void 0 : marker.classList.add('marker-c1');
        marker === null || marker === void 0 ? void 0 : marker.classList.remove('marker');
        return arr[0] === 'X' ? -1 : 1;
    }
    else if (arr[1] === arr[4] && arr[4] === arr[7] && arr[7] != '') {
        marker === null || marker === void 0 ? void 0 : marker.classList.add('marker-c2');
        marker === null || marker === void 0 ? void 0 : marker.classList.remove('marker');
        return arr[1] === 'X' ? -1 : 1;
    }
    else if (arr[2] === arr[5] && arr[5] === arr[8] && arr[8] != '') {
        marker === null || marker === void 0 ? void 0 : marker.classList.add('marker-c3');
        marker === null || marker === void 0 ? void 0 : marker.classList.remove('marker');
        return arr[2] === 'X' ? -1 : 1;
    }
    else if (arr[0] === arr[4] && arr[4] === arr[8] && arr[8] != '') {
        marker === null || marker === void 0 ? void 0 : marker.classList.add('marker-d1');
        marker === null || marker === void 0 ? void 0 : marker.classList.remove('marker');
        return arr[0] === 'X' ? -1 : 1;
    }
    else if (arr[2] === arr[4] && arr[4] === arr[6] && arr[6] != '') {
        marker === null || marker === void 0 ? void 0 : marker.classList.add('marker-d2');
        marker === null || marker === void 0 ? void 0 : marker.classList.remove('marker');
        console.log();
        return arr[2] === 'X' ? -1 : 1;
    }
    else if (arr[0] && arr[1] && arr[2] && arr[3] && arr[4] && arr[5] && arr[6] && arr[7] && arr[8]) {
        return 0;
    }
    else {
        return 2;
    }
};
var _loop_1 = function (square) {
    square.addEventListener('click', function () {
        //TODO
        /*
            Ensure that human can't choose a square that is already taken
            Ensure that we computer stops playing if full

        */
        if (!gameEnded) {
            lastCharAsNumber = parseInt(square.id.charAt(square.id.length - 1));
            if (!unchosenSquareNumbers.includes(lastCharAsNumber)) {
                return;
            }
            square.textContent = humanLetter;
            //remove that square number from the unchosen array
            unchosenSquareNumbers = unchosenSquareNumbers.filter(function (x) { return x != lastCharAsNumber; });
            positionEvaluation = boardEvaluation();
            if (positionEvaluation === -1 || positionEvaluation === 1 || positionEvaluation === 0) {
                gameEnded = true;
            }
        }
        if (!gameEnded) {
            //choose an index in the unchosen square numbers
            chosenSquareIndex = random(0, unchosenSquareNumbers.length - 1);
            chosenSquareNumber = unchosenSquareNumbers[chosenSquareIndex];
            //chose the unchosen number using the random square index
            chosenSquare = document.querySelector("#square".concat(chosenSquareNumber));
            if (chosenSquare != null) {
                chosenSquare.textContent = computerLetter;
            }
            unchosenSquareNumbers = unchosenSquareNumbers.filter(function (x) { return x != chosenSquareNumber; });
            positionEvaluation = boardEvaluation();
            if (positionEvaluation === -1 || positionEvaluation === 1 || positionEvaluation === 0) {
                gameEnded = true;
            }
        }
    });
};
for (var _i = 0, squares_1 = squares; _i < squares_1.length; _i++) {
    var square = squares_1[_i];
    _loop_1(square);
}
