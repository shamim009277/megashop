<template>
    <div class="bg-[#222222] text-white py-4">
        <div class="container mx-auto flex items-center justify-between flex-col md:flex-row gap-2">
            <ul class="flex space-x-2 text-white text-sm">
                <!-- <li><a href="#" class="">Help</a></li>     
                <li><a href="#" class="">Terms of Service</a></li>
                <li><a href="#" class="">Privacy Policy</a></li>
                <li><a href="#" class="">Refund Policy</a></li> -->
                <li><a href="#"><Linkedin class="w-4 hover:text-amber-700" stroke-width="2.0"/></a></li>
                <li><a href="#"><Twitter class="w-4 hover:text-amber-700" stroke-width="2.0"/></a></li>
                <li><a href="#"><Facebook class="w-4 hover:text-amber-700" stroke-width="2.0"/></a></li>
                <li><a href="#"><Instagram class="w-4 hover:text-amber-700" stroke-width="2.0"/></a></li>
            </ul>
            <p class="text-white text-sm text-center">© 2023 Your Company. All rights reserved.</p>
            <div class="flex space-x-2">
                <img src="/images/card/american_express.png" alt="American Express">
                <img src="/images/card/carte_bleue.png" alt="Carte">
                <img src="/images/card/master_card.png" alt="Master Card">
                <img src="/images/card/paypal.png" alt="Paypal">
                <img src="/images/card/visa.png" alt="Visa">
            </div>
        </div>
    </div>
</template>
<script setup>
import { Linkedin,Twitter,Facebook,Instagram } from 'lucide-vue-next';
</script>