<?php include("includes/header.php") 

?>
<main class="py-5 bg-light">
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card shadow rounded-4">
                    <?php alertMessage();?>
                    <div class="p-5">
                        <h4 class="text-dark mb-3">Sign into Your Pos System</h4>
                        <form action="login-code.php" method="POST">
                            <div class="mb-3">
                                <label for="">Enter Email Id</label>
                                <input type="email" name='email' class="form-control" required />
                            </div>
                            <div class="mb-3">
                                <label for="">Enter Password</label>
                                <input type="password" name='password' class="form-control" required />
                            </div>
                            <div class="mt-3">
                                <button class="btn btn-primary w-100 mt-2" name='loginBtn' type="submit">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<?php include("includes/footer.php") ?>