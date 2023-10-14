<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import headermuf from '../views/headermuf.vue'
import Footer from '../components/footer.vue'
import { useShoppingStore } from '../store/movies'
import { userlogin } from '../store/user'
const change = ref( )
const log = ref(userlogin().login)


const list = ref(useShoppingStore())




const categories = [
  'Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 
  'Documentary', 'Fantasy', 'Horror', 'Romance', 'SciFi', 'Thriller'
];



const categoryState = Object.fromEntries(
    categories.map(category => [category, categories.includes(category)])
  );
const listcategory = ref([]);

const toggleCategory = (category) => {
  if (categoryState[category]) {
    listcategory.value = listcategory.value.filter(item => item !== category);
    console.log(categoryState)
  } else {
    listcategory.value.push(category);
    console.log(categoryState)
  }
};


</script>

<template>
  <RouterView></RouterView> 
    <headermuf class="fixed-top"></headermuf>
 
    <div class="row" style="margin-top: 150px;">
    <div class="col-2">
      <div class="row" style=" position: sticky; top: 200px;">
        <div class="col-2 text-center">
    <div class="main m-3 p-3 gx-1 justify-content-center">
      <div class="checkboxes">
        <label
          v-for="category in categories"
          :key="category"
          class="btn btn-lg rounded-pill m-1"
          :class="{
            'btn-light': categoryState[category],
            'btn-dark': !categoryState[category]
          }"
        >
          <input
            type="checkbox"
            :id="category"
            v-model="categoryState[category]"
            @change="toggleCategory(category)"
            class="visually-hidden"
          />
          {{ category }}
        </label>
      </div>
      <div style="margin-top:63px ;"></div>
    </div>
  </div>
      </div>
    </div>
    <div class="col-10">
      <div class="row ">
        <!--<div class="col text-center m-5 fs-4" >
      <div v-for="category in listcategory" :key="category" style="display: inline;">
        {{ category }} / 
      </div>
    </div>-->
  <div v-for="(data, index) in list.products" :key="index" >
    <div class="shadow rounded-4 " v-for="(m, index) in listcategory" :key="index"> 
      <div class="row m-3" v-if="data.type == m">
        <div class="col-4">
        <img :src="data.img" class="card-img-top m-3 rounded-4 mx-auto" alt="..." style="max-width: 500px;">
    </div>
        <div class="col-6 fs-3 m-3">
          <h1 class="fw-bold " >{{ data.name }}</h1>
          <div class="fw-bold" style="color: #777777;">{{ data.type }}</div>

        Time : {{ data.time }}<br>
        IMDb : {{ data.imdb }}<br>
        Year : {{ data.year }}<br>
        Director : {{ data.director }}<br>
        Author : {{ data.athor }}<br>
        Actor : {{ data.actor }}<br>
        <div class="">
            <button @click="list.addToCart(data,log)" class="btn btn-dark m-3 rounded-pill ">Add to cart</button>
            <img src="https://cdn-icons-png.flaticon.com/128/6537/6537201.png" style="max-width:65px;"  @click="change = !change">
        </div>
        <div class="col-12" v-if="!change">
            <h3>คำอธิบาย</h3>
            {{ data.descript_thai }}
        </div>
        <div class="col-12" v-if="change">
            <h3>Description</h3>
            {{ data.descript_eng }}
        </div>
    </div>
      </div>
    </div>
  </div>

</div>
    </div>





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
