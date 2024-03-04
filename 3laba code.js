let rows = parseInt(prompt("Введите количество строк для массива:"));

while (isNaN(rows) || rows <= 0) {
    rows = parseInt(prompt("Пожалуйста, введите корректное количество строк (целое число больше нуля):"));
}

let cols = parseInt(prompt("Введите количество столбцов для массива:"));

while (isNaN(cols) || cols <= 0) {
    cols = parseInt(prompt("Пожалуйста, введите корректное количество столбцов (целое число больше нуля):"));
}

let arr = [];

for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < cols; j++) {
        arr[i][j] = Math.floor(Math.random() * 100) + 1;
    }
}

let max = 0;
let result = 99999;

for (var i = 0; i<arr.length; i++){
    for (var j = 0; j<arr.length; j++){
        if(arr[i][j] > max){
            max = arr[i][j];
        }
    }
    if(max < result){
        result = max;
    }
    max = 0;
}

alert(result);

var matrixString = "";

for (var i = 0; i < arr.length; i++) {
    var rowString = arr[i].join(" ");
    matrixString += rowString + "\n";
}
matrixString;