<template>
    <div class="End">
        <div class="EndContent">
            快速入口
            <div class="links">
                <span @click="jump('http://www.tju.edu.cn/index.htm')">天津大学官网</span>
                <span @click="jump('e.tju.edu.cn/')">天津大学办公网</span>
                <span @click="jump('https://home.lib.tju.edu.cn/')">天津大学图书馆</span>
                <span @click="jump('https://mail.tju.edu.cn/')">天津大学邮箱</span>
                <span @click="jump('https://zdhmeeting.tju.edu.cn/')"
                    >学院会议室预订系统</span
                >
                <span @click="jump('https://mp.weixin.qq.com/s/KM9RTAvgCFsUfn2FphoRNA')"
                    >院长信箱</span
                >
            </div>
        </div>
        <div class="EndContent">
            新媒体平台
            <div class="imgs">
                <img style="height: 10vw; object-fit: contain" src="@/assets/code.png" />
            </div>
        </div>
        <div class="EndContent">
            联系我们
            <div class="links">
                <span>地址:天津市南开区卫津路92号 天津大学 电气自动化与信息工程学院</span>
                <span>邮编: 300072</span>
                <span>电话:(022)27406272</span>
                <span>E-mail: auto@tju.edu.cn</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const jump = (url: string) => {
    window.open(url, "_blank");
};
</script>
<style scoped>
.End {
    background-color: var(--menu-bg-color);
    width: 100%;
    color: white;
    padding: 1vw 0;
    display: flex;
    height: max(auto,100%);
}

.EndContent {
    font-size: 1.5vw;
    margin: 0 10%;
    width: 30%;
}

.links {
    display: flex;
    flex-direction: column;
    font-size: 60%;
    margin-top: 4%;
}

.links span {
    margin: 2% 0;
    cursor: pointer;
    border-radius: 1vw;
    padding-left: 1vw;
    margin-left: -1vw;
}

.links span:hover {
    background-color: rgb(25, 83, 133);
}

.imgs {
    margin-top: 4%;
}
</style>
