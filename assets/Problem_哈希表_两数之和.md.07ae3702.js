import{_ as s,c as n,o as a,a as p}from"./app.d0de5917.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Problem/哈希表/两数之和.md"}'),l={name:"Problem/哈希表/两数之和.md"},o=p(`<p><strong>题目：</strong></p><p>两数之和:<a href="https://leetcode.cn/problems/two-sum/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/two-sum/</a></p><p><strong>description:</strong></p><p>给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。</p><p>你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现</p><p><strong>解题思路：</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">twoSum</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">nums</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">target</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> map </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Map</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">; i </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> nums.length; i</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (map.</span><span style="color:#62E884;">has</span><span style="color:#F6F6F4;">(target </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> nums[i])) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> [map.</span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(target </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> nums[i]), i];</span></span>
<span class="line"><span style="color:#F6F6F4;">    } </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      map.</span><span style="color:#62E884;">set</span><span style="color:#F6F6F4;">(nums[i], i);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> [];</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">twoSum</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">nums</span><span style="color:#24292E;">, </span><span style="color:#E36209;">target</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> map </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Map</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> nums.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (map.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(target </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> nums[i])) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [map.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(target </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> nums[i]), i];</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      map.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(nums[i], i);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function t(c,r,F,y,i,E){return a(),n("div",null,e)}const _=s(l,[["render",t]]);export{C as __pageData,_ as default};
