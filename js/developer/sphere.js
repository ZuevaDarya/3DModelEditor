var inputSphereColor = document.getElementById('colorSphere');
var inputSphereX = document.getElementById('xSphere');
var inputSphereY = document.getElementById('ySphere');
var inputSphereZ = document.getElementById('zSphere');
var inputSphereAngelX = document.getElementById('xSphereAngel');
var inputSphereAngelY = document.getElementById('ySphereAngel');
var inputSphereAngelZ = document.getElementById('zSphereAngel');
var inputSphereScaleX = document.getElementById('xSphereScale');
var inputSphereScaleY = document.getElementById('ySphereScale');
var inputSphereScaleZ = document.getElementById('zSphereScale');
var inputSphereRadius = document.getElementById('radiusSphere');

var checkboxSphereWireFrame = document.getElementById('checkSphereWireFrame');
var inputSphereWireFrameKolvoX = document.getElementById('kolvoSphereWireFrameX');
var inputSphereWireFrameKolvoY = document.getElementById('kolvoSphereWireFrameY');

var checkboxSphereAnimX = document.getElementById('baseSphereAnimCheckX');
var inputSphereAnimSpeedX = document.getElementById('baseSphereAnimSpeedX');

var checkboxSphereAnimY = document.getElementById('baseSphereAnimCheckY');
var inputSphereAnimSpeedY = document.getElementById('baseSphereAnimSpeedY');

var checkboxSphereAnimZ = document.getElementById('baseSphereAnimCheckZ');
var inputSphereAnimSpeedZ = document.getElementById('baseSphereAnimSpeedZ');

var linkSphereAdd = document.getElementById('createSphere');
var linkSphereDelete = document.getElementById('deleteSphere');

//Сфера
var radiusSphere = 150;
var colorSphere = '#ffffff';
var xSphere = 0, ySphere = 0, zSphere = 0;
var xSphereAng = 0, ySphereAng = 0, zSphereAng = 0;
var xSphereScale = 1, ySphereScale = 1, zSphereScale = 1;
var opacitySphere = 1;

//Каркас
var kolvoWireFrameSphereX = 10;
var kolvoWireFrameSphereY = 10;

var sphereName = ' ';
var index = 0;

function createSphere() {
    var sphereGeometry = new THREE.SphereBufferGeometry(150, 10, 10);
    var sphereMaterial = new THREE.MeshLambertMaterial({ color: '#ffffff', transparent: true, opacity: 1 });

    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    if (scene.getObjectByName(sphereName)) {
        sphere.name = 'Sphere' + index++;
    } else {
        sphere.name = 'Sphere';
    }

    sphere.castShadow = true;
    sphere.receiveShadow = true;

    sphere.geometry.castShadow = true;
    sphere.geometry.receiveShadow = true;

    sphere.position.set(0, 0, 0);
    sphere.rotation.set(0, 0, 0);
    sphere.scale.set(1, 1, 1);

    scene.add(sphere);

    if (checkboxSphereWireFrame.checked) checkboxSphereWireFrame.checked = false;
}

linkSphereAdd.addEventListener('click', function () {
    createSphere();
});

linkSphereDelete.addEventListener('click', function () {
    if (sphereName == ' ' || scene.getObjectByName(sphereName).material.opacity == 1) {
        alert('Выделите объект!');
    } else {
        clearListItems(sphereName, listItems)

        scene.remove(scene.getObjectByName(sphereName));
        sphereName = ' ';
    }
});

inputSphereColor.addEventListener('change', function () {
    if (sphereName != ' ') {
        colorSphere = new THREE.Color(this.value);

        if (scene.getObjectByName(sphereName)) {
            var sphere = scene.getObjectByName(sphereName);
            sphere.material.color = colorSphere;
        }
    } else alert('Выделите объект!');
});

inputSphereX.addEventListener('change', function () {
    if (sphereName != ' ') {
        xSphere = Number(this.value);

        if (scene.getObjectByName(sphereName)) {
            var sphere = scene.getObjectByName(sphereName);
            sphere.position.x = xSphere;
        }
    } else alert('Выделите объект!');
});

inputSphereY.addEventListener('change', function () {
    if (sphereName != ' ') {
        ySphere = Number(this.value);

        if (scene.getObjectByName(sphereName)) {
            var sphere = scene.getObjectByName(sphereName);
            sphere.position.y = ySphere;
        }
    } else alert('Выделите объект!');
});

inputSphereZ.addEventListener('change', function () {
    if (sphereName != ' ') {
        zSphere = Number(this.value);

        if (scene.getObjectByName(sphereName)) {
            var sphere = scene.getObjectByName(sphereName);
            sphere.position.z = zSphere;
        }
    } else alert('Выделите объект!');
});

inputSphereAngelX.addEventListener('change', function () {
    if (sphereName != ' ') {
        xSphereAng = Number(this.value);

        if (scene.getObjectByName(sphereName)) {
            var sphere = scene.getObjectByName(sphereName);
            sphere.rotation.x = xSphereAng;
        }
    } else alert('Выделите объект!');
});

inputSphereAngelY.addEventListener('change', function () {
    if (sphereName != ' ') {
        ySphereAng = Number(this.value);

        if (scene.getObjectByName(sphereName)) {
            var sphere = scene.getObjectByName(sphereName);
            sphere.rotation.y = ySphereAng;
        }
    } else alert('Выделите объект!');
});

