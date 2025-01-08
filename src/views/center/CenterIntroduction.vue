<template>
    <div class="container">
        <div v-for="item in rawData" class="mainCard">
            <el-row style="width: 100%; align-items: center">
                <el-col :span="6">
                    <img :src="`${imagePath}/${item.name}.jpg`" alt="Member Image" />
                </el-col>
                <el-col :span="18">
                    <el-row class="card-header">
                        <el-col :span="14">
                            <el-row>
                                <el-col :span="7" class="name">{{ item.name }}</el-col>
                                <el-col :span="17" class="title">{{ item.title }}</el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="10" class="english_title">{{
                            item.english_title
                        }}</el-col>
                    </el-row>
                    <el-row
                        style="
                            width: 100%;
                            background-color: rgb(230, 230, 230);
                            height: 4px;
                            margin: 10px 0;
                        "
                    />
                    <el-row style="width: 100%; margin: 10px 0; font-size: 90%">
                        <el-col :span="14"
                            ><strong>Email:</strong> {{ item.email }}</el-col
                        >
                        <el-col :span="10"
                            ><strong>Phone:</strong> {{ item.phone }}</el-col
                        >
                    </el-row>
                    <span><strong>研究领域:</strong> {{ item.research }}</span>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script setup lang="ts">
import rawData from "../../assets/member.json";
const imagePath = new URL("../../assets/MemberPic/", import.meta.url).href;
console.log(imagePath);
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card {
    margin: 10px 0;
}

.name {
    font-weight: bold;
}

.title {
    font-size: 90%;
    line-height: max(2vw, 20px);
}

.english_title {
    float: right;
    font-weight: bold;
    text-align: right;
}

.mainCard {
    font-size: max(1.3vw, 12px);
    width: 45%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgb(0, 0, 0, 0.1);
    margin: 20px 0;
    padding: 30px 5%;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    transition: all 0.5s;
}
.mainCard:hover {
    scale: 1.1;
    margin: 50px 0;
}

img {
    height: 12vw;
    width: 9vw;
    min-width: 60px;
    min-height: 80px;
    object-fit: cover;
    border-radius: 5%;
}

.card-header {
    display: flex;
    width: 100%;
    align-items: baseline;
    justify-content: space-between;
}
</style>
