let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let velocidadedaxBolinha = 6;
let velocidadedayBolinha = 6;

function setup() {
  createCanvas(600 , 400);
}

function draw() {
  background(0);
  circle (xBolinha , yBolinha , diametro);
  xBolinha += velocidadedaxBolinha
  yBolinha += velocidadedayBolinha
  if (xBolinha > width || xBolinha < 0){
    velocidadedaxBolinha *= -1;
  }
  if (yBolinha > height || yBolinha < 0){
    velocidadedayBolinha *= -1
  } 
    
 }


