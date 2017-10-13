// установка буфера вершин
function initBuffers() {
    // установка буфера вершин
    vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    // массив координат вершин объекта
    var triangleVertices = [
        0.0,  0.5,  0.0,
        -0.5, -0.5,  0.0,
        0.5, -0.5,  0.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);
    // указываем кол-во точек
    vertexBuffer.itemSize = 3;
    vertexBuffer.numberOfItems = 3;
}