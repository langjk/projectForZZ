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
import { computed } from "vue";
import { useRoute } from "vue-router";

// 获取当前路由
const route = useRoute();

const title = computed(() => {
    const mainPath = route.path.split("/")[1];
    // const subPath = route.path.split("/")[2];
    switch (mainPath) {
        case "/":
            return "天津大学嵌入式计算与控制研究中心";
        case "team":
            return "团队介绍";
        case "research":
            return "研究方向";
        case "center":
            return "中心概况";
        case "collaboration":
            return "人员招聘";
        case "academic-results": // 判断学术成果模块
            return "学术成果";
        case "activities":
            return "团建活动";
        case "news":
            return "新闻通知";
        case "contact":
            return "联系方式";
        default:
            return " ";
    }
});
const content = computed(() => {
    const mainPath = route.path.split("/")[1];
    // const subPath = route.path.split("/")[2];
    switch (mainPath) {
        case "/":
            return "聚焦复杂系统边缘侧分布式计算与控制研究领域，服务新型电力能源系统与特种装备智能感知等应用场景。通过开发轻量化智能算法与优化嵌入式并行计算架构，突破终端算力、存储及功耗等指标约束，为实现分布式群智能系统提供理论基础、算力平台及解决方案。";
        case "/team":
            return "";
        case "/research":
            return "对wpt、mpc、ecc平台、成果的详细介绍、参加的项目";
        case "academic-results": // 判断学术成果模块
            // switch (subPath) {
            //     case "latest-results":
            //         return "最新成果";
            //     case "papers-patents":
            //         return "论文专利";
            //     case "monographs":
            //         return "专著";
            //     default:
            //         return "学术成果";
            // }
            return "";
        case "/collaboration":
            return "参与项目、学术交流、企业合作";
        case "/activities":
            return "";
        default:
            return " ";
    }
});
</script>
<style scoped>
.container {
    background-color: var(--menu-bg-color);
    color: white;
    padding: 2vw 10% 1vw 10%;
}

.title {
    font-size: 4vw;
    font-weight: bold;
    margin-bottom: 20px;
}

.content {
    font-size: max(1.5vw, 14px);
    line-height: max(3vw, 28px);
    width: 60%;
    min-width: 300px;
    overflow-wrap: break-word;
    overflow: hidden;
}
</style>
