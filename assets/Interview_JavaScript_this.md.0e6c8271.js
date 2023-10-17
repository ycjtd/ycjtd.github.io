import{_ as s,c as n,o as a,d as l}from"./app.58c7925b.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/JavaScript/this.md"}'),o={name:"Interview/JavaScript/this.md"},p=l(`<p><strong>this 的绑定方式</strong></p><ol><li>默认绑定，非严格模式下 this 指向全局对象，严格模式下函数内的 this 指向 undefined，但是不会改变全局中 this 的指向</li><li>隐式绑定，当函数引用有上下文对象的时候，比如 <code>obj.foo()</code>的调用方式，foo 内的 this 指向 obj，就是说指向调用者</li><li>显示绑定，通过 call、apply、bind 方法直接指定 this 的指向对象，比如<code>foo.call(obj)</code></li><li>new 构造函数，this 指向新生成的对象</li><li>箭头函数，this 指向的是定义这个箭头函数的时候，外层环境中的 this，<strong>箭头函数在定义的时候就指定了，不能改变</strong></li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">use strict</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> a </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">10</span><span style="color:#F6F6F4;">; </span><span style="color:#7B7F8B;">// var定义的a变量挂载到window对象上</span></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">foo</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">  console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">this1</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">); </span><span style="color:#7B7F8B;">// undefined</span></span>
<span class="line"><span style="color:#F6F6F4;">  console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(window.a); </span><span style="color:#7B7F8B;">// 10</span></span>
<span class="line"><span style="color:#F6F6F4;">  console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.a); </span><span style="color:#7B7F8B;">//  报错，Uncaught TypeError: Cannot read properties of undefined (reading &#39;a&#39;)</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#F6F6F4;">console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">this2</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">); </span><span style="color:#7B7F8B;">// window</span></span>
<span class="line"><span style="color:#62E884;">foo</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// note:开启了严格模式之和，只是使函数内的this指向undefined，不影响全局下的this的指向</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#032F62;">&quot;use strict&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// var定义的a变量挂载到window对象上</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;this1&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// undefined</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(window.a); </span><span style="color:#6A737D;">// 10</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.a); </span><span style="color:#6A737D;">//  报错，Uncaught TypeError: Cannot read properties of undefined (reading &#39;a&#39;)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;this2&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// window</span></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// note:开启了严格模式之和，只是使函数内的this指向undefined，不影响全局下的this的指向</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> a </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">10</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> b </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">20</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">foo</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">  console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.a); </span><span style="color:#7B7F8B;">// undefined</span></span>
<span class="line"><span style="color:#F6F6F4;">  console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.b); </span><span style="color:#7B7F8B;">// undefined</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#62E884;">foo</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(window.a); </span><span style="color:#7B7F8B;">// undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 使用let 和 const 声明的变量不会被绑定到window上</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">b</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.a); </span><span style="color:#6A737D;">// undefined</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.b); </span><span style="color:#6A737D;">// undefined</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(window.a); </span><span style="color:#6A737D;">// undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用let 和 const 声明的变量不会被绑定到window上</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> a </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">foo</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> a </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">); </span><span style="color:#7B7F8B;">// window</span></span>
<span class="line"><span style="color:#F6F6F4;">  console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.a); </span><span style="color:#7B7F8B;">// 1</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#62E884;">foo</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 这里需要注意的时候，是window调用的foo函数，所以foo中的this指向window</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// window</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.a); </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这里需要注意的时候，是window调用的foo函数，所以foo中的this指向window</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> obj2 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  a</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">foo1</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> () {</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.a); </span><span style="color:#7B7F8B;">// 2</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">foo2</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> () {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">setTimeout</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> () {</span></span>
<span class="line"><span style="color:#F6F6F4;">      console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">); </span><span style="color:#7B7F8B;">// window</span></span>
<span class="line"><span style="color:#F6F6F4;">      console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.a); </span><span style="color:#7B7F8B;">// 3</span></span>
<span class="line"><span style="color:#F6F6F4;">    }, </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span>
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> a </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">obj2.</span><span style="color:#62E884;">foo1</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">obj2.</span><span style="color:#62E884;">foo2</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 对于setTimeout中的函数，存在隐式绑定的丢失，也就是当讲函数作为参数传递的时候，会被隐式赋值，回调函数丢失this绑定，所以setTimeout中函数内的this指向window</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> obj2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  a: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">foo1</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.a); </span><span style="color:#6A737D;">// 2</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">foo2</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// window</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.a); </span><span style="color:#6A737D;">// 3</span></span>
<span class="line"><span style="color:#24292E;">    }, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">obj2.</span><span style="color:#6F42C1;">foo1</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">obj2.</span><span style="color:#6F42C1;">foo2</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 对于setTimeout中的函数，存在隐式绑定的丢失，也就是当讲函数作为参数传递的时候，会被隐式赋值，回调函数丢失this绑定，所以setTimeout中函数内的this指向window</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> obj </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">obj</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">foo1</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name); </span><span style="color:#7B7F8B;">// window</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">foo2</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> () {</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name); </span><span style="color:#7B7F8B;">// obj</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.name); </span><span style="color:#7B7F8B;">// obj</span></span>
<span class="line"><span style="color:#F6F6F4;">    };</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span>
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">window</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">obj.</span><span style="color:#62E884;">foo1</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">obj.</span><span style="color:#62E884;">foo2</span><span style="color:#F6F6F4;">()();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 对于obj.foo1()函数的调用，它的外层作用域是window，因为对象obj不属于作用域，所以会打印window</span></span>
<span class="line"><span style="color:#7B7F8B;">// 对于obj.foo2()第一个this.name指向的就是调用者obj，返回的匿名函数是一个箭头函数，this由外层函数决定，所以和foo函数的this一样，指向obj</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;obj&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">foo1</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name); </span><span style="color:#6A737D;">// window</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">foo2</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name); </span><span style="color:#6A737D;">// obj</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name); </span><span style="color:#6A737D;">// obj</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;window&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">obj.</span><span style="color:#6F42C1;">foo1</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">obj.</span><span style="color:#6F42C1;">foo2</span><span style="color:#24292E;">()();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 对于obj.foo1()函数的调用，它的外层作用域是window，因为对象obj不属于作用域，所以会打印window</span></span>
<span class="line"><span style="color:#6A737D;">// 对于obj.foo2()第一个this.name指向的就是调用者obj，返回的匿名函数是一个箭头函数，this由外层函数决定，所以和foo函数的this一样，指向obj</span></span>
<span class="line"></span></code></pre></div>`,7),e=[p];function c(t,r,y,F,i,E){return a(),n("div",null,e)}const f=s(o,[["render",c]]);export{C as __pageData,f as default};
