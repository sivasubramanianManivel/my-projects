<?php include('./includes/header.php'); ?>
<div class="container-fluid px-4 mt-4">
    <div class="card">
        <div class="card-header">
            <h4 class="mb-0">Admins/Staff
                <a href="admin-create.php" class='btn btn-primary float-end'>Add Admin</a>
            </h4>
        </div>
        <div class="card-body">
        <?php alertMessage();?>
        <?php 
            $admins =getAllData('admins');
            if(!$admins){
                echo '<h4>Something Went Wrong!</h4>';
                return false;
            }
            if(mysqli_num_rows($admins) > 0){
                
            ?>
            <div class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($admins as $adminItem) : ?>
                        <tr>
                            <td><?= $adminItem['id']; ?></td>
                            <td><?= $adminItem['name']; ?></td>
                            <td><?= $adminItem['email']; ?></td>
                            <td>
                                <?php 
                                    if($adminItem['is_ban']==1){
                                        echo '<span class="btn btn-danger btn-sm">Banned</span>';
                                    }else{
                                        echo '<span class="btn btn-primary btn-sm">Active</span>';
                                    }
                                ?>
                            </td>
                            <td>
                                <a href="admin-edit.php?id=<?=$adminItem['id']; ?>" class='btn btn-success btn-sm'>Edit</a>
                                <a href="admin-delete.php?id=<?=$adminItem['id']; ?>" class='btn btn-danger btn-sm'>Delete</a>
                            </td>
                        </tr>
                        <?php endforeach; ?>                
                    </tbody>
                </table>
            </div>
        <?php
            }
            else{
                ?>
                <h4 colspan='4'>No Record Found</h4>
                <?php
            }
        ?>
        </div>
    </div>
</div>

<?php include('./includes/footer.php'); ?>