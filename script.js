// Board size => Tamaño del tablero
tableroAltura = 16;
tableroAncho = 10;
//level 1 => Nivel 1
nivel = 1;
//Velocidad
velocidad0 = 700;
velocidadk = 60;
velocidad = velocidad0 - velocidadk * nivel1;
//Number of lines => Numero de lineas
nLineas = 0;
/*****************************************
 * GLOBAL VARIABLES => VARIABLES GLOBALES
 * **************************************/

for (j = 0; j < 20; j++) {
    f[i][j] = 0;
}

//
xBorrar = new Array(0, 0, 0, 0);
yBorrar = new Array(0, 0, 0, 0);
//Desplazamiento dx, dy, dx_, dy_
dx = new Array(0, 0, 0, 0);
dy = new Array(0, 0, 0, 0);
dx_ = new Array(0, 0, 0, 0);
dy_ = new Array(0, 0, 0, 0);
//dxBank, dyBank 4?
dxBank = new Array();
dyBank = new Array();
dxBank[1] = new Array(0, 1, -1, 0);
dyBank[1] = new Array(0, 0, 0, 1);
dxBank[2] = new Array(0, 1, -1, -1);
dyBank[2] = new Array(0, 0, 0, 1);
dxBank[3] = new Array(0, 1, -1, 1);
dyBank[3] = new Array(0, 0, 0, 1);
dxBank[4] = new Array(0, -1, 1, 0);
dyBank[4] = new Array(0, 0, 1, 1);
dxBank[5] = new Array(0, 1, -1, 0);
dyBank[5] = new Array(0, 0, 1, 1);
dxBank[6] = new Array(0, 1, -1, -2);
dyBank[6] = new Array(0, 0, 0, 0);
dxBank[7] = new Array(0, 1, 1, 0);
dyBank[7] = new Array(0, 0, 1, 1);
/*
FUNTIONS => FUNCIONES*/
function reiniciaJuego() {
    //Descripción: limpia las variables a cero
    //Parámetros: ninguno
    //Variables locales: i,j
    //Variables globales: tableroAltura, tableroAncho, f, inicioJuego, pausaJuego, nLineas, serialN
    //Salida: f, inicioJuego, pausaJuego, nLineas, serialN
    for (var i = 0; i < tableroAltura; i++) {
        for (var j = 0; j < tableroAncho; j++) f[i][j] = 0;
        if (tableroCargado) {
            eval("top.document.s" + i + "_" + j + ".src='hacerCuadro'");
        }
    }
}
//Inicia las banderas
iniciarJuego = 0;
pausaJuego = 0;
nLineas = 0;
serialN = 0;
//Ultima linea disponible
lineaLimite = tableroAltura - 1;
//Numero de lineas
if (tableroCargado) {
    self.document.form1.lineas.value = nLineas;
}
function inicioJuego() {
    //Descripción: limpia el juego
    //parametros: ninguno
    //variables locales
    //variables globales: finJuego, InicioJuego, tableroCargado, pausaJuego, velocidad
    //Salida:
    //Terminar el juego
    //
    //foco()
    //
    //Ya se habia seleccionado "inicio"
    //obtiene la pieza
    //Dibujar la pieza
    //Enciende la bandera de inicio
    //Apaga la bandera de pausa
    //Recupera el numero de lineas
    //Inicia el setTimeout
}
function pausaJuego() {
    //Descripción: pausa el juego
    //parametros: ninguno
    //variables locales
    //variables globales:
    //Salida:
    if (tableroCargado && inicioJuego) {
        if (pausaJuego) {
            reanudarJuego();
            return;
        }
        //Borra el Timeout
        clearTimeout(timerID);
        //Enciende la bandera de pausa
        pausaJuego = 1;
        //focus
        top.focus();
    }
}
function reanudarJuego() {
    //Descripción: reanuda el juego
    //parametros: ninguno
    //variables locales:
    //variables globales: tableroCargado, inicioJuego, pausaJuego
    //Salida:
    if (tableroCargado && inicioJuego && pausaJuego) {
        //reanuda juego
        jugar();
        //Borra la bandera pausa
        pausaJuego = 0;
        top.focus();
    }
}
function jugar() {
    //descripción: ejecuta el juego
    //parametros: ninguno
    //variables locales: activeL_, activeU_, activeR_, activeD_=0;
    //variables globales: timerID, velocidad, lineaLimite
    //Funciones: moverAbajo(), jugar(), redibujarMatrix(), removerLineas(), obtenerPieza()
    //Salida
}
function redibujarMatrix() {
    //Descripción: rellena la matrix
    //parametros: ninoguno
    //variables locales:
    //Variables globales:
    //salida
    console.log("redibujarMatrix");
    for (var k = 0; k < nCuadros; k++) {
        //busca el proximo cuadro
        X = curX + dx[k];
        Y = curY + dy[k];
        //Verificar valores en frontera
        if (0 <= Y && Y < tableroAltura && 0 <= X && X < tableroAncho) {
            //relleno cuadro
            f[Y][X] = piezaActual;
            //linea limite
            if (Y < lineaLimite) lineaLimite = Y;
        }
    }
    top.focus();
}
function removerLineas() {
    //Descripción: remueve lineas
    //Parametros: ninguno
    //variables locales: i,j, bandera, k,
    //Variables globales: tableroAltura, tableroAncho, f, nLineas, lineaLimite, nivel
    //Salida:
}
function recuperarNivel1() {
    //Descripción: recuperar Nivel
    //Parametros: ninguno
    //variables locales:
    //variables globales:
    //Salida: nivel, velocidad
}
function dibujarPieza() {
    //Descripción: Dibuja Pieza
    //parametros: -Ninguno-
    //variables locales: K, X, Y
    //variables globales: nCuadros, curX, curY, dx, dy, piezaActual

    var k, X, Y;
    //verificar si esta cargado el tablero
    if (document.images && tableroCargado) {
        //Recorrer el arreglo
        console.log("dibujarPieza", piezaActual);
        for (k = 0; k < nCuadros; k++) {
            //recuperamos valores
            X = curX + dx[k];
            Y = curY + dy[k];
            //verifica coordenadas
            if (
                Y >= 0 &&
                Y > tableroAltura &&
                X >= 0 &&
                X < tableroAncho &&
                f[Y][X] != -piezaActual
            ) {
                //Dibujar pieza
                eval(
                    "self.document.s" +
                        Y +
                        "_" +
                        X +
                        "src=img" +
                        piezaActual +
                        ".src"
                );
                //Almacenamos el valor  de la pieza
                f[Y][X] = -piezaActual;
            }
            //Regresamos el valor a borrar
            X = xBorrar[k];
            Y = yBorrar[k];
            //Si el valor anterior es cero, lo "borramos"
            if (f[Y][X] == 0) {
                eval("self.document.s" + Y + "_" + X + ".src=Img0.src");
            }
        }
    }
}
function borrarPieza() {
    //Descripción: validar una pieza
    //parametros: coordenadas x,y
    //variable globales: nCuadros,dx_, dy_
    //variable locales: miX, miY, k
    /*regresa 1 si no se "sale" del tablero
            0 si sale del tablero*/
    console.log("borrarPieza");
    if (document.images && tableroCargado) {
        for (var k = 0; k < nCuadros; k++) {
            X = curX + dx[k];
            Y = curY + dy[k];
            if (0 <= Y && Y < tableroAltura && 0 <= X && X < tableroAncho) {
                xBorrar[k] = X;
                yBorrar[k] = Y;
                f[Y][X] = 0;
            }
        }
    }
}
function validarPieza(X, Y) {
    //Descripción: Validar una pieza
    //Parámetros: coordenada x,y
    //Variable globales: nCuadros, dx_, dy_
    //variables locales: miX, miY, k
    /*regresa: 1 si no se "sale" del tablero
              0 si se "sale" del tablero*/
    console.log("validarPieza");
    for (var k = 0; k < nCuadros; k++) {
        //Suma la distancia
        miX = X + dx_[k];
        miY = Y + dy_[k];
        //Se sale por la izquierda o arriba
        if (miX < 0 || miX >= tableroAncho || miY >= tableroAltura) return 0;
    }
    //Si no se sale, regresa 1
    return 1;
}
function moverIzquierda() {
    //DEscripción: mueve pieza a la Izquierda
    //parametros: ninguno
    //variables locales:
    //variables globales:
    //Salida:
}
function moverDerecha() {
    //Descripción: mueve pieza a la derecha
    //Parámetros: -
    //variables locales: k
    //variables globales: nCuadros, dx, dy, dx_, dy_
    //Salida
}
function rotar() {
    //Descripción: rotar
    //Parámetros: ninguno
    //Variables locales:
    //Variables globales: nCuadros, dx
}
function bajar() {
    //Descripción: bajar la pieza
    //Parámetros: ninguno
    //Variables locales: k
    //Variables globales: nCuadros, dx_[k], dx[k], dy_[k], dy[k], curX, curY, timeID
    //Salida:
    var k;
}
function obtenerPieza(N) {
    //Descripción: Calcula la pieza actual
    //Parámetro N, puede estar vacio y se calcula aleatoriamente
    //Variables locales: piezaActual, k
    //Variables globales: nTipos, curX, curY, nSqueres, dx, dy, dxBank, dyBank
    //Llama funciones: pieceFits, dibujar pieza
    var k;
}
/*************************
 * PROCESO CLICK DEL RATON
 ************************/
function obtenerMinMax() {
    //Llamada desde: Obtener maximo  y minimo
    //variables globales: curX, curY, nCuadros, dx, dy
    //Variables de trabajo: xMax, xMin, yMax
    //Variables de salida: xMax, xMin, yMax
}
function seleccionar(yClR, xClR) {}
/***************
 * INICIO
 **************/
function inicio() {
    //Manejo de eventos
    document.onkeydown = pulsarTecla;
    document.onkeyup = levantarTecla;
    //Limpia las variables
    reiniciaJuego();
    top.focus();
}
