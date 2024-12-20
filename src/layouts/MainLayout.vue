<template>
    <el-container>
        <el-header>
            <Title />
        </el-header>
        <el-main>
            <el-header>
                <div v-if="activeRoute != '/'">
                    <Intro />
                </div>
                <div v-else>
                    <Pic />
                </div>
            </el-header>
            <el-main class="main-container">
                <slot />
            </el-main>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Title from '../components/Title.vue'
import Intro from '../components/Intro.vue'
import Pic from '../components/HomePagePic.vue'
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
}

.el-main {
    padding: 0;
    background-color: var(--background-color);
}

.el-container {
    height: 100%;
}

.main-container {
    display: flex;
    justify-content: center;
}
</style>