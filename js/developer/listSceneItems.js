var itemsId = [];

document.addEventListener('mousemove', function () {
    for (let i = 0; i < scene.children.length; i++) {
        if (jQuery.inArray(scene.children[i].uuid, itemsId) == -1 && scene.children[i].name != '') {
            var uuid = scene.children[i].name + '!' + scene.children[i].uuid;
            var nameObj = scene.children[i].name;

            if (nameObj.indexOf('Box') > -1) {
                boxName = nameObj;
            } else boxName = ' ';

            if (nameObj.indexOf('Cone') > -1) {
                coneName = nameObj;
            } else coneName = ' ';

            if (nameObj.indexOf('Sphere') > -1) {
                sphereName = nameObj;
            } else sphereName = ' ';

            if (nameObj.indexOf('Cylinder') > -1) {
                cylinderName = nameObj;
            } else cylinderName = ' ';

            if (nameObj.indexOf('Model') > -1) {
                modelName = nameObj;
            } else modelName = ' ';

            if (scene.children[i].name.indexOf('Light') == -1 && scene.children[i].name != 'Plane' && scene.children[i].name != 'Grid' && scene.children[i].name != 'AxesHelper') {
                $('#listItems').append('<label for="' + uuid + 'name="' + uuid + '" class="pannel_label left-pannel__label">' + scene.children[i].name + '</label><input type="checkbox" id="' +
                    uuid + '" name="' + uuid + '" class="pannel__checkGrid"><br><br>');
                itemsId.push(scene.children[i].uuid);
            } else {
                $('#listItems').append('<label for="' + uuid + '" class="pannel_label left-pannel__label">' + scene.children[i].name + '</label><br><br>');
                itemsId.push(scene.children[i].uuid);
            }
        }
    }

    selectListItem();
});

var listItems = document.getElementById('listItems').children;

function selectListItem() {
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].type == 'checkbox') {

            listItems[i].addEventListener('change', function () {
                var nameObj = (listItems[i].name).split('!')[0];
                var obj = scene.getObjectByName(nameObj);

                if (obj.type != 'Group') {
                    if (nameObj.indexOf('Box') > -1) {
                        boxName = nameObj;
                    } else boxName = ' ';

                    if (nameObj.indexOf('Cone') > -1) {
                        coneName = nameObj;
                    } else coneName = ' ';

                    if (nameObj.indexOf('Sphere') > -1) {
                        sphereName = nameObj;
                    } else sphereName = ' ';

                    if (nameObj.indexOf('Cylinder') > -1) {
                        cylinderName = nameObj;
                    } else cylinderName = ' ';

                    if (nameObj.indexOf('Model') > -1) {
                        modelName = obj.name;
                    } else modelName = ' '

                    if (listItems[i].checked) {
                        for (let j = 0; j < listItems.length; j++) {
                            if (listItems[i].id != listItems[j].id && listItems[j].type == 'checkbox') {
                                listItems[j].checked = false;
                            }
                        }

                        if (scene.getObjectByName(nameObj)) {
                            if (obj.material) {
                                obj.material.transparent = true;
                                obj.material.opacity = 0.5;
                            }
                        }

                    } else if (listItems[i].checked == false) {
                        if (obj.material) {
                            obj.material.opacity = 1;
                        }
                    }
                } else if (obj.type == 'Group') {
                    if (nameObj.indexOf('Box') > -1) {
                        boxName = nameObj;
                    } else boxName = ' ';

                    if (nameObj.indexOf('Cone') > -1) {
                        coneName = nameObj;
                    } else coneName = ' ';

                    if (nameObj.indexOf('Sphere') > -1) {
                        sphereName = nameObj;
                    } else sphereName = ' ';

                    if (nameObj.indexOf('Cylinder') > -1) {
                        cylinderName = nameObj;
                    } else cylinderName = ' ';

                    if (nameObj.indexOf('Model') > -1) {
                        modelName = obj.name;
                    } else modelName = ' '


                    if (listItems[i].checked) {
                        for (let j = 0; j < listItems.length; j++) {
                            if (this.id != listItems[j].id && listItems[j].type == 'checkbox') {
                                listItems[j].checked = false;
                            }
                        }

                        for (let k = 0; k < obj.children.length; k++) {
                            if (obj.children[k].material) {
                                obj.children[k].material.transparent = true;
                                obj.children[k].material.opacity = 0.5;
                            }
                        }
                    } else if (listItems[i].checked == false) {
                        for (let k = 0; k < obj.children.length; k++) {
                            if (obj.children[k].material) {
                                obj.children[k].material.opacity = 1;
                            }
                        }
                    }
                } 
            });
        }
    }
}

