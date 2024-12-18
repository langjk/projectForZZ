<template>
    <div class="container">
        <div style="display: flex;width:40%;align-items: center;">
            <el-avatar class="avatar" :size="50" :src="circleUrl" />
            <div class="nameContainer">
                <div class="name">天津大学嵌入式计算与控制研究中心</div>
                TJU Center For Embeded Computing And Control
            </div>
        </div>
        <div style="width:5%"></div>
        <Menu></Menu>
    </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import Menu from '../components/Menu.vue'
const state = reactive({
    circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})

const { circleUrl } = toRefs(state)
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
    font-size: 130%;
    line-height: 50px;
    font-weight: bold;
    color: white;
    text-align: center;
}

.nameContainer {
    display: flex;
    text-wrap: nowrap;
    flex-direction: column;
    font-size: 100%;
    width: 70%;
    color: white;
    text-align: center;
    margin: 10px 0;
}
</style>