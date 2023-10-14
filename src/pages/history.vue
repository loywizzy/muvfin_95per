<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import headermuf from '../views/headermuf.vue'
import Footer from '../components/footer.vue'
import {useShoppingStore} from '../store/movies'
const list = useShoppingStore()


</script>

<template >
  <RouterView></RouterView>
  <headermuf ></headermuf>
  <h1 class="text-center fw-bold m-3">Order History</h1>
  <div class="main m-3 p-3 row ">
    <table class="table text-center">
  <thead>
    <tr>
      <th scope="col"><img src="https://cdn-icons-png.flaticon.com/128/2664/2664691.png" alt="" style="max-width: 40px;"></th>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Price of movie</th>
      <th scope="col">order</th>
      <th scope="col">Total price</th>
    </tr>
  </thead>
  <tbody v-for="(m,index) in list.total" :key="index" class="text-center">
    <tr v-for="(i,index) in list.order_history[index]" :key="index">
      <th >{{ index+1 }}</th>
      <td><img :src="i.img" alt="" style="max-width: 100px;"></td>
      <td>{{ i.name }}</td>
      <td>{{ i.price }} Bath per month</td>
      <td>{{ i.quantity }} Order</td>
      <td>{{ i.price*i.quantity }} Bath</td>
    </tr>
    <tr class="rounded-pill shadow">
      <td class="footer m-3 p-3" scope="row" >total price <br>discount 10%<br> Order Total( {{ m[0] }} order)</td>
      <td class="footer m-3"></td>
      <td class="footer m-3"></td>
      <td class="footer m-3"></td>
      <td class="footer m-3"></td>
      <td class=" m-3" style="background-color: #B6DEF9;">{{ m[2] }} Bath <br>{{ m[1] }} Bath <br>{{ m[2] - m[1] }} Bath</td>
    </tr>
  </tbody>
</table>
  </div> 
<Footer></Footer>
</template>

<style scoped>
    .flybt {
        position: fixed;
        right: 0px;
        bottom: 0px;
        margin: 1rem;
    }
    .footer{
    background-color: #F9EEB6;

  }

</style>
