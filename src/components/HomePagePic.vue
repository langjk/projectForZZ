<template>
    <div class="container">
        <div class="grid-container">
            <!-- 中间的文字块 -->
            <div class="grid-item text" style="grid-column: 3 / span 3; grid-row: 2 / span 2;">
                <span>T</span>
                <span>J</span>
                <span>U</span>
            </div>
            <div class="grid-item text" style="grid-column: 5 / span 3; grid-row: 4 / span 2;">
                <span>E</span>
                <span>C</span>
                <span>C</span>
            </div>
            <!-- 动态生成图片块 -->
            <div v-for="(item) in items" :key="item.id" :class="['grid-item', item.large ? 'large' : '']"
                :style="item.style">
                <img :src="item.src" alt="图片" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface ImageItem {
    id: number;
    src: string; // 图片路径
    style: string; // 样式，例如 grid-column 和 grid-row
    large: boolean; // 是否为大图片
}

// 动态导入图片
const images = import.meta.glob('../assets/PicWall/*.jpg', { eager: true });

// 提取图片路径
const imagePaths: string[] = Object.values(images).map((img: any) => img.default);

const shuffledImages = imagePaths.sort(() => Math.random() - 0.5);

const layout = [
    ...Array(6).fill("small"), // 前6个小
    "large",                  // 1个大
    ...Array(15).fill("small"), // 中间15个小
    "large",                   // 1个大
    ...Array(9).fill("small"),  // 最后9个小
];

// 创建随机分布的图片数据
const items = ref<ImageItem[]>(
    shuffledImages.slice(0, layout.length).map((path, index) => {
        const isLarge = layout[index] === "large"; // 根据规则确定大小
        return {
            id: index,
            src: path, // 图片路径
            style: isLarge
                ? "grid-column: span 2; grid-row: span 2;" // 大图片样式
                : "grid-column: span 1; grid-row: span 1;", // 小图片样式
            large: isLarge, // 标记是否为大图片
        };
    })
);

console.log(items.value); // 检查生成的数据

// const items = reactive([
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 2; grid-row: span 2;", large: true },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 2; grid-row: span 2;", large: true },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
//     { content: "图片", style: "grid-column: span 1;" },
// ]);
</script>
<style scoped>
.container {
    display: flex;
    justify-content: space-evenly;
    padding: 5% 10% 0 10%;
    background-color: var(--menu-bg-color);
}

.grid-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    /* 5列布局 */
    grid-auto-rows: 15%;
    /* 每行高度 */
    grid-gap: 2%;
    /* 间距 */
}

.grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    text-align: center;
}

.grid-item.text {
    display: flex;
    justify-content: space-between;
    border: none;
    color: white;
    font-size: 9vw;
    text-align: center;
    font-weight: bold;
    width: 100%;

}

.grid-item.large {
    font-size: 18px;
}

.grid-item img {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    object-fit: cover;
}

.grid-item img:hover{
    transform: scale(1.5);
}
</style>