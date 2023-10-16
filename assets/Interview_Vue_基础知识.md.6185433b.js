import{_ as d,c,a as l,t as i,d as e,o as a}from"./app.78019af7.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"谈谈对 vue 的理解","slug":"谈谈对-vue-的理解","link":"#谈谈对-vue-的理解","children":[]},{"level":3,"title":"为什么 vue 组件中 data 必须是函数","slug":"为什么-vue-组件中-data-必须是函数","link":"#为什么-vue-组件中-data-必须是函数","children":[]},{"level":3,"title":"v-show 和 v-if 的区别","slug":"v-show-和-v-if-的区别","link":"#v-show-和-v-if-的区别","children":[]},{"level":3,"title":"为什么 v-if 和 v-for 不建议一起使用","slug":"为什么-v-if-和-v-for-不建议一起使用","link":"#为什么-v-if-和-v-for-不建议一起使用","children":[]},{"level":3,"title":"怎么获取 dom","slug":"怎么获取-dom","link":"#怎么获取-dom","children":[]},{"level":3,"title":"vue 初始化页面闪动问题","slug":"vue-初始化页面闪动问题","link":"#vue-初始化页面闪动问题","children":[]},{"level":3,"title":"ajax 请求应该放在 methods 还是 vuex 中","slug":"ajax-请求应该放在-methods-还是-vuex-中","link":"#ajax-请求应该放在-methods-还是-vuex-中","children":[]},{"level":3,"title":"对 SPA 页面的理解，优缺点","slug":"对-spa-页面的理解-优缺点","link":"#对-spa-页面的理解-优缺点","children":[]},{"level":3,"title":"SPA 首屏加载慢怎么解决","slug":"spa-首屏加载慢怎么解决","link":"#spa-首屏加载慢怎么解决","children":[]},{"level":3,"title":"对 keep-alive 的理解","slug":"对-keep-alive-的理解","link":"#对-keep-alive-的理解","children":[]},{"level":3,"title":"Vue.observable 有了解过吗?","slug":"vue-observable-有了解过吗","link":"#vue-observable-有了解过吗","children":[]},{"level":3,"title":"既然 Vue 通过数据劫持可以精准探测数据变化，为什么还需要虚拟 DOM 进行 diff 检测差异","slug":"既然-vue-通过数据劫持可以精准探测数据变化-为什么还需要虚拟-dom-进行-diff-检测差异","link":"#既然-vue-通过数据劫持可以精准探测数据变化-为什么还需要虚拟-dom-进行-diff-检测差异","children":[]},{"level":3,"title":"Vue.mixin 使用场景和原理","slug":"vue-mixin-使用场景和原理","link":"#vue-mixin-使用场景和原理","children":[]},{"level":3,"title":"对 MVVM 的理解","slug":"对-mvvm-的理解","link":"#对-mvvm-的理解","children":[]},{"level":3,"title":"Vue 组件为什么只有一个根元素","slug":"vue-组件为什么只有一个根元素","link":"#vue-组件为什么只有一个根元素","children":[]},{"level":3,"title":"函数式组件的优势和原理","slug":"函数式组件的优势和原理","link":"#函数式组件的优势和原理","children":[]},{"level":3,"title":"组件之间通信方式有哪些","slug":"组件之间通信方式有哪些","link":"#组件之间通信方式有哪些","children":[]},{"level":3,"title":"vue 如何扩展一个组件","slug":"vue-如何扩展一个组件","link":"#vue-如何扩展一个组件","children":[]},{"level":3,"title":"子组件可以直接改父组件的数据吗","slug":"子组件可以直接改父组件的数据吗","link":"#子组件可以直接改父组件的数据吗","children":[]},{"level":3,"title":"组件和插件有什么区别","slug":"组件和插件有什么区别","link":"#组件和插件有什么区别","children":[]},{"level":3,"title":".sync 和 v-model 的区别","slug":"sync-和-v-model-的区别","link":"#sync-和-v-model-的区别","children":[]},{"level":3,"title":"SSR 的理解","slug":"ssr-的理解","link":"#ssr-的理解","children":[]},{"level":3,"title":"delete 和 Vue.delete 删除数组的区别","slug":"delete-和-vue-delete-删除数组的区别","link":"#delete-和-vue-delete-删除数组的区别","children":[]},{"level":3,"title":"Vue Ref 的作用","slug":"vue-ref-的作用","link":"#vue-ref-的作用","children":[]},{"level":3,"title":"vue-loader 是什么？有什么作用？","slug":"vue-loader-是什么-有什么作用","link":"#vue-loader-是什么-有什么作用","children":[]},{"level":3,"title":"从 0 到 1 自己构架一个 vue 项目，有哪些步骤，哪些重要插件、目录结构怎么组织","slug":"从-0-到-1-自己构架一个-vue-项目-有哪些步骤-哪些重要插件、目录结构怎么组织","link":"#从-0-到-1-自己构架一个-vue-项目-有哪些步骤-哪些重要插件、目录结构怎么组织","children":[]}],"relativePath":"Interview/Vue/基础知识.md"}'),t={name:"Interview/Vue/基础知识.md"},r=e('<h3 id="谈谈对-vue-的理解" tabindex="-1">谈谈对 vue 的理解 <a class="header-anchor" href="#谈谈对-vue-的理解" aria-hidden="true">#</a></h3><ul><li>vue 是一套用于构建用户界面的渐进式框架，核心库只关心视图层</li><li>是一个声明式框架，更关注结果</li><li>收到 MVVM 模式启发，简化了映射关系</li><li>采用虚拟 DOM，比较新旧虚拟节点，找到变化再进行更新，提高性能</li></ul><h3 id="为什么-vue-组件中-data-必须是函数" tabindex="-1">为什么 vue 组件中 data 必须是函数 <a class="header-anchor" href="#为什么-vue-组件中-data-必须是函数" aria-hidden="true">#</a></h3><ul><li>根实例对象 data 可以是对象也可以是函数，因为根实例是单例，不会产生数据污染情况</li><li>组件实例对象 data 必须是函数，.vue 文件在使用的时候实际上会转换成一个 class，一个组件被复用多次的话，也会创建多个实例。本质上，这些实例用的都是同一个构造函数，如果 data 是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件在不同的实例之间 data 不冲突，data 必须是一个函数</li></ul><h3 id="v-show-和-v-if-的区别" tabindex="-1">v-show 和 v-if 的区别 <a class="header-anchor" href="#v-show-和-v-if-的区别" aria-hidden="true">#</a></h3><p>区别</p><ul><li>v-show 隐藏则是为该元素添加 <code>css-display:none</code>，<code>dom</code>元素依旧还在，<code>v-if显示隐藏是将dom元素整个添加或删除</code></li><li>编译过程：v-if 切换有一个局部编译/缺陷的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show 只是简单的基于 css 切换</li><li>编译条件：v-if 是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为假时，并不做操作，直到为真才渲染</li><li>v-show 由 false 变为 true 的时候不会触发组件的生命周期</li><li>v-if 由 false 变为 true 的时候，触发组件的 beforeCreate、create、beforeMount、mounted 钩子，由 true 变为 false 的时候触发组件的 beforeDestory、destory 方法</li><li>性能消耗：v-if 有更高的切换消耗；v-show 有更高的初始渲染消耗</li></ul><p>使用场景：</p><ul><li>v-if 和 v-show 都能控制 dom 元素在页面的显示</li><li>v-if 和 v-show 开销更大的（直接操作 dom 节点增加与删除）</li><li>如果需要非常频繁的切换，则使用 v-show 较好</li><li>如果在运行时条件很少改变，则使用 v-if 较好</li></ul><h3 id="为什么-v-if-和-v-for-不建议一起使用" tabindex="-1">为什么 v-if 和 v-for 不建议一起使用 <a class="header-anchor" href="#为什么-v-if-和-v-for-不建议一起使用" aria-hidden="true">#</a></h3><ul><li>在 vue2 中，v-for 的优先级是高于 v-if 的，把它们放在一起，输出的渲染函数中可以看出会先执行循环再判断条件，哪怕只渲染列表中一小部分元素，也得在每次重新渲染的时候遍历整个列表，这会比较浪费</li><li>在 vue3 中完全相反，v-if 的优先级是高于 v-for 的，所以 v-if 执行的时候，调用的变量还不存在，就会导致异常</li><li>如果一定要一起使用，可以把 v-if 移动到容器元素上，或者外面包一层 template</li></ul><h3 id="怎么获取-dom" tabindex="-1">怎么获取 dom <a class="header-anchor" href="#怎么获取-dom" aria-hidden="true">#</a></h3><p>使用 ref 和 refs</p><p>先给标签设置一个 ref 值，再通过<code>this.$refs.domName</code> 来获取</p><h3 id="vue-初始化页面闪动问题" tabindex="-1">vue 初始化页面闪动问题 <a class="header-anchor" href="#vue-初始化页面闪动问题" aria-hidden="true">#</a></h3>',15),s=e(`<p>可以在 css 里加</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F6F6F4;">[v</span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;">cloak] {</span></span>
<span class="line"><span style="color:#F6F6F4;">  disply:none</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#24292E;">[v</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">cloak] {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">disply</span><span style="color:#24292E;">:none</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="ajax-请求应该放在-methods-还是-vuex-中" tabindex="-1">ajax 请求应该放在 methods 还是 vuex 中 <a class="header-anchor" href="#ajax-请求应该放在-methods-还是-vuex-中" aria-hidden="true">#</a></h3><ul><li>如果请求来的数据不是要被其它组件共用，仅仅在请求的组件内使用，就不需要放入 vuex 的 state 中</li><li>如果被其它地方复用，就放在 action 中，方便复用</li></ul><h3 id="对-spa-页面的理解-优缺点" tabindex="-1">对 SPA 页面的理解，优缺点 <a class="header-anchor" href="#对-spa-页面的理解-优缺点" aria-hidden="true">#</a></h3><p>SPA，单页面应用，只在 web 页面初始化的时候加载相应的 HTML、CSS 和 JavaScript，一旦页面加载完成，SPA 不会因为用户的操作进行页面的重新加载或跳转，而是利用路由机制实现 HTML 内容的变换，UI 和用户的交互</p><p>优点：</p><ul><li>用户体验好，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染</li><li>前后端职责分离，架构清晰，服务器压力小</li></ul><p>缺点：</p><ul><li>初次加载耗时多</li><li>前进后退路由难管理</li><li>SEO 难度大</li></ul><p>怎么解决</p><p>SSR + CSR 方式，首屏采用服务端渲染的方式，后续交互采用客户端渲染方式</p><h3 id="spa-首屏加载慢怎么解决" tabindex="-1">SPA 首屏加载慢怎么解决 <a class="header-anchor" href="#spa-首屏加载慢怎么解决" aria-hidden="true">#</a></h3><p>什么叫首屏加载时间：浏览器从响应用户输入网站地址,到首屏内容渲染完成的时间,整个网页不一定要全部渲染完成,但是需要展示当前视窗需要的内容</p><p>加载慢的原因：</p><ul><li>网络延时问题</li><li>资源文件体积过大</li><li>是否发生重复请求</li><li>加载脚本的时候，渲染内容堵塞</li></ul><p>解决办法：</p><ul><li>减小入口文件体积</li><li>静态资源本地缓存</li><li>UI 框架按需加载</li><li>图片资源压缩</li><li>开启 GZip 压缩</li><li>使用 SSR</li></ul><h3 id="对-keep-alive-的理解" tabindex="-1">对 keep-alive 的理解 <a class="header-anchor" href="#对-keep-alive-的理解" aria-hidden="true">#</a></h3><ul><li><code>keep-alive</code> 是 <code>Vue</code> 内置的一个组件，<strong>可以实现组件缓存</strong>，当组件切换时不会对当前组件进行卸载。<strong>一般结合路由和动态组件一起使用</strong>，用于缓存组件</li><li>提供 <code>include</code> 和 <code>exclude</code> 属性，<strong>允许组件有条件的进行缓存</strong>。两者都支持字符串或正则表达式，<code>include</code> 表示只有名称匹配的组件会被缓存，<code>exclude</code> 表示任何名称匹配的组件都不会被缓存 ，其中 <code>exclude</code> 的优先级比 <code>include</code> 高</li><li>对应两个钩子函数 <code>activated</code> 和<code>deactivated</code> ，当组件被激活时，触发钩子函数 <code>activated</code>，当组件被移除时，触发钩子函数 <code>deactivated</code></li><li><code>keep-alive</code> 的中还运用了 <code>LRU</code>(最近最少使用) 算法，选择最近最久未使用的组件予以淘汰</li></ul><h3 id="vue-observable-有了解过吗" tabindex="-1">Vue.observable 有了解过吗? <a class="header-anchor" href="#vue-observable-有了解过吗" aria-hidden="true">#</a></h3><p>让一个对象变成响应式数据,Vue 内部会用它来处理 data 函数返回的对象</p><p>使用场景: 实现非父子组件通信</p><h3 id="既然-vue-通过数据劫持可以精准探测数据变化-为什么还需要虚拟-dom-进行-diff-检测差异" tabindex="-1">既然 Vue 通过数据劫持可以精准探测数据变化，为什么还需要虚拟 DOM 进行 diff 检测差异 <a class="header-anchor" href="#既然-vue-通过数据劫持可以精准探测数据变化-为什么还需要虚拟-dom-进行-diff-检测差异" aria-hidden="true">#</a></h3><p>vue 设计的每一个组件一个 watcher，没有采用一个属性对应一个 watcher，这样会导致大量的 watcher 的产生而浪费内存，如果粒度过低也无法精准检测变化，所以采用 diff 算法+组件级 watcher</p><h3 id="vue-mixin-使用场景和原理" tabindex="-1">Vue.mixin 使用场景和原理 <a class="header-anchor" href="#vue-mixin-使用场景和原理" aria-hidden="true">#</a></h3><ul><li>在日常的开发中，我们经常会遇到在不同的组件中经常会需要用到一些相同或者相似的代码，这些代码的功能相对独立，可以通过 <code>Vue</code> 的 <code>mixin</code> 功能抽离公共的业务逻辑，原理类似“对象的继承”，当组件初始化时会调用 <code>mergeOptions</code> 方法进行合并，采用策略模式针对不同的属性进行合并。当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”；如果混入的数据和本身组件的数据冲突，会以组件的数据为准</li><li><code>mixin</code>有很多缺陷如：命名冲突、依赖问题、数据来源问题</li></ul><h3 id="对-mvvm-的理解" tabindex="-1">对 MVVM 的理解 <a class="header-anchor" href="#对-mvvm-的理解" aria-hidden="true">#</a></h3><p><code>MVVM</code>是<code>Model-View-ViewModel</code>缩写，也就是把<code>MVC</code>中的<code>Controller</code>演变成<code>ViewModel</code>。<code>Model</code>层代表数据模型（也就是前端声明的静态数据或者是通过网络请求获取的数据），<code>View</code>代表 UI 组件（能看到的前端页面），<code>ViewModel</code>（其实就是 Vue/React 等前端框架）是<code>View</code>和<code>Model</code>层的桥梁，MVVM 模式不需要用户手动的去操作 DOM 元素，将数据绑定到 ViewModel 层上，会自动将数据渲染到页面中，视图变化会通知 ViewModel 层更新数据。</p><ul><li><code>Model</code>: 代表数据模型，也可以在<code>Model</code>中定义数据修改和操作的业务逻辑。我们可以把<code>Model</code>称为数据层，因为它仅仅关注数据本身，不关心任何行为</li><li><code>View</code>: 用户操作界面。当<code>ViewModel</code>对<code>Model</code>进行更新的时候，会通过数据绑定更新到<code>View</code></li><li><code>ViewModel</code>： 业务逻辑层，<code>View</code>需要什么数据，<code>ViewModel</code>要提供这个数据；<code>View</code>有某些操作，<code>ViewModel</code>就要响应这些操作，所以可以说它是<code>Model for View</code>.</li></ul><h3 id="vue-组件为什么只有一个根元素" tabindex="-1">Vue 组件为什么只有一个根元素 <a class="header-anchor" href="#vue-组件为什么只有一个根元素" aria-hidden="true">#</a></h3><ol><li><code>vue2</code>中组件确实只能有一个根，但<code>vue3</code>中组件已经可以多根节点了。</li><li>之所以需要这样是因为<code>vdom</code>是一颗单根树形结构，<code>patch</code>方法在遍历的时候从根节点开始遍历，它要求只有一个根节点。组件也会转换为一个<code>vdom</code></li><li><code>vue3</code>中之所以可以写多个根节点，是因为引入了<code>Fragment</code>的概念，这是一个抽象的节点，如果发现组件是多根的，就创建一个<code>Fragment</code>节点，把多个根节点作为它的<code>children</code>。将来<code>patch</code>的时候，如果发现是一个<code>Fragment</code>节点，则直接遍历<code>children</code>创建或更新</li></ol><h3 id="函数式组件的优势和原理" tabindex="-1">函数式组件的优势和原理 <a class="header-anchor" href="#函数式组件的优势和原理" aria-hidden="true">#</a></h3><ol><li>函数式组件需要在声明组件是指定 <code>functional:true</code></li><li>不需要实例化，所以没有<code>this</code>,<code>this</code>通过<code>render</code>函数的第二个参数<code>context</code>来代替</li><li>没有生命周期钩子函数，不能使用计算属性，<code>watch</code></li><li>不能通过<code>$emit</code> 对外暴露事件，调用事件只能通过<code>context.listeners.click</code>的方式调用外部传入的事件</li><li>因为函数式组件是没有实例化的，所以在外部通过<code>ref</code>去引用组件时，实际引用的是<code>HTMLElement</code></li><li>函数式组件的<code>props</code>可以不用显示声明，所以没有在<code>props</code>里面声明的属性都会被自动隐式解析为<code>prop</code>,而普通组件所有未声明的属性都解析到<code>$attrs</code>里面，并自动挂载到组件根元素上面(可以通过<code>inheritAttrs</code>属性禁止)</li></ol><p><strong>优点</strong></p><ol><li>由于函数式组件不需要实例化，无状态，没有生命周期，所以渲染性能要好于普通组件</li><li>函数式组件结构比较简单，代码结构更清晰</li></ol><p><strong>使用场景：</strong></p><ul><li>一个简单的展示组件，作为容器组件使用 比如 <code>router-view</code> 就是一个函数式组件</li><li>“高阶组件”——用于接收一个组件作为参数，返回一个被包装过的组件</li></ul><h3 id="组件之间通信方式有哪些" tabindex="-1">组件之间通信方式有哪些 <a class="header-anchor" href="#组件之间通信方式有哪些" aria-hidden="true">#</a></h3><ul><li><p><code>props / $emit</code> <strong>适用 父子组件通信</strong></p><ul><li>父组件向子组件传递数据是通过 <code>prop</code> 传递的，子组件传递数据给父组件是通过<code>$emit</code> 触发事件来做到的</li></ul></li><li><p><code>ref</code> 与 <code>$parent / $children(vue3废弃)</code> <strong>适用 父子组件通信</strong></p><ul><li><code>ref</code>：如果在普通的 <code>DOM</code> 元素上使用，引用指向的就是 <code>DOM</code> 元素；如果用在子组件上，引用就指向组件实例</li><li><code>$parent / $children</code>：访问访问父组件的属性或方法 / 访问子组件的属性或方法</li></ul></li><li><p><code>EventBus （$emit / $on）</code> <strong>适用于 父子、隔代、兄弟组件通信</strong></p><ul><li>这种方法通过一个空的 <code>Vue</code> 实例作为中央事件总线（事件中心），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件</li></ul></li><li><p><code>$attrs / $listeners(vue3废弃)</code> <strong>适用于 隔代组件通信</strong></p><ul><li><code>$attrs</code>：包含了父作用域中不被 <code>prop</code> 所识别 (且获取) 的特性绑定 ( <code>class</code> 和 <code>style</code> 除外 )。当一个组件没有声明任何 <code>prop</code> 时，这里会包含所有父作用域的绑定 ( <code>class</code> 和 <code>style</code> 除外 )，并且可以通过 <code>v-bind=&quot;$attrs&quot;</code> 传入内部组件。通常配合 <code>inheritAttrs</code> 选项一起使用，多余的属性不会被解析到标签上</li><li><code>$listeners</code>：包含了父作用域中的 (不含 <code>.native</code> 修饰器的) <code>v-on</code> 事件监听器。它可以通过 <code>v-on=&quot;$listeners&quot;</code> 传入内部组件</li></ul></li><li><p><code>provide / inject</code> <strong>适用于 隔代组件通信</strong></p><ul><li>祖先组件中通过 <code>provider</code> 来提供变量，然后在子孙组件中通过 <code>inject</code> 来注入变量。 <code>provide / inject</code> API 主要解决了跨级组件间的通信问题，<strong>不过它的使用场景，主要是子组件获取上级组件的状态</strong>，跨级组件间建立了一种主动提供与依赖注入的关系</li></ul></li><li><p><code>$root</code> <strong>适用于 隔代组件通信</strong> 访问根组件中的属性或方法，是根组件，不是父组件。<code>$root</code>只对根组件有用</p></li><li><p><code>Vuex</code> <strong>适用于 父子、隔代、兄弟组件通信</strong></p><ul><li><code>Vuex</code> 是一个专为 <code>Vue.js</code> 应用程序开发的状态管理模式。每一个 <code>Vuex</code> 应用的核心就是 <code>store</code>（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( <code>state</code> )</li><li><code>Vuex</code> 的状态存储是响应式的。当 <code>Vue</code> 组件从 <code>store</code> 中读取状态的时候，若 <code>store</code> 中的状态发生变化，那么相应的组件也会相应地得到高效更新。</li><li>改变 <code>store</code> 中的状态的唯一途径就是显式地提交 (<code>commit</code>) <code>mutation</code>。这样使得我们可以方便地跟踪每一个状态的变化。</li></ul></li></ul><p><strong>根据组件之间关系讨论组件通信最为清晰有效</strong></p><ul><li>父子组件：<code>props</code>/<code>$emit</code>/<code>$parent</code>/<code>ref</code></li><li>兄弟组件：<code>$parent</code>/<code>eventbus</code>/<code>vuex</code></li><li>跨层级关系：<code>eventbus</code>/<code>vuex</code>/<code>provide+inject</code>/<code>$attrs + $listeners</code>/<code>$root</code></li></ul><h3 id="vue-如何扩展一个组件" tabindex="-1">vue 如何扩展一个组件 <a class="header-anchor" href="#vue-如何扩展一个组件" aria-hidden="true">#</a></h3><ol><li>常见的组件扩展方法有：<code>mixins</code>，<code>slots</code>，<code>extends</code>等</li><li>混入<code>mixins</code>是分发 <code>Vue</code> 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项、</li><li>插槽主要用于<code>vue</code>组件中的内容分发，也可以用于组件扩展、</li><li>组件选项中还有一个不太常用的选项<code>extends</code>，也可以起到扩展组件的目的</li></ol><h3 id="子组件可以直接改父组件的数据吗" tabindex="-1">子组件可以直接改父组件的数据吗 <a class="header-anchor" href="#子组件可以直接改父组件的数据吗" aria-hidden="true">#</a></h3><ol><li>所有的 <code>prop</code> 都使得其父子之间形成了一个单向下行绑定：父级 <code>prop</code> 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。另外，每次父级组件发生变更时，子组件中所有的 <code>prop</code> 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 <code>prop</code>。如果你这样做了，<code>Vue</code> 会在浏览器控制台中发出警告</li><li>实际开发过程中有两个场景会想要修改一个属性：<strong>这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。</strong> 在这种情况下，最好定义一个本地的 <code>data</code>，并将这个 <code>prop</code> 用作其初始值：<strong>这个 prop 以一种原始的值传入且需要进行转换。</strong> 在这种情况下，最好使用这个 <code>prop</code> 的值来定义一个计算属性：</li><li>实践中如果确实想要改变父组件属性应该<code>emit</code>一个事件让父组件去做这个变更。注意虽然我们不能直接修改一个传入的对象或者数组类型的<code>prop</code>，但是我们还是能够直接改内嵌的对象或属性</li></ol><h3 id="组件和插件有什么区别" tabindex="-1">组件和插件有什么区别 <a class="header-anchor" href="#组件和插件有什么区别" aria-hidden="true">#</a></h3><p><strong>1. 组件是什么</strong></p><p>组件就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式，在 Vue 中每一个.vue 文件都可以视为一个组件</p><p><strong>组件的优势</strong></p><ul><li>降低整个系统的耦合度，在保持接口不变的情况下，我们可以替换不同的组件快速完成需求，例如输入框，可以替换为日历、时间、范围等组件作具体的实现</li><li>调试方便，由于整个系统是通过组件组合起来的，在出现问题的时候，可以用排除法直接移除组件，或者根据报错的组件快速定位问题，之所以能够快速定位，是因为每个组件之间低耦合，职责单一，所以逻辑会比分析整个系统要简单</li><li>提高可维护性，由于每个组件的职责单一，并且组件在系统中是被复用的，所以对代码进行优化可获得系统的整体升级</li></ul><p><strong>2. 插件是什么</strong></p><p>插件通常用来为 <code>Vue</code> 添加全局功能。插件的功能范围没有严格的限制——一般有下面几种：</p><ul><li>添加全局方法或者属性。如: <code>vue-custom-element</code></li><li>添加全局资源：指令/过滤器/过渡等。如 <code>vue-touch</code></li><li>通过全局混入来添加一些组件选项。如<code>vue-router</code></li><li>添加 <code>Vue</code> 实例方法，通过把它们添加到 <code>Vue.prototype</code> 上实现。</li><li>一个库，提供自己的 <code>API</code>，同时提供上面提到的一个或多个功能。如<code>vue-router</code></li></ul><p><strong>3. 两者的区别</strong></p><p>两者的区别主要表现在以下几个方面：</p><ul><li><p>编写形式</p><ul><li>编写一个组件，可以有很多方式，我们最常见的就是 vue 单文件的这种格式，每一个<code>.vue</code>文件我们都可以看成是一个组件</li><li><code>use</code>插件的实现应该暴露一个 <code>install</code> 方法。这个方法的第一个参数是 <code>Vue</code> 构造器，第二个参数是一个可选的选项对象</li></ul></li><li><p>注册形式</p><ul><li>vue 组件注册主要分为<strong>全局注册</strong>与<strong>局部注册</strong></li><li>插件的注册通过<code>Vue.use()</code>的方式进行注册（安装），第一个参数为插件的名字，第二个参数是可选择的配置项</li></ul></li><li><p>使用场景</p><ul><li>组件 (Component) 是用来构成你的 App 的业务模块，它的目标是 <code>App.vue</code></li><li>件 (Plugin) 是用来增强你的技术栈的功能模块，它的目标是 Vue 本身</li></ul></li></ul><p>简单来说，插件就是对 Vue 的功能的增强或补充</p><h3 id="sync-和-v-model-的区别" tabindex="-1">.sync 和 v-model 的区别 <a class="header-anchor" href="#sync-和-v-model-的区别" aria-hidden="true">#</a></h3><ul><li><p><code>.sync</code>修饰符可以实现父子组件之间的双向绑定，并且可以实现子组件同步修改父组件的值，相比较与<code>v-model</code>来说,<code>sync</code>修饰符就简单很多了</p></li><li><p>一个组件上可以有多个<code>.sync</code>修饰符</p></li><li><p>相同点</p><ul><li>都是语法糖，都可以实现父子组件中的数据的双向通信</li></ul></li><li><p>区别点</p><ul><li>格式不同：<code>v-model=&quot;num&quot;</code>, <code>:num.sync=&quot;num&quot;</code></li><li><code>v-model</code>: <code>@input + value</code></li><li><code>:num.sync</code>: <code>@update:num</code></li><li><code>v-model</code>只能用一次；<code>.sync</code>可以有多个</li></ul></li></ul><h3 id="ssr-的理解" tabindex="-1">SSR 的理解 <a class="header-anchor" href="#ssr-的理解" aria-hidden="true">#</a></h3><blockquote><p><code>Vue.js</code> 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 <code>Vue</code> 组件，进行生成 <code>DOM</code> 和操作 <code>DOM</code>。然而，也可以将同一个组件渲染为服务端的 <code>HTML</code> 字符串，将它们直接发送到浏览器，最后将这些静态标记&quot;激活&quot;为客户端上完全可交互的应用程序。</p></blockquote><blockquote><p><code>SSR</code>也就是服务端渲染，也就是将 <code>Vue</code> 在客户端把标签渲染成 <code>HTML</code> 的工作放在服务端完成，然后再把 <code>html</code> 直接返回给客户端</p></blockquote><ul><li><p><strong>优点</strong>：<code>SSR</code> 有着更好的 <code>SEO</code>、并且首屏加载速度更快</p><ul><li>因为 <code>SPA</code> 页面的内容是通过 <code>Ajax</code> 获取，而搜索引擎爬取工具并不会等待 <code>Ajax</code> 异步完成后再抓取页面内容，所以在 <code>SPA</code> 中是抓取不到页面通过 <code>Ajax</code>获取到的内容；而 <code>SSR</code> 是直接由服务端返回已经渲染好的页面（数据已经包含在页面中），所以搜索引擎爬取工具可以抓取渲染好的页面</li><li>更快的内容到达时间（首屏加载更快）： <code>SPA</code> 会等待所有 <code>Vue</code> 编译后的 <code>js</code> 文件都下载完成后，才开始进行页面的渲染，文件下载等需要一定的时间等，所以首屏渲染需要一定的时间；<code>SSR</code> 直接由服务端渲染好页面直接返回显示，无需等待下载 js 文件及再去渲染等，所以 SSR 有更快的内容到达时间</li></ul></li><li><p><strong>缺点</strong>： 开发条件会受到限制，服务器端渲染只支持 <code>beforeCreate</code> 和 <code>created</code> 两个钩子，当我们需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于 <code>Node.js</code> 的运行环境。服务器会有更大的负载需求</p><ul><li>在 Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的 <code>server</code> 更加大量占用<code>CPU</code>资源 (CPU-intensive - CPU 密集)，因此如果你预料在高流量环境 ( high traffic ) 下使用，请准备相应的服务器负载，并明智地采用缓存策略</li></ul></li></ul><p><strong>其基本实现原理</strong></p><ul><li><code>app.js</code> 作为客户端与服务端的公用入口，导出 <code>Vue</code> 根实例，供客户端 <code>entry</code> 与服务端 <code>entry</code> 使用。客户端 <code>entry</code> 主要作用挂载到 <code>DOM</code> 上，服务端 <code>entry</code> 除了创建和返回实例，还进行路由匹配与数据预获取。</li><li><code>webpack</code> 为客服端打包一个 <code>Client Bundle</code> ，为服务端打包一个 <code>Server Bundle</code> 。</li><li>服务器接收请求时，会根据 <code>url</code>，加载相应组件，获取和解析异步数据，创建一个读取 <code>Server Bundle</code> 的 <code>BundleRenderer</code>，然后生成 <code>html</code> 发送给客户端。</li><li>客户端混合，客户端收到从服务端传来的 <code>DOM</code> 与自己的生成的 DOM 进行对比，把不相同的 <code>DOM</code> 激活，使其可以能够响应后续变化，这个过程称为客户端激活 。为确保混合成功，客户端与服务器端需要共享同一套数据。在服务端，可以在渲染之前获取数据，填充到 <code>stroe</code> 里，这样，在客户端挂载到 <code>DOM</code> 之前，可以直接从 <code>store</code>里取数据。首屏的动态数据通过 <code>window.__INITIAL_STATE__</code>发送到客户端</li></ul><blockquote><p><code>Vue SSR</code> 的实现，主要就是把 <code>Vue</code> 的组件输出成一个完整 <code>HTML</code>, <code>vue-server-renderer</code> 就是干这事的</p></blockquote><p><code>Vue SSR</code>需要做的事多点（输出完整 HTML），除了<code>complier -&gt; vnode</code>，还需如数据获取填充至 <code>HTML</code>、客户端混合（<code>hydration</code>）、缓存等等。相比于其他模板引擎（<code>ejs</code>, <code>jade</code> 等），最终要实现的目的是一样的，性能上可能要差点</p><p><strong>怎么理解 vue 的单向数据流</strong></p><p>数据总是从父组件传到子组件，子组件没有权利修改父组件传过来的数据，只能请求父组件对原始数据进行修改。这样会<strong>防止从子组件意外改变父级组件的状态</strong>，从而导致你的应用的数据流向难以理解</p><h3 id="delete-和-vue-delete-删除数组的区别" tabindex="-1">delete 和 Vue.delete 删除数组的区别 <a class="header-anchor" href="#delete-和-vue-delete-删除数组的区别" aria-hidden="true">#</a></h3><ul><li><code>delete</code>只是被删除的元素变成了 <code>empty/undefined</code> 其他的元素的键值还是不变。</li><li><code>Vue.delete</code>直接删除了数组 改变了数组的键值。</li></ul><h3 id="vue-ref-的作用" tabindex="-1">Vue Ref 的作用 <a class="header-anchor" href="#vue-ref-的作用" aria-hidden="true">#</a></h3><ul><li>获取<code>dom</code>元素<code>this.$refs.box</code></li><li>获取子组件中的<code>data this.$refs.box.msg</code></li><li>调用子组件中的方法<code>this.$refs.box.open()</code></li></ul><h3 id="vue-loader-是什么-有什么作用" tabindex="-1">vue-loader 是什么？有什么作用？ <a class="header-anchor" href="#vue-loader-是什么-有什么作用" aria-hidden="true">#</a></h3><ol><li><code>vue-loader</code>是用于处理单文件组件（<code>SFC</code>，<code>Single-File Component</code>）的<code>webpack loader</code></li><li>因为有了<code>vue-loader</code>，我们就可以在项目中编写<code>SFC</code>格式的<code>Vue</code>组件，我们可以把代码分割为<code>&lt;template&gt;</code>、<code>&lt;script&gt;</code>和<code>&lt;style&gt;</code>，代码会异常清晰。结合其他<code>loader</code>我们还可以用<code>Pug</code>编写<code>&lt;template&gt;</code>，用<code>SASS</code>编写<code>&lt;style&gt;</code>，用<code>TS</code>编写<code>&lt;script&gt;</code>。我们的<code>&lt;style&gt;</code>还可以单独作用当前组件</li><li><code>webpack</code>打包时，会以<code>loader</code>的方式调用<code>vue-loader</code></li><li><code>vue-loader</code>被执行时，它会对<code>SFC</code>中的每个语言块用单独的<code>loader</code>链处理。最后将这些单独的块装配成最终的组件模块</li></ol><h3 id="从-0-到-1-自己构架一个-vue-项目-有哪些步骤-哪些重要插件、目录结构怎么组织" tabindex="-1">从 0 到 1 自己构架一个 vue 项目，有哪些步骤，哪些重要插件、目录结构怎么组织 <a class="header-anchor" href="#从-0-到-1-自己构架一个-vue-项目-有哪些步骤-哪些重要插件、目录结构怎么组织" aria-hidden="true">#</a></h3><ol><li>从<code>0</code>创建一个项目我大致会做以下事情：项目构建、引入必要插件、代码规范、提交规范、常用库和组件</li><li>目前<code>vue3</code>项目我会用<code>vite</code>或者<code>create-vue</code>创建项目</li><li>接下来引入必要插件：路由插件<code>vue-router</code>、状态管理<code>vuex/pinia</code>、<code>ui</code>库我比较喜欢<code>element-plu</code>s 和<code>antd-vue</code>、<code>http</code>工具我会选<code>axios</code></li><li>其他比较常用的库有<code>vueuse</code>，<code>nprogress</code>，图标可以使用<code>vite-svg-loader</code></li><li>下面是代码规范：结合<code>prettier</code>和<code>eslint</code>即可</li><li>最后是提交规范，可以使用<code>husky</code>，<code>lint-staged</code>，<code>commitlint</code></li><li>目录结构我有如下习惯： <code>.vscode</code>：用来放项目中的 <code>vscode</code> 配置</li></ol><ul><li><code>plugins</code>：用来放 <code>vite</code> 插件的 <code>plugin</code> 配置</li><li><code>public</code>：用来放一些诸如 页头<code>icon</code> 之类的公共文件，会被打包到<code>dist</code>根目录下</li><li><code>src</code>：用来放项目代码文件</li><li><code>api</code>：用来放<code>http</code>的一些接口配置</li><li><code>assets</code>：用来放一些 <code>CSS</code> 之类的静态资源</li><li><code>components</code>：用来放项目通用组件</li><li><code>layout</code>：用来放项目的布局</li><li><code>router</code>：用来放项目的路由配置</li><li><code>store</code>：用来放状态管理<code>Pinia</code>的配置</li><li><code>utils</code>：用来放项目中的工具方法类</li><li><code>views</code>：用来放项目的页面文件</li></ul>`,79);function n(o,u,p,v,h,g){return a(),c("div",null,[r,l("p",null,"在 vue 初始化之前，由于 div 是不归 vue 管的，所以写的代码在还没有解析的情况下会容易出现花屏现象，看到类似"+i(o.message)+"的字样",1),s])}const V=d(t,[["render",n]]);export{m as __pageData,V as default};
