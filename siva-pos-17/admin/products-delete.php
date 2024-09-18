<?php

require '../config/function.php';
$paraResult = checkParamId('id');

if(is_numeric($paraResult)){

    $productId = validate($paraResult);
    $product = getById('products', $productId);
    if($product>'status'==200){
        $categoryDelete = delete('products', $productId);
        if($categoryDelete){

            $deleteImage = "../".$category['data']['image'];
            if(file_exists($deleteImage)){
                unlink($deleteImage);
            }
            redirect('products.php', 'products Deleted Successfully');
        }else{
            redirect('products.php', 'Something Went Wrong');
        }
    }else{
        redirect('products.php', $category['message']);
    }

}else{
    redirect('products.php', 'Something Went Wrong');
}

?>