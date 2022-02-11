var filas = 6;
var columnas = 8;


function condicionInicial(filas, columnas){
    var filas = filas;
    var columnas = columnas;

    var matriz = [];
    
    for(let y=0;y<filas;y++)
    { 
        var matrizInterna = [];
        for(let x=0;x<columnas;x++)
        {           
            var num = Math.round(Math.random() * (10 - 1)) + 1;
            var cell;
            if(num%2==0){
                cell = "🙂";
                matrizInterna.push(cell);
            }
            else{
                cell = "💀";
                matrizInterna.push(cell);
            } 
        }
        matriz.push(matrizInterna);
    }

    return matriz;
}


class Celda {
    constructor(estado, matriz, x, y){
        this.estado = estado;
        this.matriz = matriz;
        this.x = x;
        this.y = y;     
    }
    
    contarVecinos(x,y) {
        var num = 0;
        try {
            cell = this.matriz[x][y-1];
            if(cell == "🙂"){
                num += 1;
            }
         }
         catch (e) {
        
         }
         try {
            cell = this.matriz[x-1][y];
            if(cell == "🙂"){
                num += 1;
            }
         }
         catch (e) {
            
         }try {
            cell = this.matriz[x][y+1];
            if(cell == "🙂"){
                num += 1;
            }
         }
         catch (e) {
        
         }
         try {
            cell = this.matriz[x+1][y];
            if(cell == "🙂"){
                num += 1;
            }
         }
         catch (e) {
         }
    }

    nuevoEstado(numVeceinos){
        if(2<= numVeceinos <= 3){
            this.estado = "🙂"
        }
        else{
            this.estado = "💀"
        }
        return this.estado
    }
}
  

function recorrerCelda(matriz){
    nuevaMatriz = matriz;
    for(let x=0; x<filas; x++){
        var matrizInterna = [];
        for(let y=0; y<columnas; y++){
            var estado = matriz[x][y];
            var celda = new Celda(estado, x, y , matriz);
            var num = celda.contarVecinos(x,y);
            var estado = celda.nuevoEstado(num);
            console.log("Nuevo estado",estado, x,y)
            nuevaMatriz[x][y] = estado;
        }
    }
    return nuevaMatriz;
}


function imprimir(matriz){
    for(let y=0;y<filas;y++){
        console.log(matriz[y].join(" "));
    }
}


 var matrizInicial = condicionInicial(filas, columnas);
 imprimir(matrizInicial);
 matrizInicial = recorrerCelda(matrizInicial);
 imprimir(matrizInicial);