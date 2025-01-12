<template>
    <el-menu
        :default-active="activeRoute"
        mode="horizontal"
        :active-text-color="'#ffffff'"
        :text-color="'#ffffff'"
        :background-color="`var(--menu-bg-color)`"
        :ellipsis="false"
        :router="true"
    >
        <el-menu-item index="/">首页</el-menu-item>
        <el-sub-menu index="2">
            <template #title>中心概况</template>
            <el-menu-item index="/center/introduction">研究中心简介</el-menu-item>
            <el-menu-item index="/center/teachers">教师团队</el-menu-item>
            <el-menu-item index="/center/graduates">研究生</el-menu-item>
            <el-menu-item index="/center/alumni">毕业生</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="/news/center">
            <template #title>新闻通知</template>
        </el-menu-item>
        <!-- <el-sub-menu index="3">
            <template #title>新闻通知</template>
            <el-menu-item index="/news/center">组内新闻</el-menu-item>
            <el-menu-item index="/news/notices">通知公告</el-menu-item>
        </el-sub-menu> -->
        <el-sub-menu index="4">
            <template #title>研究方向</template>
            <el-menu-item index="/research/embedded-computing">嵌入式计算</el-menu-item>
            <el-menu-item index="/research/power-drive-control"
                >电力驱动控制</el-menu-item
            >
            <el-menu-item index="/research/wireless-power-transfer"
                >无线电能传输</el-menu-item
            >
            <el-menu-item index="/research/energy-coordination-control"
                >能源协同控制</el-menu-item
            >
        </el-sub-menu>
        <el-sub-menu index="5">
            <template #title>学术成果</template>
            <el-menu-item index="/academic-results/latest-results">论文</el-menu-item>
            <el-menu-item index="/academic-results/papers-patents"
                >专利</el-menu-item
            >
            <el-menu-item index="/academic-results/monographs"
                >专著</el-menu-item
            >
        </el-sub-menu>
        <el-menu-item index="/collaboration">人员招聘</el-menu-item>
        <el-menu-item index="/activities">团队活动</el-menu-item>
        <el-menu-item index="/contact">联系方式</el-menu-item>
        <!-- <el-menu-item index="/contact">联系方式</el-menu-item> -->
    </el-menu>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

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
.el-menu--horizontal > .el-menu-item {
    float: right;
    width: 12.5%;
}
.el-menu--horizontal > .el-sub-menu {
    width: 12.5%;
}
.name {
    font-weight: bold;
    color: white;
    text-align: center;
    height: 100%;
}

.nameContainer {
    display: flex;
    text-wrap: nowrap;
    flex-direction: column;
    color: white;
    text-align: center;
    height: 100%;
}
.el-menu--horizontal {
    margin-bottom: 0;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    border-bottom: none !important;
    border: none;
    font-weight: bold;
    font-size: 1vw;
    height: 4vw;
}
:deep(.el-sub-menu .el-sub-menu__icon-arrow) {
    right: 10%;
}
@media (max-width: 1000px) {
    :deep(.el-sub-menu__title) {
        font-size: 2vw;
    }
    :deep(.el-menu-item) {
        font-size: 2vw;
        padding: 0;
    }
}
@media (min-width: 1001px) {
    :deep(.el-sub-menu__title) {
        font-size: 1vw;
    }
    :deep(.el-menu-item) {
        font-size: 1vw;
        padding: 0 20px;
    }
}
</style>
