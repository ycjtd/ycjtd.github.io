import{_ as s,c as n,o as a,d as l}from"./app.ba5af232.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"基本实现","slug":"基本实现","link":"#基本实现","children":[]}],"relativePath":"FrontEnd/JavaScript/Promise.md"}'),o={name:"FrontEnd/JavaScript/Promise.md"},p=l(`<h3 id="基本实现" tabindex="-1">基本实现 <a class="header-anchor" href="#基本实现" aria-hidden="true">#</a></h3><p><strong>Promise 特点</strong></p><ul><li>当使用 promise 的时候，会传入一个执行器，这个执行器会立即执行</li><li>executor 给了两个函数可以来描述当前 promise 的状态。Promise 中有三个状态，成功态、失败态、等待态 默认为等待态</li><li>如果调用 resolve,会走成功态,如果调用 reject 或者发生异常,会走失败态</li><li>每个 promise 实例都有一个 then 方法</li><li>promise 一旦状态更改后就不能再次更改了</li></ul><p><strong>Promise 怎么使用?</strong></p><p>根据使用来实现</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> Promise </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">./Promise/1.promise</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> promise </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Promise</span><span style="color:#F6F6F4;">((</span><span style="color:#FFB86C;font-style:italic;">resolve</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">reject</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">promise</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">resolve</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">成功</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">reject</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">失败</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">promise.</span><span style="color:#62E884;">then</span><span style="color:#F6F6F4;">(</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// then是异步的</span></span>
<span class="line"><span style="color:#F6F6F4;">  (</span><span style="color:#FFB86C;font-style:italic;">res</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">success</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, res);</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  (</span><span style="color:#FFB86C;font-style:italic;">err</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">err</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, err);</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">ok</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> Promise </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./Promise/1.promise&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> promise </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">, </span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;promise&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">promise.</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// then是异步的</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;success&quot;</span><span style="color:#24292E;">, res);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;err&quot;</span><span style="color:#24292E;">, err);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;ok&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span></code></pre></div><p>根据使用方式可以得到</p>`,7),e=[p];function t(c,r,y,F,i,E){return a(),n("div",null,e)}const m=s(o,[["render",t]]);export{d as __pageData,m as default};
