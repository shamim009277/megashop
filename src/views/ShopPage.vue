<template>
    <div id="shop">
        <div class="container mx-auto py-10 mt-10 px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Sidebar -->
                <div class="md:col-span-1">
                    <div class="bg-white rounded-md px-0 py-6">
                        <!-- Search Box -->
                        <div class="flex items-center justify-between mb-6">
                            <div class="relative w-full">
                                <input type="text" placeholder="Search..."
                                    class="w-full border border-gray-300 rounded-sm py-2 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-[#FF5252]" />
                                <button
                                    class="absolute right-2 top-1/2 -translate-y-1/2 text-white text-sm px-3 py-1 rounded-full">
                                    <svg class="w-5 h-5 text-gray-600 hover:text-[#FF5400]" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011.5 19.5a7.5 7.5 0 005.15-2.85z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Category Filter -->
                        <aside class="w-full mb-6">
                            <h2 class="text-lg font-semibold text-gray-800 mb-3">Categories</h2>
                            <div class="space-y-2 overflow-y-auto max-h-64">
                                <label class="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" class="peer hidden">
                                    <div
                                        class="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center peer-checked:bg-[#FF5252] peer-checked:border-[#FF5252] transition-all">
                                        <svg class="w-3 h-3 text-white hidden peer-checked:block" fill="none"
                                            stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span class="text-sm text-gray-700">Accessories (6)</span>
                                </label>
                                <label class="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" class="peer hidden">
                                    <div
                                        class="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center peer-checked:bg-[#FF5252] peer-checked:border-[#FF5252] transition-all">
                                        <svg class="w-3 h-3 text-white hidden peer-checked:block" fill="none"
                                            stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span class="text-sm text-gray-700">Clothing (12)</span>
                                </label>
                                <label class="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" class="peer hidden">
                                    <div
                                        class="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center peer-checked:bg-[#FF5252] peer-checked:border-[#FF5252] transition-all">
                                        <svg class="w-3 h-3 text-white hidden peer-checked:block" fill="none"
                                            stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span class="text-sm text-gray-700">Electronics (9)</span>
                                </label>
                                <label class="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" class="peer hidden">
                                    <div
                                        class="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center peer-checked:bg-[#FF5252] peer-checked:border-[#FF5252] transition-all">
                                        <svg class="w-3 h-3 text-white hidden peer-checked:block" fill="none"
                                            stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span class="text-sm text-gray-700">Home Appliances (4)</span>
                                </label>
                                <label class="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" class="peer hidden">
                                    <div
                                        class="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center peer-checked:bg-[#FF5252] peer-checked:border-[#FF5252] transition-all">
                                        <svg class="w-3 h-3 text-white hidden peer-checked:block" fill="none"
                                            stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span class="text-sm text-gray-700">Sports (6)</span>
                                </label>
                                <label class="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" class="peer hidden">
                                    <div
                                        class="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center peer-checked:bg-[#FF5252] peer-checked:border-[#FF5252] transition-all">
                                        <svg class="w-3 h-3 text-white hidden peer-checked:block" fill="none"
                                            stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span class="text-sm text-gray-700">Toys (13)</span>
                                </label>
                            </div>
                        </aside>

                        <!-- Brand Filter -->
                        <aside class="w-full mb-6">
                            <h2 class="text-lg font-semibold text-gray-800 mb-3">Brands</h2>
                            <div class="space-y-2">
                                <label class="flex items-center text-sm text-gray-700">
                                    <input type="checkbox" class="form-checkbox text-green-600 mr-2">
                                    Samsung (4)
                                </label>
                                <label class="flex items-center text-sm text-gray-700">
                                    <input type="checkbox" class="form-checkbox text-green-600 mr-2">
                                    Apple (7)
                                </label>
                                <label class="flex items-center text-sm text-gray-700">
                                    <input type="checkbox" class="form-checkbox text-green-600 mr-2">
                                    Nike (5)
                                </label>
                                <label class="flex items-center text-sm text-gray-700">
                                    <input type="checkbox" class="form-checkbox text-green-600 mr-2">
                                    LG (2)
                                </label>
                            </div>
                        </aside>

                        <!-- Price Filter -->
                        <aside class="w-full">
                            <h2 class="text-lg font-semibold text-gray-800 mb-4">Price Range</h2>

                            <!-- Display Selected Price Range -->
                            <div class="flex justify-between text-sm text-gray-700 mb-2">
                                <span>$<span id="minPrice">0</span></span>
                                <span>$<span id="maxPrice">1000</span></span>
                            </div>

                            <!-- Slider Input -->
                            <input type="range" id="priceRange" min="0" max="1000" step="10" value="1000"
                                class="w-full accent-[#FF5252]"
                                oninput="document.getElementById('maxPrice').textContent = this.value" />

                            <!-- Apply Button -->
                            <!-- <button
                                class="mt-4 w-full bg-[#FF5252] hover:bg-[#e24747] text-white text-sm font-medium py-2 rounded transition">
                                Apply
                            </button> -->
                        </aside>
                        <hr class="my-10 border-1 border-gray-300 border-dotted">

                        <!-- Color Filter -->
                        <aside class="w-full mb-6">
                            <h2 class="text-lg font-semibold text-gray-800 mb-6">Color</h2>
                            <div class="flex flex-wrap gap-3">
                                <!-- Red -->
                                <label class="cursor-pointer">
                                    <input type="radio" name="color" class="peer hidden">
                                    <div
                                        class="w-6 h-6 rounded-full bg-red-400 border-2 border-gray-300 peer-checked:ring-2 peer-checked:ring-red-400 peer-checked:border-red-400 transition-all">
                                    </div>
                                </label>

                                <!-- Blue -->
                                <label class="cursor-pointer">
                                    <input type="radio" name="color" class="peer hidden">
                                    <div
                                        class="w-6 h-6 rounded-full bg-blue-400 border-2 border-gray-300 peer-checked:ring-2 peer-checked:ring-blue-400 peer-checked:border-blue-400 transition-all">
                                    </div>
                                </label>

                                <!-- Green -->
                                <label class="cursor-pointer">
                                    <input type="radio" name="color" class="peer hidden">
                                    <div
                                        class="w-6 h-6 rounded-full bg-green-400 border-2 border-gray-300 peer-checked:ring-2 peer-checked:ring-green-400 peer-checked:border-green-400 transition-all">
                                    </div>
                                </label>

                                <!-- Black -->
                                <label class="cursor-pointer">
                                    <input type="radio" name="color" class="peer hidden">
                                    <div
                                        class="w-6 h-6 rounded-full bg-black border-2 border-gray-300 peer-checked:ring-2 peer-checked:ring-black peer-checked:border-black transition-all">
                                    </div>
                                </label>
                            </div>
                        </aside>

                        <!-- Size Filter -->
                        <aside class="w-full mb-6">
                            <h2 class="text-lg font-semibold text-gray-800 mb-6">Size</h2>
                            <div class="flex flex-wrap gap-3">
                                <!-- Sizes -->
                                <label class="cursor-pointer">
                                    <input type="checkbox" class="peer hidden">
                                    <div
                                        class="px-3 py-1 border border-gray-400 rounded text-sm text-gray-800 peer-checked:bg-[#FF5252] peer-checked:text-white peer-checked:border-[#FF5252] transition">
                                        XS
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input type="checkbox" class="peer hidden">
                                    <div
                                        class="px-3 py-1 border border-gray-400 rounded text-sm text-gray-800 peer-checked:bg-[#FF5252] peer-checked:text-white peer-checked:border-[#FF5252] transition">
                                        S
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input type="checkbox" class="peer hidden">
                                    <div
                                        class="px-3 py-1 border border-gray-400 rounded text-sm text-gray-800 peer-checked:bg-[#FF5252] peer-checked:text-white peer-checked:border-[#FF5252] transition">
                                        M
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input type="checkbox" class="peer hidden">
                                    <div
                                        class="px-3 py-1 border border-gray-400 rounded text-sm text-gray-800 peer-checked:bg-[#FF5252] peer-checked:text-white peer-checked:border-[#FF5252] transition">
                                        L
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input type="checkbox" class="peer hidden">
                                    <div
                                        class="px-3 py-1 border border-gray-400 rounded text-sm text-gray-800 peer-checked:bg-[#FF5252] peer-checked:text-white peer-checked:border-[#FF5252] transition">
                                        XL
                                    </div>
                                </label>
                            </div>
                        </aside>

                        <hr class="my-10 border-1 border-gray-300 border-dotted">

                        <aside class="w-full my-12">
                            <h2 class="text-lg font-semibold text-gray-800 mb-6">Top Product</h2>

                            <ul class="space-y-4">
                                <!-- Third Product -->
                                <li v-for="item in topItems" :key="item" class="flex items-start space-x-4">
                                    <a href="#" class="w-16 h-16 shrink-0"><img :src="item.image" alt="Fashion T-shirt"
                                            class="w-full h-full object-cover rounded"></a>
                                    <div class="">
                                        <h5 class="text-xs sm:text-sm font-medium text-gray-700 hover:text-[#FF5252]"><a
                                                href="#">{{ item.name }}</a></h5>
                                        <div class="flex items-center mt-1 space-x-1 text-yellow-400">
                                            <span>★</span><span>★</span><span>★</span><span>★</span><span
                                                class="text-gray-300">★</span>
                                        </div>
                                        <span class="text-xs sm:text-sm text-[#FF5252] font-semibold">${{
                                            item.price}}</span>
                                    </div>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>

                <!-- Main Product Content -->
                <div class="md:col-span-3">
                    <div class="rounded-md flex items-center justify-between py-4 mt-3">
                        <!-- Menu Icon (Vertically Centered) -->
                        <div class="flex items-center justify-start h-full">
                            <Menu class="w-6 h-6 text-gray-600 hover:text-[#FF5400]" stroke-width="2.0" />
                            <span class="ml-4 text-gray-600 font-semibold">Showing 1–9 of 80 results</span>
                        </div>

                        <!-- Select Dropdown -->
                        <div class="flex items-center justify-end w-1/2 md:w-1/3 lg:w-1/4">
                            <select @change="shortProducts"
                                class="p-1 rounded-md text-sm focus:outline-none focus:ring-0 text-gray-600 font-semibold w-1/2">
                                <option value="option1">Filter Product</option>
                                <option value="option1">Price Low to High</option>
                                <option value="option1">Price High to Low</option>
                                <option value="option2">Sort By Price</option>
                                <option value="option3">Size A-Z</option>
                            </select>
                        </div>
                    </div>

                    <!-- Product Grid Section -->
                    <div class="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <!-- Product Card Placeholder (Repeat as needed) -->
                        <div v-for="(item, index) in products" :key="item"
                            class="bg-white shadow-md rounded-sm group overflow-hidden relative transition hover:shadow-lg hover:scale-105 duration-300">
                            <img :src=item.image alt="Product" class="w-full h-auto object-cover" />
                            <div class="p-4">
                                <h3 class="text-sm font-semibold text-gray-800 leading-tight">{{ item.name }}</h3>
                                <p class="text-xl sm:text-xl md:text-xl lg:text-xl text-[#FF5252] pt-1 font-bold">{{
                                    item.price }}<span class="text-sm ml-2 text-gray-400 font-normal line-through">{{
                                        item.pre_price }}</span></p>
                                <div class="flex items-center mt-1 space-x-1 text-yellow-400">
                                    <span>★</span><span>★</span><span>★</span><span>★</span><span
                                        class="text-gray-300">★</span>
                                </div>
                            </div>

                            <div v-if="index % 2 == 0"
                                class="absolute top-0 left-0 bg-[#FF5252] text-white text-xs font-semibold px-2 py-1 rounded-br-lg">
                                <h1>- {{ index }} %</h1>
                            </div>
                            <!-- Hover Buttons -->
                            <div class="absolute inset-0 flex justify-end pr-2 pt-4">
                                <div
                                    class="flex flex-col space-y-2 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                                    <button
                                        class="bg-white p-3 rounded-full shadow border border-gray-300 hover:bg-gray-100">
                                        <ShoppingCart class="w-4 h-4 text-gray-800 hover:text-[#FF5252]"
                                            stroke-width="2.0" />
                                    </button>
                                    <button
                                        class="bg-white p-3 rounded-full shadow border border-gray-300 hover:bg-gray-100">
                                        <Heart class="w-4 h-4 text-gray-800 hover:text-[#FF5252]" stroke-width="2.0" />
                                    </button>
                                    <button
                                        class="bg-white p-3 rounded-full shadow border border-gray-300 hover:bg-gray-100">
                                        <RefreshCcw class="w-4 h-4 text-gray-800 hover:text-[#FF5252]"
                                            stroke-width="2.0" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- Add more product cards here -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import image1 from '/images/airpodes/1.webp';
