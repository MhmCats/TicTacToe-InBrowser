// MIT License

// Copyright (c) 2021 MhmCats

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

(function () {
    var player1 = "x";
    var player2 = "o";
    function createNewBoard() {
        return [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]]
    };
    function checkWin(board, player) {
        for (let i = 0; i < 3; i++) {
            if(board[0][i] === player && board[1][i] === player && board[2][i] === player){
                return true;
            };
            if(board[i][0] === player && board[i][1] === player && board[i][2] === player){
                return true;
            };
        };
        if(board[0][0] === player && board[1][1] === player && board[2][2] === player){
            return true;
        };
        if(board[2][0] === player && board[1][1] === player && board[0][2] === player){
            return true;
        } else{
            return false
        };
    };
    function checkDraw(board) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === "-"){
                    return false;
                };
            };
        };
        if (checkWin(board, "x") === true || checkWin(board, "o") === true){
            return false;
        };
        return true;
    };
    function playerMove(board, player, moveInt) {
        if (parseInt(moveInt) < 4) {
            if (board[0][parseInt(moveInt)-1] === "-") {
                board[0][parseInt(moveInt)-1] = player;
            } else {
                alert("Invalid Move!");
                return false;
            };
        } else if (parseInt(moveInt) < 7) {
            if (board[1][parseInt(moveInt)-4] === "-"){
                board[1][parseInt(moveInt)-4] = player;
            } else {
                alert("Invalid Move!");
                return false;
            };
        } else if (parseInt(moveInt) < 10) {
            if (board[2][parseInt(moveInt)-7] === "-") {
                board[2][parseInt(moveInt)-7] = player;
            } else {
                alert("Invalid Move!");
                return false;
            };
        } else {
            alert("Invalid Move!");
            return false;
        };
        return board;
    };
    function printableBoard(board) {
        var res = "";
        for (let row in board) {
            var rowString = "";
            for (let item in board[row]) {
                rowString += `${board[row][item]}   `;
            };
            res += `${rowString}\n`;
        };
        return res;
    };
    function getUserInput(board, player) {
        var input = prompt(`${printableBoard(board)}${player} what is your move? (Type q to quit)`);
        var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        for (let value in numbers) {
            if (numbers[value] === input) {
                return input;
            } else {
                continue;
            };
        };
        if (input === "q") {
            throw new Error("Stop script");
        }
        alert("Invalid Move!");
        return false;
    };
    var board = createNewBoard();
    while (true) {
        var input = false;
        var move = false;
        while (input === false && move === false) {
            input = getUserInput(board, "Player 1")
            if (input === false) {
                continue;
            } else {
                move = playerMove(board, player1, input);
                if (move === false) {
                    input = false;
                    continue;
                };
            };
        };
        board = move;
        if (checkWin(board, player1)) {
            return alert("Player 1 won!");
        } else if (checkDraw(board)) {
            return alert("It was a draw!");
        };
        var input = false;
        var move = false;
        while (input === false && move === false) {
            input = getUserInput(board, "Player 2")
            if (input === false) {
                continue;
            } else {
                move = playerMove(board, player2, input);
                if (move === false) {
                    input = false;
                    continue;
                };
            };
        };
        board = move;
        if (checkWin(board, player2)) {
            return alert("Player 2 won!");
        } else if (checkDraw(board)) {
            return alert("It was a draw!");
        };
    };
})()