<script setup lang="ts">
import {onMounted, ref } from 'vue'
import Prism from "prismjs";
import "prismjs/themes/prism.css"

const showCopyIcon = ref(true)
const props = defineProps<{
  code: string,
  language: string
}>()

const copyToClipboard = () => {
  navigator.clipboard.writeText(props.code)
  showCopyIcon.value = false
  setTimeout(() => {
    showCopyIcon.value = true
  }, 2000)
}

onMounted(() => {
  Prism.highlightAll()
});
</script>

<template>
<pre class="w-fit">
  <i class="pi pi-copy float-right cursor-pointer py-2" @click="copyToClipboard" v-if="showCopyIcon"></i>
  <span v-else class="float-right py-2 text-xs">Copied to clipboard</span><code :class="['language-' + props.language]">{{props.code}}</code>
</pre>
</template>
<style scoped>
pre[class*="language-"] {
  margin: 0;
  padding: 0 10px;
}
</style>