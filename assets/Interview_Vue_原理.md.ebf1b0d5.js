import{_ as e,c as d,o,d as c}from"./app.72c7cb6e.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"template 编译","slug":"template-编译","link":"#template-编译","children":[]},{"level":3,"title":"怎么监听对象或数组某个属性的变化","slug":"怎么监听对象或数组某个属性的变化","link":"#怎么监听对象或数组某个属性的变化","children":[]},{"level":3,"title":"什么是虚拟 dom，作用是什么","slug":"什么是虚拟-dom-作用是什么","link":"#什么是虚拟-dom-作用是什么","children":[]},{"level":3,"title":"vue 怎么检测数组的变化","slug":"vue-怎么检测数组的变化","link":"#vue-怎么检测数组的变化","children":[]},{"level":3,"title":"vue 怎么进行依赖收集","slug":"vue-怎么进行依赖收集","link":"#vue-怎么进行依赖收集","children":[]},{"level":3,"title":"vue 中 key 的作用和原理","slug":"vue-中-key-的作用和原理","link":"#vue-中-key-的作用和原理","children":[]},{"level":3,"title":"new Vue 过程做了什么","slug":"new-vue-过程做了什么","link":"#new-vue-过程做了什么","children":[]},{"level":3,"title":"diff 算法原理","slug":"diff-算法原理","link":"#diff-算法原理","children":[]},{"level":3,"title":"响应式数据原理","slug":"响应式数据原理","link":"#响应式数据原理","children":[]},{"level":3,"title":"Vue 实例挂载的过程中发生了什么？","slug":"vue-实例挂载的过程中发生了什么","link":"#vue-实例挂载的过程中发生了什么","children":[]},{"level":3,"title":"为什么 vue 采用异步渲染","slug":"为什么-vue-采用异步渲染","link":"#为什么-vue-采用异步渲染","children":[]},{"level":3,"title":"nextTick 实现原理","slug":"nexttick-实现原理","link":"#nexttick-实现原理","children":[]},{"level":3,"title":"v-model 实现原理","slug":"v-model-实现原理","link":"#v-model-实现原理","children":[]},{"level":3,"title":"diff 算法的时间复杂度","slug":"diff-算法的时间复杂度","link":"#diff-算法的时间复杂度","children":[]}],"relativePath":"Interview/Vue/原理.md"}'),i={name:"Interview/Vue/原理.md"},l=c('<p>数据绑定机制</p><p>采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter， 在数据变动时发布消息给订阅者，触发相应的监听回调。</p><h3 id="template-编译" tabindex="-1">template 编译 <a class="header-anchor" href="#template-编译" aria-hidden="true">#</a></h3><ul><li>转换成 AST 树，得到 render 函数返回 VNode</li><li>首先，通过 compile 编译器把 template 编译成 AST 语法树（abstract syntax tree 即 源代码的抽象语法结构的树状表现形式）</li><li>compile 是 createCompiler 的返回值，createCompiler 是用以创建编译器的。另外 compile 还负责合并 option。</li><li>然后，AST 会经过 generate（将 AST 语法树转化成 render funtion 字符串的过程）得到 render 函数，render 的返回值是 VNode，VNode 是 Vue 的虚拟 DOM 节点，里面有（标签名、子节点、文本等等）</li></ul><h3 id="怎么监听对象或数组某个属性的变化" tabindex="-1">怎么监听对象或数组某个属性的变化 <a class="header-anchor" href="#怎么监听对象或数组某个属性的变化" aria-hidden="true">#</a></h3><p><code>$set</code></p><h3 id="什么是虚拟-dom-作用是什么" tabindex="-1">什么是虚拟 dom，作用是什么 <a class="header-anchor" href="#什么是虚拟-dom-作用是什么" aria-hidden="true">#</a></h3><p>只是一层真实 DOM 的抽象,以 JavaScript 对象作为基础的树.用对象的属性来描述节点,最终可以通过一系列操作使这棵树映射到真实环境上. 创建虚拟 DOM 是为了更好将虚拟的节点渲染到页面视图中,所以虚拟 DOM 对象的节点与真实 DOM 的属性一一对应 如果用原生 api 去操作 DOM,浏览器会从构建 DOM 树开始从头到尾执行一遍流程。比如有一次操作,需要更新 10 个 DOM 节点,浏览器收到第一个更新 DOM 请求后,并不知道后续还有 9 次更新操作,所以会马上执行流程,最终执行 10 次流程，而通过 VNode,同样更新 10 个 DOM 节点,虚拟 DOM 不会立即操作 DOM,而是将这 10 次更新的 diff 内容保存到本地的一个 js 对象中,最终将这个 js 对象一次性 attach 到 DOM 树上,避免大量的无谓计算</p><h3 id="vue-怎么检测数组的变化" tabindex="-1">vue 怎么检测数组的变化 <a class="header-anchor" href="#vue-怎么检测数组的变化" aria-hidden="true">#</a></h3><p>vue2 中并没有使用 defineProperty 来检测数组（性能差），vue2 采用重写数组的方法来实现（7 个变异的方法，能改变原数组的方法） 通过原型链 + 函数劫持的方式实现的（缺陷是不能检索索引更改和数组长度的更改），数组中的元素也会被再次观测，数组中如果元素是对象类型也会进行递归劫持</p><h3 id="vue-怎么进行依赖收集" tabindex="-1">vue 怎么进行依赖收集 <a class="header-anchor" href="#vue-怎么进行依赖收集" aria-hidden="true">#</a></h3><p>依赖收集的目的是等数据变化了可以自动更新视图</p><p>每个属性都有自己的 dep 属性，存放所依赖的 watcher，当属性变化后会通知自己对应的 watcher 去更新，默认在初始化的时候会调用 render 函数，此时会触发属性依赖收集 dep.depend，当属性发生修改时会触发 watcher 更新 dep.notify()</p><h3 id="vue-中-key-的作用和原理" tabindex="-1">vue 中 key 的作用和原理 <a class="header-anchor" href="#vue-中-key-的作用和原理" aria-hidden="true">#</a></h3><p>key 给每一个 vnode 一个唯一的 id，可以依靠 key，更准确、更快的拿到 oldVnode 中对应的节点，更新组件时判断两个节点是否相同，相同就复用，不相同就删除旧的创建新的</p><p>vue 和 react 都是采用 diff 算法来对比新旧虚拟节点，来更新节点，在 vue 的 diff 函数中，在交叉对比中，当前节点和旧节点头尾交叉对比没有结果时，会根据新节点的 key 去对比旧节点数组中的 key，从而找到相应的旧节点。如果没有找到就认为是一个新增节点。如果没有 key，就会采用遍历查找的方式去找到对应的旧节点。</p><p>为什么不推荐使用 index 作为 key？</p><p>因为使用 index 作为 key 和不带 key 的效果是一样的，index 作为 key 时，每个列表项的 index 在变更前后是一样的，都是直接判断为 sameNode 然后复用</p><p>比如有一个 ul 其中有三个 li，使用 checkBox 包裹，当选择一个复选框时，可以点击删除按钮将其删除，如果不设置 key 的话，vue 发现新旧节点的标签都是 checkBox，就会复用，将第一个的复选框的值改成第二个的，第二个的复用第三个的，然后将第三个删除</p><h3 id="new-vue-过程做了什么" tabindex="-1">new Vue 过程做了什么 <a class="header-anchor" href="#new-vue-过程做了什么" aria-hidden="true">#</a></h3><ul><li>内部会初始化组件绑定的事件，初始化组件的父子关系$parent $children $root</li><li>初始化响应式数据 data、computed、props、watch、method，同时也初始化了 provide 和 inject 方法，内部会对数据进行劫持，对象采用 defineProperty,数组采用方法重写</li><li>再看一下用户是否传入了 el 属性和 template 或者 render，render 的优先级更高，如果用户写的是 template，会做模板编译，最终拿到 render 函数</li><li>内部挂载的时候会产生一个 watcher，会调用 render 函数触发依赖收集，内部还会给所有的响应式数据增加 dep 属性，让属性记录当前的 watcher</li><li>vue 更新的时候采用虚拟 DOM 的方式进行 diff 算法更新</li></ul><h3 id="diff-算法原理" tabindex="-1">diff 算法原理 <a class="header-anchor" href="#diff-算法原理" aria-hidden="true">#</a></h3><p><code>DOM</code>操作是非常昂贵的，因此我们需要尽量地减少<code>DOM</code>操作。这就需要找出本次<code>DOM</code>必须更新的节点来更新，其他的不更新，这个找出的过程，就需要应用 diff 算法</p><blockquote><p><code>vue</code>的<code>diff</code>算法是平级比较，不考虑跨级比较的情况。内部采用<code>深度递归的方式+双指针(头尾都加指针)</code>的方式进行比较。</p></blockquote><p>简单来说，Diff 算法有以下过程</p><ul><li>同级比较，再比较子节点（根据<code>key</code>和<code>tag</code>标签名判断）</li><li>先判断一方有子节点和一方没有子节点的情况(如果新的<code>children</code>没有子节点，将旧的子节点移除)</li><li>比较都有子节点的情况(核心<code>diff</code>)</li><li>递归比较子节点</li></ul><ol><li><code>Vue</code>中的<code>diff</code>算法称为<code>patching</code>算法，它由<code>Snabbdom</code>修改而来，虚拟<code>DOM</code>要想转化为真实<code>DOM</code>就需要通过<code>patch</code>方法转换</li><li>最初<code>Vue1.x</code>视图中每个依赖均有更新函数对应，可以做到精准更新，因此并不需要虚拟<code>DOM</code>和<code>patching</code>算法支持，但是这样粒度过细导致<code>Vue1.x</code>无法承载较大应用；<code>Vue 2.x</code>中为了降低<code>Watcher</code>粒度，每个组件只有一个<code>Watcher</code>与之对应，此时就需要引入<code>patching</code>算法才能精确找到发生变化的地方并高效更新</li><li><code>vue</code>中<code>diff</code>执行的时刻是组件内响应式数据变更触发实例执行其更新函数时，更新函数会再次执行<code>render</code>函数获得最新的虚拟<code>DOM</code>，然后执行<code>patch</code>函数，并传入新旧两次虚拟 DOM，通过比对两者找到变化的地方，最后将其转化为对应的<code>DOM</code>操作</li><li><code>patch</code>过程是一个递归过程，遵循深度优先、同层比较的策略；</li></ol><p><strong>以</strong>​**<code>vue3</code><strong>​</strong>的<strong>​</strong><code>patch</code><strong>​</strong>为例**</p><ul><li><p>首先判断两个节点是否为相同同类节点，不同则删除重新创建</p></li><li><p>如果双方都是文本则更新文本内容</p></li><li><p>如果双方都是元素节点则递归更新子元素，同时更新元素属性</p></li><li><p>更新子节点时又分了几种情况</p><ul><li>新的子节点是文本，老的子节点是数组则清空，并设置文本；</li><li>新的子节点是文本，老的子节点是文本则直接更新文本；</li><li>新的子节点是数组，老的子节点是文本则清空文本，并创建新子节点数组中的子元素；</li><li>新的子节点是数组，老的子节点也是数组，那么比较两组子节点，更新细节</li></ul></li><li><p><code>vue3</code>中引入的更新策略：静态节点标记等</p></li></ul><h3 id="响应式数据原理" tabindex="-1">响应式数据原理 <a class="header-anchor" href="#响应式数据原理" aria-hidden="true">#</a></h3><p><strong>Vue2</strong></p><p>数据劫持 + 观察者模式</p><p>对象内部通过 <code>defineReactive</code> 方法，使用 <code>Object.defineProperty</code> 来劫持各个属性的 <code>setter</code>、<code>getter</code>（只会劫持已经存在的属性），数组则是通过<code>重写数组7个方法</code>来实现。当页面使用对应属性时，每个属性都拥有自己的 <code>dep</code> 属性，存放他所依赖的 <code>watcher</code>（依赖收集），当属性变化后会通知自己对应的 <code>watcher</code> 去更新(派发更新)</p><p>在 Vue 进行初始化的时候，首先会对用户传入的 data 数据进行初始化，使用 new Observer 对数据进行观测，如果数据是对象，调用 this.walk 方法，在 walk 内部对 data 进行遍历，通过调用 defineReactive 方法循环对象属性，使用 Object.defineProperty 方法将其定义为响应式，</p><p><strong>Vue3</strong></p><p><code>Vue3.x</code>改用<code>Proxy</code>替代<code>Object.defineProperty</code>。因为<code>Proxy</code>可以直接监听对象和数组的变化，并且有多达<code>13</code>种拦截方法。并且作为新标准将受到浏览器厂商重点持续的性能优化。</p><p><strong>回答范例</strong></p><ul><li>所谓数据响应式就是<strong>能够使数据变化可以被检测并对这种变化做出响应的机制</strong></li><li><code>MVVM</code>框架中要解决的一个核心问题是连接数据层和视图层，通过<strong>数据驱动</strong>应用，数据变化，视图更新，要做到这点的就需要对数据做响应式处理，这样一旦数据发生变化就可以立即做出更新处理</li><li>以<code>vue</code>为例说明，通过数据响应式加上虚拟<code>DOM</code>和<code>patch</code>算法，开发人员只需要操作数据，关心业务，完全不用接触繁琐的 DOM 操作，从而大大提升开发效率，降低开发难度</li><li><code>vue2</code>中的数据响应式会根据数据类型来做不同处理，如果是<strong>对象则采用</strong>​**<code>Object.defineProperty()</code><strong>​</strong>的方式定义数据拦截，当数据被访问或发生变化时，我们感知并作出响应；如果是数组则通过覆盖数组对象原型的 7 个变更方法**，使这些方法可以额外的做更新通知，从而作出响应。这种机制很好的解决了数据响应化的问题，但在实际使用中也存在一些缺点：比如初始化时的递归遍历会造成性能损失；新增或删除属性时需要用户使用<code>Vue.set/delete</code>这样特殊的<code>api</code>才能生效；对于<code>es6</code>中新产生的<code>Map</code>、<code>Set</code>这些数据结构不支持等问题</li><li>为了解决这些问题，<code>vue3</code>重新编写了这一部分的实现：利用<code>ES6</code>的<code>Proxy</code>代理要响应化的数据，它有很多好处，编程体验是一致的，不需要使用特殊<code>api</code>，初始化性能和内存消耗都得到了大幅改善；另外由于响应化的实现代码抽取为独立的<code>reactivity</code>包，使得我们可以更灵活的使用它，第三方的扩展开发起来更加灵活了</li></ul><h3 id="vue-实例挂载的过程中发生了什么" tabindex="-1">Vue 实例挂载的过程中发生了什么？ <a class="header-anchor" href="#vue-实例挂载的过程中发生了什么" aria-hidden="true">#</a></h3><ol><li>挂载过程指的是<code>app.mount()</code>过程，这个过程中整体上做了两件事：<strong>初始化</strong>和<strong>建立更新机制</strong></li><li>初始化会创建组件实例、初始化组件状态，创建各种响应式数据</li><li>建立更新机制这一步会立即执行一次组件更新函数，这会首次执行组件渲染函数并执行<code>patch</code>将前面获得<code>vnode</code>转换为<code>dom</code>；同时首次执行渲染函数会创建它内部响应式数据之间和组件更新函数之间的依赖关系，这使得以后数据变化时会执行对应的更新函数</li></ol><h3 id="为什么-vue-采用异步渲染" tabindex="-1">为什么 vue 采用异步渲染 <a class="header-anchor" href="#为什么-vue-采用异步渲染" aria-hidden="true">#</a></h3><blockquote><p>Vue 是组件级更新，如果不采用异步更新，那么每次更新数据都会对当前组件进行重新渲染，所以为了性能， Vue 会在本轮数据更新后，在异步更新视图。核心思想 <code>nextTick</code></p></blockquote><p>当数据发生了变化时，首先调用 deo.notify()去通知 watcher 进行更新操作，依次调用 watcher 的 update，将 watcher 去重之后放到队列中，然后通过 nextTick 异步清空 watcher 队列</p><h3 id="nexttick-实现原理" tabindex="-1">nextTick 实现原理 <a class="header-anchor" href="#nexttick-实现原理" aria-hidden="true">#</a></h3><p>主要是使用了宏任务和微任务，定义一个异步方法，多次调用 nextTick 会将方法存入到队列中，通过这个异步方法清空当前队列</p><ol><li><code>nextTick</code> 中的回调是在下次 <code>DOM</code> 更新循环结束之后执行延迟回调，用于获得更新后的 <code>DOM</code></li><li><code>Vue</code>有个异步更新策略，意思是如果数据变化，<code>Vue</code>不会立刻更新 DOM，而是开启一个队列，把组件更新函数保存在队列中，在同一事件循环中发生的所有数据变更会异步的批量更新。这一策略导致我们对数据的修改不会立刻体现在 DOM 上，此时如果想要获取更新后的 DOM 状态，就需要使用<code>nextTick</code></li><li>开发时，有两个场景我们会用到<code>nextTick</code></li></ol><ul><li><code>created</code>中想要获取<code>DOM</code>时</li><li>响应式数据变化后获取<code>DOM</code>更新后的状态，比如希望获取列表更新后的高度</li></ul><ol start="4"><li><code>nextTick</code>签名如下：<code>function nextTick(callback?: () =&gt; void): Promise&lt;void&gt;</code></li></ol><p>所以我们只需要在传入的回调函数中访问最新 DOM 状态即可，或者我们可以<code>await nextTick()</code>方法返回的<code>Promise</code>之后做这件事</p><ol start="5"><li>在<code>Vue</code>内部，<code>nextTick</code>之所以能够让我们看到 DOM 更新后的结果，是因为我们传入的<code>callback</code>会被添加到队列刷新函数(<code>flushSchedulerQueue</code>)的后面，这样等队列内部的更新函数都执行完毕，所有 DOM 操作也就结束了，<code>callback</code>自然能够获取到最新的 DOM 值</li></ol><h3 id="v-model-实现原理" tabindex="-1">v-model 实现原理 <a class="header-anchor" href="#v-model-实现原理" aria-hidden="true">#</a></h3><p>我们在 <code>vue</code> 项目中主要使用 <code>v-model</code> 指令在表单 <code>input</code>、<code>textarea</code>、<code>select</code> 等元素上创建双向数据绑定，我们知道 <code>v-model</code> 本质上不过是语法糖（可以看成是<code>value + input</code>方法的语法糖），<code>v-model</code> 在内部为不同的输入元素使用不同的属性并抛出不同的事件：</p><h3 id="diff-算法的时间复杂度" tabindex="-1">diff 算法的时间复杂度 <a class="header-anchor" href="#diff-算法的时间复杂度" aria-hidden="true">#</a></h3><p>两个树的完全 diff 算法是一个时间复杂度为 O(n3)，Vue 进行了优化，转换成了 O(n)复杂度的问题（只比较同级不考虑跨级问题）</p>',54),t=[l];function a(r,n,h,u,p,s){return o(),d("div",null,t)}const k=e(i,[["render",a]]);export{f as __pageData,k as default};
