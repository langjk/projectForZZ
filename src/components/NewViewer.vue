<template>
  <v-md-editor v-model="text"  mode="preview"></v-md-editor>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ text: string }>();
const text = computed(() => props.text);
</script>