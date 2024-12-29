import fs from 'fs';
import path from 'path';

// 定义页面名称和对应内容
const pages = [
    { name: 'CenterIntroduction', title: '研究中心简介' },
    { name: 'TeacherTeam', title: '教师团队' },
    { name: 'GraduateStudents', title: '研究生' },
    { name: 'FullTimeResearch', title: '专职研发' },
    { name: 'JointTraining', title: '联合培养' },
    { name: 'Alumni', title: '毕业生' },
    { name: 'NewsCenter', title: '新闻中心' },
    { name: 'Notices', title: '通知公告' },
    { name: 'EmbeddedComputing', title: '嵌入式计算' },
    { name: 'PowerDriveControl', title: '电力驱动控制' },
    { name: 'WirelessPowerTransfer', title: '无线电能传输' },
    { name: 'EnergyCoordinationControl', title: '能源协同控制' },
    { name: 'Contact', title: '联系方式' },
];

// 定义生成文件的路径
const viewsDir = path.join(process.cwd(), 'src/views');

// 检查目录是否存在，不存在则创建
if (!fs.existsSync(viewsDir)) {
    fs.mkdirSync(viewsDir, { recursive: true });
}

// 模板生成函数
const generateTemplate = (title) => `
<template>
    <div>
        <h1>${title}</h1>
        <p>这是${title}页面内容。</p>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>
`;

// 批量生成文件
pages.forEach((page) => {
    const filePath = path.join(viewsDir, `${page.name}.vue`);
    const content = generateTemplate(page.title);

    // 写入文件
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ 页面已生成: ${filePath}`);
});

console.log('🎉 所有页面已成功生成！');
