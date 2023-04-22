const texto = document.querySelector('#carta-texto');
const botton = document.querySelector('#criar-carta');

botton.addEventListener('click', () => {
  const elementoPai = document.querySelector('#carta-gerada');
  const titulo = document.createElement('h1');
  const textoGerado = document.createTextNode(texto.value);
  const t = titulo.appendChild(textoGerado);
  console.log(t);
  return elementoPai.appendChild(t);
});
