import{_ as s,c as n,o as a,d as l}from"./app.a84b4934.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/手写/树形结构转换成列表.md"}'),p={name:"Interview/手写/树形结构转换成列表.md"},o=l(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F6F6F4;">[</span></span>
<span class="line"><span style="color:#F6F6F4;">    {</span></span>
<span class="line"><span style="color:#F6F6F4;">        id</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        text</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">节点1</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        parentId</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        children</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">            {</span></span>
<span class="line"><span style="color:#F6F6F4;">                id</span><span style="color:#F286C4;">:</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                text</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">节点1_1</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">                parentId</span><span style="color:#F286C4;">:</span><span style="color:#BF9EEE;">1</span></span>
<span class="line"><span style="color:#F6F6F4;">            }</span></span>
<span class="line"><span style="color:#F6F6F4;">        ]</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">转成</span></span>
<span class="line"><span style="color:#F6F6F4;">[</span></span>
<span class="line"><span style="color:#F6F6F4;">    {</span></span>
<span class="line"><span style="color:#F6F6F4;">        id</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        text</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">节点1</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        parentId</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">//这里用0表示为顶级节点</span></span>
<span class="line"><span style="color:#F6F6F4;">    },</span></span>
<span class="line"><span style="color:#F6F6F4;">    {</span></span>
<span class="line"><span style="color:#F6F6F4;">        id</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        text</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">节点1_1</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        parentId</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">//通过这个字段来确定子父级</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">...</span></span>
<span class="line"><span style="color:#F6F6F4;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 实现代码如下</span></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">treeToList</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">data</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> res </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [];</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">dfs</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">tree</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    tree.</span><span style="color:#62E884;">forEach</span><span style="color:#F6F6F4;">((</span><span style="color:#FFB86C;font-style:italic;">item</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (item.children) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">dfs</span><span style="color:#F6F6F4;">(item.children);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">delete</span><span style="color:#F6F6F4;"> item.children;</span></span>
<span class="line"><span style="color:#F6F6F4;">      }</span></span>
<span class="line"><span style="color:#F6F6F4;">      res.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(item);</span></span>
<span class="line"><span style="color:#F6F6F4;">    });</span></span>
<span class="line"><span style="color:#F6F6F4;">  };</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">dfs</span><span style="color:#F6F6F4;">(data);</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> res;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#24292E;">[</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;节点1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        parentId: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        children: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                id:</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                text: </span><span style="color:#032F62;">&#39;节点1_1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                parentId:</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">转成</span></span>
<span class="line"><span style="color:#24292E;">[</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;节点1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        parentId: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">//这里用0表示为顶级节点</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;节点1_1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        parentId: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">//通过这个字段来确定子父级</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 实现代码如下</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">treeToList</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">tree</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    tree.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (item.children) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">(item.children);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">delete</span><span style="color:#24292E;"> item.children;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      res.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(item);</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div>`,1),e=[o];function c(t,r,F,y,i,E){return a(),n("div",null,e)}const _=s(p,[["render",c]]);export{C as __pageData,_ as default};
