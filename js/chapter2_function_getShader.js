// Функция создания шейдера по типу и id источника в структуре DOM
function getShader(type,id) {
    var source = document.getElementById(id).innerHTML;
    // создаем шейдер по типу
    var shader = gl.createShader(type);
    // установка источника шейдера
    gl.shaderSource(shader, source);
    // компилируем шейдер
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert("Ошибка компиляции шейдера: " + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}