var checkboxBaseLight = document.getElementById('checkBaseLight');
var checkPointLight = document.getElementById('checkPointLight');
var inputPointLightColor = document.getElementById('colorPointLight');
var inputPointLightX = document.getElementById('xPointLight');
var inputPointLightY = document.getElementById('yPointLight');
var inputPointLightZ = document.getElementById('zPointLight');
var inputPointLightIntensive = document.getElementById('intensivePointLight');
var inputPointRadiusSphere = document.getElementById('radiusPointSphere');

var checkBigLight = document.getElementById('checkBigLight');
var inputBigLightColor = document.getElementById('colorBigLight');
var inputBigLightIntensive = document.getElementById('intensiveBigLight');

var checkProjectorLight = document.getElementById('checkProjectorLight');
var inputProjectorLightColor = document.getElementById('colorProjectorLight');
var inputProjectorLightX = document.getElementById('xProjectorLight');
var inputProjectorLightY = document.getElementById('yProjectorLight');
var inputProjectorLightZ = document.getElementById('zProjectorLight');
var inputProjectorLightIntensive = document.getElementById('intensiveProjectorLight');
var inputProjectorRadiusSphere = document.getElementById('radiusProjectorSphere');

//Управление освещением
function createHemisphereLight() {
    const skyColor = 0xB1E1FF;
    const groundColor = 0xB97A20;
    const intensity = 0.6;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);

    light.name = 'HemisphereLight';
    scene.add(light);
}

function createDirectionalLight() {
    const color = 0xFFFFFF;
    const intensity = 0.8;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 10, 0);
    light.target.position.set(-5, 0, 0);

    light.castShadow = true;
    light.shadow.camera.near = 100;

    light.name = 'DirectionalLight';
    scene.add(light);
    scene.add(light.target);
}

createHemisphereLight();
createDirectionalLight();

checkboxBaseLight.addEventListener('change', function () {
    if (this.checked) {
        createHemisphereLight();
        createDirectionalLight();
    } else if (this.checked == false) {
        clearListLabel('HemisphereLight');
        clearListLabel('DirectionalLight');

        scene.remove(scene.getObjectByName('HemisphereLight'));
        scene.remove(scene.getObjectByName('DirectionalLight'));
    }
});

//Точечный свет
var colorPoint = '#ffffff';
var xPoint = 0, yPoint = 7, zPoint = 5;
var radiusPointSphere = 20;
var intensityPoint = 5;

function createPointLight(x, y, z, color, intensity, radius) {
    var light = new THREE.PointLight(color, intensity);
    light.position.set(x, y, z);

    light.castShadow = true;

    light.name = 'PointLight';
    scene.add(light)

    var geometry = new THREE.SphereGeometry(radius);
    var wireframe = new THREE.WireframeGeometry(geometry);

    var line = new THREE.LineSegments(wireframe);
    line.name = 'linePointLight';

    line.material = new THREE.MeshBasicMaterial({ color: color });
    line.material.depthTest = false;
    line.material.transparent = false;

    line.position.set(x, y, z);
    scene.add(line);
}

inputPointLightColor.addEventListener('change', function () {
    colorPoint = new THREE.Color(this.value);

    if (scene.getObjectByName('PointLight')) {
        var light = scene.getObjectByName('PointLight');
        var line = scene.getObjectByName('linePointLight');

        light.color = colorPoint;
        line.material.color = colorPoint;
    }
});

inputPointLightX.addEventListener('change', function () {
    xPoint = Number(this.value);

    if (scene.getObjectByName('PointLight')) {
        var light = scene.getObjectByName('PointLight');
        var line = scene.getObjectByName('linePointLight');

        light.position.x = xPoint;
        line.position.x = xPoint;
    }
});

inputPointLightY.addEventListener('change', function () {
    yPoint = Number(this.value);

    if (scene.getObjectByName('PointLight')) {
        var light = scene.getObjectByName('PointLight');
        var line = scene.getObjectByName('linePointLight');

        light.position.y = yPoint;
        line.position.y = yPoint;
    }
});

inputPointLightZ.addEventListener('change', function () {
    zPoint = Number(this.value);

    if (scene.getObjectByName('PointLight')) {
        var light = scene.getObjectByName('PointLight');
        var line = scene.getObjectByName('linePointLight');

        light.position.z = zPoint;
        line.position.z = zPoint;
    }
});

inputPointLightIntensive.addEventListener('change', function () {
    intensityPoint = Number(this.value);

    if (scene.getObjectByName('PointLight')) {
        var light = scene.getObjectByName('PointLight');

        light.intensity = intensityPoint;
    }
});

inputPointRadiusSphere.addEventListener('change', function () {
    radiusPointSphere = Number(this.value);

    if (scene.getObjectByName('PointLight')) {
        var line = scene.getObjectByName('linePointLight');

        line.geometry = new THREE.SphereGeometry(radiusPointSphere);
    }
});

