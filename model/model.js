'use strict'
// Класс gamefield является моделью игры "Жизнь" в нем реализованы правила игры
class gameField{
    //Конструктор инициализирует основное поле игры
    //На вход подается двумерный массив из 0 и 1
    constructor(field){
            
    this.mainField=field;
    
    
    }
    //Возвращает поле игры
    getField(){
        return this.mainField
    }

    // Считает количество соседей у клетки.  
    // На входе i - номер строки , j-номер столбца
    // на выходе количество соседей клетки 
    neighborsCount(i,j){
 
            let n=this.mainField.length-1;
            let m=this.mainField[0].length-1;
            let mainField=this.mainField;
            let field=this.mainField;

            //внутрення функция исправляет выход за пределы массива
            function get(i0,j0){
            
                if(i0<0 || j0<0 || i0>n || j0>m){
                    return 0;
                }
                let item=field[i0][j0];
                return item===NaN ? 0 : item;
            }
            
            let result=0;
            result+=get(i-1,j);
            result+=get(i-1,j+1);
            result+=get(i,j-1);
            result+=get(i,j+1);
            result+=get(i+1,j-1);
            result+=get(i+1,j+1);
            result+=get(i+1,j);
            result+=get(i-1,j-1);
            return result;

    
    }

    //Метод производит процесс зарождения новых клеток согласно правилам
    born(){
        let n=this.mainField.length;
        let m=this.mainField[0].length;

        for(let i=1; i<n; ++i){
        
                for(let j=1; j<m; ++j){
                
                   if(this.mainField[i][j]===0){
                        if(this.neighborsCount(i,j)===3){
                            this.mainField[i][j]=1;
                        }
                   } 
                }
        
        }
    }
    
    //метод производит отмирание новых клеток согласно правилам
    death(){
        let n=this.mainField.length;
        let m=this.mainField[0].length;

        for(let i=0; i<n; ++i){
        
                for(let j=0; j<m; ++j){
                
                   if(this.mainField[i][j]===1){
                        let neighbors=this.neighborsCount(i,j)
                        if(neighbors<2 || neighbors>3){
                            this.mainField[i][j]=0;
                        }
                   } 
                }
        
        }}
   
}

//module.exports={gameField}
