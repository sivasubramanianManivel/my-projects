<nav class="navbar px-4 navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">POS System in PHP MySQL</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse d-flex justify-content-end navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        <a class="nav-link" href="index.php">Home</a>
        </li>
        <?php if(isset($_SESSION['loggedIn'])) : ?>
        <li class="nav-item">
        <a class="nav-link" href="#"><?=$_SESSION['loggedInUser']['name'];?></a>
        </li>
        <li class="nav-item">
        <a class="btn btn-danger" href="logout.php">Logout</a>
        </li>
        <?php else: ?>
        <li class="nav-item">
        <a class="nav-link" href="login.php">Login</a>
        </li>
        <?php endif; ?>
    </ul>
    </div>
</nav>