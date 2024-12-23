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
            return '天津大学嵌入式计算与控制研究中心';
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
            return '聚焦复杂系统边缘侧分布式计算与控制研究领域，服务新型电力能源系统与特种装备智能感知等应用场景。通过开发轻量化智能算法与优化嵌入式并行计算架构，突破终端算力、存储及功耗等指标约束，为实现分布式群智能系统提供理论基础、算力平台及解决方案。';
        case '/team':
            return '';
        case '/research':
            return '对wpt、mpc、ecc平台、成果的详细介绍、参加的项目';
        case '/academic':
            return '';
        case '/collaboration':
            return '参与项目、学术交流、企业合作';
        case '/activities':
            return '';
        default:
            return '首页';
    }
});
</script>
<style scoped>
.container {
    background-color: var(--menu-bg-color);
    color: white;
    padding: 60px 10% 30px 10%;
}

.title {
    font-size:4vw;
    font-weight: bold;
    margin-bottom: 20px;
}

.content {
    font-size: max(1.5vw,14px);
    line-height: max(3vw,28px);
    width: 60%;
    min-width: 300px;
    overflow-wrap: break-word;
    overflow: hidden;
}
</style>