<template>
    <div id="product" class="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">

            <!-- Left Section (Images) -->
            <div class="md:col-span-2">
                <div class="w-full mx-auto p-2 sm:p-4">

                    <!-- Main Image -->
                    <div class="relative border border-gray-300 rounded-md overflow-hidden mb-4 cursor-zoom-in"
                        @click="openModal = true">
                        <VueInnerImageZoom :src="selectedImage" :zoomSrc="selectedImage" zoomType="hover" zoomPreload
                            fullscreenOnMobile />
                    </div>

                    <!-- Thumbnails -->
                    <div class="flex space-x-2 sm:space-x-3 overflow-x-auto">
                        <div v-for="(img, index) in images" :key="index" class="cursor-pointer border-2 rounded-md"
                            :class="selectedImage === img ? 'border-[#FF5252]' : 'border-gray-300'"
                            @click="selectedImage = img">
                            <img :src="img" class="w-16 sm:w-20 h-16 sm:h-20 object-cover" alt="Thumbnail" />
                        </div>
                    </div>

                    <!-- Modal Preview -->
                    <div v-if="openModal"
                        class="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
                        <div class="relative max-w-3xl w-full px-4">
                            <button @click="openModal = false"
                                class="absolute top-2 right-2 text-white text-2xl hover:text-red-400">&times;</button>
                            <img :src="selectedImage" class="w-full max-h-[80vh] object-contain rounded" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Section (Details) -->
            <div class="md:col-span-3 rounded-sm px-2 sm:px-4 py-4 space-y-4">

                <!-- Category -->
                <h1 class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">Electronics ||
                    Headphones</h1>

                <!-- Product Title -->
                <h2 class="text-xl sm:text-2xl font-bold text-gray-800">Apple AirPods Max</h2>

                <!-- Star Rating -->
                <div class="flex items-center space-x-2">
                    <div class="flex space-x-1 text-yellow-400">
                        <template v-for="i in 5" :key="i">
                            <svg v-if="i <= 4" class="w-4 sm:w-5 h-4 sm:h-5 fill-current" viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.565-.955L10 0l2.947 5.955 6.565.955-4.756 4.635 1.122 6.545z" />
                            </svg>
                            <svg v-else class="w-4 sm:w-5 h-4 sm:h-5 fill-current text-gray-300" viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.565-.955L10 0l2.947 5.955 6.565.955-4.756 4.635 1.122 6.545z" />
                            </svg>
                        </template>
                    </div>
                    <span class="text-xs sm:text-sm text-gray-500">(120 reviews)</span>
                </div>

                <!-- Description -->
                <p class="text-sm text-gray-600">Experience high-fidelity audio with Apple AirPods Max. Comfortable
                    design, immersive
                    sound, andactive noise cancellation. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
                    ipsum! Repellat
                    fugiat sed impedit vitae eius ad suscipit accusantium placeat.</p>

                <!-- Price -->
                <p class="text-xl sm:text-2xl font-bold text-[#FF5252]">$199.99 <span
                        class="text-sm text-gray-400 font-semibold line-through">$245.00</span></p>

                <!-- Colors -->
                <div>
                    <h1 class="text-base sm:text-lg font-semibold text-gray-600 pb-2">Color</h1>
                    <div class="flex space-x-2">
                        <label v-for="color in colors" :key="color.name">
                            <input type="radio" name="color" :value="color.name" v-model="selectedColor"
                                class="sr-only peer" />
                            <div
                                :class="['w-6 h-6 rounded-full border-2 border-gray-400', color.class, 'peer-checked:ring-2 peer-checked:ring-red-500']">
                            </div>
                        </label>
                    </div>
                </div>

                <!-- Sizes -->
                <div>
                    <h1 class="text-base sm:text-lg font-semibold text-gray-600 pb-2">Size</h1>
                    <div class="flex flex-wrap gap-2">
                        <label v-for="size in sizes" :key="size" class="cursor-pointer">
                            <input type="checkbox" v-model="selectedSizes" :value="size" class="peer hidden">
                            <div
                                class="px-3 py-1 border border-gray-400 rounded text-sm text-gray-800 peer-checked:bg-[#FF5252] peer-checked:text-white peer-checked:border-[#FF5252] transition">
                                {{ size }}
                            </div>
                        </label>
                    </div>
                </div>

                <!-- Quantity -->
                <div class="flex items-center space-x-3 mt-4">
                    <div class="flex items-center border border-gray-300 rounded-md overflow-hidden">
                        <button @click="decrement"
                            class="px-3 py-1 text-lg font-semibold bg-gray-100 hover:bg-gray-200">-</button>
                        <input type="number" v-model="quantity"
                            class="w-12 text-center border-l border-r border-gray-300 focus:outline-none" min="1"
                            :max="stock" />
                        <button @click="increment"
                            class="px-3 py-1 text-lg font-semibold bg-gray-100 hover:bg-gray-200">+</button>
                    </div>
                    <span class="text-xs sm:text-sm text-[#FF5252] font-bold">In stock: {{ stock }}</span>
                </div>

                <!-- Buttons -->
                <div class="flex flex-col sm:flex-row sm:items-center gap-3 mt-6">
                    <button
                        class="w-full sm:w-auto font-semibold bg-[#FF5252] text-white py-2 px-6 rounded-md hover:bg-[#F85606] transition duration-300">
                        Add to Cart
                    </button>
                    <button @click="toggleWishlist"
                        class="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded hover:bg-gray-100">
                        <svg class="w-5 h-5" :class="wishlist ? 'fill-red-500' : 'fill-none stroke-red-500'"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41 1.01 4.13 2.44h1.74C13.09 6.01 14.76 5 16.5 5 18.58 5 20 6.42 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span>{{ wishlist ? "Remove from Wishlist" : "Add to Wishlist" }}</span>
                    </button>
                    <button @click="toggleCompare"
                        class="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded hover:bg-gray-100">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path
                                d="M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5m9-18h-5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                        </svg>
                        <span>{{ compare ? "Remove from Compare" : "Add to Compare" }}</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="flex flex-col sm:flex-row mt-8">
            <div class="w-full bg-[#F2F5F6] rounded-md">
                <div class="flex items-center space-x-2">
                    <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
                        :class="['py-2 px-4 text-lg font-medium focus:outline-none transition', activeTab === tab ? 'border-b-2 border-[#FF5252] text-[#FF5252]' : 'text-gray-500 hover:text-[#FF5252]']">
                        {{ tab }}
                    </button>
                </div>

                <!-- Tabs Content -->
                <div class="p-4 bg-[#F2F5F6]">
                    <div v-if="activeTab === 'Overview'">
                        <div class="w-full mx-auto py-8">
                            <h3 class="text-xl font-semibold text-gray-800 mb-4">Additional Information</h3>

                            <div class="bg-white p-6 rounded-lg shadow-sm">
                                <!-- Additional Info Text -->
                                <p class="text-gray-700 text-sm mb-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut
                                    aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu
                                    fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit
                                    anim id est laborum.

                                    The purpose of lorem ipsum is to create a natural looking block of text (sentence,
                                    paragraph, page, etc.) that
                                    doesn't distract from the layout. A practice not without controversy, laying out
                                    pages with
                                    meaningless filler
                                    text can be very useful when the focus is meant to be on design, not content.
                                </p>

                                <!-- Size Chart -->
                                <h4 class="text-lg font-semibold text-gray-800 mb-3">Size Chart</h4>
                                <div class="overflow-x-auto">
                                    <table class="min-w-full bg-white rounded-lg border shadow-sm">
                                        <thead class="bg-gray-100 text-gray-700 text-sm">
                                            <tr>
                                                <th class="text-left px-4 py-3">Size</th>
                                                <th class="text-left px-4 py-3">Chest (inches)</th>
                                                <th class="text-left px-4 py-3">Waist (inches)</th>
                                                <th class="text-left px-4 py-3">Length (inches)</th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-gray-700 text-sm">
                                            <tr class="border-t">
                                                <td class="px-4 py-2 font-medium">S</td>
                                                <td class="px-4 py-2">34-36</td>
                                                <td class="px-4 py-2">28-30</td>
                                                <td class="px-4 py-2">25</td>
                                            </tr>
                                            <tr class="border-t">
                                                <td class="px-4 py-2 font-medium">M</td>
                                                <td class="px-4 py-2">38-40</td>
                                                <td class="px-4 py-2">32-34</td>
                                                <td class="px-4 py-2">26</td>
                                            </tr>
                                            <tr class="border-t">
                                                <td class="px-4 py-2 font-medium">L</td>
                                                <td class="px-4 py-2">42-44</td>
                                                <td class="px-4 py-2">36-38</td>
                                                <td class="px-4 py-2">27</td>
                                            </tr>
                                            <tr class="border-t">
                                                <td class="px-4 py-2 font-medium">XL</td>
                                                <td class="px-4 py-2">46-48</td>
                                                <td class="px-4 py-2">40-42</td>
                                                <td class="px-4 py-2">28</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="activeTab === 'Reviews'">
                        <div class="w-full mx-auto mt-6 py-10">
                            <h3 class="text-xl font-semibold text-gray-800 mb-6">Customer Reviews</h3>

                            <!-- Review List -->
                            <div v-for="review in reviews" :key="review"
                                class="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow-sm mb-4 group hover:opacity-80 hover:shadow-amber-800">
                                <!-- Avatar & Name -->
                                <div class="flex flex-col items-start sm:w-28">
                                    <img :src="review.image" alt="User Avatar"
                                        class="w-16 h-16 rounded-full border border-gray-400 object-cover mb-2" />
                                    <h4 class="text-sm font-semibold text-gray-500">{{ review.name }}</h4>
                                </div>

                                <!-- Review Details -->
                                <div class="flex-1">
                                    <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                        <p class="text-xs text-gray-500">{{ review.date }}</p>
                                        <!-- Dynamic Star Rating -->
                                        <div class="flex space-x-1 mt-1 sm:mt-0">
                                            <template v-for="n in totalStars" :key="n">
                                                <svg class="w-4 h-4"
                                                    :class="n <= review.rating ? 'text-yellow-400' : 'text-gray-300'"
                                                    fill="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        d="M12 .587l3.668 7.57 8.332 1.151-6.064 5.81 1.428 8.265L12 18.896l-7.364 4.487 1.428-8.265L.001 9.308l8.331-1.151z" />
                                                </svg>
                                            </template>
                                        </div>
                                    </div>
                                    <p class="text-sm text-gray-700">{{ review.text }}</p>
                                </div>
                            </div>

                            <!-- Add Review Section -->
                            <h3 class="text-xl font-semibold text-gray-800 mt-8 my-6">Add a Review</h3>

                            <!-- Rating Input -->
                            <div class="flex items-center space-x-1 mb-4">
                                <label v-for="n in 5" :key="n" class="cursor-pointer">
                                    <input type="radio" name="rating" :value="n" class="hidden peer" />
                                    <svg class="w-6 h-6 text-gray-300 peer-checked:text-yellow-400 hover:text-yellow-400 transition"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 .587l3.668 7.57 8.332 1.151-6.064 5.81 1.428 8.265L12 18.896l-7.364 4.487 1.428-8.265L.001 9.308l8.331-1.151z" />
                                    </svg>
                                </label>
                            </div>

                            <!-- Name & Email -->
                            <div class="flex flex-col sm:flex-row gap-4 mb-4">
                                <div class="flex flex-col sm:w-1/2">
                                    <label for="name" class="text-sm font-semibold text-gray-600 mb-1">Name</label>
                                    <input type="text" id="name" placeholder="Your Name" class="input" />
                                </div>
                                <div class="flex flex-col sm:w-1/2">
                                    <label for="email" class="text-sm font-semibold text-gray-600 mb-1">Email</label>
                                    <input type="email" id="email" placeholder="Your Email" class="input" />
                                </div>
                            </div>

                            <!-- Review Textarea -->
                            <div class="mb-4">
                                <label for="review"
                                    class="text-sm font-semibold text-gray-600 mb-1 block">Review</label>
                                <textarea id="review" rows="4" placeholder="Write your review here..."
                                    class="input"></textarea>
                            </div>

                            <!-- Submit Button -->
                            <div class="text-right">
                                <button
                                    class="bg-[#FF5252] hover:opacity-80 text-white font-semibold px-6 py-2 rounded-lg transition-all text-sm shadow-sm">
                                    Submit Review
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import VueInnerImageZoom from 'vue-inner-image-zoom'

