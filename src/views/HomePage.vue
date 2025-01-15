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
                <div
                    style="
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                        flex-grow: 1;
                        padding: 2%;
                    "
                >
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
// 加载所有新闻的 JSON 文件cx`
const loadNews = async () => {
    // 动态加载 JSON 文件
    const jsonModules = import.meta.glob("/src/assets/News/**/content.json", {
        eager: true,
    });
    const imageModules = import.meta.glob("/src/assets/News/**/image.png", {
        eager: true,
    });

    for (const path in jsonModules) {
        try {
            // 获取 JSON 数据
            const module = jsonModules[path] as { default: any };

            // 获取图片路径
            const folderPath = path.replace("/content.json", "/image.png");
            const imagePath = (imageModules[folderPath] as { default: string }).default;

            if (!imagePath) {
                console.warn(`No image found for path: ${folderPath}`);
                continue;
            }
            // 将数据和图片添加到新闻列表
            newsList.value.push({
                ...module.default, // JSON 内容
                image: imagePath, // 图片路径
            });
        } catch (error) {
            console.error(`Failed to process file at ${path}:`, error);
        }
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
    display: flex;
    flex-direction: column;
}
:deep(.el-tabs__item) {
    font-size: 1.3vw;
}
</style>
