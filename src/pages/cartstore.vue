<template>
  <div class="macbook-pro-16-2">
    <headermuf></headermuf>
    <div class="card-2-column1">
      <div class="frame-parent">
        <input type="checkbox" id="selectAll" v-model="selectAll" @change="selectAllItems">
        <b class="b1">เลือกทั้งหมด</b>
      </div>
    </div>
    <div class="card-2-column mb-3" v-for="item in data.getCartItems" :key="item.id">
      <input class="macbook-pro-16-2-item" type="checkbox" :id="'item_' + item.id" v-model="item.checked" />
      <p class="icon-close-circle" @click="data.removeFromCart(item)"><i class="fa-regular fa-circle-xmark"></i></p>
      <div class="blocks">
        <div class="block">
          <div class="href">
            <img :src="item.img" class="fluid rounded" width="200" height="250" :alt="item.name" />
          </div>
        </div>
        <div class="text">
          <b class="add-product-name mb-3">{{ item.name }}</b>
          <div class="price-29-per-week-parent">
            <div class="category-action"><b>Price : {{ item.price }} per month</b></div>
            <div class="category-action"><b>Time : {{ item.time }}</b></div>
            <div class="category-action"><b>Category : {{ item.type }}</b></div>
          </div>
          <div class="eye-catching-button">
            <div class="hovertrue">
              <div class="button2">
                <p @click="data.incrementQ(item)" class="lob">+</p>
                <b class="b">{{ item.quantity }}</b>
                <p @click="data.decrementQ(item)" class="lob">-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rectangle-parent">
      <div class="frame-inner" />
      <div class="data-table-parent">
        <div class="data-table">
          <b class="total-price" >Total price</b>
          <div class="data-table-row" v-for="item in data.getCartItems" :key="item.id">
            <div class="data-table-cell-content" v-if="item.checked">
              <div class="text1"> {{ item.name }}</div>
            </div>
            <div class="data-table-cell-content1" v-if="item.checked">
              <div class="text1">{{ item.price * item.quantity}} Bath</div>
            </div>


          </div>
          <div class="data-table-row">
            <div class="data-table-cell-content4" >
              <div class="text1">Discount 10%</div>
            </div>
            <div class="data-table-cell-content5">
              <div class="text1" style="color: red;">- {{ calculateDiscount().discountAmount }} Bath</div>
            </div>
          </div>
          <div class="data-table-row4">
            <div class="data-table-cell-content4" >
              <b class="text1" >Order Total ( {{ totalItems }} )</b>
            </div>
            <div class="data-table-cell-content5">
              <b class="text1">{{ calculateDiscount().discountedTotal }} Bath</b>
            </div>
          </div>
        </div>
        <div class="text-parent">
          <div class="text11">when you buy 150 Bath</div>
          <b class="text12">SAVE 10 %</b>
        </div>
        <button @click="purchase" class="btn btn-dark m-3 rounded-pill cencen">Purchase</button>
      </div>
    </div>
    <div class="col-md-6">
      <div v-for="product in data.products" :key="product.id">
        <div class="column-for-content-elements" v-if="product.id === 3">
          <img class="demo-image-movieposter3" alt="" :src=product.img />
          <div class="text15">{{ product.year }}</div>
          <b class="text16">{{ product.name }}</b>
          <div class="text17">
            <p class="p">
              <span class="span">{{ product.imdb }} <i class="fa-solid fa-star" style="color: #F9EEB6;"></i></span>
            </p>
            <p class="p">
              <span>TIME : {{ product.time }} </span>
            </p>
            <p class="p">
              <span>Director : {{ product.director }}</span>
            </p>
            <p class="p">
              <span>&nbsp;</span>
            </p>
            <p class="p">
              <a class="blank-line2" href="https://www.imdb.com/name/nm0004170/?ref_=tt_ov_wr" target="_blank">
                <span>
                  <span class="blank-line3">&nbsp;</span>
                </span>
              </a>
            </p>
            <p class="blank-line4">&nbsp;</p>
          </div>
          <div class="spacer" />
          <button @click="data.addToCart(product,log)" class="btn btn-dark position-absolute bottom-0 m-3 rounded-pill">Add
            to cart</button>
        </div>
      </div>
    </div>
    <div v-for="product in data.products" :key="product.id">
      <div class="column-for-content-elements1" v-if="product.id === 24">
        <img class="demo-image-movieposter3" alt="" :src=product.img />
        <div class="text15">{{ product.year }}</div>
        <b class="text16">{{ product.name }}</b>
        <div class="text17">
          <p class="p">
            <span class="span">{{ product.imdb }} <i class="fa-solid fa-star" style="color: #F9EEB6;"></i></span>
          </p>
          <p class="p">
            <span>TIME : {{ product.time }} </span>
          </p>
          <p class="p">
            <span>Director : {{ product.director }}</span>
          </p>
        </div>
        <div class="spacer" />
        <button @click="data.addToCart(product,log)" class="btn btn-dark position-absolute bottom-0 m-3 rounded-pill">Add
          to cart</button>
      </div>
    </div>
    <div v-for="product in data.products" :key="product.id">
      <div class="column-for-content-elements2" v-if="product.id === 8">
        <img class="demo-image-movieposter3" alt="" :src=product.img />
        <div class="text15">{{ product.year }}</div>
        <b class="text16">{{ product.name }}</b>
        <div class="text17">
          <p class="p">
            <span class="span">{{ product.imdb }} <i class="fa-solid fa-star" style="color: #F9EEB6;"></i></span>
          </p>
          <p class="p">
            <span>TIME : {{ product.time }} </span>
          </p>
          <p class="p">
            <span>Director : {{ product.director }}</span>
          </p>
          <p class="p">
            <span>&nbsp;</span>
          </p>
        </div>
        <div class="spacer" />
        <button @click="data.addToCart(product,log)" class="btn btn-dark position-absolute bottom-0 m-3 rounded-pill">Add
          to cart</button>
      </div>
    </div>
    <div class="recommended-for-you">Recommended for you</div>
  </div>
</template>
<script setup>
import { ref, watchEffect } from 'vue';
import { computed } from 'vue';
import headermuf from '../views/headermuf.vue'
import { userlogin } from '../store/user'
import { useShoppingStore } from "../store/movies"
const data = useShoppingStore();
const log = ref(userlogin().login)
const totalItems = computed(() => {
  return data.getCartItems.reduce((total, item) => {
    return item.checked ? total + item.quantity : total;
  }, 0);
});

const purchase = () => {
  const checkedItems = data.getCartItems.filter(item => item.checked);
  data.addTohistory(checkedItems, totalItems.value, calculateDiscount().discountAmount, calculateDiscount().discountedTotal);
};

const calculateDiscount = () => {
  const discountPercentage = 10;
  const checkedItems = data.getCartItems.filter(item => item.checked);
  const totalWithoutDiscount = checkedItems.reduce((acc, item) => acc += item.price * item.quantity, 0);
  const discountedTotal = totalWithoutDiscount > 150 ? totalWithoutDiscount * (1 - discountPercentage / 100) : totalWithoutDiscount;
  const discountAmount = totalWithoutDiscount - discountedTotal;

  return {
    discountAmount: discountAmount.toFixed(2),
    discountedTotal: discountedTotal.toFixed(2)
  };
};

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const selectAllItems = () => {
  data.getCartItems.forEach(item => (item.checked = selectAll.value));
};
const selectAll = ref(false);

watchEffect(() => {
  selectAllItems();
});


</script>
<style scoped>
.lob {
  height: 300%;
}

.cencen{
  position: relative;
  top: -5%;
  left: 39%;
}

</style>
  