<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue'
import { useShoppingStore } from "../store/movies"
import { add } from'../store/user'
import { userlogin } from '../store/user'

import headermuf from '../views/headermuf.vue'
import Footer from '../components/footer.vue'


const id = add()
const data = useShoppingStore();
const change = ref()
const log = ref(userlogin().login)


</script>

<template>
  <RouterView></RouterView>
<headermuf class="fixed-top"></headermuf>
<div style="margin-top: 150px;"></div>
<h1 class="text-center m-3 p-3">{{ data.products[id.id].name }}</h1>
  <div class="main m-3 p-3 row ">
    <div class="col-4">
        <img :src="data.products[id.id].img" class="card-img-top m-3 rounded-4 mx-auto" alt="..." style="max-width: 500px;">
    </div>
    <div class="col-7 m-3 p-5 fs-3">
        Category : {{ data.products[id.id].type }} <br>
        Time : {{ data.products[id.id].time }}<br>
        Score : {{ data.products[id.id].imdb }}<br>
        Year : {{ data.products[id.id].year }}<br>
        Director : {{ data.products[id.id].director }}<br>
        Author : {{ data.products[id.id].athor }}<br>
        Actor : {{ data.products[id.id].actor }}<br>
        <div class="">
            <button @click="data.addToCart(data.products[id.id],log)" class="btn btn-dark m-3 rounded-pill ">Add to cart</button>
            <img src="https://cdn-icons-png.flaticon.com/128/6537/6537201.png" style="max-width:65px;"  @click="change = !change">
        </div>
        <div class="col-12" v-if="!change">
            <h3>คำอธิบาย</h3>
            {{ data.products[id.id].descript_thai }}
        </div>
        <div class="col-12" v-if="change">
            <h3>Description</h3>
            {{ data.products[id.id].descript_eng }}
        </div>
    </div>

  </div> 
<Footer class="container-fluid"></Footer>
</template>

<style scoped>
.red{
    color: #e93f3f;
    transition: color 0.5s;
}
.black {
    color: black;
    transition: color 0.5s;
}
</style>
