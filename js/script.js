function init() {
  const button = document.getElementById('entrybutton');
  button.addEventListener('click', showMessage);
}

function showMessage() {
  const input = document.getElementById('entryinput');
  const output = document.getElementById('textoutput');
  const userText = input.value;
  alert('NikolayB: ' + userText);
  output.textContent = userText;
}

window.addEventListener('load', init);
