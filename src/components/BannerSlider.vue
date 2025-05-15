<template>
  <div class="container mx-auto mt-1 px-6 z-0">
    <Swiper
      :modules="[Autoplay, Pagination]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      :pagination="{ clickable: true }"
      class="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] rounded-lg overflow-hidden"
    >
      <SwiperSlide v-for="(banner, index) in banners" :key="index">
        <img :src="banner" alt="Banner" class="w-full h-full object-cover" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'

const banners = [
  '/images/banner2.jpg',
  '/images/banner1.webp',
  '/images/banner4.webp'
]
</script>