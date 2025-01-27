<template>
    <div class="container">
        <div
            v-for="(Imgs, index) in ImageList"
            class="carouselContainer"
            :style="{ backgroundColor: index % 2 === 0 ? '#ffffff' : 'rgb(240,245,250)' }"
        >
            <div style="display: flex; flex-direction: column">
                <div style="width: 100%">
                    {{ activities[index].date }} {{ "   " }}
                    {{ activities[index].category }}
                </div>
                <!-- <el-image :src="Imgs[0]" loading="lazy" lazy :preview-src-list="Imgs" style="height:300px;width:400px;" :fit="'cover'"></el-image> -->
                <el-row>
                    <el-col :span="12">
                        <div style="display: flex; align-items: center; height: 100%">
                            <el-carousel
                                type="card"
                                height="max(15vw,100px)"
                                :indicator-position="'none'"
                                class="carousel"
                            >
                                <el-carousel-item v-for="item in Imgs" :key="item">
                                    <el-image
                                        loading="lazy"
                                        lazy
                                        :fit="'cover'"
                                        :src="item"
                                        style="
                                            height: 100%;
                                            width: 100%;
                                            object-fit: cover;
                                        "
                                    />
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </el-col>
                    <el-col :span="2" />
                    <el-col :span="10" class="description">
                        {{ activities[index].description }}
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
interface Activity {
    date: string;
    category: string;
    route: string;
    description: string;
}

const activities = ref<Activity[]>([]); // 显式指定类型
const ImageList = ref<any[]>([]);
onMounted(async () => {
    // 加载 JSON 文件
    const context = import.meta.glob<{ default: Activity[] }>(
        "/src/assets/TeamActivities/meta.json"
    );
    const key = Object.keys(context)[0];

    if (key) {
        const metaModule = await context[key]();
        activities.value = metaModule.default as Activity[];
    } else {
        console.error("No keys found in the context");
    }

    const allImages = import.meta.glob("../assets/TeamActivities/*/*.jpg", {
        eager: true,
    });

    for (const active of activities.value) {
        const routePath = `../assets/TeamActivities/${active.route}/`;
        const images = Object.entries(allImages)
            .filter(([path]) => path.startsWith(routePath))
            .map(([, module]) => (module as { default: string }).default);
        ImageList.value.push(images);
    }
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

.description {
    font-weight: 400;
    font-size: 50%;
    line-height: 200%;
    align-items: center;
}

.carousel {
    width: 100%;
}
</style>
