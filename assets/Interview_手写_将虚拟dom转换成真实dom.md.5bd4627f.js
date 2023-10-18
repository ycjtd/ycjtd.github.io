import{_ as s,c as n,o as a,a as l}from"./app.d0de5917.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/手写/将虚拟dom转换成真实dom.md"}'),p={name:"Interview/手写/将虚拟dom转换成真实dom.md"},o=l(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">tag: </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">DIV</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">attrs:{</span></span>
<span class="line"><span style="color:#F6F6F4;">id:</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">app</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">},</span></span>
<span class="line"><span style="color:#F6F6F4;">children: [</span></span>
<span class="line"><span style="color:#F6F6F4;">  {</span></span>
<span class="line"><span style="color:#F6F6F4;">    tag</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">SPAN</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    children</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">      { tag</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">A</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, children</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [] }</span></span>
<span class="line"><span style="color:#F6F6F4;">    ]</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  {</span></span>
<span class="line"><span style="color:#F6F6F4;">    tag</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">SPAN</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    children</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">      { tag</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">A</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, children</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [] },</span></span>
<span class="line"><span style="color:#F6F6F4;">      { tag</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">A</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, children</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [] }</span></span>
<span class="line"><span style="color:#F6F6F4;">    ]</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#F6F6F4;">把上诉虚拟Dom转化成下方真实Dom</span></span>
<span class="line"><span style="color:#F6F6F4;">&lt;</span><span style="color:#F286C4;">div</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;font-style:italic;">id</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">app</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">&lt;</span><span style="color:#F286C4;">span</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">  &lt;</span><span style="color:#F286C4;">a</span><span style="color:#F6F6F4;">&gt;&lt;/</span><span style="color:#F286C4;">a</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">&lt;/</span><span style="color:#F286C4;">span</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">&lt;</span><span style="color:#F286C4;">span</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">  &lt;</span><span style="color:#F286C4;">a</span><span style="color:#F6F6F4;">&gt;&lt;/</span><span style="color:#F286C4;">a</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">  &lt;</span><span style="color:#F286C4;">a</span><span style="color:#F6F6F4;">&gt;&lt;/</span><span style="color:#F286C4;">a</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">&lt;/</span><span style="color:#F286C4;">span</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">&lt;/</span><span style="color:#F286C4;">div</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 实现代码</span></span>
<span class="line"><span style="color:#7B7F8B;">// 真正的渲染函数</span></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">_render</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">vnode</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#7B7F8B;">// 如果是数字类型转化为字符串</span></span>
<span class="line"><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">typeof</span><span style="color:#F6F6F4;"> vnode </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">number</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  vnode </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">String</span><span style="color:#F6F6F4;">(vnode);</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#7B7F8B;">// 字符串类型直接就是文本节点</span></span>
<span class="line"><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">typeof</span><span style="color:#F6F6F4;"> vnode </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">string</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> document.</span><span style="color:#62E884;">createTextNode</span><span style="color:#F6F6F4;">(vnode);</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#7B7F8B;">// 普通DOM</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> dom </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> document.</span><span style="color:#62E884;">createElement</span><span style="color:#F6F6F4;">(vnode.tag);</span></span>
<span class="line"><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (vnode.attrs) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 遍历属性</span></span>
<span class="line"><span style="color:#F6F6F4;">  Object.</span><span style="color:#62E884;">keys</span><span style="color:#F6F6F4;">(vnode.attrs).</span><span style="color:#62E884;">forEach</span><span style="color:#F6F6F4;">((</span><span style="color:#FFB86C;font-style:italic;">key</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> value </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> vnode.attrs[key];</span></span>
<span class="line"><span style="color:#F6F6F4;">    dom.</span><span style="color:#62E884;">setAttribute</span><span style="color:#F6F6F4;">(key, value);</span></span>
<span class="line"><span style="color:#F6F6F4;">  });</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#7B7F8B;">// 子数组进行递归操作</span></span>
<span class="line"><span style="color:#F6F6F4;">vnode.children.</span><span style="color:#62E884;">forEach</span><span style="color:#F6F6F4;">((</span><span style="color:#FFB86C;font-style:italic;">child</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> dom.</span><span style="color:#62E884;">appendChild</span><span style="color:#F6F6F4;">(</span><span style="color:#62E884;">_render</span><span style="color:#F6F6F4;">(child)));</span></span>
<span class="line"><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> dom;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#6F42C1;">tag</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;DIV&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">attrs</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#6F42C1;">id</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&#39;app&#39;</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#6F42C1;">children</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    tag: </span><span style="color:#032F62;">&#39;SPAN&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      { tag: </span><span style="color:#032F62;">&#39;A&#39;</span><span style="color:#24292E;">, children: [] }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    tag: </span><span style="color:#032F62;">&#39;SPAN&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      { tag: </span><span style="color:#032F62;">&#39;A&#39;</span><span style="color:#24292E;">, children: [] },</span></span>
<span class="line"><span style="color:#24292E;">      { tag: </span><span style="color:#032F62;">&#39;A&#39;</span><span style="color:#24292E;">, children: [] }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">把上诉虚拟Dom转化成下方真实Dom</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 实现代码</span></span>
<span class="line"><span style="color:#6A737D;">// 真正的渲染函数</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_render</span><span style="color:#24292E;">(</span><span style="color:#E36209;">vnode</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">// 如果是数字类型转化为字符串</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> vnode </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;number&quot;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  vnode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">String</span><span style="color:#24292E;">(vnode);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 字符串类型直接就是文本节点</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> vnode </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;string&quot;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createTextNode</span><span style="color:#24292E;">(vnode);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 普通DOM</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dom</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(vnode.tag);</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (vnode.attrs) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 遍历属性</span></span>
<span class="line"><span style="color:#24292E;">  Object.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">(vnode.attrs).</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vnode.attrs[key];</span></span>
<span class="line"><span style="color:#24292E;">    dom.</span><span style="color:#6F42C1;">setAttribute</span><span style="color:#24292E;">(key, value);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 子数组进行递归操作</span></span>
<span class="line"><span style="color:#24292E;">vnode.children.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">child</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> dom.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">_render</span><span style="color:#24292E;">(child)));</span></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> dom;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div>`,1),e=[o];function t(c,r,F,y,i,E){return a(),n("div",null,e)}const D=s(p,[["render",t]]);export{C as __pageData,D as default};
