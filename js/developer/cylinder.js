var inputCylinderColor = document.getElementById('colorCylinder');
var inputCylinderX = document.getElementById('xCylinder');
var inputCylinderY = document.getElementById('yCylinder');
var inputCylinderZ = document.getElementById('zCylinder');
var inputCylinderAngelX = document.getElementById('xCylinderAngel');
var inputCylinderAngelY = document.getElementById('yCylinderAngel');
var inputCylinderAngelZ = document.getElementById('zCylinderAngel');
var inputCylinderScaleX = document.getElementById('xCylinderScale');
var inputCylinderScaleY = document.getElementById('yCylinderScale');
var inputCylinderScaleZ = document.getElementById('zCylinderScale');
var inputCylinderRadiusTop = document.getElementById('radiusCylinderTop');
var inputCylinderRadiusBottom = document.getElementById('radiusCylinderBottom');
var inputCylinderHeight = document.getElementById('heightCylinder');

var checkboxCylinderWireFrame = document.getElementById('checkCylinderWireFrame');
var inputCylinderWireFrameKolvo = document.getElementById('kolvoCylinderWireFrame');

var checkboxCylinderAnimX = document.getElementById('baseCylinderAnimCheckX');
var inputCylinderAnimSpeedX = document.getElementById('baseCylinderAnimSpeedX');

var checkboxCylinderAnimY = document.getElementById('baseCylinderAnimCheckY');
var inputCylinderAnimSpeedY = document.getElementById('baseCylinderAnimSpeedY');

var checkboxCylinderAnimZ = document.getElementById('baseCylinderAnimCheckZ');
var inputCylinderAnimSpeedZ = document.getElementById('baseCylinderAnimSpeedZ');

var linkCylinderAdd = document.getElementById('createCylinder');
var linkCylinderDelete = document.getElementById('deleteCylinder');

//Цилиндр
var radiusCylinderTop = 150, radiusCylinderBottom = 150, heightCylinder = 300;
var colorCylinder = '#ffffff';
var xCylinder = 0, yCylinder = 0, zCylinder = 0;
var xCylinderAng = 0, yCylinderAng = 0, zCylinderAng = 0;
var xCylinderScale = 1, yCylinderScale = 1, zCylinderScale = 1;
var opacityCylinder = 1;

//Каркас
var kolvoWireFrameCylinder = 10;

var cylinderName = ' ';
var index = 0;

function createCylinder() {
    var cylinderGeometry = new THREE.CylinderBufferGeometry(150, 150, 300, 10);
    var cylinderMaterial = new THREE.MeshLambertMaterial({ color: '#ffffff', transparent: true, opacity: 1 });

    var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);


    if (scene.getObjectByName(cylinderName)) {
        cylinder.name = 'Cylinder' + index++;
    } else {
        cylinder.name = 'Cylinder';
    }

    cylinder.castShadow = true;

    cylinder.position.set(0, 0, 0);
    cylinder.rotation.set(0, 0, 0);
    cylinder.scale.set(1, 1, 1);

    scene.add(cylinder);

    if (checkboxCylinderWireFrame.checked) checkboxCylinderWireFrame.checked = false;
}

linkCylinderAdd.addEventListener('click', function () {
    createCylinder();
});

linkCylinderDelete.addEventListener('click', function () {
    if (cylinderName == ' ' || scene.getObjectByName(cylinderName).material.opacity == 1) {
        alert('Выделите объект!');
    } else {
        clearListItems(cylinderName, listItems)

        scene.remove(scene.getObjectByName(cylinderName));
        cylinderName = ' ';
    }
});

inputCylinderColor.addEventListener('change', function () {
    if (cylinderName != ' ') {
        colorCylinder = new THREE.Color(this.value);

        if (scene.getObjectByName(cylinderName)) {
            var cylinder = scene.getObjectByName(cylinderName);
            cylinder.material.color = colorCylinder;
        }
    } else alert('Выделите объект!');
});

