function initBuffers() {

    vertices =[ 0.0,  0.5,  0.0, //m0
        -0.5,  -0.4,  0.0, //m1
        -0.2,  -0.5,  0.0, //m2
        0.2,  -0.5,  0.0, //m3
        0.5,  -0.4,  0.0, //m3
    ];
    // установка буфера вершин
    vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // размерность
    vertexBuffer.itemSize = 3;
    // указываем кол-во вершин - 5
    vertexBuffer.numberOfItems=5;
}