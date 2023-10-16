import{_ as s,c as n,o as a,d as l}from"./app.78019af7.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/手写/发布订阅.md"}'),p={name:"Interview/手写/发布订阅.md"},o=l(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">EventEmitter</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 创建一个空对象存储事件和对应的回调函数</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.events </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {};</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 实现订阅</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">on</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">type</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">callBack</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 检查是否已经存在该类型的事件订阅，如果不存在，初始化为一个数组</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">!</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.events[type]) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.events[type] </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [callBack];</span></span>
<span class="line"><span style="color:#F6F6F4;">    } </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 如果已经存在，将回调函数添加到事件订阅列表中</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.events[type].</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(callBack);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 删除订阅</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">off</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">type</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">callBack</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 检查是否存在该类型的事件订阅，如果不存在，直接返回</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">!</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.events[type]) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 使用数组的filter方法，过滤掉要取消订阅的回调函数</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.events[type] </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.events[type].</span><span style="color:#62E884;">filter</span><span style="color:#F6F6F4;">((</span><span style="color:#FFB86C;font-style:italic;">item</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> item </span><span style="color:#F286C4;">!==</span><span style="color:#F6F6F4;"> callBack; </span><span style="color:#7B7F8B;">// 只保留不需要取消的回调函数的项</span></span>
<span class="line"><span style="color:#F6F6F4;">    });</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 只执行一次订阅事件</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">once</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">type</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">callBack</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 定义一个内部函数fn，会在触发时执行回调函数并取消订阅</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">fn</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#62E884;">callBack</span><span style="color:#F6F6F4;">(); </span><span style="color:#7B7F8B;">// 执行回调函数</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.</span><span style="color:#62E884;">off</span><span style="color:#F6F6F4;">(type, fn);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.</span><span style="color:#62E884;">on</span><span style="color:#F6F6F4;">(type, fn); </span><span style="color:#7B7F8B;">// 调用on方法，将fn添加为回调函数</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 触发事件</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">emit</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">type</span><span style="color:#F6F6F4;">, </span><span style="color:#F286C4;">...</span><span style="color:#FFB86C;font-style:italic;">rest</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 检查是否存在该类型的事件订阅，如果存在，依次调用所有回调函数</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.events[type].</span><span style="color:#62E884;">forEach</span><span style="color:#F6F6F4;">((</span><span style="color:#FFB86C;font-style:italic;">fn</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> fn.</span><span style="color:#62E884;">apply</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">, rest)); </span><span style="color:#7B7F8B;">// 使用apply将参数传递给回调函数</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EventEmitter</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建一个空对象存储事件和对应的回调函数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.events </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 实现订阅</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callBack</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 检查是否已经存在该类型的事件订阅，如果不存在，初始化为一个数组</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.events[type]) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.events[type] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [callBack];</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 如果已经存在，将回调函数添加到事件订阅列表中</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.events[type].</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(callBack);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 删除订阅</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">off</span><span style="color:#24292E;">(</span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callBack</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 检查是否存在该类型的事件订阅，如果不存在，直接返回</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.events[type]) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 使用数组的filter方法，过滤掉要取消订阅的回调函数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.events[type] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.events[type].</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> item </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> callBack; </span><span style="color:#6A737D;">// 只保留不需要取消的回调函数的项</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 只执行一次订阅事件</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">once</span><span style="color:#24292E;">(</span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callBack</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 定义一个内部函数fn，会在触发时执行回调函数并取消订阅</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">callBack</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 执行回调函数</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">off</span><span style="color:#24292E;">(type, fn);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(type, fn); </span><span style="color:#6A737D;">// 调用on方法，将fn添加为回调函数</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 触发事件</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">...</span><span style="color:#E36209;">rest</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 检查是否存在该类型的事件订阅，如果存在，依次调用所有回调函数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.events[type].</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> fn.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, rest)); </span><span style="color:#6A737D;">// 使用apply将参数传递给回调函数</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div>`,1),e=[o];function t(c,y,r,F,i,E){return a(),n("div",null,e)}const f=s(p,[["render",t]]);export{C as __pageData,f as default};