inputCylinderX.addEventListener('change', function () {
    if (cylinderName != ' ') {
        xCylinder = Number(this.value);

        if (scene.getObjectByName(cylinderName)) {
            var cylinder = scene.getObjectByName(cylinderName);
            cylinder.position.x = xCylinder;
        }
    } else alert('Выделите объект!');
});

inputCylinderY.addEventListener('change', function () {
    if (cylinderName != ' ') {
        yCylinder = Number(this.value);

        if (scene.getObjectByName(cylinderName)) {
            var cylinder = scene.getObjectByName(cylinderName);
            cylinder.position.y = yCylinder;
        }
    } else alert('Выделите объект!');
});

inputCylinderZ.addEventListener('change', function () {
    if (cylinderName != ' ') {
        zCylinder = Number(this.value);

        if (scene.getObjectByName(cylinderName)) {
            var cylinder = scene.getObjectByName(cylinderName);
            cylinder.position.z = zCylinder;
        }
    } else alert('Выделите объект!');
});

inputCylinderAngelX.addEventListener('change', function () {
    if (cylinderName != ' ') {
        xCylinderAng = Number(this.value);

        if (scene.getObjectByName(cylinderName)) {
            var cylinder = scene.getObjectByName(cylinderName);
            cylinder.rotation.x = xCylinderAng;
        }
    } else alert('Выделите объект!');
});

inputCylinderAngelY.addEventListener('change', function () {
    if (cylinderName != ' ') {
        yCylinderAng = Number(this.value);

        if (scene.getObjectByName(cylinderName)) {
            var cylinder = scene.getObjectByName(cylinderName);
            cylinder.rotation.y = yCylinderAng;
        }
    } else alert('Выделите объект!');
});

inputCylinderAngelZ.addEventListener('change', function () {
    if (cylinderName != ' ') {
        zCylinderAng = Number(this.value);

        if (scene.getObjectByName(cylinderName)) {
            var cylinder = scene.getObjectByName(cylinderName);
            cylinder.rotation.z = zCylinderAng;
        }
    } else alert('Выделите объект!');
});

inputCylinderScaleX.addEventListener('change', function () {
    if (cylinderName != ' ') {
        xCylinderScale = Number(this.value);

        if (scene.getObjectByName(cylinderName)) {
            var cylinder = scene.getObjectByName(cylinderName);
            cylinder.scale.x = xCylinderScale;
        }
    } else alert('Выделите объект!');
});

inputCylinderScaleY.addEventListener('change', function () {
    if (cylinderName != ' ') {
        yCylinderScale = Number(this.value);

        if (scene.getObjectByName(cylinderName)) {
            var cylinder = scene.getObjectByName(cylinderName);
            cylinder.scale.y = yCylinderScale;
        }
    } else alert('Выделите объект!');
});

inputCylinderScaleZ.addEventListener('change', function () {
    if (cylinderName != ' ') {
        zCylinderScale = Number(this.value);

        if (scene.getObjectByName(cylinderName)) {
            var cylinder = scene.getObjectByName(cylinderName);
            cylinder.scale.z = zCylinderScale;
        }
    } else alert('Выделите объект!');
});

inputCylinderRadiusTop.addEventListener('change', function () {
    if (cylinderName != ' ') {
        radiusCylinderTop = Number(this.value);

        if (scene.getObjectByName(cylinderName)) {
            var cylinder = scene.getObjectByName(cylinderName);
            cylinder.geometry = new THREE.CylinderBufferGeometry(radiusCylinderTop, radiusCylinderBottom, heightCylinder, kolvoWireFrameCylinder);
        }
    } else alert('Выделите объект!');
});

inputCylinderRadiusBottom.addEventListener('change', function () {
    if (cylinderName != ' ') {
        radiusCylinderBottom = Number(this.value);

        if (scene.getObjectByName(cylinderName)) {
            var cylinder = scene.getObjectByName(cylinderName);
            cylinder.geometry = new THREE.CylinderBufferGeometry(radiusCylinderTop, radiusCylinderBottom, heightCylinder, kolvoWireFrameCylinder);
        }
    } else alert('Выделите объект!');
});

