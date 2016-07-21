//comentarios

var diametro;
diametro = 50;


//se ejecuta solo una vez
function setup() {
  //createCanvas (dimHor, dimVert)
  //crea lienzo
  createCanvas(800,600);
  //background (red, green, blue)
  //define el color de fondo
  background(0, 255, 0);
}

function estilo1(){
   //declarar variable anchoBorde, asignarle valor
  var anchoBorde = 10;
  
   
  strokeWeight(20);
  stroke (210, 0, 100);
  fill(100, 200, 50);
  ellipse(mouseX, mouseY, diametro, 300);
}

//funcion draw () se ejecuta despues de setup
//60 veces por segundo
function draw() {
  
  background(0, 255, 0);
  
  //declarar variable anchoBorde, asignarle valor
  var anchoBorde = 10;
  
    //tamaño borde circulo
  //strokeWeight (px)
  strokeWeight(anchoBorde);
  
  //color borde circulo
  //stroke(R,G,B)
  stroke (210, 0, 100);
  
  //fill(color relleno)
  //fill(R,G,B)
  fill(255, 0, 0);
  
  
  //ellipse(posX, posY, width, height)
  //ellipse (px, px, px, px)
  //mouseX, mouseY (dibujar circulos con mouse)
  
  ellipse(mouseX, mouseY, diametro, diametro);
  
  diametro = diametro + 1;
  
estilo1();
}

