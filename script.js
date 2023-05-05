const texto = document.querySelector('#carta-texto').value;
const botton = document.querySelector('#criar-carta');

botton.addEventListener('click', () => {
  const elementoPai = document.querySelector('#carta-gerada');
  // if (!elementoPai || elementoPai.value === '') {
  //   return elementoPai.appendChild('Por favor, digite o conteúdo da carta.');
  // }
  // const novoConteudo = '<span>" "</span>';
  // const elementoSeparado = elementoPai.split(' ');
  const titulo = document.createElement('span');
  const textoGerado = document.createTextNode(texto.split(' '));
  const t = titulo.appendChild(textoGerado);
  console.log(t);
  const cartaPronta = elementoPai.appendChild(t);
  return cartaPronta;
});