inputSphereAngelZ.addEventListener('change', function () {
    if (sphereName != ' ') {
        zSphereAng = Number(this.value);

        if (scene.getObjectByName(sphereName)) {
            var sphere = scene.getObjectByName(sphereName);
            sphere.rotation.z = zSphereAng;
        }
    } else alert('Выделите объект!');
});

inputSphereScaleX.addEventListener('change', function () {
    if (sphereName != ' ') {
        xSphereScale = Number(this.value);

        if (scene.getObjectByName(sphereName)) {
            var sphere = scene.getObjectByName(sphereName);
            sphere.scale.x = xSphereScale;
        }
    } else alert('Выделите объект!');
});

inputSphereScaleY.addEventListener('change', function () {
    if (sphereName != ' ') {
        ySphereScale = Number(this.value);

        if (scene.getObjectByName(sphereName)) {
            var sphere = scene.getObjectByName(sphereName);
            sphere.scale.y = ySphereScale;
        }
    } else alert('Выделите объект!');
});

inputSphereScaleZ.addEventListener('change', function () {
    if (sphereName != ' ') {
        zSphereScale = Number(this.value);

        if (scene.getObjectByName(sphereName)) {
            var sphere = scene.getObjectByName(sphereName);
            sphere.scale.z = zSphereScale;
        }
    } else alert('Выделите объект!');
});

inputSphereRadius.addEventListener('change', function () {
    if (sphereName != ' ') {
        radiusSphere = Number(this.value);

        if (scene.getObjectByName(sphereName)) {
            var sphere = scene.getObjectByName(sphereName);
            sphere.geometry = new THREE.SphereBufferGeometry(radiusSphere, kolvoWireFrameSphereX, kolvoWireFrameSphereY);
        }
    } else alert('Выделите объект!');
});

//Каркас
inputSphereWireFrameKolvoX.addEventListener('change', function () {
    if (sphereName != ' ') {
        kolvoWireFrameSphereX = Number(this.value);

        if (scene.getObjectByName(sphereName)) {
            var sphere = scene.getObjectByName(sphereName);
            sphere.geometry = new THREE.SphereBufferGeometry(radiusSphere, kolvoWireFrameSphereX, kolvoWireFrameSphereY);
        }
    } else alert('Выделите объект!');
});

inputSphereWireFrameKolvoY.addEventListener('change', function () {
    if (sphereName != ' ') {
        kolvoWireFrameSphereY = Number(this.value);

        if (scene.getObjectByName(sphereName)) {
            var sphere = scene.getObjectByName(sphereName);
            sphere.geometry = new THREE.SphereBufferGeometry(radiusSphere, kolvoWireFrameSphereX, kolvoWireFrameSphereY);
        }
    }
});


checkboxSphereWireFrame.addEventListener('change', function () {
    if (sphereName != ' ') {
        if (this.checked) {
            var sphere = scene.getObjectByName(sphereName);
            sphere.material.wireframe = true;
        } else if (this.checked == false) {
            var sphere = scene.getObjectByName(sphereName);
            sphere.material.wireframe = false;
        }
    } else {
        this.checked = false;
        alert('Выделите объект!');
    }
});

//Анимация
var idSphereX, idSphereY, idSphereZ;
var speedSphereX = 0.0001, speedSphereY = 0.0001, speedSphereZ = 0.0001;

//X
inputSphereAnimSpeedX.addEventListener('change', function () {
    speedSphereX = Number(this.value);

    stopAnimation(idSphereX);
    animationSphereX();
});

checkboxSphereAnimX.addEventListener('change', function () {
    if (this.checked && sphereName != ' ') {
        animationSphereX();
    } else if (this.checked && sphereName == ' ') {
        alert('Выделите объект!');
        this.checked = false;
    } else if (this.checked == false) {
        stopAnimation(idSphereX);
        scene.getObjectByName(sphereName).rotation.set(0, 0, 0);
    }
});

function animationSphereX() {
    idSphereX = requestAnimationFrame(animationSphereX);

    rotateX(scene.getObjectByName(sphereName), speedSphereX);
    renderer.render(scene, camera);
}

//Y
inputSphereAnimSpeedY.addEventListener('change', function () {
    speedSphereY = Number(this.value);

    stopAnimation(idSphereY);
    animationSphereY();
});

checkboxSphereAnimY.addEventListener('change', function () {
    if (this.checked && sphereName != ' ') {
        animationSphereY();
    } else if (this.checked && sphereName == ' ') {
        alert('Выделите объект!');
        this.checked = false;
    } else if (this.checked == false) {
        stopAnimation(idSphereY);
        scene.getObjectByName(sphereName).rotation.set(0, 0, 0);
    }
});

function animationSphereY() {
    idSphereY = requestAnimationFrame(animationSphereY);

    rotateY(scene.getObjectByName(sphereName), speedSphereY);
    renderer.render(scene, camera);
}

//Z
inputSphereAnimSpeedZ.addEventListener('change', function () {
    speedSphereZ = Number(this.value);

    stopAnimation(idSphereZ);
    animationSphereZ();
});

checkboxSphereAnimZ.addEventListener('change', function () {
    if (this.checked && sphereName != ' ') {
        animationSphereZ();
    } else if (this.checked && sphereName == ' ') {
        alert('Выделите объект!');
        this.checked = false;
    } else if (this.checked == false) {
        stopAnimation(idSphereZ);
        scene.getObjectByName(sphereName).rotation.set(0, 0, 0);
    }
});

function animationSphereZ() {
    idSphereZ = requestAnimationFrame(animationSphereZ);

    rotateZ(scene.getObjectByName(sphereName), speedSphereZ);
    renderer.render(scene, camera);
}