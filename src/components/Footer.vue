<template>
  <footer class="page-footer grey darken-4 ps">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">News</h5>
          <p
            class="grey-text text-lighten-4"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis numquam id magni ratione fuga quo repellendus omnis repellat sit harum laudantium, minus eius ipsum ducimus odit, fugit modi consequatur.</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Связаться</h5>
          <ul>
            <li>
              <a class="grey-text text-lighten-3" href="#!">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        <hr />© 2019 Miroslav Bondik
        <router-link to="/info" exact-active-class="active">
          <a class="grey-text text-lighten-4 right" href="#!">Больше ссылок на контакты</a>
        </router-link>
      </div>
    </div>
  </footer>
</template>


<style scoped>
.s {
  opacity: 0.6;
}
.ps {
  position: relative;
  top: 0;
  margin-top: 224px;
}
</style>
      