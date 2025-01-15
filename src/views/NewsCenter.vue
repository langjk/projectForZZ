<template>
    <div class="container">
        <el-row style="align-items: center; margin: 2vw 0">
            <!-- 当前位置：
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>
                    <a href="#/news/center">组内新闻</a>
                </el-breadcrumb-item>
            </el-breadcrumb> -->
        </el-row>
        <el-tabs :tab-position="'left'" class="demo-tabs">
            <el-tab-pane label="组内新闻">
                <div class="news-page">
                    <el-row
                        v-for="news in newsList"
                        :key="news.title"
                        class="news-item"
                        @click="jump(news.url)"
                    >
                        <el-col
                            :md="8"
                            :sm="20"
                            :xs="20"
                            style="justify-content: center; display: flex"
                        >
                            <img :src="news.image" alt="新闻图片" class="news-image" />
                        </el-col>
                        <el-col :md="16" :sm="20" :xs="20">
                            <h2>{{ news.title }}</h2>
                            <p class="news-type">{{ news.type }}</p>
                            <p class="news-content">{{ news.content }}</p>
                        </el-col>
                    </el-row>
                </div>
            </el-tab-pane>
            <el-tab-pane label="通知公告">通知公告</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// 定义新闻列表
const newsList = ref<
    { title: string; type: string; content: string; image: string; url: string }[]
>([]);

// 加载所有新闻的 JSON 文件
const loadNews = async () => {
    const basePath = import.meta.env.BASE_URL || "/";
    const newsFolders = ["News1", "News2", "News3"]; // 根据实际目录列出文件夹名称

    for (const folder of newsFolders) {
        const contentPath = `${basePath}News/${folder}/content.json`;
        const imagePath = `${basePath}News/${folder}/image.png`;

        try {
            // 加载 JSON 文件
            const response = await fetch(contentPath);
            const module = await response.json();

            // 将 JSON 数据和图片路径加入列表
            newsList.value.push({
                ...module,
                image: imagePath,
            });
        } catch (error) {
            console.error(`Failed to load content from ${contentPath}:`, error);
        }
    }

    console.log(newsList.value); // 打印结果，确保加载成功
};

// 在组件挂载时加载新闻
onMounted(() => {
    loadNews();
});

const jump = (url: string) => {
    window.open(url, "_blank");
};
</script>

<style scoped>
.title {
    font-size: 2.6vw;
    font-weight: bold;
    margin-bottom: 1vw;
}
.container {
    width: 100%;
    padding: 0 10vw;
    margin: 1vw 10vw;
}
:deep(.el-tabs__item) {
    justify-content: flex-start;
    height: 4vw;
    font-size: 1.5vw;
}
/* :deep(.el-tabs__item.is-active, .el-tabs__item:hover) {

} */
@media (max-width: 1000px) {
    .news-item {
        display: flex;
        width: 46%;
        justify-content: space-evenly;
    }
    .news-image {
        width: 100%;
        max-height: 30vw;
    }
    .container {
        padding: 0 1vw;
        margin: 1vw 1vw;
    }
    .news-page {
        font-size: 3vw;
        display: flex;
        justify-content: space-between;
    }
}
.news-page {
    font-size: 1vw;
}

.news-item {
    margin-bottom: 20px;
    border: 0.07vw solid #ddd;
    padding: 10px;
    border-radius: 5px;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0.1vw 0.2vw rgba(0, 0, 0, 0.1);
}

.news-item:hover {
    box-shadow: 0 0.4vw 0.6vw rgba(0, 0, 0, 0.2); /* 加强阴影效果 */
}
.news-image {
    width: 80%;
    height: auto;
    border-radius: 5px;
}

.news-type {
    font-size: 60%;
    color: #888;
}

.news-content {
    font-size: 80%;
    color: #333;
}

p {
    margin: 0;
}
</style>
