<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from './views/HomePage.vue';
import Footer from '@/components/footer/Footer.vue'
import TopBar from '@/components/TopBar.vue'
import Navbar from '@/components/Navbar.vue'

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const isLoading = ref(true);
const router = useRouter();

onMounted(() => {
    router.beforeEach((to, from, next) => {
        isLoading.value = true;
        next();
    });

    router.afterEach(() => {
        setTimeout(() => {
            isLoading.value = false;
        }, 500);
    });
});
</script>

<template>
    <div class="bg-white">
        <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div class="animate-spin rounded-full h-12 w-12 border-4 border-[#FF5252] border-t-transparent"></div>
        </div>
        <div v-else>
            <TopBar />
            <Navbar />
            <router-view></router-view>

            <Footer />
        </div>
    </div>
</template>

<style scoped></style>
