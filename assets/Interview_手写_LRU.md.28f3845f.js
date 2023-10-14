import{_ as s,c as n,o as a,d as l}from"./app.a84b4934.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/手写/LRU.md"}'),p={name:"Interview/手写/LRU.md"},o=l(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7B7F8B;">// 缓存淘汰策略，移除最近最少被访问的数据项</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">LRUCache</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">capacity</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.map </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Map</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.capacity </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> capacity;</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 取值的时候，如果缓存中存在该键值对，先删除再重新插入，表示最近访问</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">key</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.map.</span><span style="color:#62E884;">has</span><span style="color:#F6F6F4;">(key)) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> value </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.map.</span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(key);</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.map.</span><span style="color:#62E884;">delete</span><span style="color:#F6F6F4;">(key, value);</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.map.</span><span style="color:#62E884;">set</span><span style="color:#F6F6F4;">(key, value);</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> value;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 如果缓存中不存在该键，返回 -1</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">put</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">key</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">value</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.map.</span><span style="color:#62E884;">has</span><span style="color:#F6F6F4;">(key)) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 如果缓存中存在该键值对，删除旧的数据</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.map.</span><span style="color:#62E884;">delete</span><span style="color:#F6F6F4;">(key);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.map.</span><span style="color:#62E884;">set</span><span style="color:#F6F6F4;">(key, value);</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.map.size </span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.capacity) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 如果缓存已满，删除最久未被访问的数据</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.map.</span><span style="color:#62E884;">delete</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.map.</span><span style="color:#62E884;">keys</span><span style="color:#F6F6F4;">().</span><span style="color:#62E884;">next</span><span style="color:#F6F6F4;">().value);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 缓存淘汰策略，移除最近最少被访问的数据项</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LRUCache</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">capacity</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.map </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Map</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.capacity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> capacity;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 取值的时候，如果缓存中存在该键值对，先删除再重新插入，表示最近访问</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.map.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(key)) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.map.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(key);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.map.</span><span style="color:#6F42C1;">delete</span><span style="color:#24292E;">(key, value);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.map.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(key, value);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果缓存中不存在该键，返回 -1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">put</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.map.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(key)) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 如果缓存中存在该键值对，删除旧的数据</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.map.</span><span style="color:#6F42C1;">delete</span><span style="color:#24292E;">(key);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.map.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(key, value);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.map.size </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.capacity) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 如果缓存已满，删除最久未被访问的数据</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.map.</span><span style="color:#6F42C1;">delete</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.map.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">().value);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div>`,1),e=[o];function t(c,y,r,F,i,E){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{h as __pageData,d as default};
