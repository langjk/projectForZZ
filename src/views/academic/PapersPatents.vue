<template>
    <section class="patent">
        <h3>专利</h3>
        <div>
            <li
                v-for="patent in researchData.patents"
                :key="patent.id"
                style="margin: 1vw 0"
            >
                <span
                    >{{ patent.id }} {{ patent.inventors }} -
                    <strong>{{ patent.title }}</strong> ({{ patent.patent_number }},
                    {{ patent.date }}, {{ patent.status }})</span
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
.patent {
    height: auto;
}
</style>
