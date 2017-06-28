<template>
  <div>

    <div class="container">
      <div class="jumbotron container-fluid">

          <p class="lead">Enter a Location below:</p>
          <hr class="my-4">


          <div id="weatherApp">
            <form v-on:submit.prevent="getWeather">
              <p><input type="text" name="location" v-model="location"></p><p>
                <button class="btn btn-primary">Search</button>
                </p>
            </form>
          </div>

          <p class="lead">
            <div v-if="displayWeather">
            <div>{{weather.name}}</div>
            <div>{{weather.coord}}</div>
            <div>{{weather.wind}}</div>
            </div>


            <div v-if="!displayWeather && inputted">Invalid Location</div>


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
      displayWeather: false,
      inputted: false
    }
  },

  methods: {
    getWeather: function()
    {
        return this.$http.get('http://api.openweathermap.org/data/2.5/weather?q='+ this.location +'&appid=' + this.apiKey).then((response) => {
            this.weather = response.body;
            this.displayWeather = true;
        }, (response) => {
            this.weather = [];
            this.displayWeather = false;
            this.inputted = true;

        });
    }
  }

}


</script>

<style>

</style>
