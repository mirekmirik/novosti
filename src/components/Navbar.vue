<template>
 <nav class="sds">
    <div class="nav-wrapper grey darken-4">
      <router-link to="/"><a href="#" class="brand-logo">Planet NEWS</a></router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link to="/valuta" tag="li" exact-active-class="active"><a href="sass.html">Курс валют</a></router-link>
        <router-link to="/weather" tag="li" exact-active-class="active" ><a href="badges.html">Погода</a></router-link>
        <router-link to="/covid" tag='li' exact-active-class="active"><a href="collapsible.html">Количество зараженных коронавирусом</a></router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>


<style scoped>

.sds {
  position: sticky;
  top: 0px;
}

</style>
