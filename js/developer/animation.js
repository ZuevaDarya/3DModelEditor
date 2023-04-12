var checkboxAnimationX = document.getElementById('animationCheckX');
var inputAnimationSpeedX = document.getElementById('animationSpeedX');

var checkboxAnimationY = document.getElementById('animationCheckY');
var inputAnimationSpeedY = document.getElementById('animationSpeedY');

var checkboxAnimationZ = document.getElementById('animationCheckZ');
var inputAnimationSpeedZ = document.getElementById('animationSpeedZ');

var idX, idY, idZ;
var speedX = 0.0001, speedY = 0.0001, speedZ = 0.0001;

//Ось X
inputAnimationSpeedX.addEventListener('change', function () {
    speedX = Number(this.value);

    stopAnimation(idX);
    animationX();
});

checkboxAnimationX.addEventListener('change', function () {
    if (this.checked) {
       animationX();
    } else if (this.checked == false) {
        stopAnimation(idX);
        scene.rotation.set(0, 0, 0);
    }
});

function rotateX(obj, speed){
    obj.rotation.x += 180 / Math.PI * speed;
}

function animationX(){
    idX = requestAnimationFrame(animationX);

    rotateX(scene, speedX);
    renderer.render(scene,camera);
}

//Ось Y
inputAnimationSpeedY.addEventListener('change', function () {
    speedY = Number(this.value);

    stopAnimation(idY);
    animationY();
});

checkboxAnimationY.addEventListener('change', function () {
    if (this.checked) {
       animationY();
       
    } else if (this.checked == false) {
        stopAnimation(idY);
        scene.rotation.set(0, 0, 0);
    }
});

function rotateY(obj, speed){
    obj.rotation.y += 180 / Math.PI * speed;
}

function animationY(){
    idY = requestAnimationFrame(animationY);

    rotateY(scene, speedY);
    renderer.render(scene,camera);
}

//Ось Z
inputAnimationSpeedZ.addEventListener('change', function () {
    speedZ = Number(this.value);

    stopAnimation(idZ);
    animationZ();
});

checkboxAnimationZ.addEventListener('change', function () {
    if (this.checked) {
      animationZ();
      
    } else if (this.checked == false) {
        stopAnimation(idZ);
        scene.rotation.set(0, 0, 0);
    }
});

function rotateZ(obj, speed){
    obj.rotation.z += 180 / Math.PI * speed;
}

function animationZ(){
    idZ = requestAnimationFrame(animationZ);

    rotateZ(scene, speedZ);
    renderer.render(scene,camera);
}

function stopAnimation(id){
    cancelAnimationFrame(id);
}


