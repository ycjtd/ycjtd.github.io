import{_ as e,c as o,o as s,d as a}from"./app.eeaca755.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"vue 路由传参","slug":"vue-路由传参","link":"#vue-路由传参","children":[]},{"level":3,"title":"route 和 router 的区别","slug":"route-和-router-的区别","link":"#route-和-router-的区别","children":[]},{"level":3,"title":"怎么定义动态路由，怎么获取传过来的参数","slug":"怎么定义动态路由-怎么获取传过来的参数","link":"#怎么定义动态路由-怎么获取传过来的参数","children":[]},{"level":3,"title":"vue 里面 router-link 在电脑上有用，安卓上没反应怎么解决","slug":"vue-里面-router-link-在电脑上有用-安卓上没反应怎么解决","link":"#vue-里面-router-link-在电脑上有用-安卓上没反应怎么解决","children":[]},{"level":3,"title":"hash 和 history 路由模式实现原理","slug":"hash-和-history-路由模式实现原理","link":"#hash-和-history-路由模式实现原理","children":[]},{"level":3,"title":"router-view 和 router-link 是怎么起作用的","slug":"router-view-和-router-link-是怎么起作用的","link":"#router-view-和-router-link-是怎么起作用的","children":[]},{"level":3,"title":"了解 history 有哪些方法吗","slug":"了解-history-有哪些方法吗","link":"#了解-history-有哪些方法吗","children":[]},{"level":3,"title":"怎么监听 pushState 和 replaceState 的变化","slug":"怎么监听-pushstate-和-replacestate-的变化","link":"#怎么监听-pushstate-和-replacestate-的变化","children":[]},{"level":3,"title":"vue-router 如何保护路由","slug":"vue-router-如何保护路由","link":"#vue-router-如何保护路由","children":[]},{"level":3,"title":"怎么实现路由懒加载","slug":"怎么实现路由懒加载","link":"#怎么实现路由懒加载","children":[]},{"level":3,"title":"怎么从零开始实现一个 vue 路由","slug":"怎么从零开始实现一个-vue-路由","link":"#怎么从零开始实现一个-vue-路由","children":[]}],"relativePath":"Interview/Vue/vue-router.md"}'),l={name:"Interview/Vue/vue-router.md"},c=a(`<h3 id="vue-路由传参" tabindex="-1">vue 路由传参 <a class="header-anchor" href="#vue-路由传参" aria-hidden="true">#</a></h3><ul><li>使用 query 方法传入的参数使用<code>this.$route.query</code>接收</li><li>使用 params 方法传入的参数使用<code>this.$route.params</code>接收</li></ul><h3 id="route-和-router-的区别" tabindex="-1">route 和 router 的区别 <a class="header-anchor" href="#route-和-router-的区别" aria-hidden="true">#</a></h3><ul><li>route：当前 router 跳转对象，里面可以获取 name、path、query、params 等</li><li>router：是 vue-router 的实例，想要导航到不同 URL，使用 router.push 方法</li></ul><h3 id="怎么定义动态路由-怎么获取传过来的参数" tabindex="-1">怎么定义动态路由，怎么获取传过来的参数 <a class="header-anchor" href="#怎么定义动态路由-怎么获取传过来的参数" aria-hidden="true">#</a></h3><p>在 router 目录下的 index.js 文件中，对 path 属性加上 /:id，使用 router 对象的 params.if 获取动态参数</p><h3 id="vue-里面-router-link-在电脑上有用-安卓上没反应怎么解决" tabindex="-1">vue 里面 router-link 在电脑上有用，安卓上没反应怎么解决 <a class="header-anchor" href="#vue-里面-router-link-在电脑上有用-安卓上没反应怎么解决" aria-hidden="true">#</a></h3><p>在安卓上有问题是 babel 的问题，安装 babel polypill 插件解决</p><h3 id="hash-和-history-路由模式实现原理" tabindex="-1">hash 和 history 路由模式实现原理 <a class="header-anchor" href="#hash-和-history-路由模式实现原理" aria-hidden="true">#</a></h3><p>**<code>hash</code>**模式</p><p>早期的前端路由的实现就是基于 <code>location.hash</code> 来实现的。其实现原理很简单，<code>location.hash</code> 的值就是 <code>URL</code>中 <code>#</code> 后面的内容。比如下面这个网站，它的 <code>location.hash</code> 的值为 <code>&#39;#search&#39;</code></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#f6f6f4;">https://interview.poetries.top#search</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#24292e;">https://interview.poetries.top#search</span></span>
<span class="line"><span style="color:#24292e;"></span></span></code></pre></div><p>hash 路由模式的实现主要是基于下面几个特性</p><ul><li><code>URL</code> 中 <code>hash</code> 值只是客户端的一种状态，也就是说当向服务器端发出请求时，<code>hash</code> 部分不会被发送；</li><li><code>hash</code> 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制 <code>hash</code> 的切换；</li><li>可以通过 <code>a</code> 标签，并设置 <code>href</code> 属性，当用户点击这个标签后，<code>URL</code> 的 <code>hash</code> 值会发生改变；或者使用 <code>JavaScript</code> 来对 <code>loaction.hash</code> 进行赋值，改变 <code>URL</code> 的 <code>hash</code> 值；</li><li>我们可以使用 <code>hashchange</code> 事件来监听 <code>hash</code> 值的变化，从而对页面进行跳转（渲染）</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F6F6F4;">window.</span><span style="color:#62E884;">addEventListener</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">hashchange</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, funcRef, </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#24292E;">window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hashchange&quot;</span><span style="color:#24292E;">, funcRef, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">);</span></span>
<span class="line"></span></code></pre></div><p>每一次改变 <code>hash</code>（<code>window.location.hash</code>），都会在浏览器的访问历史中增加一个记录利用 <code>hash</code> 的以上特点，就可以来实现前端路由“更新视图但不重新请求页面”的功能了</p><p>特点：兼容性好但是不美观</p><p><strong>2. ​</strong>​**<code>history</code>**模式</p><p><code>history</code>采用<code>HTML5</code>的新特性；且提供了两个新方法： <code>pushState()</code>， <code>replaceState()</code>可以对浏览器历史记录栈进行修改，以及<code>popState</code>事件的监听到状态变更</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F6F6F4;">window.history.</span><span style="color:#62E884;">pushState</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">, path);</span></span>
<span class="line"><span style="color:#F6F6F4;">window.history.</span><span style="color:#62E884;">replaceState</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">, path);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        @</span><span style="color:#62E884;font-style:italic;">程序员poetry</span><span style="color:#F6F6F4;">: 代码已经复制到剪贴板</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#24292E;">window.history.</span><span style="color:#6F42C1;">pushState</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, path);</span></span>
<span class="line"><span style="color:#24292E;">window.history.</span><span style="color:#6F42C1;">replaceState</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, path);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        @程序员poetry: 代码已经复制到剪贴板</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>这两个方法有个共同的特点：当调用他们修改浏览器历史记录栈后，虽然当前 <code>URL</code> 改变了，但浏览器不会刷新页面，这就为单页应用前端路由“更新视图但不重新请求页面”提供了基础。</p><p>history 路由模式的实现主要基于存在下面几个特性：</p><ul><li><code>pushState</code> 和 <code>repalceState</code> 两个 <code>API</code> 来操作实现 <code>URL</code> 的变化 ；</li><li>我们可以使用 <code>popstate</code> 事件来监听 <code>url</code> 的变化，从而对页面进行跳转（渲染）；</li><li><code>history.pushState()</code> 或 <code>history.replaceState()</code> 不会触发 <code>popstate</code> 事件，这时我们需要手动触发页面跳转（渲染）。</li></ul><p>特点：虽然美观，但是刷新会出现 <code>404</code> 需要后端进行配置</p><h3 id="router-view-和-router-link-是怎么起作用的" tabindex="-1">router-view 和 router-link 是怎么起作用的 <a class="header-anchor" href="#router-view-和-router-link-是怎么起作用的" aria-hidden="true">#</a></h3><ol><li><code>vue-router</code>中两个重要组件<code>router-link</code>和<code>router-view</code>，分别起到路由导航作用和组件内容渲染作用</li><li>使用中<code>router-link</code>默认生成一个<code>a</code>标签，设置<code>to</code>属性定义跳转<code>path</code>。实际上也可以通过<code>custom</code>和插槽自定义最终的展现形式。<code>router-view</code>是要显示组件的占位组件，可以嵌套，对应路由配置的嵌套关系，配合<code>name</code>可以显示具名组件，起到更强的布局作用。</li><li><code>router-link</code>组件内部根据<code>custom</code>属性判断如何渲染最终生成节点，内部提供导航方法<code>navigate</code>，用户点击之后实际调用的是该方法，此方法最终会修改响应式的路由变量，然后重新去<code>routes</code>匹配出数组结果，<code>router-view</code>则根据其所处深度<code>deep</code>在匹配数组结果中找到对应的路由并获取组件，最终将其渲染出来。</li></ol><h3 id="了解-history-有哪些方法吗" tabindex="-1">了解 history 有哪些方法吗 <a class="header-anchor" href="#了解-history-有哪些方法吗" aria-hidden="true">#</a></h3><p><code>history</code> 这个对象在<code>html5</code>的时候新加入两个<code>api</code> <code>history.pushState()</code> 和 <code>history.repalceState()</code> 这两个<code>API</code>可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录。</p><ul><li><code>window.history.back()</code> 后退</li><li><code>window.history.forward()</code>前进</li><li><code>window.history.go(1)</code> 前进或者后退几步</li></ul><p>从触发事件的监听上来说：</p><ul><li><code>pushState()</code>和<code>replaceState()</code>不能被<code>popstate</code>事件所监听</li><li>而后面三者可以，且用户点击浏览器前进后退键时也可以</li></ul><h3 id="怎么监听-pushstate-和-replacestate-的变化" tabindex="-1">怎么监听 pushState 和 replaceState 的变化 <a class="header-anchor" href="#怎么监听-pushstate-和-replacestate-的变化" aria-hidden="true">#</a></h3><p>利用自定义事件<code>new Event()</code>创建这两个事件，并全局监听</p><h3 id="vue-router-如何保护路由" tabindex="-1">vue-router 如何保护路由 <a class="header-anchor" href="#vue-router-如何保护路由" aria-hidden="true">#</a></h3><ul><li><code>vue-router</code>中保护路由的方法叫做路由守卫，主要用来通过跳转或取消的方式守卫导航。</li><li>路由守卫有三个级别：<code>全局</code>、<code>路由独享</code>、<code>组件级</code>。影响范围由大到小，例如全局的<code>router.beforeEach()</code>，可以注册一个全局前置守卫，每次路由导航都会经过这个守卫，因此在其内部可以加入控制逻辑决定用户是否可以导航到目标路由；在路由注册的时候可以加入单路由独享的守卫，例如<code>beforeEnter</code>，守卫只在进入路由时触发，因此只会影响这个路由，控制更精确；我们还可以为路由组件添加守卫配置，例如<code>beforeRouteEnter</code>，会在渲染该组件的对应路由被验证前调用，控制的范围更精确了。</li><li>用户的任何导航行为都会走<code>navigate</code>方法，内部有个<code>guards</code>队列按顺序执行用户注册的守卫钩子函数，如果没有通过验证逻辑则会取消原有的导航。</li></ul><h3 id="怎么实现路由懒加载" tabindex="-1">怎么实现路由懒加载 <a class="header-anchor" href="#怎么实现路由懒加载" aria-hidden="true">#</a></h3><ol><li>当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。利用路由懒加载我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样会更加高效，是一种优化手段</li><li>一般来说，对所有的<strong>路由都使用动态导入</strong>是个好主意</li><li>给<code>component</code>选项配置一个返回 <code>Promise</code> 组件的函数就可以定义懒加载路由。例如：<code>{ path: &#39;/users/:id&#39;, component: () =&gt; import(&#39;./views/UserDetails&#39;) }</code></li><li>结合注释 <code>() =&gt; import(/* webpackChunkName: &quot;group-user&quot; */ &#39;./UserDetails.vue&#39;)</code> 可以做<code>webpack</code>代码分块</li></ol><h3 id="怎么从零开始实现一个-vue-路由" tabindex="-1">怎么从零开始实现一个 vue 路由 <a class="header-anchor" href="#怎么从零开始实现一个-vue-路由" aria-hidden="true">#</a></h3><p>一个<code>SPA</code>应用的路由需要解决的问题是<strong>页面跳转内容改变同时不刷新</strong>，同时路由还需要以插件形式存在，所以：</p><ol><li>首先我会定义一个<code>createRouter</code>函数，返回路由器实例，实例内部做几件事</li></ol><ul><li>保存用户传入的配置项</li><li>监听<code>hash</code>或者<code>popstate</code>事件</li><li>回调里根据<code>path</code>匹配对应路由</li></ul><ol start="2"><li>将<code>router</code>定义成一个<code>Vue</code>插件，即实现<code>install</code>方法，内部做两件事</li></ol><ul><li>实现两个全局组件：<code>router-link</code>和<code>router-view</code>，分别实现页面跳转和内容显示</li><li>定义两个全局变量：<code>$route</code>和<code>$router</code>，组件内可以访问当前路由和路由器实例</li></ul>`,43),t=[c];function r(n,d,i,p,h,u){return s(),o("div",null,t)}const F=e(l,[["render",r]]);export{v as __pageData,F as default};