import image2 from '/images/airpodes/2.webp';
import image3 from '/images/airpodes/3.webp';
import image4 from '/images/airpodes/4.webp';
import image5 from '/images/airpodes/5.webp';
import image6 from '/images/airpodes/6.webp';
import { ShoppingCart, Heart, RefreshCcw } from 'lucide-vue-next';

import { Menu } from 'lucide-vue-next';

const topItems = [
    {
        id: 1,
        name: 'Apple AirPods Pro',
        price: 249.99,
        image: image1
    },
    {
        id: 2,
        name: 'Apple AirPods Max',
        price: 549.99,
        image: image2
    },
    {
        id: 3,
        name: 'Apple AirPods (3rd Gen)',
        price: 179.99,
        image: image3
    },
    {
        id: 4,
        name: 'Apple AirPods (2nd Gen)',
        price: 129.99,
        image: image4
    },
    {
        id: 5,
        name: 'Apple AirPods Pro (2nd Gen)',
        price: 249.99,
        image: image5
    },
    {
        id: 6,
        name: 'Apple AirPods Max (Space Gray)',
        price: 549.99,
        image: image6
    }
];

const products = ref(
    [
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image1,
            price: '$28.99',
            pre_price: '$33.99'
        },
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image2,
            price: '$19.99',
            pre_price: '$23.99'
        },
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image3,
            price: '$35.99',
            pre_price: '$39.99'
        },
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image4,
            price: '$38.99',
            pre_price: '$42.99'
        },
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image5,
            price: '$13.99',
            pre_price: '$17.99'
        },
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image6,
            price: '$18.99',
            pre_price: '$22.99'
        },
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image1,
            price: '$28.99',
            pre_price: '$33.99'
        },
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image2,
            price: '$19.99',
            pre_price: '$23.99'
        },
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image3,
            price: '$35.99',
            pre_price: '$39.99'
        },
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image4,
            price: '$38.99',
            pre_price: '$42.99'
        },
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image5,
            price: '$13.99',
            pre_price: '$17.99'
        },
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image6,
            price: '$18.99',
            pre_price: '$22.99'
        },
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image1,
            price: '$28.99',
            pre_price: '$33.99'
        },
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image2,
            price: '$19.99',
            pre_price: '$23.99'
        },
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image3,
            price: '$35.99',
            pre_price: '$39.99'
        },
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image4,
            price: '$38.99',
            pre_price: '$42.99'
        },
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image5,
            price: '$13.99',
            pre_price: '$17.99'
        },
        {
            name: 'TWS wireless earbuds Bluetooth headphone Touch Control Earphone',
            image: image6,
            price: '$18.99',
            pre_price: '$22.99'
        }
    ]
);

const shortProducts = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === 'option1') {
        products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (selectedOption === 'option2') {
        products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (selectedOption === 'option3') {
        products.sort((a, b) => a.name.localeCompare(b.name));
    }
};
</script>

<style></style>