<template>
    <el-menu
    :default-active="defaultActive"
    mode="horizontal"
    :router="true"
    >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/team">团队介绍</el-menu-item>
        <el-menu-item index="/research">研究成果</el-menu-item>
        <el-menu-item index="/academic">学术成果</el-menu-item>
        <el-menu-item index="/collaboration">合作交流</el-menu-item>
        <el-menu-item index="/activities">团建活动</el-menu-item>
        <el-menu-item index="/contact">联系方式</el-menu-item>
    </el-menu>
</template>
<script lang="ts" setup>
const defaultActive = '/'

</script>
<style scoped>
.el-menu--horizontal{
    justify-content: center;
}
.el-menu-item{
    font-weight: bold;
    font-size:120%;
    width:180px;
}


.el-menu-item.is-active{
    background-color:rgb(235.9, 245.3, 255);
}
</style>