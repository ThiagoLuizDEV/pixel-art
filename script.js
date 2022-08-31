// 1 )
const elementoH1 = document.createElement('h1');
elementoH1.id = 'title';
elementoH1.innerText = "Paleta de Cores";
document.body.appendChild(elementoH1);

// 2,3 )
const paletaDeCoresMain = document.createElement('div');
paletaDeCoresMain.id = 'color-palette';
document.body.appendChild(paletaDeCoresMain);

let paletaDeCores1 = document.createElement('div');
paletaDeCores1.className = 'color';
paletaDeCores1.style.border = 'black solid 1px';
paletaDeCores1.style.height = '25px';
paletaDeCores1.style.width = '25px';
paletaDeCores1.style.display = 'inline-block';
paletaDeCores1.style.backgroundColor = 'black';
paletaDeCoresMain.appendChild(paletaDeCores1);

let paletaDeCores2 = document.createElement('div');
paletaDeCores2.className = 'color';
paletaDeCores2.style.border = 'black solid 1px';
paletaDeCores2.style.height = '25px';
paletaDeCores2.style.width = '25px';
paletaDeCores2.style.display = 'inline-block';
paletaDeCores2.style.backgroundColor = 'blue';
paletaDeCoresMain.appendChild(paletaDeCores2);

let paletaDeCores3 = document.createElement('div');
paletaDeCores3.className = 'color';
paletaDeCores3.style.border = 'black solid 1px';
paletaDeCores3.style.height = '25px';
paletaDeCores3.style.width = '25px';
paletaDeCores3.style.display = 'inline-block';
paletaDeCores3.style.backgroundColor = 'pink';
paletaDeCoresMain.appendChild(paletaDeCores3);

let paletaDeCores4 = document.createElement('div');
paletaDeCores4.className = 'color';
paletaDeCores4.style.border = 'black solid 1px';
paletaDeCores4.style.height = '25px';
paletaDeCores4.style.width = '25px';
paletaDeCores4.style.display = 'inline-block';
paletaDeCores4.style.backgroundColor = 'red';
paletaDeCoresMain.appendChild(paletaDeCores4);

// 4)
const botao = document.createElement('button');
botao.id = 'button-random-color';
botao.innerText = 'Cores aleatórias'
paletaDeCoresMain.appendChild(botao);

function numAleatorio(number) {
    return Math.floor(Math.random() * (number+1));
  }
  
  function corBackGroundColor() {
    const corAleatoria = `rgb(${numAleatorio(255)}, ${numAleatorio(255)}, ${numAleatorio(255)})`; 
    const corAleatoria2 = `rgb(${numAleatorio(255)}, ${numAleatorio(255)}, ${numAleatorio(255)})`; 
    const corAleatoria3 = `rgb(${numAleatorio(255)}, ${numAleatorio(255)}, ${numAleatorio(255)})`;
    paletaDeCores2.style.backgroundColor = corAleatoria;
    paletaDeCores3.style.backgroundColor = corAleatoria2;
    paletaDeCores4.style.backgroundColor = corAleatoria3;

  }
  
  botao.addEventListener('click', corBackGroundColor);