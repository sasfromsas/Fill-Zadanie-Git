// создание окна с введённым с блока с id textInput текстом
function createNewWindow() {
    var inputText = document.getElementById('textInput').value;
    var bgColor = document.getElementById('bgColor').value;
    var textColor = document.getElementById('textColor').value;
    var newWindow = window.open('', '', 'width=400,height=200');
    newWindow.document.write('<body style="background-color: ' + bgColor + '; color: ' + textColor + ';"><p>' + inputText + '</p></body>');
  }