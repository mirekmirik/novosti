<template>
  <div>
    <h1 class="txt">Ukraine</h1>
    <hr width="700" color="grey" />
    <div v-for="covid in allCovid" :key="covid.id" class="tbl grey lighten-1 z-depth-3 brdr">
      <h6 class="row">{{covid.provinceState}}</h6>
      <p class="row">Количество заболевших: {{covid.confirmed}}</p>
      <p class="row">Количество выздоровевших: {{covid.recovered}}</p>
      <p class="row">Количество смертей: {{covid.deaths}}</p>
    </div>
  </div>
</template>



<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "app",
  components: {},
  data() {
    return {
      courses: [],
    };
  },
  computed: mapGetters(["allCovid"]),
};
</script>


<style scoped>
.tbl {
  display: flex;
  justify-content: space-around;
}

.row {
  text-align: left;
  padding: 8px 16px;
  flex-basis: 25%;
}

.txt {
  text-align: center;
}
.brdr {
  border: 0.1px solid grey;
  border-radius: 1px;
}

.txt1 {
  color: white;
}
</style>













