<template>
    <div class="container">
        <div class="title">
            {{ title }}
        </div>
        <div class="content">
            {{ content }}
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// 获取当前路由
const route = useRoute();

// 根据路由的 name 或 path 动态设置内容
const title = computed(() => {
    switch (route.path) {
        case '/':
            return '首页';
        case '/team':
            return '团队介绍';
        case '/research':
            return '研究成果';
        case '/collaboration':
            return '合作交流';
        case '/academic':
            return '学术成果';
        case '/activities':
            return '团建活动';
        default:
            return '首页';
    }
});
const content = computed(() => {
    switch (route.path) {
        case '/':
            return '介绍wpt、mpc、ecc当前的研究进展+团队合影/证件照';
        case '/team':
            return '教授、博后、当前学生、毕业学生（证件照、生活照/籍贯/邮箱/年级/方向/毕业去向？可以用员工表上的）';
        case '/research':
            return '对wpt、mpc、ecc平台、成果的详细介绍、参加的项目';
        case '/academic':
            return '论文（能直接跳转到论文界面？）、专利、专著';
        case '/collaboration':
            return '参与项目、学术交流、企业合作';
        case '/activities':
            return '课题组团建活动';
        default:
            return '首页';
    }
});
</script>
<style scoped>
.container {
    background-color: var(--menu-bg-color);
    height: 300px;
    color: white;
    padding: 60px 10%;
}

.title {
    font-size: 400%;
    font-weight: bold;
    margin-bottom: 20px;
}

.content {
    font-size: 150%;
    width: 40%;
    min-width: 300px;
    overflow-wrap: break-word;
    overflow: hidden;
}
</style>