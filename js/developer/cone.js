var inputConeColor = document.getElementById('colorCone');
var inputConeX = document.getElementById('xCone');
var inputConeY = document.getElementById('yCone');
var inputConeZ = document.getElementById('zCone');
var inputConeAngelX = document.getElementById('xConeAngel');
var inputConeAngelY = document.getElementById('yConeAngel');
var inputConeAngelZ = document.getElementById('zConeAngel');
var inputConeScaleX = document.getElementById('xConeScale');
var inputConeScaleY = document.getElementById('yConeScale');
var inputConeScaleZ = document.getElementById('zConeScale');
var inputConeRadius = document.getElementById('radiusCone');
var inputConeHeight = document.getElementById('heightCone');

var checkboxConeWireFrame = document.getElementById('checkConeWireFrame');
var inputConeWireFrameKolvo = document.getElementById('kolvoConeWireFrame');

var checkboxConeAnimX = document.getElementById('baseConeAnimCheckX');
var inputConeAnimSpeedX = document.getElementById('baseConeAnimSpeedX');

var checkboxConeAnimY = document.getElementById('baseConeAnimCheckY');
var inputConeAnimSpeedY = document.getElementById('baseConeAnimSpeedY');

var checkboxConeAnimZ = document.getElementById('baseConeAnimCheckZ');
var inputConeAnimSpeedZ = document.getElementById('baseConeAnimSpeedZ');

var linkConeAdd = document.getElementById('createCone');
var linkConeDelete = document.getElementById('deleteCone');

//Конус
var heightCone = 300, radiusCone = 150;
var colorCone = '#ffffff';
var xCone = 0, yCone = 0, zCone = 0;
var xConeAng = 0, yConeAng = 0, zConeAng = 0;
var xConeScale = 1, yConeScale = 1, zConeScale = 1;
var opacityCone = 1;

//Каркас
var kolvoWireFrame = 10;

var coneName = ' ';
var index = 0;

function createCone() {
    var coneGeometry = new THREE.ConeBufferGeometry(150, 300, 10);
    var coneMaterial = new THREE.MeshLambertMaterial({ color: '#ffffff', transparent: true, opacity: 1 });

    var cone = new THREE.Mesh(coneGeometry, coneMaterial);

    if (scene.getObjectByName(coneName)) {
        cone.name = 'Cone' + index++;
    } else {
        cone.name = 'Cone';
    }

    cone.castShadow = true;
    cone.receiveShadow = true;

    cone.geometry.castShadow = true;
    cone.geometry.receiveShadow = true;

    cone.position.set(0, 0, 0);
    cone.rotation.set(0, 0, 0);
    cone.scale.set(1, 1, 1);

    scene.add(cone);

    if (checkboxConeWireFrame.checked) checkboxConeWireFrame.checked = false;
}

linkConeAdd.addEventListener('click', function () {
    createCone();
});

linkConeDelete.addEventListener('click', function () {
    if (coneName == ' ' || scene.getObjectByName(coneName).material.opacity == 1) {
        alert('Выделите объект!');
    } else {
        clearListItems(coneName, listItems)

        scene.remove(scene.getObjectByName(coneName));
        coneName = ' ';
    }
});

inputConeColor.addEventListener('change', function () {
    if (coneName != ' ') {
        colorCone = new THREE.Color(this.value);

        if (scene.getObjectByName(coneName)) {
            var cone = scene.getObjectByName(coneName);
            cone.material.color = colorCone;
        }
    } else alert('Выделите объект!');
});

inputConeX.addEventListener('change', function () {
    if (coneName != ' ') {
        xCone = Number(this.value);

        if (scene.getObjectByName(coneName)) {
            var cone = scene.getObjectByName(coneName);
            cone.position.x = xCone;
        }
    } else alert('Выделите объект!');
});

inputConeY.addEventListener('change', function () {
    if (coneName != ' ') {
        yCone = Number(this.value);

        if (scene.getObjectByName(coneName)) {
            var cone = scene.getObjectByName(coneName);
            cone.position.y = yCone;
        }
    } else alert('Выделите объект!');
});

inputConeZ.addEventListener('change', function () {
    if (coneName != ' ') {
        zCone = Number(this.value);

        if (scene.getObjectByName(coneName)) {
            var cone = scene.getObjectByName(coneName);
            cone.position.z = zCone;
        }
    } else alert('Выделите объект!');
});

inputConeAngelX.addEventListener('change', function () {
    if (coneName != ' ') {
        xConeAng = Number(this.value);

        if (scene.getObjectByName(coneName)) {
            var cone = scene.getObjectByName(coneName);
            cone.rotation.x = xConeAng;
        }
    } else alert('Выделите объект!');
});

inputConeAngelY.addEventListener('change', function () {
    if (coneName != ' ') {
        yConeAng = Number(this.value);

        if (scene.getObjectByName(coneName)) {
            var cone = scene.getObjectByName(coneName);
            cone.rotation.y = yConeAng;
        }
    } else alert('Выделите объект!');
});

