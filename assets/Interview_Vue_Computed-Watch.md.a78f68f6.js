import{_ as e,c,o as d,d as t}from"./app.eeaca755.js";const w=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Watch 的 deep：true 是怎么实现的","slug":"watch-的-deep-true-是怎么实现的","link":"#watch-的-deep-true-是怎么实现的","children":[]},{"level":3,"title":"computed 和 watch 的区别","slug":"computed-和-watch-的区别","link":"#computed-和-watch-的区别","children":[]},{"level":3,"title":"computed 的实现","slug":"computed-的实现","link":"#computed-的实现","children":[]},{"level":3,"title":"watch 原理","slug":"watch-原理","link":"#watch-原理","children":[]}],"relativePath":"Interview/Vue/Computed-Watch.md"}'),o={name:"Interview/Vue/Computed-Watch.md"},a=t('<h3 id="watch-的-deep-true-是怎么实现的" tabindex="-1">Watch 的 deep：true 是怎么实现的 <a class="header-anchor" href="#watch-的-deep-true-是怎么实现的" aria-hidden="true">#</a></h3><p>当用户知道了 watch 中的 depp 属性为 true 时，如果当前监控的值是数组类型。会对对象中的每一项进行求值，此时会将当前 watcher 存入到对应属性的依赖中，这样数组中对象发生变化时也会通知数据更新</p><h3 id="computed-和-watch-的区别" tabindex="-1">computed 和 watch 的区别 <a class="header-anchor" href="#computed-和-watch-的区别" aria-hidden="true">#</a></h3><ul><li><code>Computed</code>本质是一个具备缓存的<code>watcher</code>，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理，当页面中有某些数据依赖其他数据进行变动的时候，可以使用 computed</li><li><code>Watch</code>没有缓存性，更多的是观察的作用，可以监听某些数据执行回调。当我们需要深度监听对象中的属性时，可以打开<code>deep：true</code>选项，这样便会对对象中的每一项进行监听。这样会带来性能问题，优化的话可以使用字符串形式监听，如果没有写到组件中，不要忘记使用<code>unWatch</code>手动注销。<code>watch</code>用于观察和监听页面上的 vue 实例，如果要在数据变化的同时进行异步操作或者是比较大的开销，那么<code>watch</code>为最佳选择</li></ul><h3 id="computed-的实现" tabindex="-1">computed 的实现 <a class="header-anchor" href="#computed-的实现" aria-hidden="true">#</a></h3><ul><li>初始化 <code>data</code>， 使用 <code>Object.defineProperty</code> 把这些属性全部转为 <code>getter/setter</code>。</li><li>初始化 <code>computed</code>, 遍历 <code>computed</code> 里的每个属性，每个 <code>computed</code> 属性都是一个 <code>watch</code> 实例。每个属性提供的函数作为属性的 <code>getter</code>，使用 <code>Object.defineProperty</code> 转化。</li><li><code>Object.defineProperty getter</code> 依赖收集。用于依赖发生变化时，触发属性重新计算。</li><li>若出现当前 <code>computed</code> 计算属性嵌套其他 <code>computed</code> 计算属性时，先进行其他的依赖收集</li></ul><h3 id="watch-原理" tabindex="-1">watch 原理 <a class="header-anchor" href="#watch-原理" aria-hidden="true">#</a></h3><p><code>watch</code> 本质上是为每个监听属性 <code>setter</code> 创建了一个 <code>watcher</code>，当被监听的属性更新时，调用传入的回调函数。常见的配置选项有 <code>deep</code> 和 <code>immediate</code>，对应原理如下</p><ul><li><code>deep</code>：深度监听对象，为对象的每一个属性创建一个 <code>watcher</code>，从而确保对象的每一个属性更新时都会触发传入的回调函数。主要原因在于对象属于引用类型，单个属性的更新并不会触发对象 <code>setter</code>，因此引入 <code>deep</code> 能够很好地解决监听对象的问题。同时也会引入判断机制，确保在多个属性更新时回调函数仅触发一次，避免性能浪费。</li><li><code>immediate</code>：在初始化时直接调用回调函数，可以通过在 <code>created</code> 阶段手动调用回调函数实现相同的效果</li></ul>',9),r=[a];function h(i,l,u,p,n,s){return d(),c("div",null,r)}const _=e(o,[["render",h]]);export{w as __pageData,_ as default};
