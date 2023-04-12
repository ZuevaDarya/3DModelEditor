var inputBaseBoxColor = document.getElementById('colorBaseBox');
var inputBaseBoxX = document.getElementById('xBaseBox');
var inputBaseBoxY = document.getElementById('yBaseBox');
var inputBaseBoxZ = document.getElementById('zBaseBox');
var inputBaseBoxAngelX = document.getElementById('xBaseBoxAngel');
var inputBaseBoxAngelY = document.getElementById('yBaseBoxAngel');
var inputBaseBoxAngelZ = document.getElementById('zBaseBoxAngel');
var inputBaseBoxScaleX = document.getElementById('xBaseBoxScale');
var inputBaseBoxScaleY = document.getElementById('yBaseBoxScale');
var inputBaseBoxScaleZ = document.getElementById('zBaseBoxScale');
var inputBaseBoxDepth = document.getElementById('depthBaseBox');
var inputBaseBoxWidth = document.getElementById('widthBaseBox');
var inputBaseBoxHeight = document.getElementById('heightBaseBox');

var checkboxBaseBoxWireFrame = document.getElementById('checkBoxWireFrame');
var inputBaseBoxWireFrameDepth = document.getElementById('depthBoxWireFrame');
var inputBaseBoxWireFrameWidth = document.getElementById('widthBoxWireFrame');
var inputBaseBoxWireFrameHeight = document.getElementById('heightBoxWireFrame');

var checkboxBaseBoxAnimX = document.getElementById('baseBoxAnimCheckX');
var inputBaseBoxAnimSpeedX = document.getElementById('baseBoxAnimSpeedX');

var checkboxBaseBoxAnimY = document.getElementById('baseBoxAnimCheckY');
var inputBaseBoxAnimSpeedY = document.getElementById('baseBoxAnimSpeedY');

var checkboxBaseBoxAnimZ = document.getElementById('baseBoxAnimCheckZ');
var inputBaseBoxAnimSpeedZ = document.getElementById('baseBoxAnimSpeedZ');

var linkBoxAdd = document.getElementById('createBox');
var linkBoxDelete = document.getElementById('deleteBox');

//Параллелепипед
var heightBox = 300, widthBox = 300, depthBox = 300;
var colorBox = '#ffffff';
var xBox = 0, yBox = 0, zBox = 0;
var xBoxAng = 0, yBoxAng = 0, zBoxAng = 0;
var xBoxScale = 1, yBoxScale = 1, zBoxScale = 1;
var opacityBox = 1;

//Каркас
var heightWireFrame = 10, widthWireFrame = 10, depthWireFrame = 10;

var boxName = ' ';
var index = 0;

function createBox() {
    var boxGeometry = new THREE.BoxGeometry(300, 300, 300, 10, 10, 10);
    var boxMaterial = new THREE.MeshLambertMaterial({ color: '#ffffff', transparent: true, opacity: 1 });

    var box = new THREE.Mesh(boxGeometry, boxMaterial);

    if (scene.getObjectByName(boxName)) {
        box.name = 'Box' + index++;
    } else {
        box.name = 'Box';
    }

    boxName = box.name;
    
    box.castShadow = true;
    box.receiveShadow = true;

    box.geometry.castShadow = true;
    box.geometry.receiveShadow = true;

    box.position.set(0, 0, 0);
    box.rotation.set(0, 0, 0);
    box.scale.set(1, 1, 1);

    scene.add(box);

    if (checkboxBaseBoxWireFrame.checked) checkboxBaseBoxWireFrame.checked = false;
}

linkBoxAdd.addEventListener('click', function () {
    createBox();
});

linkBoxDelete.addEventListener('click', function () {
    if (boxName == ' ' || scene.getObjectByName(boxName).material.opacity == 1) {
        alert('Выделите объект!');
    } else {
        clearListItems(boxName, listItems)

        scene.remove(scene.getObjectByName(boxName));
        boxName = ' ';
    }
});

inputBaseBoxColor.addEventListener('change', function () {
    console.log(boxName)
    if (boxName != ' ') {
        colorBox = new THREE.Color(this.value);

        if (scene.getObjectByName(boxName)) {
            var box = scene.getObjectByName(boxName);
            box.material.color = colorBox;
        }
    } else alert('Выделите объект!');
});

