<template>
  <div class="min-h-screen bg-[#FEF7F5] py-6 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto px-6 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Order Summary: Top on small screens, Right side on large screens -->
        <div class="bg-[#FAF7F5] order-1 lg:order-2 shadow rounded-lg p-6 h-fit">
          <h3 class="text-md font-bold text-gray-600 border-b-2 border-red-300 mb-4 pb-2">Order Summary</h3>
          <div class="space-y-4 text-sm text-gray-700">
            <div class="flex items-center justify-between mb-4 border-b border-gray-300 pb-2">
              <p class="text-sm text-gray-500 font-bold">Quantity:</p>
              <p class="text-sm font-bold text-gray-500">${{ totalitems }}</p>
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
          </div>
        </div>

        <!-- Billing and Payment Section: Bottom on small screens, Left side on large screens -->
        <div class="order-2 lg:order-1 lg:col-span-2 bg-[#FAF7F5]  shadow rounded-lg p-6">
          <!-- Header -->
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-md md:text-xl font-bold text-gray-600">Checkout</h2>
            <RouterLink to="/cart"
              class="flex items-center text-gray-600 hover:text-[#FF5252] transition text-sm font-semibold">
              <ArrowLeft class="w-5 h-5 mr-1" stroke-width="2.0" />
              Back to Cart
            </RouterLink>
          </div>

          <!-- Billing Details -->
          <form class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" placeholder="John" class="input" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" placeholder="Doe" class="input" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" placeholder="john@example.com" class="input" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input type="tel" placeholder="+1 234 567 890" class="input" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input type="text" placeholder="123 Main Street" class="input" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input type="text" placeholder="New York" class="input" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">ZIP</label>
              <input type="text" placeholder="10001" class="input" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <select class="input">
                <option>United States</option>
                <option>Canada</option>
                <option>UK</option>
                <option>India</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
              <textarea width="w-full" name="information" class="input" cols="20" rows="3"></textarea>
            </div>
            <div class="sm:col-span-2 flex items-center mt-2">
              <input type="checkbox" id="sameAsBilling" class="mr-2 text-[#FF5252] focus:ring-[#FF5252]" />
              <label for="sameAsBilling" class="text-sm text-gray-700">Shipping address same as billing</label>
            </div>
          </form>

          <!-- Payment Methods -->
          <div class="mt-10">
            <h3 class="text-md sm:text-xl font-bold text-gray-600 mb-4">Payment Method</h3>
            <div class="space-y-4">
              <label class="flex items-center space-x-3">
                <input type="radio" name="payment" value="card" class="text-[#FF5252]" />
                <span class="text-sm text-gray-700">Credit / Debit Card</span>
              </label>
              <label class="flex items-center space-x-3">
                <input type="radio" name="payment" value="paypal" class="text-[#FF5252]" />
                <span class="text-sm text-gray-700">PayPal</span>
              </label>
              <label class="flex items-center space-x-3">
                <input type="radio" name="payment" value="cod" class="text-[#FF5252]" />
                <span class="text-sm text-gray-700">Cash on Delivery</span>
              </label>
            </div>
          </div>

          <!-- Confirm Button -->
          <div class="mt-8">
            <button class="w-full bg-[#FF5252] text-white font-semibold py-3 px-4 rounded-md hover:opacity-90 transition duration-300">
              Confirm & Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import image1 from '/images/airpodes/1.webp';
import image2 from '/images/airpodes/2.webp';

const discount = ref(13);

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

const totalitems = computed(() => {
  return cartItems.value.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
});

const totalPrice = computed(()=>{
  return cartItems.value.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
})

const tax = computed(() => {
  return totalPrice.value * 0.025;
})

const totalAmount = computed(() => {
  return totalPrice.value + tax.value - discount.value;
})
</script>

<style scoped></style>
