<template>
<div id="app" :class="typeof weather.main != 'undefined' && weather.weather[0].main == 'Rain' ? 'rain' : ''">
<h1>Погода</h1>
<div>
<input type="text"
placeholder="Поиск..."
v-model="query"
@keypress="fetchWeather"
@click="fetchWeather"
 />
 <a class="waves-effect waves-light btn-small" @click="fetchWeather">Узнать</a>
 </div>
 
 <div>
   <div v-if="typeof weather.main !='undefined' && weather.description !='undefined'">
  <div class="location">{{weather.name}}, {{weather.sys.country}}, {{weather.main.temp}} °C</div>
  <div>Чувствуется как {{weather.main.feels_like}} °C</div>
  <div>{{weather.weather[0].main}}</div>
  <div>Минимальная температура {{weather.main.temp_min}} °C</div>
  <div>Максимальная температура {{weather.main.temp_max}} °C</div>
  
  </div>
</div>

<div class="weather-box" >
   <div class="temp"></div>
</div>

</div>

</template>



<script>
export default {
    name: 'app',
data() {
    return {
      api_key: '6d44f1fa08c108f60bcd208762f3dd0b',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {}
    }
},
methods: {
    fetchWeather() {
        if(event.key=="Enter" || MouseEvent) {
            fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
            .then(res => {
                 return res.json()
            }).then(this.setResults);
        }
    },
    setResults(results) {
        this.weather = results
     }
}
}

</script>

<style>

.rain {
    
       background: url('https://sundaynews.info/uploads/posts/2017-10/1507711268_dozhdlivaya-pogoda.jpg');
     background-size: cover; 
}



</style>