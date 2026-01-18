<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";
import ShowFooter from "@/components/ShowFooter.vue";

import RenderPost from "@/components/RenderPost.vue";
</script>

<template>
    <HeroSection title="Neon Dark UI" subtitle="A wonderful dark ui." />

    <main class="container">
        <section id="information" class="section">
            <h2 class="section-title title">
                <i class="fa-solid fa-circle-info"></i> Information
            </h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            关于此 UI
                        </div>
                        <div class="card-body">
                            <RenderPost name="About-This-ui" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <ShowFooter />
</template>

<style scoped></style>
