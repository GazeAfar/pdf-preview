# 项目介绍

这个项目展示了如何使用不同的HTML标签来加载和显示PDF文件。我们提供了四种不同的方法，每种方法都在一个独立的组件中实现。

## 组件列表

1. **PDFIframeViewer**: 使用`iframe`标签加载PDF文件。
2. **PDFViewer**: 使用`a`标签加载PDF文件。
3. **PDFObjectViewer**: 使用`object`标签加载PDF文件。
4. **PDFEmbedViewer**: 使用`embed`标签加载PDF文件。

每个组件都包含在`components`文件夹中，并且使用了`next/head`来设置页面的标题和字符集。

## 样式

项目的全局样式定义在`styles/globals.css`文件中，使用了Tailwind CSS来简化样式的管理。

## 如何运行

1. 克隆这个仓库。
2. 运行`npm install`来安装所有依赖。
3. 运行`npm run dev`来启动开发服务器。
4. 打开浏览器并访问`http://localhost:3000`来查看效果。

希望这个项目能帮助你更好地理解如何在网页中加载和显示PDF文件。

测试地址：
使用a标签加载PDF：https://pdf-preview-seven.vercel.app/
使用iframe加载PDF：https://pdf-preview-seven.vercel.app/iframe
使用object加载PDF：https://pdf-preview-seven.vercel.app/object
使用embed加载PDF：https://pdf-preview-seven.vercel.app/embed

