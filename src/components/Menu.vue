<template>
    <el-menu
    :default-active="defaultActive"
    mode="horizontal"
    :active-text-color="'#ffffff'"
    :text-color="'#ffffff'"
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
    background-color: var(--menu-bg-color);
    border: 0 0 1px 0 solid var(--border-color, #D4E1F5); /* 边框颜色 */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 轻微阴影 */
}
.el-menu-item{
    font-weight: bold;
    font-size:120%;
    width:180px;
    color:var(--text-primary) !important;
}

.el-menu-item.is-active{
    background-color: var(--menu-selected-color) !important;
}

.el-menu-item:hover{
    background-color: var(--menu-hover-color) !important;
}


</style>