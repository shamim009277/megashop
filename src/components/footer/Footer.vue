<template>
    <div>
        <footer>
            <div class="container mx-auto py-8 px-4">
                <div class="grid gap-12 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <div v-for="item in items" :key="item"
                        class="flex flex-col items-center justify-center px-2 py-4 group">
                        <component :is="item.icon" class="w-14 h-auto mb-4 text-gray-800 group-hover:text-[#FF5252] group-hover:-translate-y-1 transition-transform duration-300" stroke-width="1" />
                        <h2 class="text-base font-bold text-gray-800 mb-1 leading-relax group-hover:-translate-y-1 transition-transform duration-300">{{ item.title }}</h2>
                        <p class="text-sm text-gray-600 text-center group-hover:-translate-y-1 transition-transform duration-300"> {{ item.description }}</p>
                    </div>
                </div>
            </div>
            <div class="bg-[#02071A] text-white py-10">
                <div class="container mx-auto flex flex-wrap justify-center md:justify-start">
                    <!-- Column 1 -->
                    <div class="w-full md:w-1/2 lg:w-1/4 px-4 mt-5 mb-8 text-center md:text-left">
                        <div class="flex flex-col md:flex-row items-center md:items-start">
                            <img src="../../../public/icon.png" alt="Logo" class="w-6 mt-[1px]" />
                            <h1 class="text-xl font-bold ml-2">MEGA SHOP</h1>
                        </div>
                        <p class="text-sm text-gray-400 mt-2 font-semibold">
                            Wrap yourself in elegance with our timeless saree fashion.
                        </p>
                        <div class="flex justify-center md:justify-start items-center mt-6 py-5">
                            <Instagram
                                class="w-6 h-auto mr-3 hover:text-[#FF5252] transition transform duration-300 hover:-translate-y-1"
                                stroke-width="1.5" />
                            <Facebook
                                class="w-6 h-auto mr-3 hover:text-[#FF5252] transition transform duration-300 hover:-translate-y-1"
                                stroke-width="1.5" />
                            <Twitter
                                class="w-6 h-auto mr-3 hover:text-[#FF5252] transition transform duration-300 hover:-translate-y-1"
                                stroke-width="1.5" />
                        </div>
                    </div>

                    <!-- Repeat for more columns -->
                    <div class="w-full md:w-1/2 lg:w-1/4 px-4 mt-5 mb-8 text-center md:text-left">
                        <div class="flex flex-col items-center md:items-start">
                            <h1 class="text-xl font-bold">OUR COMPANY</h1>
                        </div>
                        <ul class="text-md text-gray-400 mt-2 font-semibold px-2">
                            <li
                                class="mb-2 hover:text-[#FF5252] hover:translate-x-2 transform transition-all duration-600">
                                <a href="#">About Us</a>
                            </li>
                            <li
                                class="mb-2 hover:text-[#FF5252] hover:translate-x-2 transform transition-all duration-600">
                                <a href="#">Contact Us</a>
                            </li>
                            <li
                                class="mb-2 hover:text-[#FF5252] hover:translate-x-2 transform transition-all duration-600">
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li
                                class="mb-2 hover:text-[#FF5252] hover:translate-x-2 transform transition-all duration-600">
                                <a href="#">Terms of Service</a>
                            </li>
                            <li
                                class="mb-2 hover:text-[#FF5252] hover:translate-x-2 transform transition-all duration-600">
                                <a href="#">Delivery</a>
                            </li>
                            <li class="hover:text-[#FF5252] hover:translate-x-2 transform transition-all duration-600">
                                <a href="#">Legal Notice</a>
                            </li>
                        </ul>
                    </div>

                    <!-- Add more columns if needed -->
                    <div class="w-full md:w-1/2 lg:w-1/4 px-4 mt-5 mb-8 text-center md:text-left">
                        <div class="flex flex-col items-center md:items-start">
                            <h1 class="text-xl font-bold">OUR COMPANY</h1>

                        </div>

                    </div>

                    <!-- Add more columns if needed -->
                    <div class="w-full md:w-1/2 lg:w-1/4 px-4 mt-5 mb-8 text-center md:text-left">
                        <div class="flex flex-col items-center md:items-start">
                            <h1 class="text-xl font-bold">CONTACT US</h1>
                        </div>
                        <ul class="text-md text-gray-400 mt-2 font-semibold px-2 leading-tight">
                            <li
                                class="mb-2 hover:text-[#FFFFFF] hover:translate-x-2 transform transition-all duration-600">
                                <a href="#">
                                    <Mail class="w-4 h-auto inline-block mr-2" stroke-width="1.5" />
                                    <span class="">megashop@gmail.com</span>
                                </a>
                            </li>
                            <li
                                class="mb-2 hover:text-[#FFFFFF] hover:translate-x-2 transform transition-all duration-600">
                                <a href="#">
                                    <Headset class="w-4 h-auto inline-block mr-2" stroke-width="1.5" />
                                    <span class="">+8801479386163</span>
                                </a>
                            </li>
                            <li
                                class="mb-2 hover:text-[#FFFFFF] hover:translate-x-2 transform transition-all duration-600">
                                <a href="#">
                                    <Truck class="w-4 h-auto inline-block mr-2" stroke-width="1.5" />
                                    <span class="">Uttara, Dhaka, Bangladesh</span>
                                </a>
                            </li>
                        </ul>
                        <div class="w-full flex justify-center md:justify-start items-center mt-4 ml-2">
                            <img src="/images/o.png" class="w-[120px] object-cover" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <BottomStrip />
    </div>

</template>

<script setup>
import BottomStrip from './BottomStrip.vue';
import { Truck, SquareArrowLeft, Gift, Headset, FileLock2, Facebook, Twitter, Instagram, Mail } from 'lucide-vue-next';
import 'leaflet/dist/leaflet.css'


const items = [
    {
        icon: Truck,
        title: 'Free Shipping',
        description: 'Delivered to Your Door — Free of Charge For all over $100',
    },
    {
        icon: SquareArrowLeft,
        title: '30 Days Return',
        description: 'Simply return it within 30 days for an exchange.',
    },
    {
        icon: Gift,
        title: 'Best Gift',
        description: 'The best gift for your loved ones.',
    },
    {
        icon: Headset,
        title: '24/7 Support',
        description: 'We are here to help you 24/7.',
    },
    {
        icon: FileLock2,
        title: 'Secure Payment',
        description: 'Your payment is secure with us.',
    },
];
</script>

<style></style>