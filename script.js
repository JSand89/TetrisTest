//-----begin of 1 point
//figure star
let dxBank
let dyBank
//position x and y respect to a origin point, in the video the pisition 0 of array is empity be careful wiht that
dxBank=[[0,1,-1,1],[0,1,-1,-1],[0,1,-1,1],[0,-1,1,0],[0,1,-1,0],[0,1,-1,-2],[0,1,1,0]]
dyBank=[[0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,1,1],[0,0,1,1],[0,0,0,0],[0,0,1,1]]
//console.log(dxBank)
//console.log(dyBank)
//----- end 1 point
//------begin 4 point
function iniciarJuego(){
    console.log("iniciar Juego")
    if(finJuego){
        top.history.back();
        finJuego=0
    }
    top.focus();

    if(inicioJuego){
        if(!tableroCargado){
            return
        }
    }   
    if(pausaJuego){
        reanudarJuego();
    }
    return;
}
// esto creo debe ir dentro de iniciar juego, pero por ahora hacer las otras funciones, mirar el html por que puede ser mejor hacerlo de otrafomamas conocida
obtienePieza();//call function
dibujarPieza();//call function
inicioJuego=1;//status 
pausaJuego=0;//flag of pausa
self.document.form1.lineas.value=nLineas;
timerID=setTimeout(jugar(),velocidad);
//---end of 4 point

//-------begin of 5 point

function obtenerPieza(N){

    //genera un el numero aleatorio
    piezaActual=(obtenerPieza.arguments.length==0)?1+Math.floor(nTipos*Math.random):N;
    console.log("obtenerPieza", piezaActual)
    curX=5;//begin in te position 5 in 5 and 0 in Y
    curY=0;
    for(var k=0; k<nCuadros; k++){
        //crea las piesas
        dx[k]=dxBank[piezaActual[k]];
        dy[k]=dyBank[piezaActual[k]];
        //crea piezas "auxiliares" o de apoyo
        dx_[k]=dx[k];
        dy_[k]=dy[k];
    }
    if(validarPieza(curX,curY)){
        dubujarPieza();
        return 1;
    }
    return 0;
}
//----end of 5 point
//------begin of 7 point

function jugar(){
    console.log("jugar")
    if(moverAbajo){//call function
        timerID=setTimeout("jugar()",velocidad);
        return;
    } else{
        redibujarMatrix();
        removerLineas();
        if(lineaLimite>0&&obtenerPieza()){
            timerID=setTimeout("jugar()",velocidad);
            return;
        }else{
            activeL_=0; activeU_=0;
            activeR_=0; activeD_=0;
            if(confirm("Fin del juego\n\n Volver a intentarlo?")){
                inicio();
            }else{
                if(finJuego){
                    self.close();
                }
            }
        }
    }
}
function moverAbajo(){
    console.log("moverAbajo",curY)
    for(k=0;k<nCuadros;k++){
        dx_[k]=dx[k];
        dy_[k]=dy[k];
    }
    if(validarPieza(curX,curY+1)){
        borrarPieza();
        curY++;
        dibujarPieza();
        return 1;
    }
    return 0;
}
