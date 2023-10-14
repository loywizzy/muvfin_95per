<script setup>
import { ref } from 'vue'
import { useShoppingStore } from '../store/movies';
import { userlogin } from '../store/user'
import { add } from '../store/user'

const addbig = ref(add())

const log = ref(userlogin().login)
const data = useShoppingStore();


const showPopup = ref(true);
</script>


<template>
  <div class="container-fluid">
    <div class="h1 text-center m-3 ">Recommended Movies </div>
    <div class="row row-cols-1 row-cols-md-4 g-4 m-3">
      <div class="col-3" v-for="product in data.product1" :key="product.id" :product="product">
        <div class="card h-100" style="max-width: 276px;">
          <div class="containers ">
          <img :src="product.img" class="card-img-top m-3 rounded-4" alt="..." style="max-width: 150px;">

            <RouterLink class="text overlay" to="/bigcard" @click="addbig.getid(product.id)"></RouterLink>
         </div>
          <div class="card-body">
            <div class="card-text">{{ product.year }}</div>
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text overflow-auto mb-5">
              {{ product.imdb }}<i class="fa-solid fa-star" style="color: #F9EEB6;"></i><br>
              Time : {{ product.time }} <br>
              Director : {{ product.director }}</p>
          </div>
          <button @click="data.addToCart(product,log)" class="btn btn-dark position-absolute bottom-0 m-3 rounded-pill">Add
              to cart</button>
        </div>
      </div>
    </div>
    <!-- ปุ่ม view all -->
    <p class="text-center p-3" v-if="showPopup">
      <button class="btn btn-dark rounded-pill" type="button" data-toggle="collapse" data-target="#collapse1"
        aria-expanded="false" aria-controls="collapseExample" @click="showPopup = false">
        View All
      </button>
    </p>
    <div class="collapse" id="collapse1">
      <div class="row row-cols-1 row-cols-md-4 g-4 m-3">
        <div class="col mb-3" v-for="product in data.products" :key="product.id" :product="product">
          <div class="card h-100" style="max-width: 276px;">
            <div class="containers ">
          <img :src="product.img" class="card-img-top m-3 rounded-4" alt="..."  style="max-width: 150px;">
            <RouterLink class="text overlay" to="/bigcard" @click="addbig.getid(product.id)"></RouterLink>
         </div>
            <div class="card-body">
              <div class="card-text">{{ product.year }}</div>
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text overflow-auto mb-5">
                {{ product.imdb }}<i class="fa-solid fa-star" style="color: #F9EEB6;"></i><br>
                Time : {{ product.time }} <br>
                Director : {{ product.director }}

              </p>
            </div>
            <button @click="data.addToCart(product,log)" class="btn btn-dark position-absolute bottom-0 m-3 rounded-pill">Add
              to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #B6DEF9;
}
.containers:hover .overlay {
  opacity: 0.7;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #B6DEF9;
}
  
.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>