checkPointLight.addEventListener('change', function () {
    if (this.checked) {
        createPointLight(xPoint, yPoint, zPoint, colorPoint, intensityPoint, radiusPointSphere);
    } else if (this.checked == false) {
        clearListLabel('PointLight');
        clearListLabel('linePointLight');

        scene.remove(scene.getObjectByName('PointLight'));
        scene.remove(scene.getObjectByName('linePointLight'));
    }

});

//Окружающий свет
var colorBig = '#ffffff';
var intensityBig = 1;

function createBigLight(color, intensity) {
    var light = new THREE.AmbientLight(color, intensity);

    light.name = 'AmbientLight';
    scene.add(light);
}

inputBigLightColor.addEventListener('change', function () {
    colorBig = new THREE.Color(this.value);

    if (scene.getObjectByName('AmbientLight')) {
        var light = getObjectByName('AmbientLight');

        light.color = colorBig;
    }
});

inputBigLightIntensive.addEventListener('change', function () {
    intensityBig = Number(this.value);

    if (scene.getObjectByName('AmbientLight')) {
        var light = getObjectByName('AmbientLight');

        light.intensity = intensityBig;
    }
});

checkBigLight.addEventListener('change', function () {
    if (this.checked) {
        createBigLight(colorBig, intensityBig);
    } else if (this.checked == false) {
        clearListLabel('AmbientLight');
        scene.remove(scene.getObjectByName('AmbientLight'));
    }

});

//Прожектор 
var colorProjector = '#ffffff';
var xProjector = 0, yProjector = 7, zProjector = 5;
var intensityProjector = 5;
var radiusPrSphere = 20;

function createProjectorLight(x, y, z, color, intensity, radius) {
    var light = new THREE.SpotLight(color, intensity, 10000, Math.PI / 6, 25)
    light.position.set(x, y, z)

    light.castShadow = true;

    light.name = 'SpotLight';
    scene.add(light);

    var geometry = new THREE.SphereGeometry(radius);
    var wireframe = new THREE.WireframeGeometry(geometry);

    var line = new THREE.LineSegments(wireframe);
    line.name = 'lineSpotLight';

    line.material = new THREE.MeshBasicMaterial({ color: color });
    line.material.depthTest = false;
    line.material.transparent = false;

    line.position.set(x, y, z);
    scene.add(line);
}

inputProjectorLightColor.addEventListener('change', function () {
    colorProjector = new THREE.Color(this.value);

    if (scene.getObjectByName('SpotLight')) {
        var light = scene.getObjectByName('SpotLight');
        var line = scene.getObjectByName('lineSpotLight');

        light.color = colorProjector;
        line.material.color = colorProjector;
    }
});

inputProjectorLightX.addEventListener('change', function () {
    xProjector = Number(this.value);

    if (scene.getObjectByName('SpotLight')) {
        var light = scene.getObjectByName('SpotLight');
        var line = scene.getObjectByName('lineSpotLight');

        light.position.x = xProjector;
        line.position.x = xProjector;
    }
});

inputProjectorLightY.addEventListener('change', function () {
    yProjector = Number(this.value);

    if (scene.getObjectByName('SpotLight')) {
        var light = scene.getObjectByName('SpotLight');
        var line = scene.getObjectByName('lineSpotLight');

        light.position.y = yProjector;
        line.position.y = yProjector;
    }
});

inputProjectorLightZ.addEventListener('change', function () {
    zProjector = Number(this.value);

    if (scene.getObjectByName('SpotLight')) {
        var light = scene.getObjectByName('SpotLight');
        var line = scene.getObjectByName('lineSpotLight');

        light.position.z = zProjector;
        line.position.z = zProjector;
    }
});

inputProjectorLightIntensive.addEventListener('change', function () {
    intensityProjector = Number(this.value);

    if (scene.getObjectByName('SpotLight')) {
        var light = scene.getObjectByName('SpotLight');

        light.intensity = intensityProjector;
    }
});

inputProjectorRadiusSphere.addEventListener('change', function () {
    radiusPrSphere = Number(this.value);

    if (scene.getObjectByName('SpotLight')) {
        var line = scene.getObjectByName('lineSpotLight');

        line.geometry = new THREE.SphereGeometry(radiusPrSphere);
    }
});

checkProjectorLight.addEventListener('change', function () {
    if (this.checked) {
        createProjectorLight(xProjector, yProjector, zProjector, colorProjector, intensityProjector, radiusPrSphere);
    } else if (this.checked == false) {
        clearListLabel('SpotLight');
        clearListLabel('lineSpotLight');

        scene.remove(scene.getObjectByName('SpotLight'));
        scene.remove(scene.getObjectByName('lineSpotLight'));
    }

});
