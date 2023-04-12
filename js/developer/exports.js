var JSONButton = document.getElementById('downloadJsonScene');
var ObjButton = document.getElementById('downloadObjScene');

JSONButton.addEventListener('click', function () {
    var sceneJSON = { scene: scene.children };
    var dataJSON = JSON.stringify(sceneJSON);

    exportJSON(dataJSON, 'scene.json');
});

function exportJSON(JSONScene, name) {
    const a = document.createElement('a');
    const type = name.split(".").pop();
    a.href = URL.createObjectURL(new Blob([JSONScene], { type: `text/${type === "json]" ? "plain" : type}` }));
    a.download = name;
    a.click();
}

ObjButton.addEventListener('click', function () {
    exportObj(scene);
});

function exportObj(scene) {
    const exporter = new THREE.OBJExporter();
    const data = exporter.parse(scene);

    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([data], { 'type': 'obj' }));

    var name = 'scene.obj';
    a.download = name;
    a.click();
}

