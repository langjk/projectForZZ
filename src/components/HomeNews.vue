<template>
    <div class="NewsContainer">
        <el-image>
            <template #error>
                <div class="image-slot">
                    <el-icon><icon-picture /></el-icon>
                </div>
            </template>
        </el-image>
        <div class="NewsTitle">标题{{ Newsid }}</div>
        <div class="NewsContent">内容{{ Newsid }}</div>
    </div>
</template>
<script setup lang="ts">
import { Picture as IconPicture } from "@element-plus/icons-vue";
interface Props {
    Newsid: number;
}

const props = defineProps<Props>();
props
</script>
<style scoped>
.NewsContainer {
    width: max(100px,20%);
    height: auto;
    display: flex;
    flex-direction: column;
}
.block {
    padding: 30px 0;
    text-align: center;
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
    vertical-align: top;
}
.el-image {
    padding: 0 5px;
    max-width: 300px;
    max-height: 200px;
    width: 100%;
    height:20vw;
}

.image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 30px;
}
.image-slot .el-icon {
    font-size: 5vw;
}
.NewsTitle {
    font-size: 2vw;
    font-weight: bold;
    margin: 5% 3%;
}
.NewsContent {
    font-size: 1vw;
    margin: 0 3%;
}
</style>
