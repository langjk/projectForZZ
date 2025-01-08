
<template>
    <section class="patent">
        <h3>专利</h3>
        <div>
            <li v-for="patent in researchData.patents" :key="patent.id" style="margin:1vw 0;">
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
import rawData from "../../assets/research.json";

const researchData = rawData as ResearchData;

</script>

<style scoped>
.h3{
    font-size:3vw;
}
.patent{
    height:auto;
}
</style>
