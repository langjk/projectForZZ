<template>
    <div class="container">
        <div v-for="(Imgs, index) in ImageList" class="carouselContainer"
            :style="{ backgroundColor: index % 2 === 0 ? '#ffffff' : 'rgb(240,245,250)' }">
            <div style="display:flex;flex-direction:column">
                <div style="width:100%">{{ activities[index].date }}</div>
                <!-- <el-image :src="Imgs[0]" loading="lazy" lazy :preview-src-list="Imgs" style="height:300px;width:400px;" :fit="'cover'"></el-image> -->
                <el-carousel type="card" height="400px" :indicator-position="'none'" class="carousel">
                    <el-carousel-item v-for="item in Imgs" :key="item">
                        <el-image loading="lazy" lazy :fit="'cover'" :src="item"
                            style="height:100%;width:100%;object-fit: cover;" />
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
interface Activity {
    date: string;
    category: string;
    route: string;
}

const activities = ref<Activity[]>([]); // 显式指定类型
const ImageList = ref<any[]>([]);
onMounted(async () => {
    // 加载 JSON 文件
    const context = import.meta.glob<{ default: Activity[] }>('/src/assets/TeamActivities/meta.json');
    const key = Object.keys(context)[0];

    if (key) {
        const metaModule = await context[key]();
        activities.value = metaModule.default as Activity[];
    } else {
        console.error('No keys found in the context');
    }

    const allImages = import.meta.glob("../assets/TeamActivities/*/*.jpg", { eager: true });

    for (const active of activities.value) {
        const routePath = `../assets/TeamActivities/${active.route}/`;
        const images = Object.entries(allImages)
            .filter(([path]) => path.startsWith(routePath))
            .map(([, module]) => (module as { default: string }).default);
        ImageList.value.push(images);
    }

    console.log(ImageList.value);
});

</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.carouselContainer {
    margin: 0 0 40px 0;
    font-size: 3vw;
    font-weight: bold;
    padding: 2% 5%;
}
</style>