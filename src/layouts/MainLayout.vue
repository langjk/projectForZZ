<template>
    <el-container>
        <el-header>
            <Title />
        </el-header>
        <el-main>
            <el-header>
                <Menu />
            </el-header>
            <el-main class="main-container">
                <slot />
            </el-main>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import Title from '../components/Title.vue'
import Menu from '../components/Menu.vue'
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
</script>

<style scoped>
.el-header{
    padding: 0;
    height: auto;
}
.el-main{
    padding: 0;
    background-color: rgb(250,250,254);
}
.el-container{
    height:100%;
}
.main-container{
    height: 100%;
    display:flex;
    justify-content: center;
}
</style>