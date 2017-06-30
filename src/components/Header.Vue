<template>

  <nav class="navbar navbar-default">
  <div class="container">
    <div class="navbar-header">

        <h1 class="display-3">Custom Weather App</h1>

    </div>





    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>


</template>

<script>


</script>

<style scoped>

div, h1 {
  font-family: 'Lato', sans-serif;
  text-transform:uppercase;
}

h1{
  text-align:center;
  color:black;
}


.navbar-nav > li > a {
    padding-bottom: 30px;
    padding-top: 30px;
    letter-spacing: 0.15em;
}

.navbar-default {
    background-color: #f9c700;
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
