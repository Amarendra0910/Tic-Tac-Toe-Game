
let turn = 'O';

let winner = [
    [1, 2, 3], [4, 5, 6], [6, 7, 8],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
]

const board_array = new Array(9).fill("E");

function checkWinner() {
    for (let [index0, index1, index2] of winner) {
        if (board_array[index0] != "E" && board_array[index0] == board_array[index1] && board_array[index1] == board_array[index2])
            return 1;
    }
}

// to print
const board = document.querySelector('.board');
board.addEventListener('click', (e) => {

    const element = e.target;
    if (turn == 'O') {
        element.textContent = "O";
        board_array[element.id] = "O";
        if (checkWinner()) {
            document.getElementById('winMes').textContent = "Winner is O"
        }
        turn = "X";
    }
    else {
        element.textContent = "X";
        board_array[element.id] = "1";
        if (checkWinner()) {
            document.getElementById('winMes').textContent = "Winner is X"
        }
        turn = "O";
    }
})