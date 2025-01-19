<template>
    <div class="book">
        <h3>专著</h3>
        <div
            v-for="book in researchData.books"
            :key="book.id"
            style="margin: 3vw 0; display: flex; align-items: center"
        >
            <el-image
                :src="
                    'src/assets/Monographs/' +
                    (book.title ? book.title : '').replace(':', '') +
                    '.png'
                "
                onerror="this.style.display='none';"
                style="width: 7%"
            >
                <template #error>
                    <div class="image-slot">
                        <el-icon><icon-picture /></el-icon>
                    </div>
                </template>
            </el-image>
            <div style="display: flex; flex-direction: column; margin-left: 1vw">
                <span>
                    {{ book.authors }}
                </span>
                <span>
                    <strong>{{ book.title }}</strong>
                </span>
                <span> ({{ book.publisher }}, {{ book.year }}) </span>
                <p v-if="book.link">
                    <a :href="book.link" target="_blank">专著链接</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ResearchData } from "../../types/researchType";
import { ref, onMounted } from "vue";

const rawData = ref<
    {
        date: string;
        timestamp: number;
        day: string;
        title: string;
        description: string;
        location: string;
    }[]
>([]);
const basePath = import.meta.env.BASE_URL || "/";

const loadResearch = async () => {
    const researchPath = `${basePath}research.json`;
    try {
        // 加载 JSON 文件
        const response = await fetch(researchPath);
        rawData.value = await response.json();
    } catch (error) {
        console.error(`Failed to load content from ${researchPath}:`, error);
    }
};

const researchData = rawData as ResearchData;

onMounted(() => {
    loadResearch();
});
</script>

<style scoped>
.h3 {
    font-size: 3vw;
}
.book {
    height: auto;
}
</style>
