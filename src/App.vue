<template>
  <div id="app" class="brown lighten-4">
    <Navbar></Navbar>
    <div class="container">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>



<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
  computed: mapGetters(["AllCovid"]),
  allCovid() {
    return this.$store.getters.allCovid;
  },
  async mounted() {
    this.$store.dispatch("fetchPosts"), this.$store.dispatch("fetchCovid");
  },
};
</script>






<style>
@import "~materialize-css/dist/css/materialize.min.css";
</style>