inputCylinderHeight.addEventListener('change', function () {
    if (cylinderName != ' ') {
        heightCylinder = Number(this.value);

        if (scene.getObjectByName(cylinderName)) {
            var cylinder = scene.getObjectByName(cylinderName);
            cylinder.geometry = new THREE.CylinderBufferGeometry(radiusCylinderTop, radiusCylinderBottom, heightCylinder, kolvoWireFrameCylinder);
        }
    } else alert('Выделите объект!');
});

//Каркас
inputCylinderWireFrameKolvo.addEventListener('change', function () {
    if (cylinderName != ' ') {
        kolvoWireFrameCylinder = Number(this.value);

        if (scene.getObjectByName(cylinderName)) {
            var cylinder = scene.getObjectByName(cylinderName);
            cylinder.geometry = new THREE.CylinderBufferGeometry(radiusCylinderTop, radiusCylinderBottom, heightCylinder, kolvoWireFrameCylinder);
        }
    }
});

checkboxCylinderWireFrame.addEventListener('change', function () {
    if (cylinderName != ' ') {
        if (this.checked) {
            var cylinder = scene.getObjectByName(cylinderName);
            cylinder.material.wireframe = true;
        } else if (this.checked == false) {

        }
    } else {
        this.checked = false;
        alert('Выделите объект!');
    }
});

//Анимация
var idCylinderX, idCylinderY, idCylinderZ;
var speedCylinderX = 0.0001, speedCylinderY = 0.0001, speedCylinderZ = 0.0001;

//X
inputCylinderAnimSpeedX.addEventListener('change', function () {
    speedCylinderX = Number(this.value);

    stopAnimation(idCylinderX);
    animationCylinderX();
});

checkboxCylinderAnimX.addEventListener('change', function () {
    if (this.checked && cylinderName != ' ') {
        animationCylinderX();
    } else if (this.checked && cylinderName == ' ') {
        alert('Выделите объект!');
        this.checked = false;
    } else if (this.checked == false) {
        stopAnimation(idCylinderX);
        scene.getObjectByName(cylinderName).rotation.set(0, 0, 0);
    }
});

function animationCylinderX() {
    idCylinderX = requestAnimationFrame(animationCylinderX);

    rotateX(scene.getObjectByName(cylinderName), speedCylinderX);
    renderer.render(scene, camera);
}

//Y
inputCylinderAnimSpeedY.addEventListener('change', function () {
    speedCylinderY = Number(this.value);

    stopAnimation(idCylinderY);
    animationCylinderY();
});

checkboxCylinderAnimY.addEventListener('change', function () {
    if (this.checked && cylinderName != ' ') {
        animationCylinderY();
    } else if (this.checked && cylinderName == ' ') {
        alert('Выделите объект!');
        this.checked = false;
    } else if (this.checked == false) {
        stopAnimation(idCylinderY);
        scene.getObjectByName(cylinderName).rotation.set(0, 0, 0);
    }
});

function animationCylinderY() {
    idCylinderY = requestAnimationFrame(animationCylinderY);

    rotateY(scene.getObjectByName(cylinderName), speedCylinderY);
    renderer.render(scene, camera);
}

//Z
inputCylinderAnimSpeedZ.addEventListener('change', function () {
    speedCylinderZ = Number(this.value);

    stopAnimation(idCylinderZ);
    animationCylinderZ();
});

checkboxCylinderAnimZ.addEventListener('change', function () {
    if (this.checked && cylinderName != ' ') {
        animationCylinderZ();
    } else if (this.checked && cylinderName == ' ') {
        alert('Выделите объект!');
        this.checked = false;
    } else if (this.checked == false) {
        stopAnimation(idCylinderZ);
        scene.getObjectByName(cylinderName).rotation.set(0, 0, 0);
    }
});

function animationCylinderZ() {
    idCylinderZ = requestAnimationFrame(animationCylinderZ);

    rotateZ(scene.getObjectByName(cylinderName), speedCylinderZ);
    renderer.render(scene, camera);
}