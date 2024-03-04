var canvas = document.getElementById("drawingCanvas");
var context = canvas.getContext("2d");

context.clearRect(0,0,400,300);

let rows = parseInt(prompt("Введите высоту рисунка (количество строк):"))+1;
while (isNaN(rows) || rows <= 0) {
    rows = parseInt(prompt("Пожалуйста, введите корректное количество строк (целое число больше нуля):"));
}

let cols = parseInt(prompt("Введите количество столбцов рисунка:"))+1;
while (isNaN(cols) || cols <= 0) {
    cols = parseInt(prompt("Пожалуйста, введите корректное количество столбцов (целое число больше нуля):"));
}

for (i=1; i < rows; i++){ 
    if (i%2==0){
        len = cols/2;
    }
    else{
        len = cols;
    }
    for (j=1;j<len;j++){
        if (j%2==0){
            context.fillStyle="rgba(0,255,0,0.5)";
        }
        else{
            context.fillStyle="rgba(0,0,255,0.5)";
        }
        context.fillRect(j*20,i*20,10,10);
        context.strokeStyle="black";
        context.strokeRect(j*20,i*20,10,10);
    }
}