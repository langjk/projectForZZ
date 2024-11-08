<template>
    <div class="container">
        <el-avatar class="avatar" :size="50" :src="circleUrl" />
        <div class="name">这里是课题组名称</div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

const state = reactive({
    circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})

const { circleUrl } = toRefs(state)
</script>
<style scoped>
.container{
    display:flex;
    height:100px;
    width:100%;
    align-items: center;
    background-color: var(--primary-color);
}
.avatar{
    margin:0 2%;
}
.name{
    font-size:200%;
    line-height:100px;
    font-weight: bold;
    color:white;
}
</style>