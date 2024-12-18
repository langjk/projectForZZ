<template>
    <el-container>
        <el-header>
            <Title />
        </el-header>
        <el-main>
            <el-header>
                <Intro />
            </el-header>
            <el-main class="main-container">
                <slot />
            </el-main>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import Title from '../components/Title.vue'
import Intro from '../components/Intro.vue'
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