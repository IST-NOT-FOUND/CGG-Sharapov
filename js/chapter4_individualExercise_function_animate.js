function animate(a, anima) {
    if (a > anima){
        return -0.01;
    } else if (a == anima) {
        return 0;
    } else {
        return 0.01;
    }
}