inputConeAngelZ.addEventListener('change', function () {
    if (coneName != ' ') {
        zConeAng = Number(this.value);

        if (scene.getObjectByName(coneName)) {
            var cone = scene.getObjectByName(coneName);
            cone.rotation.z = zConeAng;
        }
    } else alert('Выделите объект!');
});

inputConeScaleX.addEventListener('change', function () {
    if (coneName != ' ') {
        xConeScale = Number(this.value);

        if (scene.getObjectByName(coneName)) {
            var cone = scene.getObjectByName(coneName);
            cone.scale.x = xConeScale;
        }
    } else alert('Выделите объект!');
});

inputConeScaleY.addEventListener('change', function () {
    if (coneName != ' ') {
        yConeScale = Number(this.value);

        if (scene.getObjectByName(coneName)) {
            var cone = scene.getObjectByName(coneName);
            cone.scale.y = yConeScale;
        }
    } else alert('Выделите объект!');
});

inputConeScaleZ.addEventListener('change', function () {
    if (coneName != ' ') {
        zConeScale = Number(this.value);

        if (scene.getObjectByName(coneName)) {
            var cone = scene.getObjectByName(coneName);
            cone.scale.z = zConeScale;
        }
    } else alert('Выделите объект!');
});

inputConeRadius.addEventListener('change', function () {
    if (coneName != ' ') {
        radiusCone = Number(this.value);

        if (scene.getObjectByName(coneName)) {
            var cone = scene.getObjectByName(coneName);
            cone.geometry = new THREE.ConeBufferGeometry(radiusCone, heightCone, kolvoWireFrame);
        }
    } else alert('Выделите объект!');
});

inputConeHeight.addEventListener('change', function () {
    if (coneName != ' ') {
        heightCone = Number(this.value);

        if (scene.getObjectByName(coneName)) {
            var cone = scene.getObjectByName(coneName);
            cone.geometry = new THREE.ConeBufferGeometry(radiusCone, heightCone, kolvoWireFrame);
        }
    } else alert('Выделите объект!');
});

//Каркас
inputConeWireFrameKolvo.addEventListener('change', function () {
    if (coneName != ' ') {
        kolvoWireFrame = Number(this.value);

        if (scene.getObjectByName(coneName)) {
            var cone = scene.getObjectByName(coneName);
            cone.geometry = new THREE.ConeBufferGeometry(radiusCone, heightCone, kolvoWireFrame);
        }
    }
});

checkboxConeWireFrame.addEventListener('change', function () {
    if (coneName != ' ') {
        if (this.checked) {
            var cone = scene.getObjectByName(coneName);
            cone.material.wireframe = true;
        } else if (this.checked == false) {
            var cone = scene.getObjectByName(coneName);
            cone.material.wireframe = false;
        }
    } else {
        this.checked = false;
        alert('Выделите объект!');
    }
});

//Анимация
var idConeX, idConeY, idConeZ;
var speedConeX = 0.0001, speedConeY = 0.0001, speedConeZ = 0.0001;

//X
inputConeAnimSpeedX.addEventListener('change', function () {
    speedConeX = Number(this.value);

    stopAnimation(idConeX);
    animationConeX();
});

checkboxConeAnimX.addEventListener('change', function () {
    if (this.checked && coneName != ' ') {
        animationConeX();
    } else if (this.checked && coneName == ' ') {
        alert('Выделите объект!');
        this.checked = false;
    } else if (this.checked == false) {
        stopAnimation(idConeX);
        scene.getObjectByName(coneName).rotation.set(0, 0, 0);
    }
});

function animationConeX() {
    idConeX = requestAnimationFrame(animationConeX);

    rotateX(scene.getObjectByName(coneName), speedConeX);
    renderer.render(scene, camera);
}

//Y
inputConeAnimSpeedY.addEventListener('change', function () {
    speedConeY = Number(this.value);

    stopAnimation(idConeY);
    animationConeY();
});

checkboxConeAnimY.addEventListener('change', function () {
    if (this.checked && coneName != ' ') {
        animationConeY();
    } else if (this.checked && coneName == ' ') {
        alert('Выделите объект!');
        this.checked = false;
    } else if (this.checked == false) {
        stopAnimation(idConeY);
        scene.getObjectByName(coneName).rotation.set(0, 0, 0);
    }
});

function animationConeY() {
    idConeY = requestAnimationFrame(animationConeY);

    rotateY(scene.getObjectByName(coneName), speedConeY);
    renderer.render(scene, camera);
}

//Z
inputConeAnimSpeedZ.addEventListener('change', function () {
    speedConeZ = Number(this.value);

    stopAnimation(idConeZ);
    animationConeZ();
});

checkboxConeAnimZ.addEventListener('change', function () {
    if (this.checked && coneName != ' ') {
        animationConeZ();
    } else if (this.checked && coneName == ' ') {
        alert('Выделите объект!');
        this.checked = false;
    } else if (this.checked == false) {
        stopAnimation(idConeZ);
        scene.getObjectByName(coneName).rotation.set(0, 0, 0);
    }
});

function animationConeZ() {
    idConeZ = requestAnimationFrame(animationConeZ);

    rotateZ(scene.getObjectByName(coneName), speedConeZ);
    renderer.render(scene, camera);
}