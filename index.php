<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>

    <script src="js/three.js"></script>
    <script src="js/fflate.min.js"></script>

    <script src="js/OBJLoader.js"></script>
    <script src="js/MTLLoader.js"></script>
    <script src="js/TextureLoader.js" type="module"></script>
    <script src="js/FBXLoader.js"></script>
    <script src="js/TGALoader.js"></script>
    <script src="js/OBJExporter.js"></script>
    <script src="js/STLLoader.js"></script>

    <script src="js/TransformControls.js"></script>
    <script src="js/DragControls.js"></script>
    <script src="js/OrbitControls.js"></script>

    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/GLTFLoader.js"></script>
    <script src="js/Stats.js"></script>
</head>

<body>
    <header class="header">
        <div class="wrapper">
            <h1 class="title">3D - Viewer </h1>
        </div>
    </header>
    <nav class="nav">
        <div class="wrapper">
            <ul class="nav__list">
                <li class="nav__list-item" id="addModel"> Импорт модели </li>
                <li class="nav__list-item" id="downloadModel"> Экспорт модели </li>
                <li class="nav__list-item" id="downloadJsonScene">
                    Экспорт сцены в формате json
                </li>
                <li class="nav__list-item" id="downloadObjScene">
                    Экспорт сцены в формате obj
                </li>
            </ul>
        </div>
    </nav>

    <main class="main">
        <div class="wrapper">
            <form id="form" method="post" action="./sendFiles.php" target="_blank" class="form"
                enctype="multipart/form-data">

                <span class="form__close"></span>
                <div class="form__inputs">
                    <span class="pannel_label" style="letter-spacing: 1px; font-family: Arial; line-height: 24px;">
                        Поддерживаемые
                        форматы:
                        .obj,
                        .fbx,
                        .stl,
                        .glb,
                        .gltf,
                        .mtl,
                        .tga,
                        .png,
                        .jpeg,
                        .jpg
                    </span>
                    <br><br><br>

                    <div class="form__input-load">
                        <div class="form__group">
                            <input id="inputFiles" name="inputFiles[]" type="file" class="form__file" multiple>
                            <label for="inputFiles" class="form__btn-load">
                                <i class="form__btn-icon fa fa-check"></i>
                                <span class="form__fileName">
                                    Загрузить файлы
                                </span>
                            </label>
                        </div>
                    </div>

                    <br>
                    <input id="buttonLoadFiles" name="buttonLoadFiles" type="submit" value="Добавить модель в сцену"
                        class="form__input-btn-load">
                </div>
            </form>

            <div class="viewer">
                <div class="viewer__pannel pannel">
                    <button id="button" class="button-del" onclick="removeModelFromScene(event)">
                        Очистить сцену
                    </button>

                    <label for="colorPicker" class="pannel_label">
                        Цвет фона:
                    </label>
                    <input type="color" value="#000000" name="colorPicker" id="colorPicker"
                        class="pannel__color-picker">

                    <label id="message" class="pannel_label">
                        Загрузка:
                    </label>
                </div>

                <div class="container">
                    <div class="left-pannel">
                        <div class="left-pannel__grid">
                            <h1 id="gridPannelTitle" class="left-pannel__grid-title">
                                <a href="#" id="gridPannelLink" class="left-pannel__grid-link">
                                    Сетка
                                </a>
                            </h1>
                            <div id="gridPannel" class="left-pannel__grid-container">
                                <label for="checkGrid" class="pannel_label left-pannel__label">
                                    Вкл / Выкл:
                                </label>
                                <input type="checkbox" name="checkGrid" id="checkGrid" class="pannel__checkGrid">
                                <br>

                                <br>
                                <label for="gridSize" class="pannel_label left-pannel__label">
                                    Размер:
                                </label>
                                <input type="text" name="gridSize" id="gridSize" class="pannel__inputGrid"
                                    placeholder="1000">
                                <br>

                                <br>
                                <label for="gridDivision" class="pannel_label left-pannel__label">
                                    Частота сетки:
                                </label>
                                <input type="text" name="gridDivision" id="gridDivision" class="pannel__inputDivision"
                                    placeholder="20">
                                <br>

                                <br>
                                <label for="colorPickerGrid" class="pannel_label left-pannel__label">
                                    Цвет:
                                </label>
                                <input type="color" value="#ffffff" name="colorPickerGrid" id="colorPickerGrid"
                                    class="left-pannel__color-picker">
                                <br>

                                <br>
                                <label class="pannel_label left-pannel__label">
                                    Положение
                                </label>
                                <br>

                                <br>
                                <label for="xGrid" class="pannel_label left-pannel__label">
                                    X:
                                </label>
                                <input type="text" name="xGrid" id="xGrid" class="left-pannel__inputCoordinate"
                                    placeholder="0">

                                <label for="yGrid" class="pannel_label left-pannel__label">
                                    Y:
                                </label>
                                <input type="text" name="yGrid" id="yGrid" class="left-pannel__inputCoordinate"
                                    placeholder="0">

                                <label for="zGrid" class="pannel_label left-pannel__label">
                                    Z:
                                </label>
                                <input type="text" name="zGrid" id="zGrid" class="left-pannel__inputCoordinate"
                                    placeholder="0">
                            </div>
                        </div>

                        <div class="left-pannel__XYZ">
                            <h1 id="xyzPannelTitle" class="left-pannel__grid-title">
                                <a href="#" id="xyzPannelLink" class="left-pannel__grid-link">
                                    Координатные оси
                                </a>
                            </h1>

                            <div id="xyzPannel" class="left-pannel__grid-container">
                                <label for="checkXYZ" class="pannel_label left-pannel__label">
                                    Вкл / Выкл:
                                </label>
                                <input type="checkbox" name="checkXYZ" id="checkXYZ" class="pannel__checkGrid">
                                <br>
                                <br>
                                <label for="xyzSize" class="pannel_label left-pannel__label">
                                    Размер:
                                </label>
                                <input type="text" name="xyzSize" id="xyzSize" class="pannel__inputGrid"
                                    placeholder="500">
                                <br>

                                <br>
                                <label class="pannel_label left-pannel__label">
                                    Положение
                                </label>
                                <br>

                                <br>
                                <label for="xXYZ" class="pannel_label left-pannel__label">
                                    X:
                                </label>
                                <input type="text" name="xXYZ" id="xXYZ" class="left-pannel__inputCoordinate"
                                    placeholder="0">

                                <label for="yXYZ" class="pannel_label left-pannel__label">
                                    Y:
                                </label>
                                <input type="text" name="yXYZ" id="yXYZ" class="left-pannel__inputCoordinate"
                                    placeholder="0">

                                <label for="zXYZ" class="pannel_label left-pannel__label">
                                    Z:
                                </label>
                                <input type="text" name="zXYZ" id="zXYZ" class="left-pannel__inputCoordinate"
                                    placeholder="0">
                            </div>
                        </div>

                        <div class="left-pannel__light">
                            <h1 id="lightPannelTitle" class="left-pannel__grid-title">
                                <a id="lightPannelLink" href="#" class="left-pannel__grid-link">
                                    Источники света
                                </a>
                            </h1>

                            <div id="lightPannel" class="left-pannel__light-container">
                                <div class="left-pannel__light-group">
                                    <label for="checkBaseLight" class="pannel_label left-pannel__label">
                                        Свет по умолчанию:
                                    </label>
                                    <input type="checkbox" name="checkBaseLight" id="checkBaseLight"
                                        class="pannel__checkGrid" checked>
                                    <br>
                                </div>

                                <div class="left-pannel__light-group">
                                    <br>
                                    <label for="checkPointLight" class="pannel_label left-pannel__label">
                                        Точечный свет:
                                    </label>
                                    <input type="checkbox" name="checkPointLight" id="checkPointLight"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="colorPointLight" class="pannel_label left-pannel__label">
                                        Цвет:
                                    </label>
                                    <input type="color" value="#ffffff" name="colorPointLight" id="colorPointLight"
                                        class="left-pannel__color-picker">
                                    <br>

                                    <br>
                                    <label for="intensivePointLight" class="pannel_label left-pannel__label">
                                        Интенсивность:
                                    </label>
                                    <input type="text" name="intensivePointLight" id="intensivePointLight"
                                        class="left-pannel__inputCoordinate" placeholder="5">
                                    <br>
                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Положение
                                    </label>
                                    <br>

                                    <br>
                                    <label for="xPointLight" class="pannel_label left-pannel__label">
                                        X:
                                    </label>
                                    <input type="text" name="xPointLight" id="xPointLight"
                                        class="left-pannel__inputCoordinate" placeholder="0">

                                    <label for="yPointLight" class="pannel_label left-pannel__label">
                                        Y:
                                    </label>
                                    <input type="text" name="yPointLight" id="yPointLight"
                                        class="left-pannel__inputCoordinate" placeholder="7">

                                    <label for="zPointLight" class="pannel_label left-pannel__label">
                                        Z:
                                    </label>
                                    <input type="text" name="zPointLight" id="zPointLight"
                                        class="left-pannel__inputCoordinate" placeholder="5">
                                    <br>

                                    <br>
                                    <label for="radiusPointSphere" class="pannel_label left-pannel__label">
                                        Радиус сферы:
                                    </label>
                                    <input type="text" name="radiusPointSphere" id="radiusPointSphere"
                                        class="left-pannel__inputCoordinate" placeholder="20">
                                </div>

                                <div class="left-pannel__light-group">
                                    <br>
                                    <label for="checkBigLight" class="pannel_label left-pannel__label">
                                        Окружающий свет:
                                    </label>
                                    <input type="checkbox" name="checkBigLight" id="checkBigLight"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="colorBigLight" class="pannel_label left-pannel__label">
                                        Цвет:
                                    </label>
                                    <input type="color" value="#ffffff" name="colorBigLight" id="colorBigLight"
                                        class="left-pannel__color-picker">
                                    <br>

                                    <br>
                                    <label for="intensiveBigLight" class="pannel_label left-pannel__label">
                                        Интенсивность:
                                    </label>
                                    <input type="text" name="intensiveBigLight" id="intensiveBigLight"
                                        class="left-pannel__inputCoordinate" placeholder="1">
                                    <br>
                                </div>

                                <div class="left-pannel__light-group">
                                    <br>
                                    <label for="checkProjectorLight" class="pannel_label left-pannel__label">
                                        Прожектор:
                                    </label>
                                    <input type="checkbox" name="checkProjectorLight" id="checkProjectorLight"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="colorProjectorLight" class="pannel_label left-pannel__label">
                                        Цвет:
                                    </label>
                                    <input type="color" value="#ffffff" name="colorProjectorLight"
                                        id="colorProjectorLight" class="left-pannel__color-picker">
                                    <br>

                                    <br>
                                    <label for="intensiveProjectorLight" class="pannel_label left-pannel__label">
                                        Интенсивность:
                                    </label>
                                    <input type="text" name="intensiveProjectorLight" id="intensiveProjectorLight"
                                        class="left-pannel__inputCoordinate" placeholder="5">
                                    <br>

                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Положение
                                    </label>
                                    <br>

                                    <br>
                                    <label for="xProjectorLight" class="pannel_label left-pannel__label">
                                        X:
                                    </label>
                                    <input type="text" name="xProjectorLight" id="xProjectorLight"
                                        class="left-pannel__inputCoordinate" placeholder="0">

                                    <label for="yProjectorLight" class="pannel_label left-pannel__label">
                                        Y:
                                    </label>
                                    <input type="text" name="yProjectorLight" id="yProjectorLight"
                                        class="left-pannel__inputCoordinate" placeholder="7">

                                    <label for="zProjectorLight" class="pannel_label left-pannel__label">
                                        Z:
                                    </label>
                                    <input type="text" name="zProjectorLight" id="zProjectorLight"
                                        class="left-pannel__inputCoordinate" placeholder="5">
                                    <br>

                                    <br>
                                    <label for="radiusProjectorSphere" class="pannel_label left-pannel__label">
                                        Радиус сферы:
                                    </label>
                                    <input type="text" name="radiusProjectorSphere" id="radiusProjectorSphere"
                                        class="left-pannel__inputCoordinate" placeholder="20">
                                </div>
                            </div>
                        </div>

                        <div class="left-pannel__base-objects">
                            <h1 id="baseObjPannelTitle" class="left-pannel__grid-title">
                                <a id="baseObjPannelLink" href="#" class="left-pannel__grid-link">
                                    Примитивы
                                </a>
                            </h1>

                            <div id="baseObjPannel" class="left-pannel__baseObj-container">
                                <h2 id="objPlaneTitle" class="left-pannel__grid-sub-title">
                                    <a id="objPlaneLink" href="#" class="left-pannel__grid-sub-link">
                                        Плоскость
                                    </a>
                                </h2>

                                <div id="objPlane" class="left-pannel__light-group">
                                    <label for="checkPlane" class="pannel_label left-pannel__label">
                                        Вкл / Выкл:
                                    </label>
                                    <input type="checkbox" name="checkPlane" id="checkPlane" class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="colorPlane" class="pannel_label left-pannel__label">
                                        Цвет:
                                    </label>
                                    <input type="color" value="#ffffff" name="colorPlane" id="colorPlane"
                                        class="left-pannel__color-picker">
                                    <br>

                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Размер
                                    </label>
                                    <br>

                                    <br>
                                    <label for="lengthPlane" class="pannel_label left-pannel__label">
                                        Длина:
                                    </label>
                                    <input type="text" name="lengthPlane" id="lengthPlane" class="pannel__inputGrid"
                                        placeholder="1000">
                                    <br>

                                    <br>
                                    <label for="widthPlane" class="pannel_label left-pannel__label">
                                        Ширина:
                                    </label>
                                    <input type="text" name="widthPlane" id="widthPlane" class="pannel__inputGrid"
                                        placeholder="1000">
                                    <br>

                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Положение
                                    </label>
                                    <br>

                                    <br>
                                    <label for="xPlane" class="pannel_label left-pannel__label">
                                        X:
                                    </label>
                                    <input type="text" name="xPlane" id="xPlane" class="left-pannel__inputCoordinate"
                                        placeholder="0">

                                    <label for="yPlane" class="pannel_label left-pannel__label">
                                        Y:
                                    </label>
                                    <input type="text" name="yPlane" id="yPlane" class="left-pannel__inputCoordinate"
                                        placeholder="0">

                                    <label for="zPlane" class="pannel_label left-pannel__label">
                                        Z:
                                    </label>
                                    <input type="text" name="zPlane" id="zPlane" class="left-pannel__inputCoordinate"
                                        placeholder="0">

                                    <br>
                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Угол наклона
                                    </label>
                                    <br>

                                    <br>
                                    <label for="xPlaneAngel" class="pannel_label left-pannel__label">
                                        X:
                                    </label>
                                    <input type="text" name="xPlaneAngel" id="xPlaneAngel"
                                        class="left-pannel__inputCoordinate" placeholder="-90">

                                    <label for="yPlaneAngel" class="pannel_label left-pannel__label">
                                        Y:
                                    </label>
                                    <input type="text" name="yPlaneAngel" id="yPlaneAngel"
                                        class="left-pannel__inputCoordinate" placeholder="0">

                                    <label for="zPlaneAngel" class="pannel_label left-pannel__label">
                                        Z:
                                    </label>
                                    <input type="text" name="zPlaneAngel" id="zPlaneAngel"
                                        class="left-pannel__inputCoordinate" placeholder="0">
                                    <br>
                                </div>

                                <h2 id="objBaseBoxTitle" class="left-pannel__grid-sub-title">
                                    <a id="objBaseBoxLink" href="#" class="left-pannel__grid-sub-link">
                                        Параллелепипед
                                    </a>
                                </h2>

                                <div id="objBaseBox" class="left-pannel__light-group">
                                    <a href="#" id="createBox" class="create__link">
                                        Создать +
                                    </a>
                                    <br>
                                    <a href="#" id="deleteBox" class="create__link">
                                        Удалить -
                                    </a>
                                    <br>

                                    <br>
                                    <label for="colorBaseBox" class="pannel_label left-pannel__label">
                                        Цвет:
                                    </label>
                                    <input type="color" value="#ffffff" name="colorBaseBox" id="colorBaseBox"
                                        class="left-pannel__color-picker">
                                    <br>

                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Размер
                                    </label>
                                    <br>

                                    <br>
                                    <label for="depthBaseBox" class="pannel_label left-pannel__label">
                                        Глубина:
                                    </label>
                                    <input type="text" name="depthBaseBox" id="depthBaseBox" class="pannel__inputGrid"
                                        placeholder="300">
                                    <br>

                                    <br>
                                    <label for="widthBaseBox" class="pannel_label left-pannel__label">
                                        Ширина:
                                    </label>
                                    <input type="text" name="widthBaseBox" id="widthBaseBox" class="pannel__inputGrid"
                                        placeholder="300">
                                    <br>

                                    <br>
                                    <label for="heightBaseBox" class="pannel_label left-pannel__label">
                                        Высота:
                                    </label>
                                    <input type="text" name="heightBaseBox" id="heightBaseBox" class="pannel__inputGrid"
                                        placeholder="300">
                                    <br>

                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Положение
                                    </label>
                                    <br>

                                    <br>
                                    <label for="xBaseBox" class="pannel_label left-pannel__label">
                                        X:
                                    </label>
                                    <input type="text" name="xBaseBox" id="xBaseBox"
                                        class="left-pannel__inputCoordinate" placeholder="0">

                                    <label for="yBaseBox" class="pannel_label left-pannel__label">
                                        Y:
                                    </label>
                                    <input type="text" name="yBaseBox" id="yBaseBox"
                                        class="left-pannel__inputCoordinate" placeholder="0">

                                    <label for="zBaseBox" class="pannel_label left-pannel__label">
                                        Z:
                                    </label>
                                    <input type="text" name="zBaseBox" id="zBaseBox"
                                        class="left-pannel__inputCoordinate" placeholder="0">

                                    <br>
                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Угол наклона
                                    </label>
                                    <br>

                                    <br>
                                    <label for="xBaseBoxAngel" class="pannel_label left-pannel__label">
                                        X:
                                    </label>
                                    <input type="text" name="xBaseBoxAngel" id="xBaseBoxAngel"
                                        class="left-pannel__inputCoordinate" placeholder="0">

                                    <label for="yBaseBoxAngel" class="pannel_label left-pannel__label">
                                        Y:
                                    </label>
                                    <input type="text" name="yBaseBoxAngel" id="yBaseBoxAngel"
                                        class="left-pannel__inputCoordinate" placeholder="0">

                                    <label for="zBaseBoxAngel" class="pannel_label left-pannel__label">
                                        Z:
                                    </label>
                                    <input type="text" name="zBaseBoxAngel" id="zBaseBoxAngel"
                                        class="left-pannel__inputCoordinate" placeholder="0">
                                    <br>

                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Масштабирование
                                    </label>
                                    <br>

                                    <br>
                                    <label for="xBaseBoxScale" class="pannel_label left-pannel__label">
                                        X:
                                    </label>
                                    <input type="text" name="xBaseBoxScale" id="xBaseBoxScale"
                                        class="left-pannel__inputCoordinate" placeholder="1">

                                    <label for="yBaseBoxScale" class="pannel_label left-pannel__label">
                                        Y:
                                    </label>
                                    <input type="text" name="yBaseBoxScale" id="yBaseBoxScale"
                                        class="left-pannel__inputCoordinate" placeholder="1">

                                    <label for="zBaseBoxScale" class="pannel_label left-pannel__label">
                                        Z:
                                    </label>
                                    <input type="text" name="zBaseBoxScale" id="zBaseBoxScale"
                                        class="left-pannel__inputCoordinate" placeholder="1">
                                    <br>

                                    <br>
                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Разбиение на сегменты
                                    </label>
                                    <br>
                                    <br>
                                    <label for="depthBoxWireFrame" class="pannel_label left-pannel__label">
                                        Глубина:
                                    </label>
                                    <input type="text" name="depthBoxWireFrame" id="depthBoxWireFrame"
                                        class="pannel__inputGrid" placeholder="10">
                                    <br>

                                    <br>
                                    <label for="widthBoxWireFrame" class="pannel_label left-pannel__label">
                                        Ширина:
                                    </label>
                                    <input type="text" name="widthBoxWireFrame" id="widthBoxWireFrame"
                                        class="pannel__inputGrid" placeholder="10">
                                    <br>

                                    <br>
                                    <label for="heightBoxWireFrame" class="pannel_label left-pannel__label">
                                        Высота:
                                    </label>
                                    <input type="text" name="heightBoxWireFrame" id="heightBoxWireFrame"
                                        class="pannel__inputGrid" placeholder="10">
                                    <br>

                                    <br>
                                    <br>
                                    <label for="checkBoxWireFrame" class="pannel_label left-pannel__label">
                                        Каркас:
                                    </label>
                                    <input type="checkbox" name="checkBoxWireFrame" id="checkBoxWireFrame"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Анимация
                                    </label>
                                    <br>

                                    <br>
                                    <label for="baseBoxAnimCheckX" class="pannel_label left-pannel__label">
                                        Bращение по Х:
                                    </label>
                                    <input type="checkbox" name="baseBoxAnimCheckX" id="baseBoxAnimCheckX"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="baseBoxAnimSpeedX" class="pannel_label left-pannel__label">
                                        Скорость:
                                    </label>
                                    <input type="text" name="baseBoxAnimSpeedX" id="baseBoxAnimSpeedX"
                                        class="pannel__inputGrid" placeholder="0.0001">
                                    <br>

                                    <br>
                                    <br>
                                    <label for="baseBoxAnimCheckY" class="pannel_label left-pannel__label">
                                        Вращение по Y:
                                    </label>
                                    <input type="checkbox" name="baseBoxAnimCheckY" id="baseBoxAnimCheckY"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="baseBoxAnimSpeedY" class="pannel_label left-pannel__label">
                                        Скорость:
                                    </label>
                                    <input type="text" name="baseBoxAnimSpeedY" id="baseBoxAnimSpeedY"
                                        class="pannel__inputGrid" placeholder="0.0001">
                                    <br>

                                    <br>
                                    <br>
                                    <label for="baseBoxAnimCheckZ" class="pannel_label left-pannel__label">
                                        Вращение по Z:
                                    </label>
                                    <input type="checkbox" name="baseBoxAnimCheckZ" id="baseBoxAnimCheckZ"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="baseBoxAnimSpeedZ" class="pannel_label left-pannel__label">
                                        Скорость:
                                    </label>
                                    <input type="text" name="baseBoxAnimSpeedZ" id="baseBoxAnimSpeedZ"
                                        class="pannel__inputGrid" placeholder="0.0001">
                                    <br>
                                </div>

                                <h2 id="objConeTitle" class="left-pannel__grid-sub-title">
                                    <a id="objConeLink" href="#" class="left-pannel__grid-sub-link">
                                        Конус
                                    </a>
                                </h2>

                                <div id="objCone" class="left-pannel__light-group">
                                    <a href="#" id="createCone" class="create__link">
                                        Создать +
                                    </a>
                                    <br>
                                    <a href="#" id="deleteCone" class="create__link">
                                        Удалить -
                                    </a>
                                    <br>

                                    <br>
                                    <label for="colorCone" class="pannel_label left-pannel__label">
                                        Цвет:
                                    </label>
                                    <input type="color" value="#ffffff" name="colorCone" id="colorCone"
                                        class="left-pannel__color-picker">
                                    <br>

                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Размер
                                    </label>
                                    <br>

                                    <br>
                                    <label for="radiusCone" class="pannel_label left-pannel__label">
                                        Радиус:
                                    </label>
                                    <input type="text" name="radiusCone" id="radiusCone" class="pannel__inputGrid"
                                        placeholder="150">
                                    <br>

                                    <br>
                                    <label for="heightCone" class="pannel_label left-pannel__label">
                                        Высота:
                                    </label>
                                    <input type="text" name="heightCone" id="heightCone" class="pannel__inputGrid"
                                        placeholder="300">
                                    <br>

                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Положение
                                    </label>
                                    <br>

                                    <br>
                                    <label for="xCone" class="pannel_label left-pannel__label">
                                        X:
                                    </label>
                                    <input type="text" name="xCone" id="xCone" class="left-pannel__inputCoordinate"
                                        placeholder="0">

                                    <label for="yCone" class="pannel_label left-pannel__label">
                                        Y:
                                    </label>
                                    <input type="text" name="yCone" id="yCone" class="left-pannel__inputCoordinate"
                                        placeholder="0">

                                    <label for="zCone" class="pannel_label left-pannel__label">
                                        Z:
                                    </label>
                                    <input type="text" name="zCone" id="zCone" class="left-pannel__inputCoordinate"
                                        placeholder="0">

                                    <br>
                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Угол наклона
                                    </label>
                                    <br>

                                    <br>
                                    <label for="xConeAngel" class="pannel_label left-pannel__label">
                                        X:
                                    </label>
                                    <input type="text" name="xConeAngel" id="xConeAngel"
                                        class="left-pannel__inputCoordinate" placeholder="0">

                                    <label for="yConeAngel" class="pannel_label left-pannel__label">
                                        Y:
                                    </label>
                                    <input type="text" name="yConeAngel" id="yConeAngel"
                                        class="left-pannel__inputCoordinate" placeholder="0">

                                    <label for="zConeAngel" class="pannel_label left-pannel__label">
                                        Z:
                                    </label>
                                    <input type="text" name="zConeAngel" id="zConeAngel"
                                        class="left-pannel__inputCoordinate" placeholder="0">
                                    <br>

                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Масштабирование
                                    </label>
                                    <br>

                                    <br>
                                    <label for="xConeScale" class="pannel_label left-pannel__label">
                                        X:
                                    </label>
                                    <input type="text" name="xConeScale" id="xConeScale"
                                        class="left-pannel__inputCoordinate" placeholder="1">

                                    <label for="yConeScale" class="pannel_label left-pannel__label">
                                        Y:
                                    </label>
                                    <input type="text" name="yConeScale" id="yConeScale"
                                        class="left-pannel__inputCoordinate" placeholder="1">

                                    <label for="zConeScale" class="pannel_label left-pannel__label">
                                        Z:
                                    </label>
                                    <input type="text" name="zConeScale" id="zConeScale"
                                        class="left-pannel__inputCoordinate" placeholder="1">
                                    <br>

                                    <br>
                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Разбиение на сегменты
                                    </label>
                                    <br>
                                    <br>
                                    <label for="kolvoConeWireFrame" class="pannel_label left-pannel__label">
                                        Количество:
                                    </label>
                                    <input type="text" name="kolvoConeWireFrame" id="kolvoConeWireFrame"
                                        class="pannel__inputGrid" placeholder="10">
                                    <br>

                                    <br>
                                    <br>
                                    <label for="checkConeWireFrame" class="pannel_label left-pannel__label">
                                        Каркас:
                                    </label>
                                    <input type="checkbox" name="checkConeWireFrame" id="checkConeWireFrame"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Анимация
                                    </label>
                                    <br>

                                    <br>
                                    <label for="baseConeAnimCheckX" class="pannel_label left-pannel__label">
                                        Bращение по X:
                                    </label>
                                    <input type="checkbox" name="baseConeAnimCheckX" id="baseConeAnimCheckX"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="baseConeAnimSpeedX" class="pannel_label left-pannel__label">
                                        Скорость:
                                    </label>
                                    <input type="text" name="baseConeAnimSpeedX" id="baseConeAnimSpeedX"
                                        class="pannel__inputGrid" placeholder="0.0001">
                                    <br>

                                    <br>
                                    <br>
                                    <label for="baseConeAnimCheckY" class="pannel_label left-pannel__label">
                                        Вращение по Y:
                                    </label>
                                    <input type="checkbox" name="baseConeAnimCheckY" id="baseConeAnimCheckY"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="baseConeAnimSpeedY" class="pannel_label left-pannel__label">
                                        Скорость:
                                    </label>
                                    <input type="text" name="baseConeAnimSpeedY" id="baseConeAnimSpeedY"
                                        class="pannel__inputGrid" placeholder="0.0001">
                                    <br>

                                    <br>
                                    <br>
                                    <label for="baseConeAnimCheckZ" class="pannel_label left-pannel__label">
                                        Вращение по Z:
                                    </label>
                                    <input type="checkbox" name="baseConeAnimCheckZ" id="baseConeAnimCheckZ"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="baseConeAnimSpeedZ" class="pannel_label left-pannel__label">
                                        Скорость:
                                    </label>
                                    <input type="text" name="baseConeAnimSpeedZ" id="baseConeAnimSpeedZ"
                                        class="pannel__inputGrid" placeholder="0.0001">
                                    <br>
                                </div>

                                <h2 id="objSphereTitle" class="left-pannel__grid-sub-title">
                                    <a id="objSphereLink" href="#" class="left-pannel__grid-sub-link">
                                        Сфера
                                    </a>
                                </h2>

                                <div id="objSphere" class="left-pannel__light-group">
                                    <a href="#" id="createSphere" class="create__link">
                                        Создать +
                                    </a>
                                    <br>
                                    <a href="#" id="deleteSphere" class="create__link">
                                        Удалить -
                                    </a>
                                    <br>

                                    <br>
                                    <label for="colorSphere" class="pannel_label left-pannel__label">
                                        Цвет:
                                    </label>
                                    <input type="color" value="#ffffff" name="colorSphere" id="colorSphere"
                                        class="left-pannel__color-picker">
                                    <br>

                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Размер
                                    </label>
                                    <br>

                                    <br>
                                    <label for="radiusSphere" class="pannel_label left-pannel__label">
                                        Радиус:
                                    </label>
                                    <input type="text" name="radiusSphere" id="radiusSphere" class="pannel__inputGrid"
                                        placeholder="150">
                                    <br>

                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Положение
                                    </label>
                                    <br>

                                    <br>
                                    <label for="xSphere" class="pannel_label left-pannel__label">
                                        X:
                                    </label>
                                    <input type="text" name="xSphere" id="xSphere" class="left-pannel__inputCoordinate"
                                        placeholder="0">

                                    <label for="ySphere" class="pannel_label left-pannel__label">
                                        Y:
                                    </label>
                                    <input type="text" name="ySphere" id="ySphere" class="left-pannel__inputCoordinate"
                                        placeholder="0">

                                    <label for="zSphere" class="pannel_label left-pannel__label">
                                        Z:
                                    </label>
                                    <input type="text" name="zSphere" id="zSphere" class="left-pannel__inputCoordinate"
                                        placeholder="0">

                                    <br>
                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Угол наклона
                                    </label>
                                    <br>

                                    <br>
                                    <label for="xSphereAngel" class="pannel_label left-pannel__label">
                                        X:
                                    </label>
                                    <input type="text" name="xSphereAngel" id="xSphereAngel"
                                        class="left-pannel__inputCoordinate" placeholder="0">

                                    <label for="ySphereAngel" class="pannel_label left-pannel__label">
                                        Y:
                                    </label>
                                    <input type="text" name="ySphereAngel" id="ySphereAngel"
                                        class="left-pannel__inputCoordinate" placeholder="0">

                                    <label for="zSphereAngel" class="pannel_label left-pannel__label">
                                        Z:
                                    </label>
                                    <input type="text" name="zSphereAngel" id="zSphereAngel"
                                        class="left-pannel__inputCoordinate" placeholder="0">
                                    <br>

                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Масштабирование
                                    </label>
                                    <br>

                                    <br>
                                    <label for="xSphereScale" class="pannel_label left-pannel__label">
                                        X:
                                    </label>
                                    <input type="text" name="xSphereScale" id="xSphereScale"
                                        class="left-pannel__inputCoordinate" placeholder="1">

                                    <label for="ySphereScale" class="pannel_label left-pannel__label">
                                        Y:
                                    </label>
                                    <input type="text" name="ySphereScale" id="ySphereScale"
                                        class="left-pannel__inputCoordinate" placeholder="1">

                                    <label for="zSphereScale" class="pannel_label left-pannel__label">
                                        Z:
                                    </label>
                                    <input type="text" name="zSphereScale" id="zSphereScale"
                                        class="left-pannel__inputCoordinate" placeholder="1">
                                    <br>

                                    <br>
                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Разбиение на сегменты
                                    </label>
                                    <br>
                                    <br>
                                    <label for="kolvoSphereWireFrameX" class="pannel_label left-pannel__label">
                                        Количество по X:
                                    </label>
                                    <input type="text" name="kolvoSphereWireFrameX" id="kolvoSphereWireFrameX"
                                        class="pannel__inputGrid pannel__inputSphere" placeholder="10">
                                    <br>

                                    <br>
                                    <label for=" kolvoSphereWireFrameY" class="pannel_label left-pannel__label">
                                        Количество по Y:
                                    </label>
                                    <input type="text" name="kolvoSphereWireFrameY" id="kolvoSphereWireFrameY"
                                        class="pannel__inputGrid pannel__inputSphere" placeholder="10">
                                    <br>
                                    <br>
                                    <br>
                                    <label for="checkSphereWireFrame" class="pannel_label left-pannel__label">
                                        Каркас:
                                    </label>
                                    <input type="checkbox" name="checkSphereWireFrame" id="checkSphereWireFrame"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Анимация
                                    </label>
                                    <br>

                                    <br>
                                    <label for="baseSphereAnimCheckX" class="pannel_label left-pannel__label">
                                        Bращение по X:
                                    </label>
                                    <input type="checkbox" name="baseSphereAnimCheckX" id="baseSphereAnimCheckX"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="baseSphereAnimSpeedX" class="pannel_label left-pannel__label">
                                        Скорость:
                                    </label>
                                    <input type="text" name="baseSphereAnimSpeedX" id="baseSphereAnimSpeedX"
                                        class="pannel__inputGrid" placeholder="0.0001">
                                    <br>

                                    <br>
                                    <br>
                                    <label for="baseSphereAnimCheckY" class="pannel_label left-pannel__label">
                                        Вращение по Y:
                                    </label>
                                    <input type="checkbox" name="baseSphereAnimCheckY" id="baseSphereAnimCheckY"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="baseSphereAnimSpeedY" class="pannel_label left-pannel__label">
                                        Скорость:
                                    </label>
                                    <input type="text" name="baseSphereAnimSpeedY" id="baseSphereAnimSpeedY"
                                        class="pannel__inputGrid" placeholder="0.0001">
                                    <br>


                                    <br>
                                    <br>
                                    <label for="baseSphereAnimCheckZ" class="pannel_label left-pannel__label">
                                        Вращение по Z:
                                    </label>
                                    <input type="checkbox" name="baseSphereAnimCheckZ" id="baseSphereAnimCheckZ"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="baseSphereAnimSpeedZ" class="pannel_label left-pannel__label">
                                        Скорость:
                                    </label>
                                    <input type="text" name="baseSphereAnimSpeedZ" id="baseSphereAnimSpeedZ"
                                        class="pannel__inputGrid" placeholder="0.0001">
                                    <br>
                                </div>

                                <h2 id="objCylinderTitle" class="left-pannel__grid-sub-title">
                                    <a id="objCylinderLink" href="#" class="left-pannel__grid-sub-link">
                                        Цилиндр
                                    </a>
                                </h2>

                                <div id="objCylinder" class="left-pannel__light-group">
                                    <a href="#" id="createCylinder" class="create__link">
                                        Создать +
                                    </a>
                                    <br>
                                    <a href="#" id="deleteCylinder" class="create__link">
                                        Удалить -
                                    </a>
                                    <br>

                                    <br>
                                    <label for="colorCylinder" class="pannel_label left-pannel__label">
                                        Цвет:
                                    </label>
                                    <input type="color" value="#ffffff" name="colorCylinder" id="colorCylinder"
                                        class="left-pannel__color-picker">
                                    <br>

                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Размер
                                    </label>
                                    <br>

                                    <br>
                                    <label for="radiusCylinderTop" class="pannel_label left-pannel__label">
                                        Радиус(верх):
                                    </label>
                                    <input type="text" name="radiusCylinderTop" id="radiusCylinderTop"
                                        class="pannel__inputGrid" placeholder="150">
                                    <br>

                                    <br>
                                    <label for="radiusCylinderBottom" class="pannel_label left-pannel__label">
                                        Радиус(низ):
                                    </label>
                                    <input type="text" name="radiusCylinderBottom" id="radiusCylinderBottom"
                                        class="pannel__inputGrid" placeholder="150">
                                    <br>

                                    <br>
                                    <label for="heightCylinder" class="pannel_label left-pannel__label">
                                        Высота:
                                    </label>
                                    <input type="text" name="heightCylinder" id="heightCylinder"
                                        class="pannel__inputGrid" placeholder="300">
                                    <br>

                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Положение
                                    </label>
                                    <br>

                                    <br>
                                    <label for="xCylinder" class="pannel_label left-pannel__label">
                                        X:
                                    </label>
                                    <input type="text" name="xCylinder" id="xCylinder"
                                        class="left-pannel__inputCoordinate" placeholder="0">

                                    <label for="yCylinder" class="pannel_label left-pannel__label">
                                        Y:
                                    </label>
                                    <input type="text" name="yCylinder" id="yCylinder"
                                        class="left-pannel__inputCoordinate" placeholder="0">

                                    <label for="zCylinder" class="pannel_label left-pannel__label">
                                        Z:
                                    </label>
                                    <input type="text" name="zCylinder" id="zCylinder"
                                        class="left-pannel__inputCoordinate" placeholder="0">

                                    <br>
                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Угол наклона
                                    </label>
                                    <br>

                                    <br>
                                    <label for="xCylinderAngel" class="pannel_label left-pannel__label">
                                        X:
                                    </label>
                                    <input type="text" name="xCylinderAngel" id="xCylinderAngel"
                                        class="left-pannel__inputCoordinate" placeholder="0">

                                    <label for="yCylinderAngel" class="pannel_label left-pannel__label">
                                        Y:
                                    </label>
                                    <input type="text" name="yCylinderAngel" id="yCylinderAngel"
                                        class="left-pannel__inputCoordinate" placeholder="0">

                                    <label for="zCylinderAngel" class="pannel_label left-pannel__label">
                                        Z:
                                    </label>
                                    <input type="text" name="zCylinderAngel" id="zCylinderAngel"
                                        class="left-pannel__inputCoordinate" placeholder="0">
                                    <br>

                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Масштабирование
                                    </label>
                                    <br>

                                    <br>
                                    <label for="xCylinderScale" class="pannel_label left-pannel__label">
                                        X:
                                    </label>
                                    <input type="text" name="xCylinderScale" id="xCylinderScale"
                                        class="left-pannel__inputCoordinate" placeholder="1">

                                    <label for="yCylinderScale" class="pannel_label left-pannel__label">
                                        Y:
                                    </label>
                                    <input type="text" name="yCylinderScale" id="yCylinderScale"
                                        class="left-pannel__inputCoordinate" placeholder="1">

                                    <label for="zCylinderScale" class="pannel_label left-pannel__label">
                                        Z:
                                    </label>
                                    <input type="text" name="zCylinderScale" id="zCylinderScale"
                                        class="left-pannel__inputCoordinate" placeholder="1">
                                    <br>

                                    <br>
                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Разбиение на сегменты
                                    </label>
                                    <br>
                                    <br>
                                    <label for="kolvoCylinderWireFrame" class="pannel_label left-pannel__label">
                                        Количество:
                                    </label>
                                    <input type="text" name="kolvoCylinderWireFrame" id="kolvoCylinderWireFrame"
                                        class="pannel__inputGrid pannel__inputCylinder" placeholder="10">
                                    <br>

                                    <br>
                                    <br>
                                    <label for="checkCylinderWireFrame" class="pannel_label left-pannel__label">
                                        Каркас:
                                    </label>
                                    <input type="checkbox" name="checkCylinderWireFrame" id="checkCylinderWireFrame"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <br>
                                    <label class="pannel_label left-pannel__label">
                                        Анимация
                                    </label>
                                    <br>

                                    <br>
                                    <label for="baseCylinderAnimCheckX" class="pannel_label left-pannel__label">
                                        Bращение по X:
                                    </label>
                                    <input type="checkbox" name="baseCylinderAnimCheckX" id="baseCylinderAnimCheckX"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="baseCylinderAnimSpeedX" class="pannel_label left-pannel__label">
                                        Скорость:
                                    </label>
                                    <input type="text" name="baseCylinderAnimSpeedX" id="baseCylinderAnimSpeedX"
                                        class="pannel__inputGrid" placeholder="0.0001">
                                    <br>

                                    <br>
                                    <br>
                                    <label for="baseCylinderAnimCheckY" class="pannel_label left-pannel__label">
                                        Вращение по Y:
                                    </label>
                                    <input type="checkbox" name="baseCylinderAnimCheckY" id="baseCylinderAnimCheckY"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="baseCylinderAnimSpeedY" class="pannel_label left-pannel__label">
                                        Скорость:
                                    </label>
                                    <input type="text" name="baseCylinderAnimSpeedY" id="baseCylinderAnimSpeedY"
                                        class="pannel__inputGrid" placeholder="0.0001">
                                    <br>

                                    <br>
                                    <br>
                                    <label for="baseCylinderAnimCheckZ" class="pannel_label left-pannel__label">
                                        Вращение по Z:
                                    </label>
                                    <input type="checkbox" name="baseCylinderAnimCheckZ" id="baseCylinderAnimCheckZ"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="baseCylinderAnimSpeedZ" class="pannel_label left-pannel__label">
                                        Скорость:
                                    </label>
                                    <input type="text" name="baseCylinderAnimSpeedZ" id="baseCylinderAnimSpeedZ"
                                        class="pannel__inputGrid" placeholder="0.0001">
                                    <br>
                                </div>
                            </div>
                        </div>

                        <h1 id="modelPannelTitle" class="left-pannel__grid-title">
                            <a href="#" id="modelPannelLink" class="left-pannel__grid-link">
                                Параметры модели
                            </a>
                        </h1>

                        <div id="model" class="right-pannel__model-container">
                            <a href="#" id="deleteModel" class="create__link">
                                Удалить -
                            </a>
                            <br>

                            <br>
                            <label for="colorModel" class="pannel_label left-pannel__label">
                                Цвет:
                            </label>
                            <input type="color" value="#ffffff" name="colorModel" id="colorModel"
                                class="left-pannel__color-picker">
                            <br>

                            <br>
                            <label class="pannel_label left-pannel__label">
                                Положение
                            </label>
                            <br>

                            <br>
                            <label for="xModel" class="pannel_label left-pannel__label">
                                X:
                            </label>
                            <input type="text" name="xModel" id="xModel" class="left-pannel__inputCoordinate"
                                placeholder="0">

                            <label for="yModel" class="pannel_label left-pannel__label">
                                Y:
                            </label>
                            <input type="text" name="yModel" id="yModel" class="left-pannel__inputCoordinate"
                                placeholder="0">

                            <label for="zModel" class="pannel_label left-pannel__label">
                                Z:
                            </label>
                            <input type="text" name="zModel" id="zModel" class="left-pannel__inputCoordinate"
                                placeholder="0">

                            <br>
                            <br>
                            <label class="pannel_label left-pannel__label">
                                Угол наклона
                            </label>
                            <br>

                            <br>
                            <label for="xModelAngel" class="pannel_label left-pannel__label">
                                X:
                            </label>
                            <input type="text" name="xModelAngel" id="xModelAngel" class="left-pannel__inputCoordinate"
                                placeholder="0">

                            <label for="yModelAngel" class="pannel_label left-pannel__label">
                                Y:
                            </label>
                            <input type="text" name="yModelAngel" id="yModelAngel" class="left-pannel__inputCoordinate"
                                placeholder="0">

                            <label for="zModelAngel" class="pannel_label left-pannel__label">
                                Z:
                            </label>
                            <input type="text" name="zModelAngel" id="zModelAngel" class="left-pannel__inputCoordinate"
                                placeholder="0">
                            <br>

                            <br>
                            <label class="pannel_label left-pannel__label">
                                Масштабирование
                            </label>
                            <br>

                            <br>
                            <label for="xModelScale" class="pannel_label left-pannel__label">
                                X:
                            </label>
                            <input type="text" name="xModelScale" id="xModelScale" class="left-pannel__inputCoordinate"
                                placeholder="1">

                            <label for="yModelScale" class="pannel_label left-pannel__label">
                                Y:
                            </label>
                            <input type="text" name="yModelScale" id="yModelScale" class="left-pannel__inputCoordinate"
                                placeholder="1">

                            <label for="zModelScale" class="pannel_label left-pannel__label">
                                Z:
                            </label>
                            <input type="text" name="zModelScale" id="zModelScale" class="left-pannel__inputCoordinate"
                                placeholder="1">
                            <br>

                            <br>
                            <br>
                            <label for="checkModelWireFrame" class="pannel_label left-pannel__label">
                                Каркас:
                            </label>
                            <input type="checkbox" name="checkModelWireFrame" id="checkModelWireFrame"
                                class="pannel__checkGrid">
                            <br>

                            <br>
                            <label class="pannel_label left-pannel__label">
                                Анимация
                            </label>
                            <br>

                            <br>
                            <label for="ModelAnimCheckX" class="pannel_label left-pannel__label">
                                Bращение по X:
                            </label>
                            <input type="checkbox" name="ModelAnimCheckX" id="ModelAnimCheckX"
                                class="pannel__checkGrid">
                            <br>

                            <br>
                            <label for="ModelAnimSpeedX" class="pannel_label left-pannel__label">
                                Скорость:
                            </label>
                            <input type="text" name="ModelAnimSpeedX" id="ModelAnimSpeedX" class="pannel__inputGrid"
                                placeholder="0.0001">
                            <br>

                            <br>
                            <br>
                            <label for="ModelAnimCheckY" class="pannel_label left-pannel__label">
                                Вращение по Y:
                            </label>
                            <input type="checkbox" name="ModelAnimCheckY" id="ModelAnimCheckY"
                                class="pannel__checkGrid">
                            <br>

                            <br>
                            <label for="ModelAnimSpeedY" class="pannel_label left-pannel__label">
                                Скорость:
                            </label>
                            <input type="text" name="ModelAnimSpeedY" id="ModelAnimSpeedY" class="pannel__inputGrid"
                                placeholder="0.0001">
                            <br>

                            <br>
                            <br>
                            <label for="ModelAnimCheckZ" class="pannel_label left-pannel__label">
                                Вращение по Z:
                            </label>
                            <input type="checkbox" name="ModelAnimCheckZ" id="ModelAnimCheckZ"
                                class="pannel__checkGrid">
                            <br>

                            <br>
                            <label for="ModelAnimSpeedZ" class="pannel_label left-pannel__label">
                                Скорость:
                            </label>
                            <input type="text" name="ModelAnimSpeedZ" id="ModelAnimSpeedZ" class="pannel__inputGrid"
                                placeholder="0.0001">
                            <br>
                            <br>
                            <br>
                        </div>

                        <div class="left-pannel__animation">
                            <h1 id="animationPannelTitle" class="left-pannel__grid-title">
                                <a id="animationPannelLink" href="#" class="left-pannel__grid-link">
                                    Анимация
                                </a>
                            </h1>

                            <div id="animationPannel" class="left-pannel__animation-container">
                                <div class="left-pannel__light-group">
                                    <label for="animationCheckX" class="pannel_label left-pannel__label">
                                        Bращение по X:
                                    </label>
                                    <input type="checkbox" name="animationCheckX" id="animationCheckX"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="animationSpeedX" class="pannel_label left-pannel__label">
                                        Скорость:
                                    </label>
                                    <input type="text" name="animationSpeedX" id="animationSpeedX"
                                        class="pannel__inputGrid" placeholder="0.0001">
                                    <br>
                                </div>

                                <div class="left-pannel__light-group">
                                    <br>
                                    <label for="animationCheckY" class="pannel_label left-pannel__label">
                                        Вращение по Y:
                                    </label>
                                    <input type="checkbox" name="animationCheckY" id="animationCheckY"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="animationSpeedY" class="pannel_label left-pannel__label">
                                        Скорость:
                                    </label>
                                    <input type="text" name="animationSpeedY" id="animationSpeedY"
                                        class="pannel__inputGrid" placeholder="0.0001">
                                    <br>
                                </div>

                                <div class="left-pannel__light-group">
                                    <br>
                                    <label for="animationCheckZ" class="pannel_label left-pannel__label">
                                        Вращение по Z:
                                    </label>
                                    <input type="checkbox" name="animationCheckZ" id="animationCheckZ"
                                        class="pannel__checkGrid">
                                    <br>

                                    <br>
                                    <label for="animationSpeedZ" class="pannel_label left-pannel__label">
                                        Скорость:
                                    </label>
                                    <input type="text" name="animationSpeedZ" id="animationSpeedZ"
                                        class="pannel__inputGrid" placeholder="0.0001">
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>

                    <canvas id="canvas" class="viewer__canvas">
                    </canvas>

                    <div class="left-pannel">
                        <h1 id="modelPannelTitle" class="left-pannel__grid-title">
                            Объекты сцены
                        </h1>
                        <div class="" id="listItems">
                        </div>
                    </div>
                </div>
            </div>

            <!-- </div> -->
        </div>
    </main>

    <footer class="footer">
        <div class="wrapper">

        </div>
    </footer>

    <script src="js/developer/sceneSettings.js">
    </script>
    <script src="js/developer/loadFiles.js">
    </script>
    <script src="js/developer/ajax.js">
    </script>
    <script src="js/developer/light.js">
    </script>
    <script src="js/developer/sceneItems.js">
    </script>
    <script src="js/developer/model.js">
    </script>
    <script src="js/developer/plane.js">
    </script>
    <script src="js/developer/baseBox.js">
    </script>
    <script src="js/developer/cone.js">
    </script>
    <script src="js/developer/sphere.js">
    </script>
    <script src="js/developer/cylinder.js">
    </script>
    <script src="js/developer/animation.js">
    </script>
    <script src="js/developer/listSceneItems.js">
    </script>
    <script src="js/developer/clear.js">
    </script>
    <script src="js/developer/exports.js">
    </script>
    <script src="js/developer/states.js">
    </script>
</body>

</html>