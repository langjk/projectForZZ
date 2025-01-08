
<template>
    <section class="paper">
        <h3>最新成果</h3>
        <div style="margin:0 0 3vw 0;">
            <li
                v-for="paper in researchData.papers"
                :key="paper.id"
                style="list-style: square;margin:1vw 0;"
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
import rawData from "../../assets/research.json";

const researchData = rawData as ResearchData;

</script>

<style scoped>
.h3{
    font-size:3vw;
}
.paper{
    height:auto;
}
.li{
    width:30px;
}
</style>
