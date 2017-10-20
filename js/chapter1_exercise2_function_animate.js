// функция анимации
function animate() {

    requestAnimationFrame(animate);
    // вращение меша вокруг осей
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
    // рендеринг сцены - метод, производящий по сути отрисовку
    renderer.render(scene, camera);
}