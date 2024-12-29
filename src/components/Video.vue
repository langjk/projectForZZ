<template>
    <div class="video-container">
        <video src="../assets/video.mp4" autoplay muted loop></video>
        <div class="overlay">
            <div class="title">天津大学嵌入式计算与控制研究中心</div>
            <div class="content">
                聚焦复杂系统边缘侧分布式计算与控制研究领域，服务新型电力能源系统与特种装备智能感知等应用场景。通过开发轻量化智能算法与优化嵌入式并行计算架构，突破终端算力、存储及功耗等指标约束，为实现分布式群智能系统提供理论基础、算力平台及解决方案。
            </div>
        </div>
    </div>
</template>
<style scoped>
* {
    box-sizing: border-box;
  }.video-container, video {
    margin: 0;
  }
  
/* 父容器样式 */
.video-container {
    position: relative; /* 创建层叠上下文 */display: flex;align-items: stretch; /* 子元素高度填满父容器 */
    width: 100%; /* 横向填满父容器 */
    max-height: 500px;
    overflow: hidden; /* 确保视频内容不会超出边界 */
}

/* 视频样式 */
.video-container video {
    width: 100%; /* 横向填满 */
    height: auto; /* 保持原比例 */
    object-fit: cover; /* 处理溢出情况（适配不同的屏幕宽高比） */
}

/* 覆盖层样式 */
.video-container .overlay {
    display: flex;
    flex-direction: column;
    position: absolute; /* 绝对定位 */
    top: 0; /* 紧贴顶部 */
    left: 0; /* 紧贴左侧 */
    width: 100%; /* 覆盖整个视频 */
    height: 105%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); /* 半透明黑色背景 */
    display: flex; /* 居中内容 */
    align-items: flex-start; /* 垂直居中 */
    justify-content: flex-start;
    color: white; /* 覆盖层文字颜色 */
    font-size: 24px; /* 覆盖层文字大小 */
    padding:3% 0 0 4%;
}
.title {
    font-size: 3vw;
    font-weight: bold;
    margin-bottom: 1vw;
}
.content {
    font-size: 1.3vw;
    width: 50%;
}
</style>
