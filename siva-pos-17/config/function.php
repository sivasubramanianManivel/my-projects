<?php
session_start();

require 'dbcon.php';
// // Validation
function validate($inputData){
    global $conn;
    $validateData = mysqli_real_escape_string($conn, $inputData);
    return trim($validateData);
}

function redirect($url, $status){
    $_SESSION['status'] = $status;
    header('Location: '.$url);
    exit(0);
}

function alertMessage(){
    if(isset($_SESSION['status']) && $_SESSION['status'] != ''){
        $_SESSION['status'];
        echo    '<div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <h6>'.$_SESSION['status'].'</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>';
        unset($_SESSION['status']);
    }
}

function insert($tableName, $data){
    global $conn;

    $table = validate($tableName);

    $columns = array_keys($data);
    $values = array_values($data);

    $finalColumn = implode(',', $columns);
    $finalValue = "'".implode("','", $values)."'";

    $query = "INSERT INTO $table ($finalColumn) VALUES ($finalValue)";
    $result = mysqli_query($conn, $query);
    return $result;
}

function update($tableName, $id, $data){
    global $conn;

    $table = validate($tableName);
    $id = validate($id);
    
    $updateDataString = '';

    foreach($data as $column => $value){
        $updateDataString .= $column . '=' . "'$value',";
    }

    $finalUpdateData = substr(trim($updateDataString), 0, -1);

    $query = "UPDATE $table SET $finalUpdateData WHERE id = '$id'";
    $result = mysqli_query($conn, $query);
    return $result;
}

function getAllData($tableName, $status = NULL){
    global $conn;

    $table = validate($tableName);
    $status = validate($status);

    if($status == 'status'){
        $query = "SELECT * FROM $table WHERE $status = '0'";
    }else{
        $query = "SELECT * FROM $table";
    }
    return mysqli_query($conn, $query);
}


function getById($tableName, $id){
    global $conn;

    $table = validate($tableName);
    $id = validate($id);
    $query = "SELECT * FROM $table WHERE id='$id' LIMIT 1";
    return mysqli_query($conn, $query);

    if($result){
        if(mysqli_num_rows($result) == 1){
            $row = mysqli_fetch_assoc($result); 
            // $row = mysqli_fetch_array($result, MYSQLI_ASSOC);    
            $response = [
                'status' => 200,
                'data' => $row,
                'message' => 'Record Found'
            ];
            return $response;
        }else{
            $response = [
                'status' => 404,
                'message' => 'Data not found'
            ];
            return $response;
        }
    }else{
        $response = [
            'status' => 500,
            'message' => 'Something Went Wrong'
        ];
        return $response;
    }
}


function delete($tableName, $id){
    global $conn;

    $table = validate($tableName);
    $id = validate($id);
    $query = "DELETE FROM $table WHERE id = '$id' LIMIT 1";
    $result = mysqli_query($conn, $query);
    return $result;
}


function checkParamId($type){
    if(isset($_GET[$type])){
        if($_GET[$type] != ''){
            return $_GET[$type];
        }else{
            return '<h5>No Id Give</h5>';
        }
    }else{
        return '<h5>No Id Give</h5>';
    }
}


function logoutSession(){
    unset($_SESSION['loggedIn']);
    unset($_SESSION['loggedInUser']);
}

function jsonResponse($status,$status_type ,$message){
    $response = [
        'status' =>$status,
        'status_type' => $status_type,
        'message' =>$message
    ];
    echo json_encode($response);
    return;
}
?>