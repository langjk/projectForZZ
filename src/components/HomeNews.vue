<template>
    <div class="NewsContainer" @click="jump(urltype, url)">
        <img :src="image" alt="新闻图片" class="news-image" />
        <div class="NewsTitle">{{ title }}</div>
        <div class="NewsContent">{{ content }}</div>
    </div>
</template>
<script setup lang="ts">
import router from "@/router";
interface Props {
    title: string;
    content: string;
    image: string;
    url: string;
    urltype: string;
}

const props = defineProps<Props>();
props;
const jump = (urltype: string, url: string) => {
    if (urltype == "md") {
        const routeUrl = router.resolve({ path: `/news/newspage/${url}` });
        window.open(routeUrl.href, "_blank");
    } else window.open(url, "_blank");
};
</script>
<style scoped>
.NewsContainer {
    width: 25%;
    height: auto;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 2%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0.3vw 0.4vw rgba(0, 0, 0, 0.1);
}
.NewsContainer:hover {
    transform: translateY(-5px); /* 向上移动5px */
    box-shadow: 0 0.6vw 1vw rgba(0, 0, 0, 0.2); /* 加强阴影效果 */
}
.news-image {
    height: 9vw;
    object-fit: cover;
}

.block {
    padding: 30px 0;
    text-align: center;
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
    vertical-align: top;
}
.el-image {
    padding: 0 5px;
    max-width: 300px;
    max-height: 200px;
    width: 100%;
    height: 20vw;
}

.image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 30px;
}
.image-slot .el-icon {
    font-size: 5vw;
}
.NewsTitle {
    font-size: 1vw;
    font-weight: bold;
    margin: 5% 3%;
}
.NewsContent {
    font-size: 0.8vw;
    margin: 0 3%;
}
</style>
