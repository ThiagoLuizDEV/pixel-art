const elementoH1 = document.createElement('h1')
elementoH1.id = 'title';
elementoH1.innerText = "Paleta de Cores"
document.body.appendChild(elementoH1);

const paletaDeCoresMain = document.createElement('div');
paletaDeCoresMain.id = 'color-palette';
document.body.appendChild(paletaDeCoresMain)

let paletaDeCores1 = document.createElement('div');
paletaDeCores1.className = 'color';
paletaDeCores1.style.border = 'black solid 1px'
paletaDeCores1.style.height = '25px'
paletaDeCores1.style.width = '25px'
paletaDeCores1.style.display = 'inline-block'
paletaDeCores1.style.backgroundColor = 'black';
paletaDeCoresMain.appendChild(paletaDeCores1)

let paletaDeCores2 = document.createElement('div');
paletaDeCores2.className = 'color';
paletaDeCores2.style.border = 'black solid 1px'
paletaDeCores2.style.height = '25px'
paletaDeCores2.style.width = '25px'
paletaDeCores2.style.display = 'inline-block'
paletaDeCores2.style.backgroundColor = 'blue';
paletaDeCoresMain.appendChild(paletaDeCores2)

let paletaDeCores3 = document.createElement('div');
paletaDeCores3.className = 'color';
paletaDeCores3.style.border = 'black solid 1px'
paletaDeCores3.style.height = '25px'
paletaDeCores3.style.width = '25px'
paletaDeCores3.style.display = 'inline-block'
paletaDeCores3.style.backgroundColor = 'pink';
paletaDeCoresMain.appendChild(paletaDeCores3)

let paletaDeCores4 = document.createElement('div');
paletaDeCores4.className = 'color';
paletaDeCores4.style.border = 'black solid 1px'
paletaDeCores4.style.height = '25px'
paletaDeCores4.style.width = '25px'
paletaDeCores4.style.display = 'inline-block'
paletaDeCores4.style.backgroundColor = 'red';
paletaDeCoresMain.appendChild(paletaDeCores4)
