var mainControlName = '';

function addControls(object) {

    var transformControl = new THREE.TransformControls(camera, renderer.domElement);

    transformControl.addEventListener('change', render);
    transformControl.addEventListener('dragging-changed', function (event) {
        controls.enabled = !event.value;
    });

    transformControl.name = 'Control' + object.name;
    transformControl.setSpace("local");

    mainControlName = transformControl.name;

    transformControl.attach(object)
    scene.add(transformControl);

    return transformControl.name;
}


window.addEventListener('keydown', function (event) {
    switch (event.code) {

        case 'KeyG':
            scene.getObjectByName(mainControlName).setMode('translate')
            break
        case 'KeyR':
            scene.getObjectByName(mainControlName).setMode('rotate')
            break
        case 'KeyS':
            scene.getObjectByName(mainControlName).setMode('scale')
            break
    }
});
