function initBuffers() {

    var vertices = [

        -0.5,  -0.5,  0.0,
        -0.5,  0.5,  0.0,
        0.3, 0.5,  0.0,
        0.3, 0.5,  0.0,
        0.3, -0.5,  0.0,
        -0.5,  -0.5,  0.0

    ];
// установка буфера вершин
    vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    vertexBuffer.itemSize = 3;
    vertexBuffer.numberOfItems = 6;


    if (k % 100 == 0) {
        anima1r = a1r;
        anima2r = a2r;
        anima3r = a3r;
        anima4r = a4r;
        k = 1;
    }

    a1r += animate(a1r, anima4r);
    a2r += animate(a1r, anima1r);
    a3r += animate(a1r, anima2r);
    a4r += animate(a1r, anima3r);

    k++;

    var colors = [
        a1r, a1g, a1b,
        a2r, a2g, a2b,
        a3r, a3g, a3b,
        a3r, a3g, a3b,
        a4r, a4g, a4b,
        a1r, a1g, a1b
    ];
    colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
}