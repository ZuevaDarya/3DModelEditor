<?php
    //получаем данные загпуженных файлов из бд
    function get_url_from_db($filesNames, $connection){
        $dataArr = [];
        
        class dataObject{
            public $common_id = '';
            public $name = '';
            public $folder = '';
            public $path = '';
        }
        
        foreach ($filesNames as $key => $value) {
            $query = "SELECT `common_id`, `name`, `path`, `folder` FROM `files_links` WHERE `name` = '{$value}'";
            $result = mysqli_query($connection, $query);

            $result_arr =  mysqli_fetch_array($result);
            
            $obj = new dataObject();
            $obj->common_id = $result_arr[0];
            $obj->name = $result_arr[1];
            $obj->path = $result_arr[2];
            $obj->folder = $result_arr[3];;
            
            array_push($dataArr, $obj);
            
            if(!isset($result)){
                die("Ошибка получения запроса: " . mysqli_connect_errno());
            } 
        }
        
        //передаем данные в формате json
        $jsonStr = json_encode($dataArr);
        print_r('JSON'.json_encode($jsonStr));
        return $jsonStr;
    }
?>