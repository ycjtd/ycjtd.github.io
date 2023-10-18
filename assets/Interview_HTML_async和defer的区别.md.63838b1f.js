import{_ as e,c as o,o as t,a as c}from"./app.d0de5917.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/HTML/async和defer的区别.md"}'),n={name:"Interview/HTML/async和defer的区别.md"},s=c("<p><strong>为什么需要 async 和 defer</strong></p><p>js 是单线程的,如果没有 defer 或 async 属性,浏览器会立即加载并执行相应的脚本,不会等到后续加载的文档元素,读取到就会开始和执行,会阻塞后续文档的加载</p><p>defer 和 async 都是去异步加载外部的 JS 脚本文件，他们都不会阻塞页面的解析。</p><p><strong>区别</strong></p><ul><li><code>async</code>: 脚本的执行时机是在下载完成后立即执行。这意味着如果脚本的加载速度很快，可能会在页面的其他资源加载之前执行，导致可能的依赖问题。</li><li><code>defer</code>: 脚本的执行时机是在文档解析完毕后，DOMContentLoaded 事件触发之前执行。这确保了脚本的执行在整个文档结构构建完成之后。</li></ul><p><strong>使用场景</strong></p><ul><li><code>async</code>: 如果页面中有多个带有<code>async</code>属性的脚本，它们的执行顺序是不确定的，因为它们可能在下载完成后立即执行，而下载速度快慢不一，导致顺序混乱。</li><li><code>defer</code>: 如果页面中有多个带有<code>defer</code>属性的脚本，它们的执行顺序是按照它们在文档中出现的顺序执行的，保证了它们之间的顺序性。</li></ul>",7),r=[s];function d(a,_,i,p,l,f){return t(),o("div",null,r)}const m=e(n,[["render",d]]);export{y as __pageData,m as default};
