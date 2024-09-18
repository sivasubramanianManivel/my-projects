<?php 

require '../config/function.php';

$paramResult =checkParamId('index');
if(is_numeric($paramResult)){
    $indexvalue = validate($paramResult);
    if(isset($_SESSION['productItems']) && isset($_SESSION['productItemIds'])){
        unset($_SESSION['productItems'][$indexvalue]);
        unset($_SESSION['productItemIds'][$indexvalue]);

        redirect('order-create.php','Item removed');
    }
    else{
        redirect('order-create.php','there is no item');
    }
}
else
{
    redirect('order-create.php','param not numeric');

}

?>