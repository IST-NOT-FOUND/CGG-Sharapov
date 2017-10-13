// отрисовка
function draw() {
    // установка области отрисовки
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);

    gl.clear(gl.COLOR_BUFFER_BIT);

    // указываем, что каждая вершина имеет по три координаты (x, y, z)
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute,
        vertexBuffer.itemSize, gl.FLOAT, false, 0, 0);
    // отрисовка примитивов - треугольников
    gl.drawArrays(gl.TRIANGLES, 0, vertexBuffer.numberOfItems);
}
window.onload=function(){
    // получаем элемент canvas
    var canvas = document.getElementById("canvas3D");
    try {
        // Сначала пытаемся получить стандартный контекст WegGL
        // Если не получится, обращаемся к экспериментальному контексту
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    }
    catch(e) {}

    // Если контекст не удалось получить, выводим сообщение
    if (!gl) {
        alert("Ваш браузер не поддерживает WebGL");
    }
    if(gl){
        // установка размеров области рисования
        gl.viewportWidth = canvas.width;
        gl.viewportHeight = canvas.height;
        // установка шейдеров
        initShaders();
        // установка буфера вершин
        initBuffers();
        // покрасим фон в бледно-розовый цвет
        gl.clearColor(1.0, 0.0, 0.0, 0.5);
        // отрисовка сцены
        draw();
    }
}