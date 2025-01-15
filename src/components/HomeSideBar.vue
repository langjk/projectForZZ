<template>
    <el-row class="SContainer">
        <el-col :span="6" class="date">
            <div class="week">{{ props.day }}</div>
            <div class="day">{{ props.date }}</div>
        </el-col>
        <el-col :span="2"> </el-col>
        <el-col :span="16" class="content">
            <div class="title">
                {{ props.title }}
            </div>
            <div class="description">
                {{ props.description }}
            </div>
        </el-col>
    </el-row>
</template>
<script setup lang="ts">
interface Props {
    date: string;
    day: string;
    title: string;
    description: string;
}

const props = defineProps<Props>();
</script>
<style scoped>
.SContainer {
    display: flex;
    font-size: 1vw;font-family: "楷体";
}
.week {
    display: flex;
    align-items: center;
    justify-content: center; 
    background-color: rgb(15, 82, 134);
    color: white;
    font-size: 150%;
    text-align: center;
    height: 50%;
}
.day {
    display: flex;
    align-items: center; 
    justify-content: center;
    color: rgb(15, 82, 134);
    height: 50%;
    text-align: center;
}
.title {
    color: rgb(15, 82, 134);
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.description {
    margin-top:5%;
    color: #8c8c8c;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.date {
    border: #ddd 0.1vw solid;
}
</style>
