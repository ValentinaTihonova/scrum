
/*
Разбиваем поле на массив 8х8, присваеваем каждому элементу массива 0.
При клики на клетку присваеваем этому элементу 1, далее закрашиваем его.

*/


//Подключаем канвас
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


 canvas.width = 800;
 canvas.height = 504;


var blockSize = 1,
    myColor = "silver",


    subFieldPosX = 0,
    subFieldPosY = 0,
    subFieldArr = [];

//при нажатии на кдетку вызывается метод drawSubField()
canvas.onclick = function(event)
{
	//получаем координаты нажатия
	var x = event.offsetX;
	var y = event.offsetY;	
	console.log(x);
	console.log(y);


	x = Math.floor(x/100); //800/100 = 8
	y = Math.floor(y/63); //504/63 = 8

	// Как закрасил, так и раскрасил
	if (subFieldArr[y][x] == 1) {
		subFieldArr[y][x] = 0;
	}else{
		subFieldArr[y][x] = 1;
	}
	
	console.log(subFieldArr);
	drawSubField();
}

//разделям поле на восемь частей
drawField = function()
{
	var n = 8, m = 8;

	for(var i = 0; i < m; i++)
	{
		subFieldArr[i] = [];
 
	    for(var j = 0; j < m; j++)
	    {
	    	ctx.lineWidth = 1;
			ctx.strokeStyle = myColor;
 			ctx.strokeRect(subFieldPosX, subFieldPosY, 100, 63);      
	    	subFieldPosX += 100;
	    	subFieldArr[i][j] = 0;

	    }	

	    subFieldPosX = 0;
	    subFieldPosY += 63;

	    
	    //document.write(subFieldArr[i][j] + "   ");
	    
	}

}

drawField();


function drawSubField()
{
	//ctx.clearRect(0, 0, 800, 504);

	for(var i = 0; i < 8; i++)
	{ 
	    for(var j = 0; j < 8; j++)
	    {
	    	//присваевам массиву 1 если на нем есть клик
	    	if(subFieldArr[i][j] == 1)
	    	{
	    		ctx.fillRect(j*100, i*63, 100, 63);
	    	}

	    }	

	}
}

//создаем жизнь
function createLife(arr){

}

function pow(x, n) {
      /* код функции, пока что пусто */
    }
arr = subFieldArr;
createLife(arr);

//Убиваем жизнь
function deadLife(){

}

//Проверяем поле
function checkField(){

}