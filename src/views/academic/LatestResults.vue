<template>
    <section class="paper">
        <h3>最新成果</h3>
        <div style="margin: 0 0 3vw 0">
            <li
                v-for="paper in researchData.papers"
                :key="paper.id"
                style="list-style: square; margin: 1vw 0"
            >
                <span
                    >{{ paper.id }} {{ paper.authors }} -
                    <strong>{{ paper.title }}</strong
                    >, {{ paper.journal }} ({{ paper.status || "N/A" }})</span
                >
            </li>
        </div>
    </section>
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
.paper {
    height: auto;
}
.li {
    width: 30px;
}
</style>
