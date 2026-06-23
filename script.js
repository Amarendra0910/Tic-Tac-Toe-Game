
let turn = 'O';
let total_turn = 0;

let winner = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

let board_array = new Array(9).fill("E");

function checkWinner() {
    for (let [index0, index1, index2] of winner) {
        if (board_array[index0] != "E" && board_array[index0] == board_array[index1] && board_array[index1] == board_array[index2])
            return 1;
    }
}

// to print
const printer = (e) => {
    const element = e.target;
    if (board_array[element.id] == "E") {

        total_turn++;
        if (turn == 'O') {
            element.textContent = "O";
            board_array[element.id] = "O";
            if (checkWinner()) {
                document.getElementById('winMes').textContent = "Winner is O";
                board.removeEventListener('click', printer);
                return;
            }
            turn = "X";
        }

        else {
            element.textContent = "X";
            board_array[element.id] = "X";
            if (checkWinner()) {
                document.getElementById('winMes').textContent = "Winner is X";
                board.removeEventListener('click', printer);
                return;
            }
            turn = "O";
        }

        if (total_turn == 9) {
            document.getElementById('winMes').textContent = "Match is draw";
        }
    }
}

const board = document.querySelector('.board');
board.addEventListener('click', printer);

const restart = document.getElementById("restartBtn");

restart.addEventListener('click', () => {
    const box = document.getElementsByClassName("box");

    Array.from(box).forEach((value) => {
        value.textContent = "";
    })

    turn = "O";
    total_turn = 0;
    board_array = new Array(9).fill("E");
    document.getElementById('winMes').textContent = "";
    board.removeEventListener('click', printer);
    board.addEventListener('click', printer);
})
