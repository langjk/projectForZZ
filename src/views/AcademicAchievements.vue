<template>
    <div class="research-container">

        <section class="book" >
            <h3>专著</h3>
            <ul>
                <li v-for="book in researchData.books" :key="book.id">
                    <p>{{ book.id }} {{ book.authors }} - <strong>{{ book.title }}</strong> ({{ book.publisher }}, {{
                        book.year }})</p>
                    <p v-if="book.link">
                        <a :href="book.link" target="_blank">专著链接</a>
                    </p>
                </li>
            </ul>
        </section>

        <section class="paper">
            <h3>论文</h3>
            <el-scrollbar style="height:300px;" :always="true">
                <li v-for="paper in researchData.papers" :key="paper.id" style="list-style: square;">
                    <span>{{ paper.id }} {{ paper.authors }} - <strong>{{ paper.title }}</strong>, {{ paper.journal }} ({{
                        paper.status || 'N/A' }})</span>
                </li>
            </el-scrollbar>
        </section>

        <section class="patent">
            <h3>专利</h3>
            <el-scrollbar style="height:300px;" :always="true">
                <li v-for="patent in researchData.patents" :key="patent.id">
                    <span>{{ patent.id }} {{ patent.inventors }} - <strong>{{ patent.title }}</strong> ({{
                        patent.patent_number }}, {{ patent.date }}, {{ patent.status }})</span>
                </li>
            </el-scrollbar>
        </section>
    </div>
</template>

<script setup lang="ts">
import type { ResearchData } from '../types/researchType';
import rawData from '../assets/research.json';

const researchData = rawData as ResearchData;
console.log(researchData)
</script>

<style scoped>
.research-container {
    font-family: Arial, sans-serif;
}
.book{
    padding:30px 10%;
}
.paper{
    padding:30px 10%;
    background-color: rgb(240,245,250);
}
.patent{
    padding:30px 10%;
}
h2,
h3 {
    color: var(--text-primary);
    font-size:200%;
}

el-scrollbar  {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}

a {
    color: var(--text-link);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>