var checkboxGrid = document.getElementById('checkGrid');
var inputGridSize = document.getElementById('gridSize');
var inputGridDivision = document.getElementById('gridDivision');
var inputGridColor = document.getElementById('colorPickerGrid');
var inputGridX = document.getElementById('xGrid');
var inputGridY = document.getElementById('yGrid');
var inputGridZ = document.getElementById('zGrid');

var checkboxXYZ = document.getElementById('checkXYZ');
var inputXYZSize = document.getElementById('xyzSize');
var inputXYZX = document.getElementById('xXYZ');
var inputXYZY = document.getElementById('yXYZ');
var inputXYZZ = document.getElementById('zXYZ');

var backgroundColor = document.getElementById('colorPicker');

//Изменение цвета фона
backgroundColor.addEventListener('change', function () {
    scene.background = new THREE.Color(backgroundColor.value);
});

//Управление сеткой 
var limit = 1000;
var division = 20;
var color = '#ffffff';
var xGrid = 0, yGrid = 0, zGrid = 0;

function createGrid(limit, division, color, x, y, z) {
    var grid = new THREE.GridHelper(limit * 2, division, "#ffffff", color);
    grid.name = 'Grid';
    grid.position.set(x, y, z);

    scene.add(grid);
}
inputGridSize.addEventListener('change', function () {
    limit = Number(this.value);

    if (scene.getObjectByName('Grid')) {
        scene.remove(scene.getObjectByName('Grid'));
        createGrid(limit, division, color, xGrid, yGrid, zGrid);
    }

});

inputGridDivision.addEventListener('change', function () {
    division = Number(this.value);

    if (scene.getObjectByName('Grid')) {
        scene.remove(scene.getObjectByName('Grid'));
        createGrid(limit, division, color, xGrid, yGrid, zGrid);
    }
});

inputGridColor.addEventListener('change', function () {
    color = this.value;

    if (scene.getObjectByName('Grid')) {
        scene.remove(scene.getObjectByName('Grid'));
        createGrid(limit, division, color, xGrid, yGrid, zGrid);
    }
});

inputGridX.addEventListener('change', function () {
    xGrid = Number(this.value);

    if (scene.getObjectByName('Grid')) {
        scene.remove(scene.getObjectByName('Grid'));
        createGrid(limit, division, color, xGrid, yGrid, zGrid);
    }
});

inputGridY.addEventListener('change', function () {
    yGrid = Number(this.value);

    if (scene.getObjectByName('Grid')) {
        scene.remove(scene.getObjectByName('Grid'));
        createGrid(limit, division, color, xGrid, yGrid, zGrid);
    }
});

inputGridZ.addEventListener('change', function () {
    zGrid = Number(this.value);

    if (scene.getObjectByName('Grid')) {
        scene.remove(scene.getObjectByName('Grid'));
        createGrid(limit, division, color, xGrid, yGrid, zGrid);
    }
});

checkboxGrid.addEventListener('change', function () {
    if (this.checked) {
        createGrid(limit, division, color, xGrid, yGrid, zGrid);
    } else if (this.checked == false) {
        clearListLabel('Grid');

        scene.remove(scene.getObjectByName('Grid'));
    }
});

//Управление осями координат
var xyzSize = 500;
var xXYZ = 0, yXYZ = 0, zXYZ = 0;

inputXYZSize.addEventListener('change', function () {
    xyzSize = Number(this.value);

    if (scene.getObjectByName('AxesHelper')) {
        scene.remove(scene.getObjectByName('AxesHelper'));
        createXYZ(xyzSize, xXYZ, yXYZ, zXYZ);
    }
});

inputXYZX.addEventListener('change', function () {
    xXYZ = Number(this.value);

    if (scene.getObjectByName('AxesHelper')) {
        scene.remove(scene.getObjectByName('AxesHelper'));
        createXYZ(xyzSize, xXYZ, yXYZ, zXYZ);
    }
});

inputXYZY.addEventListener('change', function () {
    yXYZ = Number(this.value);

    if (scene.getObjectByName('AxesHelper')) {
        scene.remove(scene.getObjectByName('AxesHelper'));
        createXYZ(xyzSize, xXYZ, yXYZ, zXYZ);
    }
});

inputXYZZ.addEventListener('change', function () {
    zXYZ = Number(this.value);

    if (scene.getObjectByName('AxesHelper')) {
        scene.remove(scene.getObjectByName('AxesHelper'));
        createXYZ(xyzSize, xXYZ, yXYZ, zXYZ);
    }
});

checkboxXYZ.addEventListener('change', function () {
    if (this.checked) {
        createXYZ(xyzSize, xXYZ, yXYZ, zXYZ);
    } else if (this.checked == false) {
        clearListLabel('AxesHelper');
        scene.remove(scene.getObjectByName('AxesHelper'));
    }
});

function createXYZ(xyzSize, x, y, z) {
    var axesHelper = new THREE.AxesHelper(xyzSize);
    axesHelper.name = 'AxesHelper';
    axesHelper.position.set(x, y, z);

    scene.add(axesHelper);
}



