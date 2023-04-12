<?php
    require_once './settingsDB.php';
    require_once './getFiles.php';
    
    $filesNames = $_FILES['inputFiles']['name'];
    $filesFirstPath = $_FILES['inputFiles']['tmp_name'];
    $flag = true;
    
    foreach ($_FILES['inputFiles']['error'] as $error => $value) {
       if($value !== 0){
           echo 'Произошла ошибка №';
           print_r($value . ".");

            $flag = false;   
       }
    }

    if($flag == true) echo 'Файл успешно загружен. ';
    
    //Подключение к базе данных
    $connection = mysqli_connect($host, $user, $password, $dbName);
    if(!isset($connection)){
        die("Ошибка соединения: " . mysqli_connect_errno());
    }
    
    $folderPath = ''; //Папка с набором загружаемых файлов
    
    //Проверяет загружен ли основной файл в формате .obj, .fbx, .gltf и ...
    function check_files($filesNames){
        $objCount = 0;
        $fbxCount = 0;
        $gltfCount = 0;
        $stlCount = 0;
        
        for($i = 0; $i < count($filesNames); $i++){
            if((str_ends_with($filesNames[$i], '.obj') || str_ends_with($filesNames[$i], '.OBJ')) && $fbxCount == 0 && $gltfCount == 0 && $stlCount == 0)  $objCount += 1;
            if((str_ends_with($filesNames[$i], '.fbx') || str_ends_with($filesNames[$i], '.FBX')) && $objCount == 0 && $gltfCount == 0 && $stlCount == 0)  $fbxCount += 1;
            if((str_ends_with($filesNames[$i], '.gltf') ||str_ends_with($filesNames[$i], '.GLTF') ||str_ends_with($filesNames[$i], '.glb') ) && $objCount == 0 && $fbxCount == 0 && $stlCount == 0)  $gltfCount += 1;
            if((str_ends_with($filesNames[$i], '.stl') || str_ends_with($filesNames[$i], '.STL')) && $objCount == 0 && $fbxCount == 0 && $gltfCount == 0)  $stlCount += 1;
        }

        if(($objCount != 0) || ($fbxCount != 0) || ($gltfCount != 0) || ($stlCount != 0)) {
            echo "Проверка прошла успешно";
            return true;
        }
        else {
            die("Ошибка проверки, не найден файл 3D-объекта. ");
            return false;
        }
    };
    
    //Создает папку для загржуенных файлов по имени файла 3D-объекта, обрезая расширение
    function create_folder($filesNames){
        $mainPath = './usersMaterials/';
        $fullFileName = '';
        
        for($i = 0; $i < count($filesNames); $i++){           
            if(str_ends_with($filesNames[$i], '.obj') ||  str_ends_with($filesNames[$i], '.OBJ') || str_ends_with($filesNames[$i], '.fbx') || str_ends_with($filesNames[$i], '.FBX') || 
            str_ends_with($filesNames[$i], '.gltf') || str_ends_with($filesNames[$i], '.glb') || str_ends_with($filesNames[$i], '.GLTF') || str_ends_with($filesNames[$i], '.stl') || str_ends_with($filesNames[$i], '.STL')){
                $fullFileName = $filesNames[$i];
                break;
            }
        }
        
        $fileName = explode(".", $fullFileName);
        $path = $mainPath.$fileName[0].time();
       
        if($fullFileName != '' ) mkdir($path, 0777, true);
        
        return $path.'/';
    };

    //Перемещает загруженные пользователем файлы в созданную папку
    function move_files($filesNames, $filesFirstPath){
        if(check_files($filesNames) == true){   
            $tempPath = create_folder($filesNames);

            for($i = 0; $i < count($filesNames); $i++){
                $path = $tempPath.$filesNames[$i];
                
                move_uploaded_file($filesFirstPath[$i], $path);
                create_zip($filesNames[$i], $path, $tempPath);
            }    
        }
    };
    
    //Создание архива с файлами
    function create_zip($fileName, $pathFile, $pathFolder){
        $zip = new ZipArchive();
        $zipName = $pathFolder.'archive.zip';
    
        $zip->open($zipName, ZipArchive::CREATE);
        $zip->addFile($pathFile, $fileName);
        $zip->close();  
    }
    
    //Поиск файла в папке и пути до него
    function search_file($folderPath, $fileName){
        $scanDir = scandir($folderPath);
        $arrFolders = [];
        
        for ($i = 0; $i < count($scanDir); $i++) { 
            if(!substr_count($scanDir[$i], ".")) array_push($arrFolders, $scanDir[$i]);
        }
        
        for($i = 0; $i < count($arrFolders); $i++){
           // открываем текущую папку 
           $pathToFiles = $folderPath. "/". $arrFolders[$i];
           $dir = opendir($pathToFiles); 
           
           if(readdir($dir) !== false) {
               $pathToFile = $pathToFiles . "/" . $fileName;
               
               if (file_exists($pathToFile) == true) return $pathToFile;
           }
         
            // закрываем папку
            closedir($dir);
        }
    }
    
    //Добавляет загруженные файлы в базу данных, формируя путь до них
    function add_files_in_db($connection, $filesNames){
        date_default_timezone_set("Europe/Moscow");
        $dateTime = date("d/m/Y", time()) . ' ' . date('H:i:s', time());

        $commonId = uniqid('common_');
        
        for($i = 0; $i < count($filesNames); $i++){
           $uuid = uniqid('', false);
           $tempPath =  __DIR__ . '/usersMaterials'; 
           $folderPath = str_replace("\\" , "/", $tempPath);
            
           $pathToFile = search_file($folderPath, $filesNames[$i]);

           $arrFolder = explode('/', $pathToFile);
           $nameFolder = $arrFolder[count($arrFolder) - 2];
      
           if(!isset($pathToFile)) die("Нет такого файла");

           $query = "INSERT INTO `files_links` VALUES ('{$uuid}', '{$commonId}','{$filesNames[$i]}', 
           '{$pathToFile}', '{$nameFolder}', '{$dateTime}')";
           
           $result = mysqli_query($connection, $query);
        
           if(!isset($result)){
               die("Ошибка получения запроса: " . mysqli_connect_errno());
           }
        }
    };

    //Вызов функций
    move_files($filesNames, $filesFirstPath);
    add_files_in_db($connection, $filesNames);
     
    get_url_from_db($filesNames, $connection);
   
?>