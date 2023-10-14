import{_ as s,c as n,o as a,d as l}from"./app.a84b4934.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"懒加载","slug":"懒加载","link":"#懒加载","children":[]},{"level":3,"title":"防抖与节流","slug":"防抖与节流","link":"#防抖与节流","children":[]}],"relativePath":"Interview/Performance/应用篇.md"}'),p={name:"Interview/Performance/应用篇.md"},o=l(`<h3 id="懒加载" tabindex="-1">懒加载 <a class="header-anchor" href="#懒加载" aria-hidden="true">#</a></h3><p>针对图片加载时机的优化，在一些图片量比较大的网站，如果尝试在用户打开页面的时候，就把所有的图片资源加载完毕，那么很可能会造成白屏、卡顿等现象，因为图片太多了，浏览器可能做不到一次性处理那么多的任务。实际上，用户点开页面的瞬间，能看到的只有首屏的东西，只要我们在页面打开的时候把首屏的资源加载出来，用户就会认为页面是没问题的，下面的图片，可以等到用户下拉的瞬间再去请求，这个就是懒加载。</p><p>懒加载的实现有两个关键的数值：一个是当前可视区域的高度 <code>const viewHeight = window.innerHeight || document.documentElement.clientHeight ​</code>，另一个是元素距离可视区域顶部的高度 <code>getClientRects()</code> 来获取元素的大小以及相对于视口的位置.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F6F6F4;">  &lt;</span><span style="color:#F286C4;">script</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">    // 获取所有的图片标签</span></span>
<span class="line"><span style="color:#F6F6F4;">    const imgs = document.getElementsByTagName(&#39;img&#39;)</span></span>
<span class="line"><span style="color:#F6F6F4;">    // 获取可视区域的高度</span></span>
<span class="line"><span style="color:#F6F6F4;">    const viewHeight = window.innerHeight || document.documentElement.clientHeight</span></span>
<span class="line"><span style="color:#F6F6F4;">    // num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出</span></span>
<span class="line"><span style="color:#F6F6F4;">    let num = 0</span></span>
<span class="line"><span style="color:#F6F6F4;">    function lazyload() </span><span style="color:#F286C4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#62E884;">for</span><span style="color:#F6F6F4;"> (let i </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> num; i </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> imgs.length; i</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 用可视区域高度减去元素顶部距离可视区域顶部的高度</span></span>
<span class="line"><span style="color:#F6F6F4;">        let distance </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> viewHeight </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> imgs[i].</span><span style="color:#62E884;">getBoundingClientRect</span><span style="color:#F6F6F4;">().top</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">distance</span><span style="color:#F6F6F4;"> &gt;</span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 给元素写入真实的src，展示图片</span></span>
<span class="line"><span style="color:#F6F6F4;">          imgs[i].src </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> imgs[i].</span><span style="color:#62E884;">getAttribute</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">data-src</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">// 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出</span></span>
<span class="line"><span style="color:#F6F6F4;">          num </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">}</span></span>
<span class="line"><span style="color:#F6F6F4;">    // 监听Scroll事件</span></span>
<span class="line"><span style="color:#F6F6F4;">    window.addEventListener(&#39;scroll&#39;, lazyload, false);</span></span>
<span class="line"><span style="color:#F6F6F4;">  &lt;/</span><span style="color:#F286C4;">script</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    // 获取所有的图片标签</span></span>
<span class="line"><span style="color:#24292E;">    const imgs = document.getElementsByTagName(&#39;img&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    // 获取可视区域的高度</span></span>
<span class="line"><span style="color:#24292E;">    const viewHeight = window.innerHeight || document.documentElement.clientHeight</span></span>
<span class="line"><span style="color:#24292E;">    // num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出</span></span>
<span class="line"><span style="color:#24292E;">    let num = 0</span></span>
<span class="line"><span style="color:#24292E;">    function lazyload() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">for</span><span style="color:#24292E;"> (let i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> num; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> imgs.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 用可视区域高度减去元素顶部距离可视区域顶部的高度</span></span>
<span class="line"><span style="color:#24292E;">        let distance </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> viewHeight </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> imgs[i].</span><span style="color:#6F42C1;">getBoundingClientRect</span><span style="color:#24292E;">().top</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">if</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">distance</span><span style="color:#24292E;"> &gt;</span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 给元素写入真实的src，展示图片</span></span>
<span class="line"><span style="color:#24292E;">          imgs[i].src </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> imgs[i].</span><span style="color:#6F42C1;">getAttribute</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;data-src&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出</span></span>
<span class="line"><span style="color:#24292E;">          num </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    // 监听Scroll事件</span></span>
<span class="line"><span style="color:#24292E;">    window.addEventListener(&#39;scroll&#39;, lazyload, false);</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="防抖与节流" tabindex="-1">防抖与节流 <a class="header-anchor" href="#防抖与节流" aria-hidden="true">#</a></h3><p>本质上都是闭包</p><p>节流:通过在一段时间内无视后来产生的回调请求来实现的</p><p>防抖:在一段时间内,无论调用多少次,只执行最后一次</p>`,8),e=[o];function t(c,r,i,F,y,d){return a(),n("div",null,e)}const m=s(p,[["render",t]]);export{g as __pageData,m as default};
