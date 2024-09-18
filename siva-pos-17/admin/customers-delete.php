<?php
require '../config/function.php'; 

$paraResultId = checkParamId('id');
if (is_numeric($paraResultId)) {
    $customerId = validate($paraResultId);

    $customer = getById('customers', $customerId);

    if ($customer->num_rows > 0) {
        $response = delete('customers', $customerId);
        if ($response) {
            redirect('customers.php', 'Customer Deleted Successfully');
        } else {
            redirect('customers.php', 'something went wromg');
        }
    } else {
        echo 'Customer not found.';
    }
} else {
    echo 'Invalid Customer ID.';
}
?>
