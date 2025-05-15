<template>
  <div id="category">
    <div class="container mx-auto py-10 px-6">
      <div class="flex items-center justify-center mb-8">
        <h1 class="text-xl sm:text-2xl text-gray-800 font-bold text-left">Popular Categories</h1>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 justify-items-center">
        <div v-for="category in categories" :key="item"
          class="flex flex-col items-center justify-center bg-white rounded-md shadow group transition-all hover:-translate-y-1 hover:border-[#d67474] group-hover:translate-x-1 hover:shadow-md duration-300 w-full max-w-[150px] h-[150px]">
          <img :src=category.image alt="" class="w-12 h-12 object-cover mb-2" />
          <p class="text-sm font-semibold text-gray-800">{{ category.name }}</p>
          <p class="text-xs text-gray-500 text-center">{{ category.products }} Products</p>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import image1 from '/images/categories/1.png';
import image2 from '/images/categories/2.png';
import image3 from '/images/categories/3.png';
import image4 from '/images/categories/4.png';
import image5 from '/images/categories/5.png';
import image6 from '/images/categories/6.png';
import image7 from '/images/categories/7.png';
import image8 from '/images/categories/8.png';

const categories = [
  { name: "Electronics", image: image1, products: "1000+" },
  { name: "Fashion", image: image2, products: "850+" },
  { name: "Toys", image: image3, products: "300+" },
  { name: "Beauty & Makeup", image: image4, products: "1200+" },
  { name: "Foods", image: image5, products: "500+" },
  { name: "Shoes", image: image6, products: "900+" },
  { name: "Ferniture", image: image8, products: "700+" },
  { name: "Sports", image: image7, products: "400+" },
]
</script>

<style></style>