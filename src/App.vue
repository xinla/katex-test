<template>
  <div ref="renderRef" v-html="renderedContent" class="markdown-content"></div>
</template>

<script setup>
  import { marked } from 'marked';
  import markedKatex from 'marked-katex-extension';
  import renderMathInElement from 'katex/contrib/auto-render';
  import 'katex/dist/katex.min.css'; // 引入 Katex 样式

  // 配置 marked 使用 Katex 扩展
  marked.use(markedKatex());

  const atuoRenderOptions = {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
      { left: '\(', right: '\)', display: false },
      { left: '\[', right: '\]', display: true },
      { left: '\\[', right: '\\]', display: true },
    ],
  };

  // can show
  // const tempContent = `\\[ \\boxed{x = \\frac{5a - 15}{4}, \\quad y = \\frac{-3a - 15}{4}} \\]`;
  // can show
  const tempContent = `$$ \\left\\{\\begin{array}{l} x - y = 2a, \\\\ 3x + y = 3a - 15. \\end{array}\\right. $$`;
  // can't show
  // const tempContent = `\\[ \\left\\{\\begin{array}{l} x - y = 2a, \\\\ 3x + y = 3a - 15. \\end{array}\\right. \\]`;
  const renderRef = ref(null);
  const renderedContent = computed(() => {
    nextTick(() => {
      renderMathInElement(renderRef.value, atuoRenderOptions);
    });
    const htmlString = marked.parse(tempContent);
    return htmlString;
  });
</script>

<style scoped lang="scss">
  .markdown-content {
    padding: 20px;
  }
</style>
