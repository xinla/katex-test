/**
 * @name AutoImportDeps
 * @description 自动按需引入依赖
 */
import AutoImport from 'unplugin-auto-import/vite';

export const AutoImportDeps = () => {
  return AutoImport({
    dts: 'types/auto-imports.d.ts',
    imports: [
      'vue',
      'pinia',
      'vue-router',
      {
        '@vueuse/core': ['useRefHistory', 'useDark', 'useToggle', 'useNow', 'useDateFormat'],
      },
      // {
      //   'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
      // },
    ],
    // 需要去解析的文件
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
  });
};
