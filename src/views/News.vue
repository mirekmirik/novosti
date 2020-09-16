<template>
  <div>
    <div class="searchbar" >
      <h3>Поиск последних новостей мира</h3>
      <form @submit.prevent="fetchSearchNews">
        <input type="text" placeholder="Пошук новин..." v-model="searchword">
      </form>
      <div class="search-icons">
        <i v-if="!isBusy" class="material-icons k points" @click="fetchSearchNews">search</i>
         <div v-else class="progress">
      <div class="indeterminate"></div>
        </div> 
        <i class="fas fa-times" @click="fetchTopNews"></i>
      </div>
    </div>
    <div>
      <article  v-for="(article, index) in articles" :key="index" @click="navTo(article.url)" class="obv row point z-depth-5">
        <header>
          <h6 class="sh point"><section v-html="article.title"></section></h6>
          <img height="250" width="350" v-if="article.urlToImage" :src="article.urlToImage" alt="">
        </header>
        <footer>
        </footer>
      </article>
    </div>
    <div ref="infinitescrolltrigger" id="scroll-trigger">
      <i v-if="showloader" class="material-icons">chevron_right</i>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        apiKey: 'e2504ba0baf348e597d784e0a5e3e21e',
        apiUrl: '',
        isBusy: false,
        showloader: false,
        searchword: '',
        articles: [],
        country: 'ua'
      }
    },
    methods: {
      resetData() {
        this.articles = [];
      },
      navTo(url) {
        window.open(url);
      },
      fetchSearchNews() {
        if(this.searchword !== '')
        {
          this.apiUrl = 'https://newsapi.org/v2/everything?q=' + this.searchword +
                        '&pageSize=' + this.maxPerPage +
                        '&apiKey=' + this.apiKey;
          this.isBusy = true;
          this.resetData();
          this.fetchData();
        }
        else {
          this.fetchTopNews();
        }
      },
      fetchTopNews() {
        this.apiUrl = 'https://newsapi.org/v2/top-headlines?country=' + this.country +
                        '&pageSize=' + this.maxPerPage +
                        '&apiKey=' + this.apiKey;
        this.isBusy = true;
        this.searchword = '';
        
        this.resetData();
        this.fetchData();
      },
      fetchData() {
        let req  = new Request(this.apiUrl + '&page=' + this.currentPage);
        fetch(req)
          .then((resp) => resp.json())
          .then((data) => {
            this.totalResults = data.totalResults;
            data.articles.forEach(element => {
              this.articles.push(element);
            });
            this.isBusy = false;
            this.showloader = false;
          })
          .catch((error) => {
            console.log(error);
          })
      },
     },
    created() {
      this.fetchTopNews();
    }
  }
</script>


<style scoped>
 .img {
  margin-left: 30px;
} 

.obv {
  border: 1.5px solid #696969	;
  background-color: #A9A9A9	;
}

.sh {
  margin-left: 300px;
}

.point {
  cursor: pointer;
}

 .point:hover {
  background-color: #616161;
  color: white;
} 

.k {
  position: absolute;
  right: 180px;
  top: 180px;
}

.points {
  cursor: pointer;
}
</style>