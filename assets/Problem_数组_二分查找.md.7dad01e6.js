import{_ as s,c as n,o as a,d as l}from"./app.58c7925b.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"二分查找的思路","slug":"二分查找的思路","link":"#二分查找的思路","children":[]},{"level":2,"title":"步骤","slug":"步骤","link":"#步骤","children":[]},{"level":2,"title":"题目","slug":"题目","link":"#题目","children":[]}],"relativePath":"Problem/数组/二分查找.md"}'),p={name:"Problem/数组/二分查找.md"},o=l(`<h2 id="二分查找的思路" tabindex="-1">二分查找的思路 <a class="header-anchor" href="#二分查找的思路" aria-hidden="true">#</a></h2><p>二分查找也叫折半查找，用于在有序数组查找特定的元素；通过将查找区间分为两半，不断缩小查找区间，根据中间元素和目标元素 的比较关系来确定目标元素在那一半，直到找到元素或者确定不存在。</p><h2 id="步骤" tabindex="-1">步骤 <a class="header-anchor" href="#步骤" aria-hidden="true">#</a></h2><ul><li>初始化左右边界</li><li>计算中间位置</li><li>比较中间元素和目标元素的大小 <ul><li>如果中间元素等于目标元素，查找成功，返回中间元素的索引</li><li>如果中间元素大于目标元素，说明目标元素在左半部分，更新中间元素为 mid-1，继续查找左半部分</li><li>如果中间元素小于目标元素，说明目标元素在右半部分，更新中间元素为 mid+1，继续查找右半部分</li></ul></li><li>重复，直到查到目标元素或查找区间为空</li></ul><h2 id="题目" tabindex="-1">题目 <a class="header-anchor" href="#题目" aria-hidden="true">#</a></h2><p>力扣 704.二分查找 <a href="https://leetcode.cn/problems/binary-search/description/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/binary-search/description/</a></p><p><strong>description:</strong> 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。</p><p><strong>思路：</strong><strong>暴力</strong></p><p>首先考虑暴力的方法，直接通过遍历去查找数组中是否存在目标元素</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">; i </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> nums.length; i</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (nums[i] </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> target) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> i;</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> nums.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (nums[i] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> target) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>二分法</strong></p><p>因为题目给出是有序的、没有重复的数组，所以可以考虑使用二分法</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> left </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">  right </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> nums.length </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (left </span><span style="color:#F286C4;">&lt;=</span><span style="color:#F6F6F4;"> right) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  mid </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> left </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> ((right </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> left) </span><span style="color:#F286C4;">&gt;&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (nums[mid] </span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;"> target) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    right </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> mid </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  } </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (nums[mid] </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> target) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    left </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> mid </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  } </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> mid;</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> left </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> nums.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (left </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> right) {</span></span>
<span class="line"><span style="color:#24292E;">  mid </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> left </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> ((right </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> left) </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (nums[mid] </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> target) {</span></span>
<span class="line"><span style="color:#24292E;">    right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mid </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (nums[mid] </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> target) {</span></span>
<span class="line"><span style="color:#24292E;">    left </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mid </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> mid;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span></code></pre></div>`,13),e=[o];function t(r,c,F,y,i,E){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{C as __pageData,h as default};
