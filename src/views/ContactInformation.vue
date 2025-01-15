<template>
    <div
        style="
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 3vw 0 3vw 0;
        "
    >
        <div class="container">
            <h1>地址</h1>
            <div class="section">
                <p>
                    天津市南开区天开高教科创园5号楼1608、天津市南开区卫津路92号
                    天津大学26教学楼E区441
                </p>
            </div>

            <div class="section">
                <h2>邮编</h2>
                <p>300072</p>
            </div>

            <div class="section">
                <h2>邮编</h2>
                <p>zhangz@tju.edu.cn</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.view {
    width: 80%;
    height: 50%;
    margin: 2vw 0;
}
h1,
h2 {
    color: #0056b3;
}

.container {
    width: 75%;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section {
    margin-bottom: 20px;
}

.section h2 {
    margin-bottom: 10px;
}

.section p {
    margin: 5px 0;
}

ul {
    list-style: none;
    padding: 0;
}

ul li {
    margin: 10px 0;
    padding-left: 15px;
    text-indent: -15px;
}

ul li::before {
    content: "• ";
    color: #0056b3;
    font-weight: bold;
}

.contact {
    background: #f9f9f9;
    padding: 10px;
    border-left: 4px solid #0056b3;
}
</style>
