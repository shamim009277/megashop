<template>
  <!-- Navbar -->
  <nav class="sticky top-0 z-50 bg-white shadow-md py-3">
    <div class="container mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between">

      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img src="/ico.png" class="w-10 sm:w-[50px] object-cover" alt="Logo" />
      </div>

      <!-- Search bar (visible on md) -->
      <div class="hidden md:flex flex-1 justify-center mt-3 md:mt-0">
        <div class="relative w-full max-w-md">
          <input type="text" placeholder="Search products..."
            class="w-full border border-gray-300 rounded-sm py-2 pl-4 pr-12 focus:outline-none focus:ring-1 focus:ring-[#FF5252]" />
          <button class="absolute right-1 top-1/2 -translate-y-1/2 pr-2">
            <Search class="w-5 h-5 text-gray-600 hover:text-[#FF5400]" stroke-width="2.0" />
          </button>
        </div>
      </div>

      <!-- Icons -->
      <div class="flex items-center space-x-3 sm:space-x-4 mt-3 sm:mt-0">
        <ul class="flex items-center space-x-3 sm:space-x-4">
          <li>
            <UserRoundPlus class="w-5 h-5 text-gray-600 hover:text-[#FF5400]" stroke-width="2.0" />
          </li>
          <li>
            <Heart class="w-5 h-5 text-gray-600 hover:text-[#FF5400]" stroke-width="2.0" />
          </li>

          <!-- Cart -->
          <!-- Cart -->
          <li class="relative">
            <div class="group relative md:cursor-pointer">

              <!-- Icon with mobile click handler -->
              <button @click="toggleCartDropdown" class="md:pointer-events-none relative">
                <ShoppingCart class="w-5 h-5 text-gray-600 hover:text-[#FF5400]" stroke-width="2.0" />
                <span class="absolute -top-2 -right-2 bg-[#FF5400] text-white text-xs px-1 rounded-full">2</span>
              </button>

              <!-- Cart Dropdown -->
              <div
                class="absolute right-0 mt-3 w-72 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 origin-top-right z-50"
                :class="{
                  'md:opacity-0 md:scale-95 md:group-hover:opacity-100 md:group-hover:scale-100 md:pointer-events-none md:group-hover:pointer-events-auto':
                    true,
                  'opacity-100 scale-100 pointer-events-auto': showCartDropdown,
                  'opacity-0 scale-95 pointer-events-none': !showCartDropdown
                }">
                <!-- Cart Contents -->
                <h3 class="text-base font-semibold text-gray-600 mb-4">Cart Summary</h3>
                <ul class="space-y-4 max-h-60 overflow-y-auto">
                  <li v-for="(item, index) in topItems" :key="item.id || index"
                    class="flex items-start justify-between space-x-4">
                    <div class="flex space-x-4">
                      <a href="#" class="w-12 h-12 shrink-0">
                        <img :src="item.image" alt="Product" class="w-full h-full object-cover rounded" />
                      </a>
                      <div>
                        <h5 class="text-sm font-medium text-gray-700">
                          <a href="#">{{ item.name }}</a>
                        </h5>
                        <span class="text-sm text-[#FF5252] font-semibold">
                          ${{ item.price }}
                        </span>
                      </div>
                    </div>
                    <button @click="removeItem(index)" title="Remove">
                      <Trash2 class="w-4 h-4 text-gray-600 hover:text-[#FF5400]" stroke-width="2.0" />
                    </button>
                  </li>
                </ul>

                <hr class="my-4 border-gray-300" />
                <div class="text-sm text-gray-600 font-semibold flex justify-between py-1">
                  <span>Subtotal</span>
                  <span>${{ totalAmount.toFixed(2) }}</span>
                </div>
                <div class="text-sm text-gray-600 font-semibold flex justify-between py-1">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <div class="text-sm text-gray-600 font-semibold flex justify-between py-1">
                  <span>Total</span>
                  <span>${{ totalAmount.toFixed(2) }}</span>
                </div>
                <hr class="my-4 border-gray-300" />
                <RouterLink to="/checkout"
                  class="block w-full bg-[#FF5252] text-white text-center py-2 rounded-md hover:bg-[#FF6B6B] transition mb-2">
                  Checkout
                </RouterLink>
                <RouterLink to="/cart"
                  class="block w-full bg-[#FF5252] text-white text-center py-2 rounded-md hover:bg-[#FF6B6B] transition">
                  View Cart
                </RouterLink>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Mobile Search bar (shown below navbar on small screens) -->
      <div class="w-full block md:hidden mt-3">
        <div class="relative w-full">
          <input type="text" placeholder="Search products..."
            class="w-full border border-gray-300 rounded-sm py-2 pl-4 pr-12 focus:outline-none focus:ring-1 focus:ring-[#FF5252]" />
          <button class="absolute right-1 top-1/2 -translate-y-1/2">
            <Search class="w-5 h-5 text-gray-600 hover:text-[#FF5400]" stroke-width="2.0" />
          </button>
        </div>
      </div>
    </div>
    <hr class="my-2 border-gray-300" />


    <div class="container mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between relative">
      <!-- All Categories Button with Hover -->
      <div class="relative group">
        <!-- Button -->
        <button class="flex items-center w-60 justify-between px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded">
          <!-- Left Icon and Text -->
          <div class="flex items-center space-x-2">
            <!-- Menu Icon -->
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span>All Categories</span>
          </div>

          <!-- Right Arrow Icon (rotates on hover) -->
          <svg class="w-4 h-4 text-gray-500 transform transition-transform duration-300 group-hover:rotate-90"
            fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Dropdown Content -->
        <div class="absolute left-0 mt-2 w-60 bg-white border border-gray-200 rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300 z-50">
          <ul class="py-2 text-sm text-gray-700">
            <li class="flex items-center px-4 py-2 hover:bg-gray-100 space-x-2">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
              </svg>
              <span>Electronics</span>
            </li>
            <li class="flex items-center px-4 py-2 hover:bg-gray-100 space-x-2">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
              </svg>
              <span>Fashion</span>
            </li>
            <li class="flex items-center px-4 py-2 hover:bg-gray-100 space-x-2">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
              </svg>
              <span>Toys</span>
            </li>
            <li class="flex items-center px-4 py-2 hover:bg-gray-100 space-x-2">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
              </svg>
              <span>Beauty & Makeup</span>
            </li>
            <li class="flex items-center px-4 py-2 hover:bg-gray-100 space-x-2">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
              </svg>
              <span>Foods</span>
            </li>
            <li class="flex items-center px-4 py-2 hover:bg-gray-100 space-x-2">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
              </svg>
              <span>Shoes</span>
            </li>
            <li class="flex items-center px-4 py-2 hover:bg-gray-100 space-x-2">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
              </svg>
              <span>Ferniture</span>
            </li>
            <li class="flex items-center px-4 py-2 hover:bg-gray-100 space-x-2">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
              </svg>
              <span>Sports</span>
            </li>
          </ul>
        </div>
      </div>


      <!-- Other Navigation Links -->
      <div class="text-base text-gray-600">
        <ul class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-4">
          <li v-for="(item, index) in menuItems" :key="index">
            <RouterLink :to="item.link"
              class="relative text-gray-700 hover:text-[#FF5400] font-medium transition duration-300 before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-[#FF5400] hover:before:w-full before:transition-all before:duration-300">
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Heart, UserRoundPlus, ShoppingCart, Search, Trash2 } from 'lucide-vue-next';
import image1 from '/images/airpodes/1.webp';
import image2 from '/images/airpodes/2.webp';
import image3 from '/images/airpodes/3.webp';
import { RouterLink } from 'vue-router';

const showCartDropdown = ref(false);

const toggleCartDropdown = () => {
  showCartDropdown.value = !showCartDropdown.value;
};

const closeCartDropdown = () => {
  showCartDropdown.value = false;
};

const topItems = ref([
  { id: 1, name: 'Apple AirPods Pro', price: 249.99, image: image1 },
  { id: 2, name: 'Apple AirPods Max', price: 549.99, image: image2 },
  { id: 3, name: 'Apple AirPods (3rd Gen)', price: 179.99, image: image3 }
]);

const removeItem = (index) => {
  topItems.value.splice(index, 1);
};

const totalAmount = computed(() => {
  return topItems.value.reduce((acc, item) => acc + item.price, 0);
});

const menuItems = [
  { label: 'Home', link: '/' },
  { label: 'About Us', link: '#' },
  { label: 'Shop', link: '/shop' },
  { label: 'Terms & Conditions', link: '#' },
  { label: 'Privacy Policy', link: '#' },
  { label: 'Return Policy', link: '#' },
];
</script>
