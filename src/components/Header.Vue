<template>

  <nav class="navbar navbar-default">
  <div class="container">
    <div class="navbar-header">
      <router-link class="navbar-brand" to="/">
        <img class="img-responsive" src="../assets/logo.png">
      </router-link>
    </div>

    <div class="navbar-collapse">
      <ul class="nav navbar-nav">
        <router-link to="/about" activeClass="active" tag="li"><a>About Us</a></router-link>
        <router-link to="/services" activeClass="active" tag="li"><a>Services</a></router-link>
        <router-link to="/contact" activeClass="active" tag="li"><a>Contact</a></router-link>
      </ul>



    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>


</template>

<script>


</script>

<style scoped>

div {
  font-family: 'Lato', sans-serif;
  text-transform:uppercase;
}


.navbar-nav > li > a {
    padding-bottom: 30px;
    padding-top: 30px;
    letter-spacing: 0.15em;
}

.navbar-default {
    background-color: black;
    border:none;
}

.navbar-default .navbar-nav > li > a {
    color: white;
}

.navbar-default .navbar-nav > li > a:hover {
  background: #4d5d71;
  cursor: pointer;
  color:white;
}

.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:focus, .navbar-default .navbar-nav > .active{
  background: #2e3743;
  cursor: pointer;
  color:white;
}

@media screen and (max-width: 768px) {
  .navbar-brand {
      height: 80px;
  }
}


</style>
