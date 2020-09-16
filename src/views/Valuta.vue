<template class="bg">
  <div class="about" id="app">
    <h1>Курс валют на данный момент</h1>
    <div class="post f mb bg z-depth-4 " v-for="post in allPosts" :key="post.id">
      <h2>{{post.ccy}}</h2>
      <span>Покупка: {{post.buy}} UAH</span>
      <hr>
      <span>Продажа: {{post.sale}}</span>
      <span>{{post.base_ccy}}</span>
    </div>
  </div>
</template>


<script>
import {mapGetters} from 'vuex'

export default {
  name: 'app',
 computed: mapGetters(['allPosts']),
}
</script>


<style scoped>
.f {
  border: 2px solid black;
  border-radius: 2px;
}

.mb {
  padding-bottom: 30px;
}

.bg {
  background-size: 100%;
  background: url('https://storage.myseldon.com/news_pict_44/44729D0D5D73F180102341292276682A') no-repeat;
   background-size: cover;
   color: black		;
   font-weight: bold;
font-size: 20px;

}

</style>