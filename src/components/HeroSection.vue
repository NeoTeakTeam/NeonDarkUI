<script setup lang="ts">
import { updateContent } from "@/assets/script/updateContent";

const props = defineProps({
    title: String,
    subtitle: String
});
</script>

<template>
    <!-- 主页标题 -->
    <header id="home" class="hero-section">
        <div class="container">
            <h1 class="hero-title fade-in">{{ props.title }}</h1>
            <p class="hero-subtitle fade-in">
                <i><b>{{ props.subtitle }}</b></i>
            </p>
            <div class="hero-actions fade-in">
                <a
                    class="btn btn-primary btn-lg btn-ripple"
                    id="wikiLink"
                    href="#"
                >
                    <i class="fas fa-book"></i> Wiki
                </a>
                <RouterLink
                    class="btn btn-success btn-lg btn-ripple"
                    id="galleryLink"
                    to="/gallery"
                >
                    <i class="fas fa-flag"></i> Gallery
                </RouterLink>
            </div>
        </div>
    </header>
</template>

<style scoped></style>
