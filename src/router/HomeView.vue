<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";
import ShowFooter from "@/components/ShowFooter.vue";
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
                            这只是一个闲来无事写的一个小 UI
                            <br />
                            不过功能算是比较全面了吧
                            <br />
                            我们会逐步发布 <b>Wiki</b>, <b>Gallery</b> 等内容
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <ShowFooter />
</template>

<style scoped></style>
