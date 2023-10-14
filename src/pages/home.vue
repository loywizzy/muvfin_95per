<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import headermuf from '../views/headermuf.vue'
import cardmovie from '../components/cardmovie.vue'
import Recommended from '../components/recommend.vue'
import Footer from '../components/footer.vue'


</script>

<template >
  <RouterView></RouterView>
  <div class="main m-3 p-3 row " >
    <headermuf class="fixed-top"></headermuf>
      <h1 class="col-2 text-center align-self-center fw-bolder " style="margin-top: 100px;" >NEW<br>MOVIES</h1>
        <cardmovie class="col-10" style="margin-top: 100px;"></cardmovie>
        <Recommended></Recommended>
        
  </div> 
  <a href="#top" class="btn btn-primary btn-sm flybt"><i class="fa-regular fa-circle-up"></i></a>
<Footer></Footer>
</template>

<style scoped>
    .flybt {
        position: fixed;
        right: 0px;
        bottom: 0px;
        margin: 1rem;
    }
</style>
