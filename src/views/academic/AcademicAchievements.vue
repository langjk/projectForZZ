<template>
    <div class="routerContainer">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="论文" name="/academic-results/latest-results">
                <router-view
            /></el-tab-pane>
            <el-tab-pane label="专利" name="/academic-results/papers-patents">
                <router-view
            /></el-tab-pane>
            <el-tab-pane label="专著" name="/academic-results/monographs">
                <router-view
            /></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";
import type { TabsPaneContext } from "element-plus";

const route = useRoute();
const router = useRouter();
const activeRoute = ref(route.path);
const activeName = ref(route.path);

watch(
    () => route.path,
    (newPath) => {
        activeRoute.value = newPath;
        activeName.value = newPath;
    }
);
const handleClick = (tab: TabsPaneContext) => {
    router.push(String(tab.paneName));
};
</script>

<style scoped>
.routerContainer {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10vw;
    margin-bottom: 5vw;    
    align-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
}
:deep(.el-tabs__item) {
    justify-content: flex-start;
    height: 4vw;
    font-size: 1.5vw;
}
:deep(.el-tabs__content) {
    width: 100%;
}
.el-tabs {
    flex-grow: 1;
}
</style>
