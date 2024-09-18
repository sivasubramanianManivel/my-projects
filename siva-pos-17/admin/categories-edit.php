<?php include('./includes/header.php'); ?>
<div class="container-fluid px-4 mt-4">
    <div class="card">
        <div class="card-header">
            <h4 class="mb-0">Edit Category
                <a href="categories.php" class='btn btn-primary float-end'>Back</a>
            </h4>
        </div>
        <div class="card-body">
            <?php alertMessage();?>
            <form action="code.php" method="POST">
                <?php
                $parmValue = checkParamId('id');
                $category = getById('categories',$parmValue);
                    if($category>'status' == 200){
                    foreach($category as $data){
                        $id = $data['id'];
                        $name = $data['name'];
                        $description = $data['description'];
                        $status = $data['status'];
                    }
                ?>
                <input type="hidden" value='<?php echo $id; ?>' name='categoryId'>
                <div class="row">
                    <div class="col-md-12 mb-3">
                        <label for="name">Name *</label>
                        <input type="text" name='name' required value='<?= $name; ?>' class="form-control">
                    </div>
                    <div class="col-md-12 mb-3">
                        <label for="description">Description</label>
                        <textarea name="description" id="" class="form-control" value='<?= $description; ?>'  rows="3"></textarea>
                    </div>
                    <div class="col-md-6">
                        <label for="">Status(unchecked=Visible, checked=Hidden)</label>
                        <input type="checkbox" name="status" value='<?= $status == true ? 'checked' : '' ?>' class="form-check">
                    </div>
                    <div class="col-md-3 mb-3">
                        <button type="submit" name='updateCategory' class="btn btn-primary">Update</button>
                    </div>
                </div>
                <?php
                }
                else{
                    echo $category['message'];
                }
                ?>
            </form>
        </div>
    </div>
</div>

<?php include('./includes/footer.php'); ?>