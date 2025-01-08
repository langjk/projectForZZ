<template>
    <div class="container">
        <el-row style="align-items: center;margin:2vw 0;">
            当前位置：
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>
                    <a href="#/news/center">新闻中心</a>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-tabs :tab-position="'left'" class="demo-tabs">
            <el-tab-pane label="学院新闻">学院新闻</el-tab-pane>
            <el-tab-pane label="通知公告">通知公告</el-tab-pane>
            <el-tab-pane label="讲座与活动预告">讲座与活动预告</el-tab-pane>
            <el-tab-pane label="媒体报道">媒体报道</el-tab-pane>
            <el-tab-pane label="在线投稿">在线投稿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.title {
    font-size: 2.6vw;
    font-weight: bold;
    margin-bottom: 1vw;
}
.container {
    width: 100%;
    padding: 0 10vw;
}
:deep(.el-tabs__item) {
    justify-content: flex-start;
    height: 4vw;
    font-size: 1.5vw;
}
/* :deep(.el-tabs__item.is-active, .el-tabs__item:hover) {

} */
</style>
