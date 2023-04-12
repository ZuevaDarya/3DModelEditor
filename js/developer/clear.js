var clearButton = document.getElementById('button');

clearButton.addEventListener('click', function () {
    var checkboxArr = document.querySelectorAll('input[type="checkbox"]');
    var inputTextArr = document.querySelectorAll('input[type="text"]');

    var checkboxBaseLight = document.getElementById('checkBaseLight');

    for (let i = 0; i < checkboxArr.length; i++) {
        checkboxArr[i].checked = false;
    }

    for (let i = 0; i < inputTextArr.length; i++) {
        inputTextArr[i].value = inputTextArr[i].getAttribute("placeholder");
    }

    checkboxBaseLight.checked = true;
    //Плоскость
    {
        lengthPlane = 1000, widthPlane = 1000;
        colorPlane = '#ffffff';
        xPlane = 0, yPlane = 0, zPlane = 0;
        xPlaneAng = -90 * (Math.PI / 180), yPlaneAng = 0, zPlaneAng = 0;
    }

    //Параллелепипед
    {
        heightBox = 300, widthBox = 300, depthBox = 300;
        colorBox = '#ffffff';
        xBox = 0, yBox = 0, zBox = 0;
        xBoxAng = 0, yBoxAng = 0, zBoxAng = 0;
        xBoxScale = 1, yBoxScale = 1, zBoxScale = 1;
        heightWireFrame = 10, widthWireFrame = 10, depthWireFrame = 10;

        stopAnimation(idBoxX);
        stopAnimation(idBoxY);
        stopAnimation(idBoxZ);

        boxName = ' ';
    }

    //Конус
    {
        heightCone = 300, radiusCone = 150;
        colorCone = '#ffffff';
        xCone = 0, yCone = 0, zCone = 0;
        xConeAng = 0, yConeAng = 0, zConeAng = 0;
        xConeScale = 1, yConeScale = 1, zConeScale = 1;
        kolvoWireFrame = 10;

        stopAnimation(idConeX);
        stopAnimation(idConeY);
        stopAnimation(idConeZ);

        coneName = ' ';
    }

    //Сфера
    {
        radiusSphere = 150;
        colorSphere = '#ffffff';
        xSphere = 0, ySphere = 0, zSphere = 0;
        xSphereAng = 0, ySphereAng = 0, zSphereAng = 0;
        xSphereScale = 1, ySphereScale = 1, zSphereScale = 1;
        kolvoWireFrameSphereX = 10;
        kolvoWireFrameSphereY = 10;

        stopAnimation(idSphereX);
        stopAnimation(idSphereY);
        stopAnimation(idSphereZ);

        sphereName = ' ';
    }

    //Цилиндр
    {
        radiusCylinderTop = 150, radiusCylinderBottom = 150, heightCylinder = 300;
        colorCylinder = '#ffffff';
        xCylinder = 0, yCylinder = 0, zCylinder = 0;
        xCylinderAng = 0, yCylinderAng = 0, zCylinderAng = 0;
        xCylinderScale = 1, yCylinderScale = 1, zCylinderScale = 1;
        kolvoWireFrameCylinder = 10;

        stopAnimation(idCylinderX);
        stopAnimation(idCylinderY);
        stopAnimation(idCylinderZ);

        cylinderName = ' ';
    }

    {
        modelName = ' ';
        stopAnimation(idModelX);
        stopAnimation(idModelY);
        stopAnimation(idModelZ);
    }

    messageBlock.innerText = 'Загрузка: ';
});

//Удаление модели из сцены
function removeModelFromScene(event) {
    event.preventDefault();

    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }

    var listItems = document.getElementById('listItems');
    listItems.textContent = '';

    createHemisphereLight();
    createDirectionalLight();
}

function clearListItems(objName, listItems) {
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].type == 'checkbox') {
            if ((listItems[i].name).indexOf(objName) != -1) {
                listItems[i].parentNode.removeChild(listItems[i]);
                listItems[i].previousSibling.remove();
            }
        }
    }
}

function clearListLabel(objName) {
    var list = document.getElementById('listItems');
    var allLabel = list.getElementsByTagName('label')

    for (let i = 0; i < allLabel.length; i++) {
        if ((allLabel[i].htmlFor).indexOf(objName) != -1) {
            allLabel[i].parentNode.removeChild(allLabel[i]);
        }
    }
}