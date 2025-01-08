<template>
    <div style="display: flex; flex-direction: column; width: 100%; align-items: center">
        <el-row style="width: 80%; margin-top: 1.5vw">
            <el-col :span="18">
                <div class="title">新闻</div>
                <!-- <div class="content">新闻内容</div> -->
                <div class="News">
                    <HomeNews v-for="i in 3" :Newsid="i" />
                </div>
            </el-col>
            <el-col :span="6" class="sideBar">
                <el-tabs v-model="activeName" :stretch="true">
                    <el-tab-pane label="学术讲座" name="lecture">
                        <HomeSideBar
                            v-for="item in lectureData"
                            :day="item.day"
                            :date="item.date"
                            :title="item.title"
                            :description="item.description"
                        ></HomeSideBar>
                    </el-tab-pane>
                    <el-tab-pane label="通知公告" name="notice">
                        <HomeSideBar
                            v-for="item in noticeData"
                            :day="item.day"
                            :date="item.date"
                            :title="item.title"
                            :description="item.description"
                        ></HomeSideBar>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import HomeNews from "@/components/HomeNews.vue";
import noticeData from "../assets/notice.json";
import lectureData from "../assets/lecture.json";
import HomeSideBar from "@/components/HomeSideBar.vue";
const activeName = ref("lecture");
</script>
<style scoped>
.title {
    font-size: 2.6vw;
    font-weight: bold;
    margin-bottom: 1vw;
}
.content {
    font-size: 1.3vw;
    width: 50%;
}
.News {
    margin-top: 4%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.sideBar {
    width: 25%;
}
:deep(.el-tabs__item) {
    font-size: 1.3vw;
}
</style>
