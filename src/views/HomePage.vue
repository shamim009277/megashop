<script setup>
import PopularProduct from '../components/product/PopularProduct.vue'
import LatestProduct from '../components/product/LatestProduct.vue'
import Category from '../components/Category.vue'
import BannerSlider from '../components/BannerSlider.vue'

</script>

<template>
  <main>
    <BannerSlider />
    <Category />

    <LatestProduct />
    <PopularProduct />
  </main>
</template>