// Write a program that creates a string that represents an 8x8 grid, using new-line characters to separate lines
// At each position of the grid there is either a space or a "#" character should form a chess board.

let size = 8;
let board = "";

for(let y = 0; y < size; y++){
    for(let x = 0; x < size; x++){
        if((x + y) % 2 == 0){
            board += " ";
        } else {
            board += "#"
        }
    }
    board += "\n";
}

console.log(board)