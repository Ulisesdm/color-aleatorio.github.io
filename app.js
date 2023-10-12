// seleccionar los elelmentos del dom

const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorHexAle(){
 let digitos = '0123456789ABCDEF';
 let colorHex = '#';  

  for(let i=0; i<6; i++){
     let indicealeatorio=Math.floor(Math.random()* 16);
      colorHex += digitos[indicealeatorio]; 
    }
   return colorHex;

}

boton.addEventListener('click', function(){
let colorAleatorio = generarColorHexAle();
//actualizar el texto
color.textContent = colorAleatorio;
//actualizar el texto
document.body.style.backgroundColor = colorAleatorio;

})