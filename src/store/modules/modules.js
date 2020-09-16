export default({
    state: {
        posts: [],
        covid: [],
       
    },
    getters: {
        allPosts(state) {
          return state.posts
        },
        allCovid(state) {
            return state.covid
        },
      
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        updateCovid(state, covid) {
            state.covid = covid
        },
      
    },
    actions: {
        async fetchPosts(ctx) {
            const fes = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            const posts = await fes.json()
            ctx.commit('updatePosts', posts)
          },
          async fetchCovid(ctx) {
              const fes = await fetch('https://covid19.mathdro.id/api/countries/ukraine/confirmed')
              const covid = await fes.json()
              ctx.commit('updateCovid', covid)
          },
         
    }
  })