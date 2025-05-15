<template>
    <div id="user-dashboard" class="container mx-auto px-6 py-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="col-span-1 bg-[#f1f9f5] shadow-md rounded-sm py-6">
                <div id="iamge" class="flex items-center justify-center">
                    <img src="/user.png" class="w-18 object-cover rounded-full p-1 border-2 border-gray-400" alt="Logo" />
                </div>
                <h2 class="text-base font-bold text-gray-600 my-4 text-center">User Dashboard</h2>
                <ul class="space-y-1 mt-6 font-semibold text-sm">
                    <li>
                        <RouterLink to="/user/profile"
                            class="text-gray-600 bg-[#D7F2DC] hover:bg-[#c9e2ce] hover:text-[#FF5252] py-2 px-6 flex items-center">
                            <ShoppingCart class="w-4 h-4 mr-2" stroke-width="2.0" />Orders
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/user/profile"
                            class="text-gray-600 bg-[#D7F2DC] hover:bg-[#c9e2ce] hover:text-[#FF5252] py-2 px-6 flex items-center">
                            <Heart class="w-4 h-4 mr-2" stroke-width="2.0" />Wishlist
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/user/profile"
                            class="text-gray-600 bg-[#D7F2DC] hover:bg-[#c9e2ce] hover:text-[#FF5252] py-2 px-6 flex items-center">
                            <UserRoundCog class="w-4 h-4 mr-2" stroke-width="2.0" />Settings
                        </RouterLink>
                    </li>

                    <li>
                        <RouterLink to="/user/profile"
                            class="text-gray-600 bg-[#D7F2DC] hover:bg-[#c9e2ce] hover:text-[#FF5252] py-2 px-6 flex items-center">
                            <User class="w-4 h-4 mr-2" stroke-width="2.0" />Profile
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/user/profile"
                            class="text-gray-600 bg-[#D7F2DC] hover:bg-[#c9e2ce] hover:text-[#FF5252] py-2 px-6 flex items-center">
                            <LogOut class="w-4 h-4 mr-2" stroke-width="2.0" />Logout
                        </RouterLink>
                    </li>
                </ul>
            </div>

            <div class="col-span-3 bg-[#f1f9f5] shadow-md rounded-sm p-6">
                <h2 class="text-lg font-bold text-gray-700 mb-4">Welcome, User!</h2>
                <p class="text-gray-600">Here you can manage your profile, view orders, and more.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { User, UserRoundCog, Heart, ShoppingCart, LogOut } from 'lucide-vue-next';
</script>

<style></style>