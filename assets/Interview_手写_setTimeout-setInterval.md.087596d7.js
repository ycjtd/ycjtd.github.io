import{_ as s,c as n,o as a,a as l}from"./app.d0de5917.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/手写/setTimeout-setInterval.md"}'),p={name:"Interview/手写/setTimeout-setInterval.md"},o=l(`<p>setTimeout 模拟实现 setInterval</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">mySetInterval</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">callback</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">delay</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">interval</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">callback</span><span style="color:#F6F6F4;">(); </span><span style="color:#7B7F8B;">// 首先执行回调函数</span></span>
<span class="line"><span style="color:#F6F6F4;">    timer </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">setTimeout</span><span style="color:#F6F6F4;">(interval, delay); </span><span style="color:#7B7F8B;">// 设置下一次执行interval函数，达到模拟循环</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 第一次interval函数，在delay后执行interval</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> timer </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">setTimeout</span><span style="color:#F6F6F4;">(interval, delay)</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">clear</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> () { </span><span style="color:#7B7F8B;">// 返回清除定时器的方法</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#62E884;">clearTimeout</span><span style="color:#F6F6F4;">(timer);</span></span>
<span class="line"><span style="color:#F6F6F4;">    },</span></span>
<span class="line"><span style="color:#F6F6F4;">  };</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mySetInterval</span><span style="color:#24292E;">(</span><span style="color:#E36209;">callback</span><span style="color:#24292E;">, </span><span style="color:#E36209;">delay</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">interval</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">callback</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 首先执行回调函数</span></span>
<span class="line"><span style="color:#24292E;">    timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(interval, delay); </span><span style="color:#6A737D;">// 设置下一次执行interval函数，达到模拟循环</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 第一次interval函数，在delay后执行interval</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(interval, delay)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">clear</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () { </span><span style="color:#6A737D;">// 返回清除定时器的方法</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">clearTimeout</span><span style="color:#24292E;">(timer);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><p>setInterval 模拟实现 setTimeout</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">mySetTimeout</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">callback</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">delay</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> timer </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">timeout</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">callback</span><span style="color:#F6F6F4;">();  </span><span style="color:#7B7F8B;">// 执行回调</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">clearInterval</span><span style="color:#F6F6F4;">(timer);</span><span style="color:#7B7F8B;">// 清除定时器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  timer </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">setInterval</span><span style="color:#F6F6F4;">(timeout, delay)</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">clear</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> () {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#62E884;">clearInterval</span><span style="color:#F6F6F4;">(timer);</span></span>
<span class="line"><span style="color:#F6F6F4;">    },</span></span>
<span class="line"><span style="color:#F6F6F4;">  };</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mySetTimeout</span><span style="color:#24292E;">(</span><span style="color:#E36209;">callback</span><span style="color:#24292E;">, </span><span style="color:#E36209;">delay</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">timeout</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">callback</span><span style="color:#24292E;">();  </span><span style="color:#6A737D;">// 执行回调</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">clearInterval</span><span style="color:#24292E;">(timer);</span><span style="color:#6A737D;">// 清除定时器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setInterval</span><span style="color:#24292E;">(timeout, delay)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">clear</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">clearInterval</span><span style="color:#24292E;">(timer);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div>`,4),e=[o];function t(c,r,y,F,i,E){return a(),n("div",null,e)}const m=s(p,[["render",t]]);export{u as __pageData,m as default};
