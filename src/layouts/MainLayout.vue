<template>
    <el-container>
        <el-header>
            <Title />
        </el-header>
        <el-main class="pageContainer">
            <el-header>
                <div v-if="activeRoute != '/'">
                    <Intro />
                </div>
                <div v-else>
                    <Video />
                </div>
            </el-header>
            <el-main class="main-container">
                <slot />
            </el-main>
            <el-footer>
                <Footer />
            </el-footer>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Title from "../components/Title.vue";
import Intro from "../components/Intro.vue";
import Video from "@/components/Video.vue";
import Footer from "@/components/Footer.vue";
const route = useRoute();
const activeRoute = ref(route.path);

watch(
    () => route.path,
    (newPath) => {
        activeRoute.value = newPath;
    }
);
</script>

<style scoped>
.el-header {
    padding: 0;
    height: auto;
    flex-shrink: 0;
    min-height: auto;
    overflow: visible;
}

.el-main {
    padding: 0;
    background-color: var(--background-color);
    flex-grow: 1;
    flex-shrink: 0;
    min-height: auto;
    overflow: visible;
}

.el-footer {
    padding: 0;
    background-color: var(--menu-bg-color);
    flex-shrink: 0;
    min-height: auto;
    overflow: visible; 
}

.el-container {
    height: 100%;
}

.main-container {
    display: flex;
    justify-content: center;
}

.pageContainer {
    display: flex;
    flex-direction: column; /* 垂直布局 */
    min-height: 100vh; /* 确保父容器最小高度为视口高度 */
}
</style>
