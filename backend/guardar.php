<?php  //guardar datos de angular

   header('Content-type:application/json');
    header("Access-Control-Allow-Origin:*");

    $json=file_get_contents('php://input'); 
    $str = trim($json,"[]");
    $info = json_decode($str,true);
    
    $aux = json_decode($json,true);
    //var_dump($info);
    $estado = $aux[0]["estado"];
    echo $estado;

    switch($estado){
        case "abierto":
             $jsonData=file_get_contents("notas_abiertas.json");
            if(empty($jsonData)==1){
                $archivo = fopen("notas_abiertas.json","w");
                fwrite($archivo,$json);
                break;
            }else{
                $arrayData=json_decode($jsonData);
                array_push($arrayData,$info);
                $jsonData = json_encode($arrayData);

                $archivo = fopen("notas_abiertas.json", "w");
                fwrite($archivo,$jsonData); 
                break;
            }

        case "en_progreso":
            $jsonData=file_get_contents("notas_enprogreso.json");
            if(empty($jsonData)==1){
                $archivo = fopen("notas_enprogreso.json", "w");
                fwrite($archivo,$json);
                break;
            }else{
                $arrayData=json_decode($jsonData);
                array_push($arrayData,$info);
                $jsonData = json_encode($arrayData);

                $archivo = fopen("notas_enprogreso.json", "w");
                fwrite($archivo,$jsonData); 
                break;
            }
            
           
        case "cerrado":
            $jsonData=file_get_contents("notas_cerradas.json");
            if(empty($jsonData)==1){
                $archivo = fopen("notas_cerradas.json","w");
                fwrite($archivo,$json);
                break;
            }else{
                $arrayData=json_decode($jsonData);
                array_push($arrayData,$info);
                $jsonData = json_encode($arrayData);

                $archivo = fopen("notas_cerradas.json", "w");
                fwrite($archivo,$jsonData); 
                break;
            }
        
        default:
            break;        
    }

?>