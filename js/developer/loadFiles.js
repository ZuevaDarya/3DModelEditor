var modelName = ' ';
var index = 0;

var messageBlock = document.getElementById('message');

function loadOBJFilesWithMaterial(scene, controls, camera, url, setPath, nameMtl, pngArr) {
    if (nameMtl != ' ') {
        const mtlLoader = new THREE.MTLLoader();
        mtlLoader.setPath(setPath);
        mtlLoader.load(nameMtl, function (materials) {
            materials.preload();

            const objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);

            loadOBJFiles(scene, controls, camera, url, objLoader);
        });
    }
    else if (nameMtl == ' ' && url != ' ' && pngArr.length == 0) {
        const objLoader = new THREE.OBJLoader();
        loadOBJFiles(scene, controls, camera, url, objLoader);

    } else if (nameMtl == ' ' && url != ' ' && pngArr.length != 0) {
        const textureLoader = new THREE.TextureLoader();

        for (let i = 0; i < pngArr.length; i++) {
            var map = textureLoader.load(pngArr[i]);
        }

        var material = new THREE.MeshPhongMaterial({ map: map });

        const objLoader = new THREE.OBJLoader();
        objLoader.load(url, (root) => {
            root.traverse(function (node) {
                if (node.isMesh) node.material = material;
            });

            if (scene.getObjectByName(modelName)) {
                root.name = 'Model' + index++;
            } else {
                root.name = 'Model';
            }

            root.position.set(0, 0, 0);

            scene.add(root);
            camera.lookAt(root.position);

            const box = new THREE.Box3().setFromObject(root);

            const boxSize = box.getSize(new THREE.Vector3()).length();
            const boxCenter = box.getCenter(new THREE.Vector3());

            frameArea(boxSize * 0.5, boxSize, boxCenter, camera);

            controls.maxDistance = boxSize * 10;
            controls.target.copy(boxCenter);
            controls.update();
        },
            (xhr) => {
                messageBlock.innerText = 'Загрузка: ' + Math.round((xhr.loaded / xhr.total) * 100) + '% ';

            },
            (error) => {
                messageBlock.innerText = 'Загрузка: ' + ' Ошибка';
            }
        );

    }
}

function loadOBJFiles(scene, controls, camera, url, objLoader) {
    objLoader.load(url, (root) => {
        if (scene.getObjectByName(modelName)) {
            root.name = 'Model' + index++;
        } else {
            root.name = 'Model';
        }

        modelName = root.name;

        root.castShadow = true;
        root.receiveShadow = true;

        for (let i = 0; i < root.children.length; i++) {
            root.children[i].material.transparent = true;
            root.children[i].material.opacity = 1;
        }

        root.position.set(0, 0, 0);

        scene.add(root);
        camera.lookAt(root.position);

        const box = new THREE.Box3().setFromObject(root);

        const boxSize = box.getSize(new THREE.Vector3()).length();
        const boxCenter = box.getCenter(new THREE.Vector3());

        frameArea(boxSize * 0.5, boxSize, boxCenter, camera);

        controls.maxDistance = boxSize * 10;
        controls.target.copy(boxCenter);
        controls.update();
    },
        (xhr) => {
            messageBlock.innerText = 'Загрузка: ' + Math.round((xhr.loaded / xhr.total) * 100) + '% ';

        },
        (error) => {
            messageBlock.innerText = 'Загрузка: ' + ' Ошибка';
        }
    );
}

function loadFBXFiles(scene, controls, camera, url, pngArr) {
    const manager = new THREE.LoadingManager();
    manager.addHandler(/\.tga$/i, new THREE.TGALoader());

    if (pngArr.length == 0) {
        const fbxLoader = new THREE.FBXLoader(manager);
        fbxLoader.load(url, (root) => {
            if (scene.getObjectByName(modelName)) {
                root.name = 'Model' + index++;
            } else {
                root.name = 'Model';
            }

            root.position.set(0, 0, 0);

            scene.add(root);
            camera.lookAt(root.position);

            const box = new THREE.Box3().setFromObject(root);

            const boxSize = box.getSize(new THREE.Vector3()).length();
            const boxCenter = box.getCenter(new THREE.Vector3());

            frameArea(boxSize * 0.5, boxSize, boxCenter, camera);

            controls.maxDistance = boxSize * 100;
            controls.target.copy(boxCenter);
            controls.update();
        },
            (xhr) => {
                messageBlock.innerText = 'Загрузка: ' + Math.round((xhr.loaded / xhr.total) * 100) + '% ';

            },
            (error) => {
                messageBlock.innerText = 'Загрузка: ' + ' Ошибка';
            }
        );
    } else if (pngArr.length != 0) {
        const textureLoader = new THREE.TextureLoader();

        for (let i = 0; i < pngArr.length; i++) {
            var map = textureLoader.load(pngArr[i]);
        }
        var material = new THREE.MeshPhongMaterial({ map: map });

        const fbxLoader = new THREE.FBXLoader(manager);
        fbxLoader.load(url, (root) => {
            root.traverse(function (node) {
                if (node.isMesh) node.material = material;
            });

            if (scene.getObjectByName(modelName)) {
                root.name = 'Model' + index++;
            } else {
                root.name = 'Model';
            }

            console.log(root, root.name)
            root.position.set(0, 0, 0);

            scene.add(root);
            camera.lookAt(root.position);

            const box = new THREE.Box3().setFromObject(root);

            const boxSize = box.getSize(new THREE.Vector3()).length();
            const boxCenter = box.getCenter(new THREE.Vector3());

            frameArea(boxSize * 0.5, boxSize, boxCenter, camera);

            controls.maxDistance = boxSize * 100;
            controls.target.copy(boxCenter);
            controls.update()

        });

    }
}

function loadSTLFiles(scene, controls, camera, url) {
    const loader = new THREE.STLLoader();

    loader.load(url, (root) => {
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(root, material)

        if (scene.getObjectByName(modelName)) {
            mesh.name = 'Model' + index++;
        } else {
            mesh.name = 'Model';
        }

        mesh.position.set(0, 0, 0);
        mesh.rotation.set(0, 0, 0);

        scene.add(mesh)

        camera.lookAt(mesh.position);
        controls.update();
    },
        (xhr) => {
            messageBlock.innerText = 'Загрузка: ' + Math.round((xhr.loaded / xhr.total) * 100) + '% ';

        },
        (error) => {
            messageBlock.innerText = 'Загрузка: ' + ' Ошибка';
        }
    );
}

function loadGLTFFiles(scene, controls, camera, url, setPath, pngArr) {

    const gltfLoader = new THREE.GLTFLoader();

    gltfLoader.load(url, (gltf) => {
        const root = gltf.scene;

        if (scene.getObjectByName(modelName)) {
            root.name = 'Model' + index++;
        } else {
            root.name = 'Model';
        }

        root.position.set(0, 0, 0);
        root.rotation.set(0, 0, 0);

        scene.add(root);
        scene.add(root);
        camera.lookAt(root.position);

        const box = new THREE.Box3().setFromObject(root);

        const boxSize = box.getSize(new THREE.Vector3()).length();
        const boxCenter = box.getCenter(new THREE.Vector3());

        frameArea(boxSize * 0.5, boxSize, boxCenter, camera);

        controls.maxDistance = boxSize * 10;
        controls.target.copy(boxCenter);
        controls.update();
    },
        (xhr) => {
            messageBlock.innerText = 'Загрузка: ' + Math.round((xhr.loaded / xhr.total) * 100) + '% ';

        },
        (error) => {
            messageBlock.innerText = 'Загрузка: ' + ' Ошибка';
        }

    );
}