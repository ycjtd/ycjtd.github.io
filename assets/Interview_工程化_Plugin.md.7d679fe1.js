import{_ as s,c as n,o as a,d as l}from"./app.58c7925b.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"工作原理","slug":"工作原理","link":"#工作原理","children":[]},{"level":3,"title":"编写一个插件","slug":"编写一个插件","link":"#编写一个插件","children":[]}],"relativePath":"Interview/工程化/Plugin.md"}'),p={name:"Interview/工程化/Plugin.md"},o=l(`<p>扩展 webpack 功能</p><h3 id="工作原理" tabindex="-1">工作原理 <a class="header-anchor" href="#工作原理" aria-hidden="true">#</a></h3><p>webpack 通过内部的事件流机制保证了插件的有序性，底层是利用发布订阅模式，webpack 在运行过程中会广播事件，插件只需要监听它所关系的事件，在特定的时间对资源做处理</p><h3 id="编写一个插件" tabindex="-1">编写一个插件 <a class="header-anchor" href="#编写一个插件" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7B7F8B;">// 自定义一个名为MyPlugin插件，该插件在打包完成后，在控制台输出&quot;打包已完成&quot;</span></span>
<span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">MyPlugin</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 原型上需要定义apply 的方法</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">apply</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">compiler</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 通过compiler获取webpack内部的钩子</span></span>
<span class="line"><span style="color:#F6F6F4;">    compiler.hooks.done.</span><span style="color:#62E884;">tap</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">My Plugin</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, (</span><span style="color:#FFB86C;font-style:italic;">compilation</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">cb</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">打包已完成</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 分为同步和异步的钩子，异步钩子必须执行对应的回调</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#62E884;">cb</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    });</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#97E1F1;font-style:italic;">module</span><span style="color:#F6F6F4;">.</span><span style="color:#97E1F1;font-style:italic;">exports</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> MyPlugin;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 自定义一个名为MyPlugin插件，该插件在打包完成后，在控制台输出&quot;打包已完成&quot;</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyPlugin</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 原型上需要定义apply 的方法</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#E36209;">compiler</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 通过compiler获取webpack内部的钩子</span></span>
<span class="line"><span style="color:#24292E;">    compiler.hooks.done.</span><span style="color:#6F42C1;">tap</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;My Plugin&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">compilation</span><span style="color:#24292E;">, </span><span style="color:#E36209;">cb</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;打包已完成&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 分为同步和异步的钩子，异步钩子必须执行对应的回调</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">cb</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> MyPlugin;</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function c(t,r,y,i,F,E){return a(),n("div",null,e)}const _=s(p,[["render",c]]);export{u as __pageData,_ as default};
