import{_ as s,c as n,o as a,d as l}from"./app.ba5af232.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/手写/数组去重.md"}'),p={name:"Interview/手写/数组去重.md"},o=l(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7B7F8B;">// 方法1 使用set</span></span>
<span class="line"><span style="color:#F6F6F4;">[</span><span style="color:#F286C4;">...</span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Set</span><span style="color:#F6F6F4;">(arr)];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 方法2 使用includes</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> uniArr </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [];</span></span>
<span class="line"><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> item </span><span style="color:#F286C4;">of</span><span style="color:#F6F6F4;"> arr) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">uniArr.</span><span style="color:#62E884;">includes</span><span style="color:#F6F6F4;">(item)) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    uniArr.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(item);</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 方法3 使用对象</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> uniArr </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [];</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> obj </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {};</span></span>
<span class="line"><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> item </span><span style="color:#F286C4;">of</span><span style="color:#F6F6F4;"> arr) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">obj.</span><span style="color:#62E884;">hasOwnProperty</span><span style="color:#F6F6F4;">(item)) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    uniArr.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(item);</span></span>
<span class="line"><span style="color:#F6F6F4;">    obj[item] </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 方法4 使用filter</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> uniArr </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> arr.</span><span style="color:#62E884;">filter</span><span style="color:#F6F6F4;">((</span><span style="color:#FFB86C;font-style:italic;">value</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">index</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">self</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> self.</span><span style="color:#62E884;">indexOf</span><span style="color:#F6F6F4;">(value) </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> index;</span></span>
<span class="line"><span style="color:#F6F6F4;">});</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 方法1 使用set</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#D73A49;">...new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Set</span><span style="color:#24292E;">(arr)];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 方法2 使用includes</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> uniArr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> arr) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">uniArr.</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(item)) {</span></span>
<span class="line"><span style="color:#24292E;">    uniArr.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(item);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 方法3 使用对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">uniArr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">obj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> arr) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">obj.</span><span style="color:#6F42C1;">hasOwnProperty</span><span style="color:#24292E;">(item)) {</span></span>
<span class="line"><span style="color:#24292E;">    uniArr.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(item);</span></span>
<span class="line"><span style="color:#24292E;">    obj[item] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 方法4 使用filter</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">uniArr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr.</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">((</span><span style="color:#E36209;">value</span><span style="color:#24292E;">, </span><span style="color:#E36209;">index</span><span style="color:#24292E;">, </span><span style="color:#E36209;">self</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> self.</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(value) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> index;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span></code></pre></div>`,1),e=[o];function c(t,r,y,F,i,E){return a(),n("div",null,e)}const u=s(p,[["render",c]]);export{A as __pageData,u as default};
