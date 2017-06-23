<template>
  <div>

    <div class="container">
      <div class="jumbotron container-fluid">
          <h1 class="display-3">Custom Weather App</h1>
          <p class="lead">Personalized Weather App</p>
          <hr class="my-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur velit id felis dictum, sed hendrerit lorem faucibus. In molestie nibh ante, vel molestie nibh posuere ac. Phasellus a lectus commodo, ornare mauris sit amet, vestibulum ante. Suspendisse vitae sollicitudin felis. Etiam lacinia ligula sed eros maximus tempus. Etiam vestibulum malesuada massa, et rhoncus nulla ullamcorper quis. Praesent leo ipsum, finibus quis condimentum quis, efficitur et dui. Etiam sapien ante, auctor at leo at, rhoncus imperdiet turpis.</p>

          <div id="weatherApp">
            <form v-on:submit.prevent="getWeather">
              <p><input type="text" name="location" v-model="location"></p><p>
                <button class="btn btn-primary">Search</button>
                </p>
            </form>
          </div>

          <p class="lead">
            <div v-if="displayWeather">{{weather.name}}</div>


          </p>
      </div>
    </div>

  </div>
</template>

<script>

export default {

  data: function() {
    return{
      location: '',
      apiKey: 'f0ced33377e24b11971f522c34db7be4',
      weather: [],
      displayWeather: false
    }
  },

  methods: {
    getWeather: function()
    {
        return this.$http.get('http://api.openweathermap.org/data/2.5/weather?q='+ this.location +'&appid=' + this.apiKey).then((response) => {
            this.weather = response.body;
            this.displayWeather = true
        }, (response) => {
            this.weather = [];
            this.displayWeather = false
        });
    }
  }

}


</script>

<style>

</style>
