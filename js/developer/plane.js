var checkboxPlane = document.getElementById('checkPlane');
var inputPlaneColor = document.getElementById('colorPlane');
var inputPlaneX = document.getElementById('xPlane');
var inputPlaneY = document.getElementById('yPlane');
var inputPlaneZ = document.getElementById('zPlane');
var inputPlaneAngelX = document.getElementById('xPlaneAngel');
var inputPlaneAngelY = document.getElementById('yPlaneAngel');
var inputPlaneAngelZ = document.getElementById('zPlaneAngel');
var inputPlaneWidth =  document.getElementById('widthPlane');
var inputPlaneLength =  document.getElementById('lengthPlane');

//Плоскость
var lengthPlane = 1000, widthPlane = 1000;
var colorPlane = '#ffffff';
var xPlane = 0, yPlane = 0, zPlane = 0;
var xPlaneAng = -90 * (Math.PI / 180), yPlaneAng = 0, zPlaneAng = 0;

function createPlane(length, width, color, x, y, z, xAng, yAng, zAng) {

    var planeGeometry = new THREE.PlaneGeometry(length, width);
    var planeMaterial = new THREE.MeshLambertMaterial({ color: color, transparent: true, opacity: 1});

    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    plane.name = 'Plane';
    plane.receiveShadow = true;
    plane.castShadow = true;

    plane.position.set(x, y, z);
    plane.rotation.set(xAng, yAng, zAng);

    scene.add(plane);
}

inputPlaneColor.addEventListener('change', function () {
    colorPlane = this.value;

    if (scene.getObjectByName('Plane')) {
        scene.remove(scene.getObjectByName('Plane'));
        createPlane(lengthPlane, widthPlane, colorPlane, xPlane, yPlane, zPlane, xPlaneAng, yPlaneAng, zPlaneAng);
    }
});

inputPlaneX.addEventListener('change', function () {
    xPlane = Number(this.value);

    if (scene.getObjectByName('Plane')) {
        scene.remove(scene.getObjectByName('Plane'));
        createPlane(lengthPlane, widthPlane, colorPlane, xPlane, yPlane, zPlane, xPlaneAng, yPlaneAng, zPlaneAng);
    }
});

inputPlaneY.addEventListener('change', function () {
    yPlane = Number(this.value);

    if (scene.getObjectByName('Plane')) {
        scene.remove(scene.getObjectByName('Plane'));
        createPlane(lengthPlane, widthPlane, colorPlane, xPlane, yPlane, zPlane, xPlaneAng, yPlaneAng, zPlaneAng);
    }
});

inputPlaneZ.addEventListener('change', function () {
    zPlane = Number(this.value);

    if (scene.getObjectByName('Plane')) {
        scene.remove(scene.getObjectByName('Plane'));
        createPlane(lengthPlane, widthPlane, colorPlane, xPlane, yPlane, zPlane, xPlaneAng, yPlaneAng, zPlaneAng);
    }
});

inputPlaneAngelX.addEventListener('change', function () {
    xPlaneAng = Number(this.value) * (Math.PI / 180);

    if (scene.getObjectByName('Plane')) {
        scene.remove(scene.getObjectByName('Plane'));
        createPlane(lengthPlane, widthPlane, colorPlane, xPlane, yPlane, zPlane, xPlaneAng, yPlaneAng, zPlaneAng);
    }
});

inputPlaneAngelY.addEventListener('change', function () {
    yPlaneAng = Number(this.value) * (Math.PI / 180);

    if (scene.getObjectByName('Plane')) {
        scene.remove(scene.getObjectByName('Plane'));
        createPlane(lengthPlane, widthPlane, colorPlane, xPlane, yPlane, zPlane, xPlaneAng, yPlaneAng, zPlaneAng);
    }
});

inputPlaneAngelZ.addEventListener('change', function () {
    zPlaneAng = Number(this.value) * (Math.PI / 180);

    if (scene.getObjectByName('Plane')) {
        scene.remove(scene.getObjectByName('Plane'));
        createPlane(lengthPlane, widthPlane, colorPlane, xPlane, yPlane, zPlane, xPlaneAng, yPlaneAng, zPlaneAng);
    }
});

inputPlaneLength.addEventListener('change', function () {
    lengthPlane =  Number(this.value);

    if (scene.getObjectByName('Plane')) {
        scene.remove(scene.getObjectByName('Plane'));
        createPlane(lengthPlane, widthPlane, colorPlane, xPlane, yPlane, zPlane, xPlaneAng, yPlaneAng, zPlaneAng);
    }
});

inputPlaneWidth.addEventListener('change', function () {
    widthPlane =  Number(this.value);

    if (scene.getObjectByName('Plane')) {
        scene.remove(scene.getObjectByName('Plane'));
        createPlane(lengthPlane, widthPlane, colorPlane, xPlane, yPlane, zPlane, xPlaneAng, yPlaneAng, zPlaneAng);
    }
});


checkboxPlane.addEventListener('change', function () {
    if (this.checked) {
        createPlane(lengthPlane, widthPlane, colorPlane, xPlane, yPlane, zPlane, xPlaneAng, yPlaneAng, zPlaneAng);
    } else if (this.checked == false) {
        clearListLabel('Plane')

        scene.remove(scene.getObjectByName('Plane'));
    }
});

