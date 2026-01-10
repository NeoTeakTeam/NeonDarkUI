<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

// 切换菜单显示/隐藏的方法
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <!-- 导航栏 -->
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-brand">
                <i class="fas fa-moon"></i>
                &nbsp; NeonDarkUI
            </div>
            <button
                class="navbar-toggler"
                id="navbarToggler"
                @click="toggleMenu"
            >
                <i class="fas fa-bars"></i>
            </button>
            <ul class="navbar-nav" :class="{ show: isMenuOpen }" id="navbarNav">
                <li class="nav-item">
                    <RouterLink to="/" class="nav-link" active-class="active"
                        ><i class="fas fa-home" /> 主页</RouterLink
                    >
                </li>
                <li class="nav-item">
                    <RouterLink to="/gallery" class="nav-link" active-class="active"
                        ><i class="fas fa-flag" /> Gallery</RouterLink
                    >
                </li>
            </ul>
        </div>
    </nav>

    <RouterView />
</template>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css);
</style>
