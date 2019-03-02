'use strict'
class Controller{
    //Устанавливаем поле
    constructor(field){
	this.mainField = field;
    }
    //Получаем поле
    getField(){
	return this.mainField;
    }
    /*
    Функция игрового цикла
    Вход: объект
    Вызываем метод объекта рождения
    Присваиваем новое поле полю конструктора, возвращаем в ГУИ
    Вызываем смерть клетки, возвращаем в ГУИ
     */
    gameLoop(object){
	object.born();
	this.mainField = object.getField();
	//to Client
	//pause
	object.death();
	this.mainField = object.getField();
	//to Client
	//pause
    }
}
