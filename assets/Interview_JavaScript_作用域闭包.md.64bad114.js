import{_ as s,c as n,o as a,d as l}from"./app.72c7cb6e.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"什么是作用域？","slug":"什么是作用域","link":"#什么是作用域","children":[]},{"level":3,"title":"作用域的类型？","slug":"作用域的类型","link":"#作用域的类型","children":[]},{"level":3,"title":"函数作用域","slug":"函数作用域","link":"#函数作用域","children":[]},{"level":3,"title":"块作用域","slug":"块作用域","link":"#块作用域","children":[]},{"level":3,"title":"var let const 区别","slug":"var-let-const-区别","link":"#var-let-const-区别","children":[]},{"level":3,"title":"作用域链","slug":"作用域链","link":"#作用域链","children":[]},{"level":3,"title":"闭包","slug":"闭包","link":"#闭包","children":[]}],"relativePath":"Interview/JavaScript/作用域闭包.md"}'),p={name:"Interview/JavaScript/作用域闭包.md"},o=l(`<h3 id="什么是作用域" tabindex="-1">什么是作用域？ <a class="header-anchor" href="#什么是作用域" aria-hidden="true">#</a></h3><p>作用域就是可访问变量的集合，做大的作用就是隔离变量，不同作用域下同名变量不会冲突</p><h3 id="作用域的类型" tabindex="-1">作用域的类型？ <a class="header-anchor" href="#作用域的类型" aria-hidden="true">#</a></h3><p>全局作用域、函数作用域和块级作用域</p><h3 id="函数作用域" tabindex="-1">函数作用域 <a class="header-anchor" href="#函数作用域" aria-hidden="true">#</a></h3><p>指的是声明在函数内部的变量，函数的作用域在函数<strong>定义</strong>的时候决定的</p><h3 id="块作用域" tabindex="-1">块作用域 <a class="header-anchor" href="#块作用域" aria-hidden="true">#</a></h3><p>块作用域由 <code>{}</code>包括，if 和 for 语句中的<code>{}</code>也属于块作用域</p><p>在块级作用域中，可以通过 let 和 const 声明变量，这个变量在块级作用域外无法被访问</p><h3 id="var-let-const-区别" tabindex="-1">var let const 区别 <a class="header-anchor" href="#var-let-const-区别" aria-hidden="true">#</a></h3><p>var：没有块级作用域概念，可以跨块访问，会变量提升</p><p>let：只能在块作用域中访问，不能跨块访问，也不能跨函数访问，没有变量提升，不能重复声明</p><p>const：用来定义常量，声明时必须赋值，只能在块级作用域中访问，不能修改，没有变量提升，不能重复声明</p><h3 id="作用域链" tabindex="-1">作用域链 <a class="header-anchor" href="#作用域链" aria-hidden="true">#</a></h3><p>当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级的执行上下文的变量对象中查找，如果还没有找到，一直找到全局上下文的变量对象，也就是全局对象。这种由多个执行上下文的变量对象构成的链表就叫作用域链</p><h3 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-hidden="true">#</a></h3><p>有权访问另外一个函数作用域中的变量的函数，主要的就两点，一是是一个函数，二是能访问另外一个函数作用域中的变量</p><p><strong>闭包的特性</strong>：</p><ul><li>可以访问当前函数以外的变量</li><li>即使外部函数已经返回，闭包仍然能访问外部函数定义的变量</li><li>闭包可以更新外部变量的值</li></ul><p><strong>使用闭包应该注意什么：</strong></p><ul><li>内存泄露：闭包会捕获外部函数的变量，所以在闭包内部可以访问这些变量，但是需要注意的是闭包会保持对外部变量的引用，导致这些变量不会被销毁，可能导致内存泄露问题</li><li>变量命名冲突：当闭包内部和外部作用域中存在相同名称的变量的时候，闭包内部的变量会覆盖外部变量，所以需要避免变量命名冲突</li></ul><p><strong>闭包的实现原理是什么</strong>：</p><p>利用了作用域链的特性，在当前执行环境下访问某个变量的时候，如果不存在就一直向外层寻找，最终寻找到最外层也就是全局作用域</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7B7F8B;">// 原始题目</span></span>
<span class="line"><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">; i </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">; i</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#62E884;">setTimeout</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> () {</span></span>
<span class="line"><span style="color:#F6F6F4;">console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(i); </span><span style="color:#7B7F8B;">// 1s 后打印出 5 个 5</span></span>
<span class="line"><span style="color:#F6F6F4;">}, </span><span style="color:#BF9EEE;">1000</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 输出是什么？为什么</span></span>
<span class="line"><span style="color:#F6F6F4;">输出是 </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span></span>
<span class="line"><span style="color:#F6F6F4;">在循环中，使用 </span><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> 声明了一个全局变量 i，使用 setTimeout 创建了 5 个定时器任务，</span></span>
<span class="line"><span style="color:#F6F6F4;">每个任务都在 1s 后执行</span></span>
<span class="line"><span style="color:#F6F6F4;">在每个 setTimeout 的回调函数中，尝试访问 i 的值，这个回调函数是在循环结束之后才会执行</span></span>
<span class="line"><span style="color:#F6F6F4;">在循环结束的时候，全局变量 i 为 </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">，所以输出是 </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 怎么改成 1s 后，打印 0,1,2,3,4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 方法 1 闭包</span></span>
<span class="line"><span style="color:#F6F6F4;">使用立即执行函数创建了闭包，将当前的 i 值传递给回调函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">; i </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">; i</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">j</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#62E884;">setTimeout</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">timer</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(j);</span></span>
<span class="line"><span style="color:#F6F6F4;">}, </span><span style="color:#BF9EEE;">1000</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">})(i);</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 方法 2</span></span>
<span class="line"><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">; i </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">; i</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#62E884;">setTimeout</span><span style="color:#F6F6F4;">(</span></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">fn</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">i</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(i);</span></span>
<span class="line"><span style="color:#F6F6F4;">},</span></span>
<span class="line"><span style="color:#BF9EEE;">1000</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">i</span></span>
<span class="line"><span style="color:#F6F6F4;">); </span><span style="color:#7B7F8B;">// 第三个参数 i,将作为 fn 的参数</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 方法 3</span></span>
<span class="line"><span style="color:#F6F6F4;">使用 </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> 声明变量 i，具有块级作用域，而不是函数作用域，在每次迭代的时候都会创建一个新的变量 i，</span></span>
<span class="line"><span style="color:#F6F6F4;">而不是共享一个全局变量</span></span>
<span class="line"><span style="color:#F6F6F4;">当循环执行的时候，会在每次迭代中创建一个新的块级作用域，并在这个作用域内声明一个新的变量 i，</span></span>
<span class="line"><span style="color:#F6F6F4;">不会污染外部作用域，所以在每个回调函数中都能访问到正确的 i 值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">; i </span><span style="color:#F286C4;">&lt;=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">; i</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#62E884;">setTimeout</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(i);</span></span>
<span class="line"><span style="color:#F6F6F4;">},</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 原始题目</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(i); </span><span style="color:#6A737D;">// 1s 后打印出 5 个 5</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 输出是什么？为什么</span></span>
<span class="line"><span style="color:#24292E;">输出是 </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">在循环中，使用 </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> 声明了一个全局变量 i，使用 setTimeout 创建了 5 个定时器任务，</span></span>
<span class="line"><span style="color:#24292E;">每个任务都在 1s 后执行</span></span>
<span class="line"><span style="color:#24292E;">在每个 setTimeout 的回调函数中，尝试访问 i 的值，这个回调函数是在循环结束之后才会执行</span></span>
<span class="line"><span style="color:#24292E;">在循环结束的时候，全局变量 i 为 </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">，所以输出是 </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 怎么改成 1s 后，打印 0,1,2,3,4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 方法 1 闭包</span></span>
<span class="line"><span style="color:#24292E;">使用立即执行函数创建了闭包，将当前的 i 值传递给回调函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">j</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">timer</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(j);</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})(i);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 方法 2</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">(</span><span style="color:#E36209;">i</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(i);</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#005CC5;">1000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">i</span></span>
<span class="line"><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 第三个参数 i,将作为 fn 的参数</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 方法 3</span></span>
<span class="line"><span style="color:#24292E;">使用 </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> 声明变量 i，具有块级作用域，而不是函数作用域，在每次迭代的时候都会创建一个新的变量 i，</span></span>
<span class="line"><span style="color:#24292E;">而不是共享一个全局变量</span></span>
<span class="line"><span style="color:#24292E;">当循环执行的时候，会在每次迭代中创建一个新的块级作用域，并在这个作用域内声明一个新的变量 i，</span></span>
<span class="line"><span style="color:#24292E;">不会污染外部作用域，所以在每个回调函数中都能访问到正确的 i 值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(i);</span></span>
<span class="line"><span style="color:#24292E;">},</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div>`,24),e=[o];function c(t,r,F,y,i,E){return a(),n("div",null,e)}const h=s(p,[["render",c]]);export{d as __pageData,h as default};
