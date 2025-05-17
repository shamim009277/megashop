<template>
    <div id="popular-product" class="bg-[#F5F0F0]">
        <div class="container mx-auto py-10 px-6">
            <div class="flex items-center justify-between mb-8">
                <h1 class="text-xl sm:text-2xl text-gray-800 font-bold text-left">Related Products</h1>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
                <div v-for="(item, index) in products" :key="item" class="bg-white shadow-md rounded-sm group overflow-hidden relative transition hover:shadow-lg hover:scale-105 duration-300">
                    <RouterLink :to="`/product/${item.slug}`">
                        <img :src=item.image alt="Product" class="w-full h-auto object-cover" />
                        <div class="p-4">
                            <h3 class="text-sm font-semibold text-gray-800 leading-tight">{{ item.name }}</h3>
                            <p class="text-xl sm:text-xl md:text-xl lg:text-xl text-[#FF5252] pt-1 font-bold">{{
                                item.price}}<span class="text-sm ml-2 text-gray-400 font-normal line-through">{{
                                    item.pre_price}}</span></p>
                            <div class="flex items-center mt-1 space-x-1 text-yellow-400">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span class="text-gray-300">★</span>
                            </div>
                        </div>

                        <div v-if="index % 2 == 0" class="absolute top-0 left-0 bg-[#FF5252] text-white text-xs font-semibold px-2 py-1 rounded-br-lg">
                            <h1>- {{ index }} %</h1>
                        </div>
                        <!-- Hover Buttons -->
                        <div class="absolute inset-0 flex justify-end pr-2 pt-4">
                            <div class="flex flex-col space-y-2 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                                <button class="bg-white p-3 rounded-full shadow border border-gray-300 hover:bg-gray-100">
                                    <ShoppingCart class="w-4 h-4 text-gray-800 hover:text-[#FF5252]"
                                        stroke-width="2.0" />
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
import image1 from '/images/airpodes/1.webp';
import image2 from '/images/airpodes/2.webp';
import image3 from '/images/airpodes/3.webp';
import image4 from '/images/airpodes/4.webp';
import image5 from '/images/airpodes/5.webp';
import image6 from '/images/airpodes/6.webp';

const products = [
    {
        name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
        slug: 'tws-wireless-earbuds-bluetooth-headphone-touch-control-earphone',
        image: image1,
        price: '$28.99',
        pre_price: '$33.99'
    },
    {
        name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
        slug: 'tws-wireless-earbuds-bluetooth-headphone-touch-control-earphone',
        image: image2,
        price: '$19.99',
        pre_price: '$23.99'
    },
    {
        name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
        slug: 'tws-wireless-earbuds-bluetooth-headphone-touch-control-earphone',
        image: image3,
        price: '$35.99',
        pre_price: '$39.99'
    },
    {
        name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
        slug: 'tws-wireless-earbuds-bluetooth-headphone-touch-control-earphone',
        image: image4,
        price: '$38.99',
        pre_price: '$42.99'
    },
    {
        name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
        slug: 'tws-wireless-earbuds-bluetooth-headphone-touch-control-earphone',
        image: image5,
        price: '$13.99',
        pre_price: '$17.99'
    },
    {
        name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
        slug: 'tws-wireless-earbuds-bluetooth-headphone-touch-control-earphone',
        image: image6,
        price: '$18.99',
        pre_price: '$22.99'
    }
];
</script>
<style></style>