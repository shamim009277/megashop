<template>
     <div id="latest-product">
          <div class="container mx-auto py-10 px-6">
               <div class="flex items-center justify-between mb-8">
                    <h1 class="text-xl sm:text-2xl text-gray-800 font-bold text-left">Latest products</h1>
                    <button class="text-[#FF5252] border text-xs md:text-sm py-1 px-2 hover:text-[#F85606] hover:scale-105 transition transform duration-300">
                         <ChevronsRight class="w-4 h-4 text-[#FF5252] hover:text-[#FF5252]" stroke-width="2.0" />
                    </button>
               </div>

               <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 gap-y-10 mb-16">
                    <div v-for="item in products" :key="item" class=" bg-white shadow-md rounded-sm group overflow-hidden relative transition hover:shadow-lg hover:scale-105 duration-300">
                         <RouterLink :to="`/product/${item.slug}`">
                              <div class="w-32 h-32 mx-auto sm:w-40 sm:h-40 items-center justify-center flex">
                                   <img :src="item.image" alt="Product" class="h-full object-cover rounded-md" />
                              </div>
                              <div class="p-4">
                                   <h3 class="text-sm font-semibold text-gray-800 leading-tight">{{ item.name }}</h3>
                                   <p class="text-xl sm:text-xl md:text-xl lg:text-xl text-[#FF5252] pt-1 font-bold">{{item.price}}<span class="text-sm ml-2 text-gray-400 font-normal line-through">{{item.pre_price}}</span></p>
                                   <div class="flex items-center mt-1 space-x-1 text-yellow-400">
                                        <span>★</span><span>★</span><span>★</span><span>★</span><span class="text-gray-300">★</span>
                                   </div>
                              </div>

                              <!-- Hover Buttons -->
                              <div class="absolute inset-0 flex justify-end pr-2 pt-4">
                                   <div class="flex flex-col space-y-2 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                                        <button class="bg-white p-3 rounded-full shadow border border-gray-300 hover:bg-gray-100">
                                             <ShoppingCart class="w-4 h-4 text-gray-800 hover:text-[#FF5252]" stroke-width="2.0" />
                                        </button>
                                        <button class="bg-white p-3 rounded-full shadow border border-gray-300 hover:bg-gray-100">
                                             <Heart class="w-4 h-4 text-gray-800 hover:text-[#FF5252]" stroke-width="2.0" />
                                        </button>
                                        <button class="bg-white p-3 rounded-full shadow border border-gray-300 hover:bg-gray-100">
                                             <RefreshCcw class="w-4 h-4 text-gray-800 hover:text-[#FF5252]" stroke-width="2.0" />
                                        </button>
                                   </div>
                              </div>
                         </RouterLink>
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup>
import { ShoppingCart, Heart, RefreshCcw, ChevronsRight } from 'lucide-vue-next';

const products = [
     {
          image: '/images/mobile/1.webp',
          name: 'Realme 7 Pro (Mirror Silver, 128 GB) (6 GB RAM)',
          slug: 'realme-7-pro',
          price: 249.99,
          pre_price: 299.99
     },
     {
          image: '/images/mobile/2.webp',
          name: 'Realme 7 Pro (Mirror Silver, 128 GB) (6 GB RAM)',
          slug: 'realme-7-pro',
          price: 249.99,
          pre_price: 299.99
     },
     {
          image: '/images/mobile/3.webp',
          name: 'Realme 9 5G (Stargaze White, 128 GB) (6 GB RAM)',
          slug: 'realme-9-5g',
          price: 209.99,
          pre_price: 239.99
     },
     {
          image: '/images/mobile/4.webp',
          name: 'Realme 9 5G (Stargaze White, 128 GB) (6 GB RAM)',
          slug: 'realme-9-5g',
          price: 272.99,
          pre_price: 290.99
     },
     {
          image: '/images/mobile/5.webp',
          name: 'Realme 9 Pro 5G (Midnight Black, 128 GB) (6 GB RAM)',
          slug: 'realme-9-pro-5g',
          price: 259.99,
          pre_price: 285.99
     },
     {
          image: '/images/mobile/7.webp',
          name: 'ASUS Marshmallow - Silent, Adj. DPI, Multi-Mode, With Solar Cover Wireless Optical Mouse ',
          slug: 'asus-marshmallow',
          price: 14.99,
          pre_price: 15.99
     },
     {
          image: '/images/mobile/1.webp',
          name: 'Realme 7 Pro (Mirror Silver, 128 GB) (6 GB RAM)',
          slug: 'realme-7-pro',
          price: 249.99,
          pre_price: 299.99
     },
     {
          image: '/images/mobile/2.webp',
          name: 'Realme 7 Pro (Mirror Silver, 128 GB) (6 GB RAM)',
          slug: 'realme-7-pro',
          price: 249.99,
          pre_price: 299.99
     },
     {
          image: '/images/mobile/3.webp',
          name: 'Realme 9 5G (Stargaze White, 128 GB) (6 GB RAM)',
          slug: 'realme-7-pro',
          price: 209.99,
          pre_price: 239.99
     },
     {
          image: '/images/mobile/4.webp',
          name: 'Realme 9 5G (Stargaze White, 128 GB) (6 GB RAM)',
          slug: 'realme-7-pro',
          price: 272.99,
          pre_price: 290.99
     },
     {
          image: '/images/mobile/5.webp',
          name: 'Realme 9 Pro 5G (Midnight Black, 128 GB) (6 GB RAM)',
          slug: 'realme-7-pro',
          price: 259.99,
          pre_price: 285.99
     }
     ,
     {
          image: '/images/mobile/6.webp',
          name: 'Realme 9 Pro 5G (Midnight Black, 128 GB) (6 GB RAM)',
          slug: 'realme-7-pro',
          price: 149.99,
          pre_price: 155.99
     },
     {
          image: '/images/mobile/8.webp',
          name: 'ASUS Marshmallow - Silent, Adj. DPI, Multi-Mode, With Solar Cover Wireless Optical Mouse ',
          slug: 'realme-7-pro',
          price: 14.99,
          pre_price: 15.99
     },
     {
          image: '/images/mobile/9.webp',
          name: 'ASUS Marshmallow - Silent, Adj. DPI, Multi-Mode, With Solar Cover Wireless Optical Mouse ',
          slug: 'realme-7-pro',
          price: 14.99,
          pre_price: 15.99
     },
     {
          image: '/images/mobile/10.webp',
          name: 'ASUS Marshmallow - Silent, Adj. DPI, Multi-Mode, With Solar Cover Wireless Optical Mouse ',
          slug: 'realme-7-pro',
          price: 14.99,
          pre_price: 15.99
     },
     {
          image: '/images/mobile/11.webp',
          name: 'ASUS Marshmallow - Silent, Adj. DPI, Multi-Mode, With Solar Cover Wireless Optical Mouse ',
          slug: 'realme-7-pro',
          price: 14.99,
          pre_price: 15.99
     },
     {
          image: '/images/mobile/12.webp',
          name: 'ASUS Marshmallow - Silent, Adj. DPI, Multi-Mode, With Solar Cover Wireless Optical Mouse ',
          slug: 'realme-7-pro',
          price: 14.99,
          pre_price: 15.99
     },
     {
          image: '/images/mobile/13.webp',
          name: 'ASUS Marshmallow - Silent, Adj. DPI, Multi-Mode, With Solar Cover Wireless Optical Mouse ',
          slug: 'realme-7-pro',
          price: 14.99,
          pre_price: 15.99
     }
];
</script>

<style></style>