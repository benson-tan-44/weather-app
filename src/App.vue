<template>
  <div>
    <app-header></app-header>
      <transition name="slide" mode="out-in">
        <router-view>test</router-view>
      </transition>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
      appHeader: Header,
      appFooter: Footer,
  }
}
</script>

<style>


.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}


@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity:0;
  }

  to{
    transform:translateY(0);
    opacity:1
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity:1;
  }

  to{
    transform:translateY(-30px);
    opacity:0;
  }
}


html {
    min-height: 100%;
    position: relative;
}

.footer {
    background-color: black;
    bottom: 0;
    position: absolute;
    width: 100%;
}

.footer .text{
  margin:20px 0;
  color:white;
}

body{
  background: #171c25;
  font-family:'lato', sans-serif;
  font-size:20px;
  margin-bottom: 120px;
}

.lead{
  font-weight:300;
  font-variant: small-caps;
}

.btn{
  text-transform:uppercase;
  font-size:12px;
  background: #f9c700;
  border-radius:0px;

}

.btn:hover, .btn:focus {
  background: #2e3743;
}

.btn-primary{
  border:0px;
  color:black;
}

.btn a{
  text-decoration:none;

}

.panel-heading{
  text-transform:uppercase;
  font-weight:400;
  text-decoration:bold;
  font-size:18px;
  letter-spacing:0.09em;
}

.panel-body{
  font-weight:300;
}

a{
  color:white;
}

a:hover, a:focus{
  background:none;
  color:white;
}

.jumbotron p{
  font-size:21px;
}

.jumbotron .lead{
  font-size:18px;
}

.jumbotron h1 {
  font-size:54px;
}

.col-md-4{
  padding:0px 15px 0px 0px;
}

h1{
  text-transform:uppercase;
}

hr{
  border-color:#ccc
}

</style>