inputBaseBoxX.addEventListener('change', function () {
    if (boxName != ' ') {
        xBox = Number(this.value);

        if (scene.getObjectByName(boxName)) {
            var box = scene.getObjectByName(boxName);
            box.position.x = xBox;
        }
    } else alert('Выделите объект!');
});

inputBaseBoxY.addEventListener('change', function () {
    if (boxName != ' ') {
        yBox = Number(this.value);

        if (scene.getObjectByName(boxName)) {
            var box = scene.getObjectByName(boxName);
            box.position.y = yBox;
        }
    } else alert('Выделите объект!');
});

inputBaseBoxZ.addEventListener('change', function () {
    if (boxName != ' ') {
        zBox = Number(this.value);

        if (scene.getObjectByName(boxName)) {
            var box = scene.getObjectByName(boxName);
            box.position.z = zBox;
        }
    } else alert('Выделите объект!');
});

inputBaseBoxAngelX.addEventListener('change', function () {
    if (boxName != ' ') {
        xBoxAng = Number(this.value);

        if (scene.getObjectByName(boxName)) {
            var box = scene.getObjectByName(boxName);
            box.rotation.x = xBoxAng;
        }
    } else alert('Выделите объект!');
});

inputBaseBoxAngelY.addEventListener('change', function () {
    if (boxName != ' ') {
        yBoxAng = Number(this.value);

        if (scene.getObjectByName(boxName)) {
            var box = scene.getObjectByName(boxName);
            box.rotation.y = yBoxAng;
        }
    } else alert('Выделите объект!');
});

inputBaseBoxAngelZ.addEventListener('change', function () {
    if (boxName != ' ') {
        zBoxAng = Number(this.value);

        if (scene.getObjectByName(boxName)) {
            var box = scene.getObjectByName(boxName);
            box.rotation.z = zBoxAng;
        }
    } else alert('Выделите объект!');
});

inputBaseBoxScaleX.addEventListener('change', function () {
    if (boxName != ' ') {
        xBoxScale = Number(this.value);

        if (scene.getObjectByName(boxName)) {
            var box = scene.getObjectByName(boxName);
            box.scale.x = xBoxScale;
        }
    } else alert('Выделите объект!');
});

inputBaseBoxScaleY.addEventListener('change', function () {
    if (boxName != ' ') {
        yBoxScale = Number(this.value);

        if (scene.getObjectByName(boxName)) {
            var box = scene.getObjectByName(boxName);
            box.scale.y = yBoxScale;
        }
    } else alert('Выделите объект!');
});

inputBaseBoxScaleZ.addEventListener('change', function () {
    if (boxName != ' ') {
        zBoxScale = Number(this.value);

        if (scene.getObjectByName(boxName)) {
            var box = scene.getObjectByName(boxName);
            box.scale.z = zBoxScale;
        }
    } else alert('Выделите объект!');
});

inputBaseBoxWidth.addEventListener('change', function () {
    if (boxName != ' ') {
        widthBox = Number(this.value);

        if (scene.getObjectByName(boxName)) {
            var box = scene.getObjectByName(boxName);
            box.geometry = new THREE.BoxGeometry(widthBox, heightBox, depthBox, widthWireFrame, heightWireFrame, depthWireFrame);
        }
    } else alert('Выделите объект!');
});

inputBaseBoxHeight.addEventListener('change', function () {
    if (boxName != ' ') {
        heightBox = Number(this.value);

        if (scene.getObjectByName(boxName)) {
            var box = scene.getObjectByName(boxName);
            box.geometry = new THREE.BoxGeometry(widthBox, heightBox, depthBox, widthWireFrame, heightWireFrame, depthWireFrame);
        }
    } else alert('Выделите объект!');
});

inputBaseBoxDepth.addEventListener('change', function () {
    if (boxName != ' ') {
        depthBox = Number(this.value);

        if (scene.getObjectByName(boxName)) {
            var box = scene.getObjectByName(boxName);
            box.geometry = new THREE.BoxGeometry(widthBox, heightBox, depthBox, widthWireFrame, heightWireFrame, depthWireFrame);
        }
    } else alert('Выделите объект!');
});

