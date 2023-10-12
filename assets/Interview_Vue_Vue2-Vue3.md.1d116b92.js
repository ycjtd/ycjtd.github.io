import{_ as e,c as o,o as c,d as i}from"./app.72c7cb6e.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Proxy 与 Object.defineProperty 优劣对比","slug":"proxy-与-object-defineproperty-优劣对比","link":"#proxy-与-object-defineproperty-优劣对比","children":[]},{"level":3,"title":"ref 和 reactive 的区别","slug":"ref-和-reactive-的区别","link":"#ref-和-reactive-的区别","children":[]},{"level":3,"title":"watch 和 watchEffect 的区别","slug":"watch-和-watcheffect-的区别","link":"#watch-和-watcheffect-的区别","children":[]},{"level":3,"title":"Composition API 和 Options API 有什么不同","slug":"composition-api-和-options-api-有什么不同","link":"#composition-api-和-options-api-有什么不同","children":[]},{"level":3,"title":"vue3 对 vue2 有什么优势","slug":"vue3-对-vue2-有什么优势","link":"#vue3-对-vue2-有什么优势","children":[]},{"level":3,"title":"vue3 和 vue2 生命周期有什么区别","slug":"vue3-和-vue2-生命周期有什么区别","link":"#vue3-和-vue2-生命周期有什么区别","children":[]},{"level":3,"title":"Composition API 和 React Hooks 的区别","slug":"composition-api-和-react-hooks-的区别","link":"#composition-api-和-react-hooks-的区别","children":[]},{"level":3,"title":"vue3 新特性","slug":"vue3-新特性","link":"#vue3-新特性","children":[]},{"level":3,"title":"Vue3 速度快的原因","slug":"vue3-速度快的原因","link":"#vue3-速度快的原因","children":[]},{"level":3,"title":"为什么需要 ref、toRef、toRefs","slug":"为什么需要-ref、toref、torefs","link":"#为什么需要-ref、toref、torefs","children":[]},{"level":3,"title":"setup 如何获取组件实例","slug":"setup-如何获取组件实例","link":"#setup-如何获取组件实例","children":[]}],"relativePath":"Interview/Vue/Vue2-Vue3.md"}'),d={name:"Interview/Vue/Vue2-Vue3.md"},t=i('<h3 id="proxy-与-object-defineproperty-优劣对比" tabindex="-1">Proxy 与 Object.defineProperty 优劣对比 <a class="header-anchor" href="#proxy-与-object-defineproperty-优劣对比" aria-hidden="true">#</a></h3><p>Object.defineProperty()存在的问题：</p><ul><li>不能监听数组的变化：无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应</li><li>必须遍历对象的每个属性：只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果属性值是对象，还需要深度遍历。</li></ul><p>Proxy 优势：</p><ul><li>针对对象：针对整个对象，而不是对象的某个属性，所以也就不需要对 keys 进行遍历</li><li>支持数组：Proxy 不需要对数组的方法进行重载，省去了众多 hack，减少代码量等于减少了维护成本</li></ul><h3 id="ref-和-reactive-的区别" tabindex="-1">ref 和 reactive 的区别 <a class="header-anchor" href="#ref-和-reactive-的区别" aria-hidden="true">#</a></h3><p>reactive 用于处理对象类型的数据响应式，底层采用 new Proxy（）</p><p>ref 通常用于处理单值的响应式问题，底层采用的是 Object.defineProperty()</p><h3 id="watch-和-watcheffect-的区别" tabindex="-1">watch 和 watchEffect 的区别 <a class="header-anchor" href="#watch-和-watcheffect-的区别" aria-hidden="true">#</a></h3><ul><li>watch 需要手动指定要监视的数据和回调函数，具有更高的灵活性和定制性。watchEffect 会自动追踪函数内部使用的响应式数据，不需要显示指定</li><li>watch 可以监视多个数据，可以在回调函数中处理多个函数的变化情况；watchEffect 只处理函数内部使用的响应式数据</li><li>watch 可以通过配置选项来控制监听行为，比如 immediate，deep 等；watchEffect 相对更简单，没有额外的选项</li><li>watch 的回调函数会接收新值和旧值作为参数，可以根据需要进行比较和处理；watchEffect 的回调函数只会被执行，不会传递参数</li></ul><h3 id="composition-api-和-options-api-有什么不同" tabindex="-1">Composition API 和 Options API 有什么不同 <a class="header-anchor" href="#composition-api-和-options-api-有什么不同" aria-hidden="true">#</a></h3><ul><li>在逻辑组织和逻辑复用方面，<code>Composition API</code>是优于<code>Options API</code></li><li>因为<code>Composition API</code>几乎是函数，会有更好的类型推断。</li><li><code>Composition API</code>对 <code>tree-shaking</code> 友好，代码也更容易压缩</li><li><code>Composition API</code>中见不到<code>this</code>的使用，减少了<code>this</code>指向不明的情况</li><li>如果是小型组件，可以继续使用<code>Options API</code>，也是十分友好的</li></ul><h3 id="vue3-对-vue2-有什么优势" tabindex="-1">vue3 对 vue2 有什么优势 <a class="header-anchor" href="#vue3-对-vue2-有什么优势" aria-hidden="true">#</a></h3><ul><li>性能更好（编译优化、使用<code>proxy</code>等）</li><li>体积更小</li><li>更好的<code>TS</code>支持</li><li>更好的代码组织</li><li>更好的逻辑抽离</li><li>更多新功能</li></ul><h3 id="vue3-和-vue2-生命周期有什么区别" tabindex="-1">vue3 和 vue2 生命周期有什么区别 <a class="header-anchor" href="#vue3-和-vue2-生命周期有什么区别" aria-hidden="true">#</a></h3><p><strong><code>Options API</code><strong>​</strong>生命周期</strong></p><ul><li><code>beforeDestroy</code>改为<code>beforeUnmount</code></li><li><code>destroyed</code>改为<code>umounted</code></li><li>其他沿用<code>vue2</code>生命周期</li></ul><h3 id="composition-api-和-react-hooks-的区别" tabindex="-1">Composition API 和 React Hooks 的区别 <a class="header-anchor" href="#composition-api-和-react-hooks-的区别" aria-hidden="true">#</a></h3><ul><li><code>Composition API</code>的<code>setup</code>(相当于<code>created</code>、<code>beforeCreate</code>的合集)只会调用一次，而<code>React Hooks</code>函数在渲染过程中会被多次调用</li><li><code>Composition API</code>无需使用<code>useMemo</code>、<code>useCallback</code>避免子组件重复渲染，因为<code>setup</code>只会调用一次，在<code>setup</code>闭包中缓存了变量</li><li><code>Composition API</code>无需顾虑调用顺序，而<code>React Hooks</code>需要保证<code>hooks</code>的顺序一致（比如<code>不能放在循环、判断</code>里面）</li><li><code>Composition API</code>的<code>ref</code>、<code>reactive</code>比<code>useState</code>难理解</li></ul><h3 id="vue3-新特性" tabindex="-1">vue3 新特性 <a class="header-anchor" href="#vue3-新特性" aria-hidden="true">#</a></h3><ol><li><code>api</code>层面<code>Vue3</code>新特性主要包括：<code>Composition API</code>、<code>SFC Composition API</code>语法糖、<code>Teleport</code>传送门、<code>Fragments</code> 片段、<code>Emits</code>选项、自定义渲染器、<code>SFC CSS</code>变量、<code>Suspense</code></li><li>另外，<code>Vue3.0</code>在框架层面也有很多亮眼的改进：</li></ol><ul><li><p><strong>更快</strong></p><ul><li>虚拟<code>DOM</code>重写，<code>diff</code>算法优化</li><li>编译器优化：静态提升、<code>patchFlags（静态标记）</code>、事件监听缓存</li><li>基于<code>Proxy</code>的响应式系统</li><li><code>SSR</code>优化</li></ul></li><li><p><strong>更小</strong>：更好的摇树优化 <code>tree shaking</code>、<code>Vue3</code>移除一些不常用的 <code>API</code></p></li><li><p><strong>更友好</strong>：<code>vue3</code>在兼顾<code>vue2</code>的<code>options API</code>的同时还推出了<code>composition API</code>，大大增加了代码的逻辑组织和代码复用能力</p></li><li><p><strong>更容易维护</strong>：<code>TypeScript</code> + 模块化</p></li><li><p><strong>更容易扩展</strong></p><ul><li>独立的响应化模块</li><li>自定义渲染器</li></ul></li></ul><h3 id="vue3-速度快的原因" tabindex="-1">Vue3 速度快的原因 <a class="header-anchor" href="#vue3-速度快的原因" aria-hidden="true">#</a></h3><p>Vue3.0 性能提升体现在哪些方面</p><ul><li>代码层面性能优化主要体现在全新响应式<code>API</code>，基于<code>Proxy</code>实现，性能更好（获取到哪一层才触发响应式<code>get</code>，不是像<code>vue2</code>一次性递归监听数据）</li><li>编译层面做了更多编译优化处理，比如<code>静态标记 pachFlag</code>（<code>diff</code>算法增加了一个静态标记，只对比有标记的<code>dom</code>元素）、<code>事件增加缓存</code>、<code>静态提升</code>（对不参与更新的元素，会做静态提升，只会被创建一次，之后会在每次渲染时候被不停的复用）等，可以有效跳过大量<code>diff</code>过程；</li><li>打包时更好的支持<code>tree-shaking</code>，因此整体体积更小，加载更快</li><li><code>ssr</code>渲染以字符串方式渲染</li></ul><h3 id="为什么需要-ref、toref、torefs" tabindex="-1">为什么需要 ref、toRef、toRefs <a class="header-anchor" href="#为什么需要-ref、toref、torefs" aria-hidden="true">#</a></h3><p>为什么需要用 ref</p><ul><li>返回值类型，会丢失响应式</li><li>如在<code>setup</code>、<code>computed</code>、合成函数，都有可能返回值类型</li><li><code>Vue</code>如不定义<code>ref</code>，用户将制造<code>ref</code>，反而更混乱</li></ul><p>为何 ref 需要.value 属性</p><ul><li><code>ref</code>是一个对象（不丢失响应式），<code>value</code>存储值</li><li>通过<code>.value</code>属性的<code>get</code>和<code>set</code>实现响应式</li><li>用于模板、<code>reactive</code>时，不需要<code>.value</code>，其他情况都要</li></ul><p>为什么需要 toRef 和 toRefs</p><ul><li><strong>初衷</strong>：不丢失响应式的情况下，把对象数据 <code>分解/扩散</code></li><li><strong>前端</strong>：针对的是响应式对象（<code>reactive</code>封装的）非普通对象</li><li>注意：<strong>不创造</strong>响应式，而是<strong>延续</strong>响应式</li></ul><h3 id="setup-如何获取组件实例" tabindex="-1">setup 如何获取组件实例 <a class="header-anchor" href="#setup-如何获取组件实例" aria-hidden="true">#</a></h3><ul><li>在<code>setup</code>和其他<code>composition API</code>中没有<code>this</code></li><li>通过<code>getCurrentInstance</code>获取当前实例</li><li>若使用<code>options API</code>可以照常使用<code>this</code></li></ul>',34),l=[t];function r(a,s,n,u,p,h){return c(),o("div",null,l)}const g=e(d,[["render",r]]);export{v as __pageData,g as default};