
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



	if(subFieldArr[y][x] == 0){
		subFieldArr[y][x] = 1;
	}
	else if(subFieldArr[y][x] == 1)
	{
	    subFieldArr[y][x] = 0
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
	    		ctx.fillStyle  = myColor;
	    		ctx.fillRect(j*100+1, i*63+1, 98, 61);
	    	}
	    	else if(subFieldArr[i][j] == 0)
	    	{
	    		ctx.fillStyle  = "white";
	    		ctx.fillRect(j*100+1, i*63+1, 98, 61);
	    	}


	    }	

	}
}


function randomFill()
{
	var fieldRandom = document.getElementById("input").value;

	if(fieldRandom > 10 || fieldRandom < 3)
	{
		alert("Случайное заполнение не должно быть больше 10 или больше 3");
	}

   for(var i = 0; i < fieldRandom; i++)
   {				
   			x = Math.floor(Math.random()*8); 
			y = Math.floor(Math.random()*8); 

	        console.log("x=" + x);
	        console.log("y=" + y);
	    	
	    	if(subFieldArr[x][y] == 0)
	    	{
	    		subFieldArr[x][y] = 1;
	    	}
	    	else if(subFieldArr[x][y] == 1)
	    	{
	    		i--;
	    	}	
	    	
	    	if(subFieldArr[x][y] == 1)
	    	{
    			ctx.fillStyle  = myColor;
    			ctx.fillRect(x*100+1, y*63+1, 98, 61);
    		}			
  	}	

 }