//Каркас
inputBaseBoxWireFrameWidth.addEventListener('change', function () {
    if (boxName != ' ') {
        widthWireFrame = Number(this.value);

        if (scene.getObjectByName(boxName)) {
            var box = scene.getObjectByName(boxName);
            box.geometry = new THREE.BoxGeometry(widthBox, heightBox, depthBox, widthWireFrame, heightWireFrame, depthWireFrame);
        }
    } else alert('Выделите объект!');
});

inputBaseBoxWireFrameHeight.addEventListener('change', function () {
    if (boxName != ' ') {
        heightWireFrame = Number(this.value);

        if (scene.getObjectByName(boxName)) {
            var box = scene.getObjectByName(boxName);
            box.geometry = new THREE.BoxGeometry(widthBox, heightBox, depthBox, widthWireFrame, heightWireFrame, depthWireFrame);
        }
    } else alert('Выделите объект!');
});

inputBaseBoxWireFrameDepth.addEventListener('change', function () {
    if (boxName != ' ') {
        depthWireFrame = Number(this.value);

        if (scene.getObjectByName(boxName)) {
            var box = scene.getObjectByName(boxName);
            box.geometry = new THREE.BoxGeometry(widthBox, heightBox, depthBox, widthWireFrame, heightWireFrame, depthWireFrame);
        }
    } else alert('Выделите объект!');
});

checkboxBaseBoxWireFrame.addEventListener('change', function () {
    if (boxName != ' ') {
        if (this.checked) {
            var box = scene.getObjectByName(boxName);
            box.material.wireframe = true;
        } else if (this.checked == false) {
            var box = scene.getObjectByName(boxName);
            box.material.wireframe = false;
        }
    } else {
        this.checked = false;
        alert('Выделите объект!');
    }
});

//Анимация
var idBoxX, idBoxY, idBoxZ;
var speedBoxX = 0.0001, speedBoxY = 0.0001, speedBoxZ = 0.0001;

//X
inputBaseBoxAnimSpeedX.addEventListener('change', function () {
    speedBoxX = Number(this.value);

    stopAnimation(idBoxX);
    animationBoxX();
});

checkboxBaseBoxAnimX.addEventListener('change', function () {
    if (this.checked && boxName != ' ') {
        animationBoxX();
    } else if (this.checked && boxName == ' ') {
        alert('Выделите объект!');
        this.checked = false;
    } else if (this.checked == false) {
        stopAnimation(idBoxX);
        scene.getObjectByName(boxName).rotation.set(0, 0, 0);
    }
});

function animationBoxX() {
    idBoxX = requestAnimationFrame(animationBoxX);

    rotateX(scene.getObjectByName(boxName), speedBoxX);
    renderer.render(scene, camera);
}

//Y
inputBaseBoxAnimSpeedY.addEventListener('change', function () {
    speedBoxY = Number(this.value);

    stopAnimation(idBoxY);
    animationBoxY();
});

checkboxBaseBoxAnimY.addEventListener('change', function () {
    if (this.checked && boxName != ' ') {
        animationBoxY();
    } else if (this.checked && boxName == ' ') {
        alert('Выделите объект!');
        this.checked = false;
    } else if (this.checked == false) {
        stopAnimation(idBoxY);
        scene.getObjectByName(boxName).rotation.set(0, 0, 0);
    }
});

function animationBoxY() {
    idBoxY = requestAnimationFrame(animationBoxY);

    rotateY(scene.getObjectByName(boxName), speedBoxY);
    renderer.render(scene, camera);
}

//Z
inputBaseBoxAnimSpeedZ.addEventListener('change', function () {
    speedBoxZ = Number(this.value);

    stopAnimation(idBoxZ);
    animationBoxZ();
});

checkboxBaseBoxAnimZ.addEventListener('change', function () {
    if (this.checked && boxName != ' ') {
        animationBoxZ();
    } else if (this.checked && boxName == ' ') {
        alert('Выделите объект!');
        this.checked = false;
    } else if (this.checked == false) {
        stopAnimation(idBoxZ);
        scene.getObjectByName(boxName).rotation.set(0, 0, 0);
    }
});

function animationBoxZ() {
    idBoxZ = requestAnimationFrame(animationBoxZ);

    rotateZ(scene.getObjectByName(boxName), speedBoxZ);
    renderer.render(scene, camera);
}
