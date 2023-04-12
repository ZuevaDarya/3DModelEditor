var inputModelColor = document.getElementById('colorModel');
var inputModelX = document.getElementById('xModel');
var inputModelY = document.getElementById('yModel');
var inputModelZ = document.getElementById('zModel');
var inputModelAngelX = document.getElementById('xModelAngel');
var inputModelAngelY = document.getElementById('yModelAngel');
var inputModelAngelZ = document.getElementById('zModelAngel');
var inputModelScaleX = document.getElementById('xModelScale');
var inputModelScaleY = document.getElementById('yModelScale');
var inputModelScaleZ = document.getElementById('zModelScale');

var checkboxModelWireFrame = document.getElementById('checkModelWireFrame');
var inputModelWireFrameColor = document.getElementById('colorModelWireFrame');

var checkboxModelAnimX = document.getElementById('ModelAnimCheckX');
var inputModelAnimSpeedX = document.getElementById('ModelAnimSpeedX');

var checkboxModelAnimY = document.getElementById('ModelAnimCheckY');
var inputModelAnimSpeedY = document.getElementById('ModelAnimSpeedY');

var checkboxModelAnimZ = document.getElementById('ModelAnimCheckZ');
var inputModelAnimSpeedZ = document.getElementById('ModelAnimSpeedZ');

var linkModelDelete = document.getElementById('deleteModel');

//Модель
var colorModel = '#ffffff';
var xModel = 0, yModel = 0, zModel = 0;
var xModelAng = 0, yModelAng = 0, zModelAng = 0;
var xModelScale = 1, yModelScale = 1, zModelScale = 1;
var opacityModel = 1;

linkModelDelete.addEventListener('click', function () {
    if (modelName == ' ') {
        alert('Выделите объект!');
    } else {
        clearListItems(modelName, listItems)

        scene.remove(scene.getObjectByName(modelName));
        modelName = ' ';
    }
});


inputModelColor.addEventListener('change', function () {
    if (modelName != ' ') {
        colorModel = new THREE.Color(this.value);

        var model = scene.getObjectByName(modelName);

        for (let i = 0; i < model.children.length; i++) {
            if (model.children[i].material) {
                model.children[i].material.color = colorModel;
            }

        }
    } else alert('Выделите объект!');
});

inputModelX.addEventListener('change', function () {
    if (modelName != ' ') {
        xModel = Number(this.value);

        var model = scene.getObjectByName(modelName);

        model.position.x = xModel;
    } else alert('Выделите объект!');
});

inputModelY.addEventListener('change', function () {
    if (modelName != ' ') {
        yModel = Number(this.value);

        var model = scene.getObjectByName(modelName);

        model.position.y = yModel;
    } else alert('Выделите объект!');
});

inputModelZ.addEventListener('change', function () {
    if (modelName != ' ') {
        zModel = Number(this.value);

        var model = scene.getObjectByName(modelName);

        model.position.z = zModel;
    } else alert('Выделите объект!');
});

inputModelAngelX.addEventListener('change', function () {
    if (modelName != ' ') {
        xModelAng = Number(this.value);

        var model = scene.getObjectByName(modelName);

        model.rotation.x = xModelAng;
    } else alert('Выделите объект!');
});

inputModelAngelY.addEventListener('change', function () {
    if (modelName != ' ') {
        yModelAng = Number(this.value);

        var model = scene.getObjectByName(modelName);

        model.rotation.y = yModelAng;
    } else alert('Выделите объект!');
});

inputModelAngelZ.addEventListener('change', function () {
    if (modelName != ' ') {
        zModelAng = Number(this.value);

        var model = scene.getObjectByName(modelName);

        model.rotation.z = zModelAng;
    } else alert('Выделите объект!');
});

inputModelScaleX.addEventListener('change', function () {
    if (modelName != ' ') {
        xModelScale = Number(this.value);

        var model = scene.getObjectByName(modelName);

        model.scale.x = xModelScale;
        console.log(modelName)
    } else alert('Выделите объект!');
});

inputModelScaleY.addEventListener('change', function () {
    if (modelName != ' ') {
        yModelScale = Number(this.value);

        var model = scene.getObjectByName(modelName);

        model.scale.y = yModelScale;
    } else alert('Выделите объект!');
});

inputModelScaleZ.addEventListener('change', function () {
    if (modelName != ' ') {
        zModelScale = Number(this.value);

        var model = scene.getObjectByName(modelName);

        model.scale.z = zModelScale;
    } else alert('Выделите объект!');
});

checkboxModelWireFrame.addEventListener('change', function () {
    if (modelName != ' ') {
        if (this.checked) {
            var model = scene.getObjectByName(modelName);

            model.traverse(function (child) {
                if (child.isMesh) {
                    child.material.wireframe = true;
                }
            });

        } else if (this.checked == false) {
            var model = scene.getObjectByName(modelName);

            model.traverse(function (child) {
                if (child.isMesh) {
                    child.material.wireframe = false;
                }
            });
        }
    } else {
        this.checked = false;
        alert('Выделите объект!');
    }
});

//Анимация
var idModelX, idModelY, idModelZ;
var speedModelX = 0.0001, speedModelY = 0.0001, speedModelZ = 0.0001;

//X
inputModelAnimSpeedX.addEventListener('change', function () {
    speedModelX = Number(this.value);

    stopAnimation(idModelX);
    animationModelX();
});

checkboxModelAnimX.addEventListener('change', function () {
    if (this.checked && modelName != ' ') {
        animationModelX();
    } else if (this.checked && modelName == ' ') {
        alert('Выделите объект!');
        this.checked = false;
    } else if (this.checked == false) {
        stopAnimation(idModelX);
        scene.getObjectByName(modelName).rotation.set(0, 0, 0);
    }
});

function animationModelX() {
    idModelX = requestAnimationFrame(animationModelX);

    rotateX(scene.getObjectByName(modelName), speedModelX);
    renderer.render(scene, camera);
}

//Y
inputModelAnimSpeedY.addEventListener('change', function () {
    speedModelY = Number(this.value);

    stopAnimation(idModelY);
    animationModelY();
});

checkboxModelAnimY.addEventListener('change', function () {
    if (this.checked && modelName != ' ') {
        animationModelY();
    } else if (this.checked && modelName == ' ') {
        alert('Выделите объект!');
        this.checked = false;
    } else if (this.checked == false) {
        stopAnimation(idModelY);
        scene.getObjectByName(modelName).rotation.set(0, 0, 0);
    }
});

function animationModelY() {
    idModelY = requestAnimationFrame(animationModelY);

    rotateY(scene.getObjectByName(modelName), speedModelY);
    renderer.render(scene, camera);
}

//Z
inputModelAnimSpeedZ.addEventListener('change', function () {
    speedModelZ = Number(this.value);

    stopAnimation(idModelZ);
    animationModelZ();
});

checkboxModelAnimZ.addEventListener('change', function () {
    if (this.checked && modelName != ' ') {
        animationModelZ();
    } else if (this.checked && modelNam == ' ') {
        alert('Выделите объект!');
        this.checked = false;
    } else if (this.checked == false) {
        stopAnimation(idModelZ);
        scene.getObjectByName(modelName).rotation.set(0, 0, 0);
    }
});

function animationModelZ() {
    idModelZ = requestAnimationFrame(animationModelZ);

    rotateZ(scene.getObjectByName(modelName), speedModelZ);
    renderer.render(scene, camera);
}