const stock = ref(10)
const wishlist = ref(false)
const compare = ref(false)
const quantity = ref(1)

const openModal = ref(false)
const selectedColor = ref('black')

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
const colors = [
    { name: 'black', class: 'bg-black' },
    { name: 'white', class: 'bg-white' },
    { name: 'blue', class: 'bg-blue-400' },
    { name: 'red', class: 'bg-red-400' }
]

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
const selectedSizes = ref([])

const increment = () => {
    if (quantity.value < stock.value) quantity.value++
}
const decrement = () => {
    if (quantity.value > 1) quantity.value--
}

const toggleWishlist = () => {
    wishlist.value = !wishlist.value
}
const toggleCompare = () => {
    compare.value = !compare.value
}

const tabs = ['Overview','Reviews'];
const activeTab = ref('Overview');
const totalStars = 5;

const reviews = [
    {
        name: 'John Doe',
        date: 'December 4, 2024 3:12 PM',
        image: '/images/airpodes/1.webp',
        rating: 4,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolore ducimus id architecto sapiente. Atque asperiores doloremque velit ipsam quos eaque tenetur, dolorum placeat quidem porro omnis delectus ea reiciendis.'
    },
    {
        name: 'Jane Smith',
        date: 'December 5, 2024 1:45 PM',
        image: '/images/airpodes/2.webp',
        rating: 5,
        text: 'Great product! Highly recommend it to everyone.'
    },
    {
        name: 'Alice Johnson',
        date: 'December 6, 2024 10:30 AM',
        image: '/images/airpodes/3.webp',
        rating: 3,
        text: 'It\'s okay, but I expected more for the price.'
    },
    {
        name: 'Bob Brown',
        date: 'December 7, 2024 8:15 AM',
        image: '/images/airpodes/4.webp',
        rating: 2,
        text: 'Not satisfied with the quality. Would not buy again.'
    },
    {
        name: 'Charlie Green',
        date: 'December 8, 2024 5:00 PM',
        image: '/images/airpodes/5.webp',
        rating: 1,
        text: 'Terrible experience. The product broke within a week.'
    }
]
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>