// создание окна с введённым с блока с id textInput текстом
function createNewWindow() {
    var inputText = document.getElementById('textInput').value;
    var newWindow = window.open('', '', 'width=400,height=200');
    newWindow.document.write('<p>' + inputText + '</p>');
  }