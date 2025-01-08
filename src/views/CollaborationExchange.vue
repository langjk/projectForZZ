<template>
    <div
        style="
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 0 3vw 0;
        "
    >
        <el-image :src="imageUrl" class="view" :fit="'cover'"></el-image>
        <div class="container">
            <h1>团队简介</h1>
            <div class="section">
                <p>
                    天津大学嵌入式计算与控制实验室以国家重大发展需求为导向，以边缘计算支撑终端数字化智能为研究目标，聚焦能源变换与智能感知等研究方向，在嵌入式终端计算、存储及功耗等指标约束下，开发并部署量化智能算法；在边缘侧设备实现智能控制与数据分析，为模块化智能提供技术方案。
                </p>
                <p>
                    目前课程组包含教授1名，助理教授2名，博士研究生4名，硕士研究生17人，专职开发人员2人。课程组负责人张慎现任天津大学电气自动化与信息工程学院教授，香港大学荣誉副教授，慕尼黑工业大学访问学者。
                </p>
                <p>
                    多次承担国家自然科学基金、国际科技基础加强计划、基础研究项目等国家级研究课题，出版
                    Wiley-IEEE Press 与 Cambridge University Press 英文专著 2 部，发表 SCI
                    论文 80 余篇，获得教育部自然科学二等奖、德国洪堡学者、IEEE J. David
                    Irwin Early Career Award 等荣誉奖项。
                </p>
            </div>

            <div class="section">
                <h2>招收方向：</h2>
                <ul>
                    <li>功率变换与控制：多相控制、宽禁带功率变换、多电平功率变换。</li>
                    <li>嵌入式深度计算：边缘目标识别、算法轻量化、异常计算。</li>
                </ul>
            </div>

            <div class="section">
                <h2>招收要求：</h2>
                <ul>
                    <li>具有上述招收方向相关的研究经验或成果；</li>
                    <li>具备良好的学术道德和严谨的研究态度；</li>
                    <li>具备优秀的献稿检索能力，能够撰写规范的研究报告和学术论文；</li>
                    <li>具备较强的独立思考能力，沟通能力与团队协作能力；</li>
                    <li>工作勤奋踏实，乐于探索，积极进取，有责任感。</li>
                </ul>
            </div>

            <div class="section contact">
                <h2>联系方式：</h2>
                <p>
                    有意者请将个人简历（含研究经历/成果）至课程组常老师邮箱
                    <strong>changsiyuan@tju.edu.cn</strong>
                    并在邮件主题中注明「天津大学博士申请-个人姓名-毕业院校」。
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import imageUrl from "@/assets/scene.png";
</script>
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
