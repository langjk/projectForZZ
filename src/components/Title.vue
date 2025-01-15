<template>
    <div class="container">
        <div class="nameContainer">
            <el-image class="avatar" :fit="'fill'" :src="imageUrl" />

            天津大学嵌入式计算与控制研究中心<br />
            TJU Center For Embeded Computing And Control
        </div>
        <div style="width: 1%"></div>
        <div class="large-screen" style="width: 60%; height: 100%">
            <Menu></Menu>
        </div>
        <div class="small-screen" style="width: 100%; height: 100%">
            <Menu></Menu>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Menu from "../components/Menu.vue";
import imageUrl from "@/assets/logo.png";

// const { circleUrl } = toRefs(state)
</script>
<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    height: auto;
    align-items: flex-end;
    width: 100%;
    background-color: var(--primary-color);
    justify-content: space-between;
    overflow: hidden;
}

.avatar {
    height: 3vw;
    margin-right: 2%;
}

.name {
    line-height: 50px;
    font-weight: bold;
    color: white;
    text-align: center;
}

.nameContainer {
    display: flex;
    text-wrap: nowrap;
    color: white;
    text-align: center;
    margin-left: 2%;
    height: 4vw;
    font-size: 1vw;
    line-height: 1.5vw;
    justify-content: center;
    align-items: center;
}
/* 隐藏 .large-screen 在小屏幕 */
@media (max-width: 1000px) {
    .large-screen {
        display: none;
    }
    .nameContainer {
        width: 100%;
        margin-left: 0;
    }
}

/* 隐藏 .small-screen 在大屏幕 */
@media (min-width: 1001px) {
    .small-screen {
        display: none;
    }
}
</style>
