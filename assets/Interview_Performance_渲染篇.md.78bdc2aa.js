import{_ as e,c as i,o as l,d as p}from"./app.72c7cb6e.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"服务端渲染","slug":"服务端渲染","link":"#服务端渲染","children":[]},{"level":2,"title":"浏览器","slug":"浏览器","link":"#浏览器","children":[]},{"level":2,"title":"CSS 优化","slug":"css-优化","link":"#css-优化","children":[]},{"level":2,"title":"DOM 优化","slug":"dom-优化","link":"#dom-优化","children":[]}],"relativePath":"Interview/Performance/渲染篇.md"}'),a={name:"Interview/Performance/渲染篇.md"},S=p('<h2 id="服务端渲染" tabindex="-1">服务端渲染 <a class="header-anchor" href="#服务端渲染" aria-hidden="true">#</a></h2><p>首先是客户端渲染，在客户端渲染模式下，服务端会把渲染需要的静态文件发送给客户端，客户端加载过来之后，自己在浏览器里跑一遍 JS，生成相应的 DOM，这种特性使得客户端代码渲染的源代码很简洁。</p><p>服务端渲染：当用户第一次请求页面时，由服务器把需要的组件或页面渲染成 HTML 字符串，然后返回给客户端。客户端拿到的是可以直接渲染然后呈现给用户的 HTML 内容，不需要为了生成 DOM 内容自己再去跑一遍 JS 代码。</p><p>使用服务端渲染很多是因为网站的 SEO，客户端渲染，在搜索引擎搜索某个关键字，是找不到的，因为搜索引擎只会搜现成的内容，所以这种情况下，会使用服务端渲染。服务端渲染也可以解决首屏加载速度过慢。在客户端渲染模式下，除了加载 HTML，还要等渲染所需的这部分 JS 加载完，之后还需要把这部分 JS 代码在浏览器上跑一遍。这一切发生在用户点击了链接之后发生的事，在这个过程结束之前，用户始终看不到网页上的内容，用户一直在等。但是服务端渲染模式下，服务器给客户端的已经是一个直接可以拿来呈现给用户的网页，中间环节早在服务端就帮我们做掉了。</p><h2 id="浏览器" tabindex="-1">浏览器 <a class="header-anchor" href="#浏览器" aria-hidden="true">#</a></h2><p>渲染过程：简单来说就是渲染引擎根据 HTML 文件描述构建相应的数学模型了。调用浏览器各个模块，将网页资源代码转换成图像结果，这个过程就是渲染过程。</p><ul><li><p>HTML 解释器：将 HTML 文档经过词法分析输出 DOM 树</p></li><li><p>CSS 解释器：解析 CSS 文档，生成样式规则</p></li><li><p>图层布局计算模块：布局计算每个对象的精确位置和大小</p></li><li><p>视图绘制模块：进行具体节点的图像绘制，将像素渲染到屏幕上。</p></li><li><p>JavaScript 引擎：编译执行 JavaScript 代码</p></li><li><p>DOM 树：解析 HTML 以创建的是 DOM 树，渲染引擎开始解析 HTML 文档，转换树中的标签到 DOM 节点，被称为内容树</p></li><li><p>CSSOM 树：解析 CSS 创建的是 CSSOM 树，CSSOM 的解析过程是并行的</p></li><li><p>渲染树：CSSOM 树和 DOM 结合，得到渲染树</p></li><li><p>布局渲染树：从根节点递归调用，计算每一个元素的大小、位置等，给每个节点所应该出现在屏幕上的精确坐标，得到基于渲染树的布局渲染树</p></li><li><p>绘制渲染树：遍历渲染树，每个节点将使用 UI 后端层来绘制。整个过程叫做绘制渲染树。</p></li></ul><h2 id="css-优化" tabindex="-1">CSS 优化 <a class="header-anchor" href="#css-优化" aria-hidden="true">#</a></h2><ul><li>避免使用通配符，只对需要用到的元素进行选择</li><li>关注可以通过继承实现的属性，避免重复匹配重复定义</li><li>少用标签选择器</li><li>减少嵌套</li></ul><p>CSS 是阻塞渲染的资源，DOM 树和 CSSOM 合并构建成渲染树，浏览器在构建 CSSOM 树的过程中，不会渲染任何已经处理的内容，即便 DOM 已经解析完毕了，只要 CSSOM 没有完毕，渲染就不会结束，只有当解析 HTML 的时候，遇到 link 或 style 的时候，才开始构建 CSSOM，所以需要将 CSS 尽早、尽快下载到客户端，以便缩短首次渲染的时间。所以将 CSS 放在 head 标签中</p><p>JS 会阻塞，JS 引擎是独立于渲染引擎的，当 HTML 解析器遇到应该 script 标签，会暂停渲染过程，将控制器交给 JS 引擎。JS 引擎对内联的 JS 代码会直接执行，对外部 JS 文件要先获取到脚本、再进行执行。等 JS 引擎运行完毕，浏览器会把控制器交还给渲染引擎，继续 DOM 和 CSSOM 的构建。</p><p>通过 script 有人 JS，默认会阻塞浏览器，浏览器必须等待当前 js 脚本执行完毕才会去继续做其它的事情。</p><p>async 模式下，JS 不会阻塞浏览器做任何其它的事情，加载是异步的，当它加载结束，JS 脚本会立即执行，不能保证脚本的执行顺序</p><p>defer 模式下，JS 的加载是异步的，执行是被推迟的，等整个文档解析完成，被标记了 defer 的 JS 文件才会开始依次执行，可以保证脚本的执行顺序</p><h2 id="dom-优化" tabindex="-1">DOM 优化 <a class="header-anchor" href="#dom-优化" aria-hidden="true">#</a></h2><p>减少 DOM 操作 ⭐<strong>⭐</strong></p><p>回流：当我们对 DOM 的修改引发了 DOM 几何尺寸的变化（修改元素的宽、高或隐藏元素等）时，浏览器需要重新计算元素的几何属性，然后再将计算的结果绘制出来，这个过程就叫回流</p><p>重绘：当我们对 DOM 的修改导致了样式的变化、却并未影响其几何属性时，浏览器不需要重新计算元素的几何属性，直接为该元素绘制新的样式，这个过程叫重绘。</p><p>所以，重绘不一定导致回流，回流一定会导致重绘</p><p>如何避免：</p><ul><li>将一些属性使用 JS 变量缓存起来，计算完毕再提交给浏览器发出重计算请求</li><li>避免逐条改变样式，使用类名去合并样式</li><li>DOM 离线化，先把元素 display：none，操作完之后再 display：block</li></ul>',21),r=[S];function t(s,n,d,c,o,M){return l(),i("div",null,r)}const O=e(a,[["render",t]]);export{_ as __pageData,O as default};
