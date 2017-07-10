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
            <!--
            <div v-if="displayWeather">
            <div>Location: {{weather.name}}</div>
            <div>Coordinates: {{weather.coord}}</div>
            <div>Wind: {{weather.wind}}</div>
            <div>Temperature: {{ Math.floor(weather.main.temp) }}° F</div>
            <div>Description: <img :src="weatherIcon" /> {{weather.weather[0].description}} </div>
            </div>
          -->



          <div v-if="displayWeather">

            <div>{{weather.city.name}}</div>


            <hr />

            <div class="row no-margin">
              <div class="col-md-4">

                <div class="panel panel-warning">
                    <div class="panel-heading"><div><b>{{weather.list[0].dt_txt | formatDate  }}</b></div></div>
                      <div class="panel-body">
                        <div>Temperature: {{weather.list[0].main.temp}} ° F </div>
                        <div>Wind Speed: {{weather.list[0].wind.speed}} MPH  </div>
                        <div>Humidity: {{weather.list[0].main.humidity}} %</div>
                        <div>Info: <img :src="weatherIcon1" /> {{weather.list[0].weather[0].description}} </div>
                </div>
              </div>


              </div>
                <div class="col-md-4">

                <div class="panel panel-default">
                    <div class="panel-heading">
                  <div><b>{{weather.list[8].dt_txt | formatDate}}</b></div>
                  </div>

                  <div class="panel-body">
                  <div>Temperature: {{weather.list[6].main.temp}} ° F </div>
                  <div>Wind Speed: {{weather.list[6].wind.speed}} MPH  </div>
                  <div>Humidity: {{weather.list[6].main.humidity}} %</div>
                  <div>Info: <img :src="weatherIcon2" /> {{weather.list[6].weather[0].description}} </div>
                  </div>

                    </div>

                </div>

                    <div class="col-md-4">
                      <div class="panel panel-default">

                      <div class="panel-heading"><div><b>{{weather.list[18].dt_txt | formatDate  }}</b></div></div>
                        <div class="panel-body">
                      <div>Temperature: {{weather.list[10].main.temp}} ° F </div>
                      <div>Wind Speed: {{weather.list[10].wind.speed}} MPH  </div>
                      <div>Humidity: {{weather.list[10].main.humidity}} %</div>
                      <div>Info: <img :src="weatherIcon3" /> {{weather.list[10].weather[0].description}} </div>
                    </div>
                    </div>


                  </div>

            </div>






            <hr />

            <div class="row no-margin">
              <div class="col-md-4">
                  <div class="panel panel-default">
                <div class="panel-heading"><div><b>{{weather.list[28].dt_txt | formatDate  }}</b></div></div>
                  <div class="panel-body">
                <div>Temperature: {{weather.list[18].main.temp}} ° F </div>
                <div>Wind Speed: {{weather.list[18].wind.speed}} MPH  </div>
                <div>Humidity: {{weather.list[18].main.humidity}} %</div>
                <div>Info: <img :src="weatherIcon4" /> {{weather.list[18].weather[0].description}} </div>
              </div>

              </div>
              </div>

            <div class="col-md-4">
              <div class="panel panel-default">
                  <div class="panel-heading"><div><b>{{weather.list[36].dt_txt | formatDate  }}</b></div></div>
                  <div class="panel-body">
                <div>Temperature: {{weather.list[28].main.temp}} ° F </div>
                <div>Wind Speed: {{weather.list[28].wind.speed}} MPH  </div>
                <div>Humidity: {{weather.list[28].main.humidity}} %</div>
                <div>Info: <img :src="weatherIcon5" /> {{weather.list[28].weather[0].description}} </div>
                </div>
              </div>
            </div>


            </div>



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
      inputted: false,
      imageLink: 'http://openweathermap.org/img/w/'
    }
  },

  computed: {
    weatherIcon1() {
      return this.imageLink + this.weather.list[0].weather[0].icon + '.png';
    },
    weatherIcon2() {
      return this.imageLink + this.weather.list[6].weather[0].icon + '.png';
    },
    weatherIcon3() {
      return this.imageLink + this.weather.list[10].weather[0].icon + '.png';
    },
    weatherIcon4() {
      return this.imageLink + this.weather.list[18].weather[0].icon + '.png';
    },
    weatherIcon5() {
      return this.imageLink + this.weather.list[28].weather[0].icon + '.png';
    }


  },

  methods: {
    getWeather: function()
    {
        return this.$http.get('http://api.openweathermap.org/data/2.5/forecast?q='+ this.location + '&units=imperial' +'&appid=' + this.apiKey).then((response) => {
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

.loc{
  font-size:32px;
  text-transform:uppercase;
  font-weight:300;
}

.no-margin{
  margin:0px;
}


</style>
