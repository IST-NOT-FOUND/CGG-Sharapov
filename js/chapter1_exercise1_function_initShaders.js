var gl;
var shaderProgram;
var vertexBuffer;
// установка шейдеров
function initShaders() {
    // получаем шейдеры
    var fragmentShader = getShader(gl.FRAGMENT_SHADER, 'shader-fs');
    var vertexShader = getShader(gl.VERTEX_SHADER, 'shader-vs');
    //создаем объект программы шейдеров
    shaderProgram = gl.createProgram();
    // прикрепляем к ней шейдеры
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    // связываем программу с контекстом webgl
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert("Не удалсь установить шейдеры");
    }

    gl.useProgram(shaderProgram);
    // установка атрибута программы
    shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    // делаем доступным атрибут для использования
    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
}





