<template>
    <div id="product" class="container mx-auto px-6 py-8">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div class="lg:col-span-2">
                <div class="w-full mx-auto p-4">
                    <!-- Main Image -->
                    <div class="relative border border-gray-300 rounded-md overflow-hidden mb-4 cursor-zoom-in"
                        @click="openModal = true">
                        <img :src="selectedImage"
                            class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            alt="Main Image" />
                    </div>

                    <!-- Thumbnails -->
                    <div class="flex space-x-3 overflow-x-auto">
                        <div v-for="(img, index) in images" :key="index"
                            class="cursor-pointer border-1 rounded-md overflow-hidden"
                            :class="selectedImage === img ? 'border-[#FF5252]' : 'border-gray-300'"
                            @click="selectedImage = img">
                            <img :src="img" class="w-20 h-20 object-cover" alt="Thumbnail" />
                        </div>
                    </div>

                    <!-- Modal Preview -->
                    <div v-if="openModal"
                        class="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
                        <div class="relative max-w-3xl w-full">
                            <button @click="openModal = false"
                                class="absolute top-2 right-2 text-white text-2xl hover:text-red-400">
                                &times;
                            </button>
                            <img :src="selectedImage" class="w-full max-h-[80vh] object-contain rounded" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-3 rounded-sm px-4 py-4 space-y-4">
                <!-- Category -->
                <h1 class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Electronics || Headphones</h1>

                <!-- Product Title -->
                <h2 class="text-2xl font-bold text-gray-800">Apple AirPods Max</h2>

                <!-- Star Rating -->
                <div class="flex items-center space-x-2">
                    <div class="flex space-x-1 text-yellow-400">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.565-.955L10 0l2.947 5.955 6.565.955-4.756 4.635 1.122 6.545z" />
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.565-.955L10 0l2.947 5.955 6.565.955-4.756 4.635 1.122 6.545z" />
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.565-.955L10 0l2.947 5.955 6.565.955-4.756 4.635 1.122 6.545z" />
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.565-.955L10 0l2.947 5.955 6.565.955-4.756 4.635 1.122 6.545z" />
                        </svg>
                        <svg class="w-5 h-5 fill-current text-gray-300" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.565-.955L10 0l2.947 5.955 6.565.955-4.756 4.635 1.122 6.545z" />
                        </svg>
                    </div>
                    <span class="text-sm text-gray-500">(120 reviews)</span>
                </div>
                <!-- Description -->
                <p class="text-sm text-gray-600">
                    Experience high-fidelity audio with Apple AirPods Max. Comfortable design, immersive sound, and
                    active noise cancellation. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem velit fuga enim amet dolores, voluptate unde maiores iure tempora?
                </p>

                <!-- Price -->
                <p class="text-2xl font-bold text-[#FF5252]">$199.99</p>

                <!-- Colors -->
                <div class="flex items-center space-x-2">
                    <span class="text-sm font-medium text-gray-700">Color:</span>
                    <button class="w-6 h-6 rounded-full border-2 border-gray-300 bg-black"></button>
                    <button class="w-6 h-6 rounded-full border-2 border-gray-300 bg-white"></button>
                    <button class="w-6 h-6 rounded-full border-2 border-gray-300 bg-blue-500"></button>
                </div>

                <!-- Sizes -->
                <div class="flex items-center space-x-2">
                    <span class="text-sm font-medium text-gray-700">Size:</span>
                    <button class="px-3 py-1 text-sm border border-gray-300 rounded hover:border-[#FF5252]">S</button>
                    <button class="px-3 py-1 text-sm border border-gray-300 rounded hover:border-[#FF5252]">M</button>
                    <button class="px-3 py-1 text-sm border border-gray-300 rounded hover:border-[#FF5252]">L</button>
                    <button class="px-3 py-1 text-sm border border-gray-300 rounded hover:border-[#FF5252]">XL</button>
                </div>

                

                <!-- Add to Cart -->
                <button class="w-full sm:w-auto bg-[#FF5252] text-white py-2 px-6 rounded-md hover:bg-[#F85606] transition duration-300">
                    Add to Cart
                </button>
            </div>


        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const images = [
    '/images/airpodes/1.webp',
    '/images/airpodes/2.webp',
    '/images/airpodes/3.webp',
    '/images/airpodes/4.webp',
    '/images/airpodes/5.webp',
    '/images/airpodes/6.webp',
    '/images/airpodes/7.webp',
]

const selectedImage = ref(images[0])
const openModal = ref(false)
</script>

<style></style>