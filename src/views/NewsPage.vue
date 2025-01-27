<template>
  <NewViewer :text="markdownContent"></NewViewer>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import NewViewer from "@/components/NewViewer.vue";

const markdownContent = ref<string>("");
const route = useRoute();

const Path = import.meta.env.BASE_URL + "/News";
// 加载 Markdown 文件
const fetchMarkdown = async (newsType: string) => {
  try {
    const response = await fetch(`${Path}/${newsType}/content.md`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    markdownContent.value = await response.text();
  } catch (error) {
    console.error("获取 Markdown 文件出错：", error);
  }
};

// 监听路由变化并加载 Markdown 文件
watch(
  () => route.params.newsType,
  (newsType) => {
    if (newsType) {
      fetchMarkdown(newsType as string);
    }
  },
  { immediate: true } // 立即执行一次以加载初始数据
);
</script>