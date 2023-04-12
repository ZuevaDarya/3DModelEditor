var parseJson = '';
var pageLocation = document.location.href;

$(document).ready(function () {

    $('#form').submit(function (event) {
        event.preventDefault();

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,

            success: function (result) {
                var jsonStr = result.split('JSON')[1];
                parseJson = JSON.parse(JSON.parse(jsonStr));

                var pathFile = '';

                var folder = '';
                var nameMtl = ' ';

                var pngArr = [];

                var objFlag = false;
                var mtlFlag = false;
                var pngFlag = false;
                var fbxFlag = false;
                var stlFlag = false;
                var gltfFlag = false;

                //Загрузка obj
                parseJson.forEach(element => {
                    if (element.path.indexOf('.obj') != -1 || element.path.indexOf('.OBJ') != -1) {
                        pathFile = element.path;
                        objFlag = true;
                    } else if (element.path.indexOf('.mtl') != -1 || element.path.indexOf('.MTL') != -1) {
                        folder = element.folder;
                        nameMtl = element.name;
                        mtlFlag = true;
                    }
                    else if (mtlFlag == false && (element.path.indexOf('.png') != -1 || element.path.indexOf('.jpg') != -1 || element.path.indexOf('.jpeg') != -1)) {
                        var urlPng = pageLocation.split('3D_Gallery')[0] + "/3D_Gallery/usersMaterials" + (element.path).split("usersMaterials")[1];
                        pngArr.push(urlPng);
                        pngFalg = true;
                    }

                    if (element.path.indexOf('.fbx') != -1 || element.path.indexOf('.FBX') != -1) {
                        pathFile = element.path;
                        fbxFlag = true;
                    } else if (element.path.indexOf('.png') != -1 || element.path.indexOf('.jpg') != -1 || element.path.indexOf('.jpeg') != -1) {
                        var urlPng = pageLocation.split('3D_Gallery')[0] + "/3D_Gallery/usersMaterials" + (element.path).split("usersMaterials")[1];
                        pngArr.push(urlPng);
                        pngFalg = true;
                    }

                    if (element.path.indexOf('.stl') != -1 || element.path.indexOf('.STL') != -1) {
                        pathFile = element.path;
                        stlFlag = true;
                    }

                    if (element.path.indexOf('.gltf') != -1 || element.path.indexOf('.GLTF') != -1 || element.path.indexOf('.glb') != -1) {
                        pathFile = element.path;
                        gltfFlag = true;
                    }
                });

                if ((objFlag == true) || (objFlag == true && mtlFlag == true) || (objFlag == true && pngFlag == true)) {
                    var url = pageLocation.split('3D_Gallery')[0] + "/3D_Gallery/usersMaterials" + (pathFile).split("usersMaterials")[1];
                    var setPath = '../3D_Gallery/usersMaterials/' + folder + '/';

                    loadOBJFilesWithMaterial(scene, controls, camera, url, setPath, nameMtl, pngArr);
                }

                if (fbxFlag == true || (fbxFlag == true && pngFlag == true)) {
                    var url = pageLocation.split('3D_Gallery')[0] + "/3D_Gallery/usersMaterials" + (pathFile).split("usersMaterials")[1];

                    loadFBXFiles(scene, controls, camera, url, pngArr);
                }

                if (stlFlag == true) {
                    var url = pageLocation.split('3D_Gallery')[0] + "/3D_Gallery/usersMaterials" + (pathFile).split("usersMaterials")[1];
                    loadSTLFiles(scene, controls, camera, url);
                }

                if (gltfFlag == true) {
                    var url = pageLocation.split('3D_Gallery')[0] + "/3D_Gallery/usersMaterials" + (pathFile).split("usersMaterials")[1];
                    loadGLTFFiles(scene, controls, camera, url);
                }
            },

            error: function () {
                alert('Не удалось загрузить модель!')
            },
        });
    });

    //Экспорт Модели
    $('#downloadModel').on('click', function () {
        if (modelName != ' ') {
            var folder = parseJson[0].folder;
            var url = pageLocation.split('3D_Gallery')[0] + '/3D_Gallery/usersMaterials/' + folder + '/archive.zip';
            console.log(url)
            // После выполнения запроса в бинарном режиме, создается ссылка с атрибутом download и данными в формате blob.
            $.ajax({
                url: url,
                dataType: 'binary',
                xhrFields: {
                    'responseType': 'blob',
                },

                success: function (data, status, xhr) {
                    var blob = new Blob([data], { type: xhr.getResponseHeader('Content-Type') });
                    var link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = 'model.zip';
                    link.click();
                }
            });
        } else alert('Выделите модель!')

    });
});



