<template>
  <!-- Navbar -->
  <nav class="sticky top-0 z-50 bg-white shadow-md py-3">
    <div class="container mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between">

      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img src="/ico.png" class="w-10 sm:w-[50px] object-cover" alt="Logo" />
      </div>

      <!-- Search bar (visible on md+) -->
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
            <div class="group relative">
              <!-- Shopping Cart Icon -->
              <ShoppingCart class="w-5 h-5 text-gray-600 hover:text-[#FF5400]" stroke-width="2.0" />
              <span class="absolute -top-2 -right-2 bg-[#FF5400] text-white text-xs px-1 rounded-full">2</span>

              <!-- Cart Summary -->
              <div
                class="absolute right-0 mt-3 w-72 bg-white shadow-lg rounded-lg p-4 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 origin-top-right z-50 pointer-events-none group-hover:pointer-events-auto">
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
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Heart, UserRoundPlus, ShoppingCart, Search, Trash2 } from 'lucide-vue-next';
import image1 from '/images/airpodes/1.webp';
import image2 from '/images/airpodes/2.webp';
import image3 from '/images/airpodes/3.webp';
import { RouterLink } from 'vue-router';

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
</script>
