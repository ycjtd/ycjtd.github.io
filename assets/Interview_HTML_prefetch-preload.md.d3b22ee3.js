import{_ as e,c as o,o as t,a as c}from"./app.d0de5917.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/HTML/prefetch-preload.md"}'),r={name:"Interview/HTML/prefetch-preload.md"},d=c("<p><strong>相同点</strong></p><p>都是告知浏览器提前加载文件(图片、视频、<code>js</code>、<code>css</code>等)，但执行上是有区别的。</p><p><strong>区别</strong></p><ul><li><code>prefetch</code>预取：prefetch 是一个资源提示属性，用于告诉浏览器在页面加载完成后，异步地预取指定资源。这意味着浏览器会在<strong>空闲</strong>时加载这些资源，以备将来可能需要用到。prefetch 适用于当前页面未使用但可能在后续页面或用户操作中可能会用到的资源</li><li><code>preload</code>预加载 : <code>preload</code>是一个资源提示属性，用于告诉浏览器在页面加载时立即开始加载指定的资源。与<code>prefetch</code>不同，<code>preload</code>会在页面加载时立即下载资源，而不是在后台异步加载。<code>preload</code>适用于当前页面需要用到的重要资源，以优化关键资源的加载时间。</li></ul>",4),a=[d];function p(s,_,n,l,i,f){return t(),o("div",null,a)}const T=e(r,[["render",p]]);export{m as __pageData,T as default};
