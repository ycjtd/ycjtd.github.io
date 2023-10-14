import{_ as e,c as t,o as a,d as o}from"./app.a84b4934.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/工程化/babel原理.md"}'),s={name:"Interview/工程化/babel原理.md"},_=o("<p>babel 主要用于将新版本的代码转换为向后兼容的 js 语法**(**​<code>Polyfill</code> 方式)，以便能够运行在各版本的浏览器或其他环境中</p><p><strong>基本原理</strong></p><p>首先将源码转成抽象语法树，然后对语法树进行处理生成新的语法树，最后将新语法树生成新的 JS 代码</p><p>1）通过<code>babylon</code>将 js 转化成 ast (抽象语法树)</p><p>2）通过<code>babel-traverse</code>是一个对 ast 进行遍历，使用 babel 插件转化成新的 ast</p><p>3）通过<code>babel-generator</code>将 ast 生成新的 js 代码</p>",6),c=[_];function r(n,p,d,l,b,i){return a(),t("div",null,c)}const S=e(s,[["render",r]]);export{m as __pageData,S as default};
