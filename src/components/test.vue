<template>
    <div>
      <div class="checkboxes">
        <label
          v-for="category in categories"
          :key="category"
          class="btn btn-lg"
          :class="{
            'btn-dark': !categoryState[category],
            'btn-light': categoryState[category]
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
    </div>
    {{ listcategory }}
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const categories = [
    'action', 'adventure', 'animation', 'comedy', 'drama',
    'documentary', 'fantasy', 'horror', 'romantic', 'sicfi', 'thriller'
  ];
  
 // Add categories you want to start as checked
  const categoryState = Object.fromEntries(
    categories.map(category => [category, categories.includes(category)])
  );
  const listcategory = ref([]);
  
  const toggleCategory = (category) => {
    if (categoryState[category]) {
      listcategory.value = listcategory.value.filter(item => item !== category);
    } else {
      listcategory.value.push(category);
    }
  };
  </script>
  
  <style scoped>
  /* Your CSS styles here */
  </style>