<template>
    <el-menu 
    :default-active="activeRoute" mode="horizontal" :active-text-color="'#ffffff'" :text-color="'#ffffff'"
        :router="true" :ellipsis="false" class="menuContainer">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/team">团队介绍</el-menu-item>
        <el-menu-item index="/research">研究成果</el-menu-item>
        <el-menu-item index="/academic">学术成果</el-menu-item>
        <el-menu-item index="/collaboration">合作交流</el-menu-item>
        <el-menu-item index="/activities">团建活动</el-menu-item>
        <!-- <el-menu-item index="/contact">联系方式</el-menu-item> -->
    </el-menu>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

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
.menuContainer {
    height: 80px;
    display: flex;
    width: 100%;
}


.el-menu--horizontal {
    margin-bottom: 0;
    flex: 1;
    justify-content: center;
    background-color: var(--menu-bg-color);
    border-bottom: none !important;
    border: none;
}

.el-menu-item {
    font-weight: bold;
    font-size: calc(80% + 0.6vw);
    width: 16%;
    transition: all 0.2s ease;
    color: white !important;
}

.el-menu-item.is-active {
    background-color: var(--menu-selected-color) !important;
    border-bottom: 5px solid white !important;
}

.el-menu-item:hover {
    background-color: var(--menu-hover-color) !important;
}

.el-sub-menu {
    background-color: var(--menu-hover-color) !important;
}
</style>