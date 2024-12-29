<template>
    <div style="display: flex;flex-direction:column;width:100%;align-items:center">

        <div class="container">
            <div class="title">
                新闻
            </div>
            <div class="content">
                新闻内容
            </div>
            <div class="News">
                <HomeNews v-for="i in 4" :Newsid="i" />
            </div>
        </div>
            <div class="End">
                <div class="EndContent">
                    联系方式
                </div>
            </div>
    </div>
</template>
<script setup lang="ts">
import HomeNews from '@/components/HomeNews.vue';
</script>
<style scoped>
.container{
    width:80%;
    margin-top:1.5vw;
}
.title {
    font-size: 3vw;
    font-weight: bold;
    margin-bottom: 1vw;
}
.content {
    font-size: 1.3vw;
    width: 50%;
}
.News{
    margin-top:4%;
    display: flex;
    flex-wrap: wrap;
    justify-content:  space-evenly;
}
.End{
    margin-top:20%;
    background-color: var(--menu-bg-color);
    height:5vw;
    width:100%;
    color: white;
}
.EndContent{
    font-size:1.5vw;
    margin:0 10%;
}
</style>