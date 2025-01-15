<template>
    <div style="display: flex; flex-direction: column; width: 100%; align-items: center">
        <el-row style="width: 80%; margin: 3vw">
            <el-col :span="16">
                <div class="title">新闻</div>
                <!-- <div class="content">新闻内容</div> -->
                <div class="News">
                    <HomeNews
                        v-for="news in newsList"
                        :title="news.title"
                        :content="news.content"
                        :image="news.image"
                        :url="news.url"
                    />
                </div>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="6" class="sideBar">
                <div class="title">通知公告</div>
                <div style="display: flex; justify-content: space-between;flex-direction:column;flex-grow:1;padding:2%">
                    <HomeSideBar
                        v-for="item in noticeData.slice(0, 4)"
                        :day="item.day"
                        :date="item.date"
                        :title="item.title"
                        :description="item.description"
                    ></HomeSideBar>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import HomeNews from "@/components/HomeNews.vue";
import noticeData from "../assets/notice.json";
import HomeSideBar from "@/components/HomeSideBar.vue";
import { ref, onMounted } from "vue";

// 定义新闻列表
const newsList = ref<
    { title: string; type: string; content: string; image: string; url: string }[]
>([]);

// 加载所有新闻的 JSON 文件
const loadNews = async () => {
    // 使用 Vite 的 import.meta.glob 批量加载内容
    const modules = import.meta.glob("/src/assets/news/*/content.json");

    for (const path in modules) {
        const module: any = await modules[path](); // 动态导入 JSON 内容
        const basePath = import.meta.env.BASE_URL || "/";
        const imagePath = path
            .replace("content.json", "image.png")
            .replace("/src", basePath + "src");

        newsList.value.push({
            ...module,
            image: imagePath,
        });
    }
};

// 在组件挂载时加载新闻
onMounted(() => {
    loadNews();
});
</script>
<style scoped>
.title {
    font-size: 2.6vw;
    font-weight: bold;
    margin-bottom: 1vw;
}
.content {
    font-size: 1.3vw;
    width: 50%;
}
.News {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.sideBar {
    width: 25%;
    display:flex;
    flex-direction: column;
}
:deep(.el-tabs__item) {
    font-size: 1.3vw;
}
</style>
