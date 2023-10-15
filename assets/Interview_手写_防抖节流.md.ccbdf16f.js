import{_ as s,c as n,o as a,d as l}from"./app.ba5af232.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"节流","slug":"节流","link":"#节流","children":[]},{"level":3,"title":"防抖","slug":"防抖","link":"#防抖","children":[]}],"relativePath":"Interview/手写/防抖节流.md"}'),p={name:"Interview/手写/防抖节流.md"},o=l(`<h3 id="节流" tabindex="-1">节流 <a class="header-anchor" href="#节流" aria-hidden="true">#</a></h3><p>某个函数在一定时间间隔内只执行一次，在规定的延迟时间内无视后来产生的函数调用请求，也不会延长时间 控制函数执行频率的技术，确保函数在一定时间间隔内最多执行一次，以减轻高频率触发函数的性能问题。一般情况下处理事件监听、滚动事件、窗口大小调整等需要频繁触发的操 核心思想是通过设置一个时间间隔，只有在这个时间间隔内首次触发函数后，才允许再次触发，而在这个时间间隔内，数再次被触发，则会被</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7B7F8B;">// fn 是需要执行的函数</span></span>
<span class="line"><span style="color:#7B7F8B;">// wait 是时间间隔</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">throttle</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">fn</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">wait</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">50</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 上一次执行 fn 的时间</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> previous </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 将 throttle 处理结果当作函数返回</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">...</span><span style="color:#FFB86C;font-style:italic;">args</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 获取当前时间，转换成时间戳，单位毫秒</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> now </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">+</span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Date</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 将当前时间和上一次执行函数的时间进行对比</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 大于等待时间就把 previous 设置为当前时间并执行函数 fn</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (now </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> previous </span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;"> wait) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      previous </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> now;</span></span>
<span class="line"><span style="color:#F6F6F4;">      fn.</span><span style="color:#62E884;">apply</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">, args);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">  };</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// fn 是需要执行的函数</span></span>
<span class="line"><span style="color:#6A737D;">// wait 是时间间隔</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">throttle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">, </span><span style="color:#E36209;">wait</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 上一次执行 fn 的时间</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> previous </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 将 throttle 处理结果当作函数返回</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取当前时间，转换成时间戳，单位毫秒</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> now </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将当前时间和上一次执行函数的时间进行对比</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 大于等待时间就把 previous 设置为当前时间并执行函数 fn</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (now </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> previous </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> wait) {</span></span>
<span class="line"><span style="color:#24292E;">      previous </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> now;</span></span>
<span class="line"><span style="color:#24292E;">      fn.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, args);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span></code></pre></div><h3 id="防抖" tabindex="-1">防抖 <a class="header-anchor" href="#防抖" aria-hidden="true">#</a></h3><p>是指某个函数在规定的时间段内，无论触发多少次回调，只执行最后 一般用于处理需要等待一段时间后稳定下来的事件，比如输入框的输入事件、滚动事件、窗口大小调 核心思想就是当函数被触发后，设置一个定时器，在一定时间内如果函数再次被触发，就取消之前的定时器，重新设置时器。只有当一定时间内没有再次触发函数时，定时器才会触发函数</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">debounce</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">fn</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">wait</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">50</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">immediate</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> timer </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;">...</span><span style="color:#FFB86C;font-style:italic;">args</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (timer) </span><span style="color:#62E884;">clearTimeout</span><span style="color:#F6F6F4;">(time</span></span>
<span class="line"><span style="color:#F6F6F4;">      	</span><span style="color:#7B7F8B;">// ------ 新增部分 start ------</span></span>
<span class="line"><span style="color:#F6F6F4;">      	</span><span style="color:#7B7F8B;">// immediate 为 true 表示第一次触发后执行</span></span>
<span class="line"><span style="color:#F6F6F4;">      	</span><span style="color:#7B7F8B;">// timer 为空表示首次触发</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">if</span><span style="color:#F6F6F4;"> (immediate </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">timer) {</span></span>
<span class="line"><span style="color:#F6F6F4;">            fn.apply(this, args)</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      	</span><span style="color:#7B7F8B;">// ------ 新增部分 end ----</span></span>
<span class="line"><span style="color:#F6F6F4;">        timer </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">setTimeout</span><span style="color:#F6F6F4;">(() </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">            fn.</span><span style="color:#62E884;">apply</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">, args)</span></span>
<span class="line"><span style="color:#F6F6F4;">        }, wait)</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">debounce</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">, </span><span style="color:#E36209;">wait</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">, </span><span style="color:#E36209;">immediate</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (timer) </span><span style="color:#6F42C1;">clearTimeout</span><span style="color:#24292E;">(time</span></span>
<span class="line"><span style="color:#24292E;">      	</span><span style="color:#6A737D;">// ------ 新增部分 start ------</span></span>
<span class="line"><span style="color:#24292E;">      	</span><span style="color:#6A737D;">// immediate 为 true 表示第一次触发后执行</span></span>
<span class="line"><span style="color:#24292E;">      	</span><span style="color:#6A737D;">// timer 为空表示首次触发</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">if</span><span style="color:#24292E;"> (immediate </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">timer) {</span></span>
<span class="line"><span style="color:#24292E;">            fn.apply(this, args)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      	</span><span style="color:#6A737D;">// ------ 新增部分 end ----</span></span>
<span class="line"><span style="color:#24292E;">        timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            fn.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, args)</span></span>
<span class="line"><span style="color:#24292E;">        }, wait)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div>`,6),e=[o];function t(c,r,F,y,i,E){return a(),n("div",null,e)}const f=s(p,[["render",t]]);export{C as __pageData,f as default};
