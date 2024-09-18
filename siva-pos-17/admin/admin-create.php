<?php include('./includes/header.php'); ?>
<div class="container-fluid px-4 mt-4">
    <div class="card">
        <div class="card-header">
            <h4 class="mb-0">Add Admin
                <a href="admins.php" class='btn btn-primary float-end'>Back</a>
            </h4>
        </div>
        <div class="card-body">
            <?php alertMessage();?>
            <form action="code.php" method="POST">
                <div class="row">
                    <div class="col-md-12 mb-3">
                        <label for="name">Name *</label>
                        <input type="text" name='name' required class="form-control">
                    </div>
                    <div class="col-md-12 mb-3">
                        <label for="email">Email *</label>
                        <input type="email" name='email' required class="form-control">
                    </div>
                    <div class="col-md-12 mb-3">
                        <label for="password">Password *</label>
                        <input type="password" name='password' required class="form-control">
                    </div>
                    <div class="col-md-12 mb-3">
                        <label for="phone">Phone Number *</label>
                        <input type="number" name='phone' required class="form-control">
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="is_ban">Is Ban *</label>
                        <input type="checkbox" name='is_ban' class="">
                    </div>
                    <div class="col-md-3 mb-3">
                        <button type="submit" name='saveAdmin' class="btn btn-primary">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<?php include('./includes/footer.php'); ?>