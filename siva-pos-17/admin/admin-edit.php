<?php include('./includes/header.php'); ?>
<div class="container-fluid px-4 mt-4">
    <div class="card">
        <div class="card-header">
            <h4 class="mb-0">Edit Admin
                <a href="admins.php" class='btn btn-danger float-end float-end'>Back</a>
            </h4>
        </div>
        <div class="card-body">
            <?php alertMessage();?>
            <form action="code.php" method="POST">
                
                <?php
                if (isset($_GET['id'])) {
                    if($_GET['id'] != '') {
                        $adminId = $_GET['id'];
                    }
                    else{
                        echo '<h5>No Id Found<h5>';
                        return false;
                    }
                }
                else{
                    echo '<h5>No Id Given in Params<h5>';
                    return false;
                }
                $adminData = getByID('admins', $adminId);
                if($adminData>'status' == 200){
                    foreach($adminData as $data){
                        $id = $data['id'];
                        $name = $data['name'];
                        $password = $data['password'];
                        $email = $data['email'];
                        $phone = $data['phone'];
                        $is_ban = $data['is_ban'];
                    }
                ?>
                <input type="hidden" value='<?php echo $id; ?>' name='adminId'>
                <div class="row">
                    <div class="col-md-12 mb-3">
                        <label for="name">Name *</label>
                        <input type="text" name='name' required value='<?= $name ?>' class="form-control">
                    </div>
                    <div class="col-md-12 mb-3">
                        <label for="email">Email *</label>
                        <input type="email" name='email' required value='<?= $email ?>' class="form-control">
                    </div>
                    <div class="col-md-12 mb-3">
                        <label for="password">Password *</label>
                        <input type="password" name='password' class="form-control">
                    </div>
                    <div class="col-md-12 mb-3">
                        <label for="phone">Phone Number *</label>
                        <input type="number" name='phone' required value='<?= $phone ?>' class="form-control">
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="is_ban">Is Ban *</label>
                        <input type="checkbox" name='is_ban' value='<?= $is_ban == true ? 'checked' : '' ?>' class="">
                    </div>
                    <div class="col-md-3 mb-3">
                        <button type="submit" name='updateAdmin' class="btn btn-primary">Update</button>
                    </div>
                </div>

                <?php
                }else{
                    echo 'something went wrong';
                    return false;
                }
                ?>
            </form>
        </div>
    </div>
</div>

<?php include('./includes/footer.php'); ?>