<script setup>
import { userlogin } from '../store/user'
const log = userlogin()

</script>
<template>
<nav class="navbar navbar-expand-lg bgheader ">
  <div class="container-fluid">
 <div class="navbar-brand fw-bolder  m-3" style="font-size:50px;"><router-link to="/" class="nav-link">MUVFIN</router-link></div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item m-3 ">
          <router-link class="nav-link fs-3" to="/">HOME</router-link>
        </li>
        <li class="nav-item m-3">
          <router-link class="nav-link fs-3" to="/populary">POPULAR MOVIES</router-link>
        </li>
        <li class="nav-item m-3">
          <router-link class="nav-link fs-3" to="/category">CATEGORY</router-link>
        </li>
        <li class="nav-item m-3">
          <router-link class="nav-link fs-3" to="/history">HISTORY</router-link>
        </li>
      </ul>
    </div>
    <div class="m-3">
      <!--login แล้ว-->        
        <a class="btn button m-3" v-if="log.login"><RouterLink class="nav-link" to="cart"><i class="fa-solid fa-cart-shopping fs-2"></i></RouterLink></a>
        <button type="button" class="btn btn-light m-2 rounded-pill" @click="log.logined()" v-if="log.login"><RouterLink class="nav-link" to="login">Logout <i class="fa-solid fa-user"></i></RouterLink></button>



        <button type="button" class="btn btn-light m-2 rounded-pill" v-if="!log.login"><RouterLink class="nav-link" to="signup">Sign up</RouterLink></button>
        <button type="button" class="btn btn-light m-2 rounded-pill" v-if="!log.login"><RouterLink class="nav-link" to="login"> Sign In</RouterLink></button>
        <button class="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
  </div>
</nav>
</template>

<style scoped>

.bgheader {
    background-color: #A8D1E7;
    color: black;
}
.btn-lighs{
    border-color: #374785;
    color: #374785;
}
.button:hover{
  background-color: #374785;
}
</style>