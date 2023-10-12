import{_ as e,c as s,o as l,d as i}from"./app.72c7cb6e.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/Browser/CSS加载会造成阻塞吗.md"}'),r={name:"Interview/Browser/CSS加载会造成阻塞吗.md"},t=i("<ul><li>css 加载不会阻塞 DOM 树的解析</li><li>css 加载会阻塞 DOM 树的渲染</li><li>css 加载会阻塞后面 js 语句的执行</li></ul><p>原理：</p><ul><li><p>HTML 解析文件，生成 DOM Tree，解析 CSS 文件生成 CSSOM Tree</p></li><li><p>将 Dom Tree 和 CSSOM Tree 结合，生成 Render Tree(渲染树)</p></li><li><p>根据 Render Tree 渲染绘制，将像素渲染到屏幕上。</p></li><li><p>DOM 解析和 CSS 解析是两个并行的进程，所以这也解释了为什么 CSS 加载不会阻塞 DOM 的解析。</p></li><li><p>然而，由于 Render Tree 是依赖于 DOM Tree 和 CSSOM Tree 的，所以他必须等待到 CSSOM Tree 构建完成，也就是 CSS 资源加载完成(或者 CSS 资源加载失败)后，才能开始渲染。因此，CSS 加载是会阻塞 Dom 的渲染的。</p></li><li><p>由于 js 可能会操作之前的 Dom 节点和 css 样式，因此浏览器会维持 html 中 css 和 js 的顺序。因此，样式表会在后面的 js 执行前先加载执行完毕。所以 css 会阻塞后面 js 的执行。</p></li></ul><p>怎么解决</p><ul><li>使用 CDN(因为 CDN 会根据你的网络状况，替你挑选最近的一个具有缓存内容的节点为你提供资源，因此可以减少加载时间)</li><li>对 css 进行压缩(可以用很多打包工具，比如 webpack,gulp 等，也可以通过开启 gzip 压缩)</li><li>合理的使用缓存(设置 cache-control,expires,以及 E-tag 都是不错的，不过要注意一个问题，就是文件更新后，你要避免缓存而带来的影响。其中一个解决防范是在文件名字后面加一个版本号)</li><li>减少 http 请求数，将多个 css 文件合并，或者是干脆直接写成内联样式(内联样式的一个缺点就是不能缓存)</li></ul>",5),_=[t];function p(c,S,o,a,n,C){return l(),s("div",null,_)}const D=e(r,[["render",p]]);export{d as __pageData,D as default};
