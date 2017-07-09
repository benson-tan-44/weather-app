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
            <div class="loc">{{location}}</div>
            <hr />
            <div><b>{{weather.list[0].dt_txt | formatDate  }}</b></div>
            <div>Current Temperature: {{weather.list[0].main.temp}} ° F </div>
            <div>Wind Speed: {{weather.list[0].wind.speed}} MPH  </div>
            <div>Description: <img :src="weatherIcon" /> {{weather.list[0].weather[0].description}} </div>
            <hr/>
            <div><b>{{weather.list[5].dt_txt | formatDate}}</b></div>
            <div>Current Temperature: {{weather.list[5].main.temp}} ° F </div>
            <div>Wind Speed: {{weather.list[5].wind.speed}} MPH  </div>
            <div>Description: <img :src="weatherIcon" /> {{weather.list[5].weather[0].description}} </div>
            <hr />
            <div><b>{{weather.list[10].dt_txt | formatDate  }}</b></div>
            <div>Current Temperature: {{weather.list[10].main.temp}} ° F </div>
            <div>Wind Speed: {{weather.list[10].wind.speed}} MPH  </div>
            <div>Description: <img :src="weatherIcon" /> {{weather.list[10].weather[0].description}} </div>
            <hr />
            <div><b>{{weather.list[18].dt_txt | formatDate  }}</b></div>
            <div>Current Temperature: {{weather.list[18].main.temp}} ° F </div>
            <div>Wind Speed: {{weather.list[18].wind.speed}} MPH  </div>
            <div>Description: <img :src="weatherIcon" /> {{weather.list[18].weather[0].description}} </div>
            <hr />
            <div><b>{{weather.list[28].dt_txt | formatDate  }}</b></div>
            <div>Current Temperature: {{weather.list[28].main.temp}} ° F </div>
            <div>Wind Speed: {{weather.list[28].wind.speed}} MPH  </div>
            <div>Description: <img :src="weatherIcon" /> {{weather.list[28].weather[0].description}} </div>

          </hr/>

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
    weatherIcon() {
      return this.imageLink + this.weather.list[0].weather[0].icon + '.png';
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

</style>
