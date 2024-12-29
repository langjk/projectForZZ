<template>
    <div class="container">
        <!-- <el-avatar class="avatar" :size="50" :src="circleUrl" /> -->
        <div class="nameContainer">
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
// import { reactive, toRefs } from 'vue'
import Menu from "../components/Menu.vue";
// const state = reactive({
//     circleUrl:
//         'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
// })

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
    margin: 0 2%;
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
    flex-direction: column;
    color: white;
    text-align: center;
    margin-left:4%;
}
/* 隐藏 .large-screen 在小屏幕 */
@media (max-width: 700px) {
    .large-screen {
        display: none;
    }
    .nameContainer{
        width: 100%;
        margin:none;
    }
}

/* 隐藏 .small-screen 在大屏幕 */
@media (min-width: 701px) {
    .small-screen {
        display: none;
    }
}
</style>
