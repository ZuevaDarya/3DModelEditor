const canvas = document.getElementById('canvas');

const scene = new THREE.Scene();
scene.background = new THREE.Color('#000000');

const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 10000);
camera.position.set(20, canvas.clientHeight, 50);
camera.lookAt(scene.position);

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setClearColor(0xffffff, 0);
renderer.shadowMap.enabled = true;
renderer.shadowMapSoft = true;
renderer.shadowMap.type = THREE.BasicShadowMap;

const controls = new THREE.OrbitControls(camera, canvas);
controls.target.set(0, 5, 0);
controls.update();

window.addEventListener('resize', function () {
    var width = canvas.clientWidth;
    var height = canvas.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);

    const direction = (new THREE.Vector3()).subVectors(camera.position, boxCenter).multiply(new THREE.Vector3(1, 0, 1)).normalize();

    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

    camera.near = boxSize / 100;
    camera.far = boxSize * 100;
    camera.updateProjectionMatrix();
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
}

function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}

function render() {
    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

requestAnimationFrame(render);


