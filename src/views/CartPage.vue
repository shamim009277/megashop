<template>
  <div id="cart-page" class="bg-[#FEF7F5]">
    <div class="container mx-auto px-6 py-8">
      <!-- <h1 class="text-2xl sm:text-3xl font-bold text-center text-gray-600 mb-6">Your Cart</h1> -->
      <div v-if="cartItems.length" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <div class="bg-[#FAF7F5] shadow-md rounded-md p-4 sm:p-6">
            <h2 class="text-md sm:text-lg font-bold mb-4 text-gray-600">Items in your cart</h2>

            <!-- Responsive Table Container -->
            <div class="overflow-x-auto">
              <table class="min-w-full border border-gray-200 rounded-md shadow text-sm sm:text-base">
                <thead>
                  <tr class="text-left text-gray-500 bg-gray-100">
                    <th class="p-4">Product</th>
                    <th class="p-4">Name</th>
                    <th class="p-4">Quantity</th>
                    <th class="p-4">Price</th>
                    <th class="p-4">Total</th>
                    <th class="p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cartItems" :key="item.id" class="border-t border-gray-300 text-gray-700">

                    <!-- Image -->
                    <td class="p-4">
                      <img :src="item.image" alt="Product" class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded" />
                    </td>

                    <!-- Name -->
                    <td class="p-4 font-medium text-gray-800">{{ item.name }}</td>

                    <!-- Quantity Controls -->
                    <td class="p-4">
                      <div class="flex items-center space-x-2">
                        <button @click="decrementQty(item)"
                          class="bg-gray-200 text-gray-700 px-2 rounded hover:bg-gray-300">-</button>
                        <span>{{ item.quantity }}</span>
                        <button @click="incrementQty(item)"
                          class="bg-gray-200 text-gray-700 px-2 rounded hover:bg-gray-300">+</button>
                      </div>
                    </td>

                    <!-- Price -->
                    <td class="p-4">$ {{ item.price.toFixed(2) }}</td>

                    <!-- Total -->
                    <td class="p-4 font-semibold">$ {{ (item.quantity * item.price).toFixed(2) }}</td>

                    <!-- Action -->
                    <td class="p-4">
                      <button @click="removeItem(item.id)" class="text-gray-700 px-3 py-1 rounded">
                        <Trash class="w-5 h-5 hover:text-[#FF5252] transition hover:scale-105 transform duration-200"
                          stroke-width="2.0" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>


        <div class="bg-[#FAF7F5] shadow-md rounded-md p-6">
          <h2 class="class-md font-bold text-gray-600 border-b-2 border-red-300 mb-4 pb-4">Card Summary</h2>
          <div class="flex items-center justify-between mb-4 border-b border-gray-300 pb-2">
            <p class="text-sm text-gray-500 font-bold">Total Quantity:</p>
            <p class="text-sm font-bold text-gray-500">{{ totalItems }}</p>
          </div>
          <div class="flex items-center justify-between mb-4 border-b border-gray-300 pb-2">
            <p class="text-sm text-gray-500 font-bold">Subtotal:</p>
            <p class="text-sm font-bold text-gray-500">${{ totalPrice.toFixed(2) }}</p>
          </div>
          <div class="flex items-center justify-between mb-4 border-b border-gray-300 pb-2">
            <p class="text-sm text-gray-500 font-bold">Tax (2.5%):</p>
            <p class="text-sm font-bold text-gray-500">$ {{ tax.toFixed(2) }}</p>
          </div>
          <div class="flex items-center justify-between mb-4 border-b border-gray-300 pb-2">
            <p class="text-sm text-gray-500 font-bold">Discount:</p>
            <p class="text-sm font-bold text-gray-500">$ {{ discount.toFixed(2) }}</p>
          </div>
          <div class="flex items-center justify-between mb-4 border-b border-gray-300 pb-2">
            <p class="text-sm text-gray-500 font-bold">Shipping:</p>
            <p class="text-sm font-bold text-gray-500">$0.00</p>
          </div>
          <div class="flex items-center justify-between mb-4 border-b border-gray-300 pb-2">
            <p class="text-sm text-gray-500 font-bold">Total Amount:</p>
            <p class="text-sm font-bold text-gray-500">${{ totalAmount.toFixed(2) }}</p>
          </div>

          <h3 v-if="!cupon" @click="cupon = !cupon"
            class="text-gray-500 text-sm font-bold mt-10 cursor-pointer hover:text-gray-400">Have a coupon?</h3>
          <div v-else class="flex items-center justify-between mt-12 mb-4">
            <input type="text" placeholder="Cupon code"
              class="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-[#FF5252] focus:ring-1 focus:ring-[#FF5252]" />
            <button
              class="bg-[#FF5252] text-white font-bold py-2 px-4 rounded hover:opacity-70 transition transform duration-300 ml-2">
              Apply
            </button>
          </div>


          <div class="flex items-center justify-between mt-6 mb-4">
            <button class="bg-[#FF5252] text-white font-bold py-2 px-4 rounded hover:opacity-70 transition transform duration-300 w-full">
              <RouterLink to="/checkout">CHECKOUT</RouterLink>
            </button>
          </div>
        </div>
      </div>

      <div v-else class="flex flex-col items-center justify-center py-20">
        <img :src="cartImg" alt="Empty Cart" class="w-32 sm:w-48 mb-6" />
        <h2 class="text-lg sm:text-2xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
        <p class="text-sm text-gray-500 mb-6">Looks like you haven’t added anything to your cart yet.</p>
        <RouterLink to="/" class="bg-[#FF5252] text-white font-bold py-2 px-6 rounded hover:opacity-80 transition">
          Continue Shopping
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Trash } from 'lucide-vue-next';
import image1 from '/images/airpodes/1.webp';
import image2 from '/images/airpodes/2.webp';
import cartImg from '/images/cart.webp';
import { RouterLink } from 'vue-router';

const discount = ref(13);
const cupon = ref(false);

const cartItems = ref([
   {
    id: 1,
    name: 'Apple AirPods Pro',
    price: 249.99,
    quantity: 1,
    image: image1
   },
    {
      id: 2,
      name: 'Apple AirPods Max',
      price: 549.99,
      quantity: 1,
      image: image2
    },
]);

const totalPrice = computed(() => {
  return cartItems.value.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
})

const totalItems = computed(() => {
  return cartItems.value.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
})

const tax = computed(() => {
  return totalPrice.value * 0.025;
})

const totalAmount = computed(() => {
  return totalPrice.value + tax.value - discount.value;
})



const incrementQty = (item) => {
  item.quantity++
}

const decrementQty = (item) => {
  if (item.quantity > 1) {
    item.quantity--
  }
}

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id);
}
</script>

<style></style>