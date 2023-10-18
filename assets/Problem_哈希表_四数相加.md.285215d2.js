import{_ as s,c as n,o as a,a as p}from"./app.d0de5917.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Problem/哈希表/四数相加.md"}'),l={name:"Problem/哈希表/四数相加.md"},o=p(`<p><strong>题目：</strong></p><p>四数相加: <a href="https://leetcode.cn/problems/4sum-ii/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/4sum-ii/</a></p><p><strong>description:</strong></p><p>给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：</p><p>0 &lt;= i, j, k, l &lt; n nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0</p><p><strong>解题思路：</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">fourSumCount</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">nums1</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">nums2</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">nums3</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">nums4</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> sumMap </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Map</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> count </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> num1 </span><span style="color:#F286C4;">of</span><span style="color:#F6F6F4;"> nums1) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> num2 </span><span style="color:#F286C4;">of</span><span style="color:#F6F6F4;"> nums2) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> sum </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> num1 </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> num2;</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (sumMap.</span><span style="color:#62E884;">has</span><span style="color:#F6F6F4;">(sum)) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        sumMap.</span><span style="color:#62E884;">set</span><span style="color:#F6F6F4;">(sum, sumMap.</span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(sum) </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">      } </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        sumMap.</span><span style="color:#62E884;">set</span><span style="color:#F6F6F4;">(sum, </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">      }</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> num3 </span><span style="color:#F286C4;">of</span><span style="color:#F6F6F4;"> nums3) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> num4 </span><span style="color:#F286C4;">of</span><span style="color:#F6F6F4;"> nums4) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> target </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;"> (num3 </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> num4);</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (sumMap.</span><span style="color:#62E884;">has</span><span style="color:#F6F6F4;">(target)) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        count </span><span style="color:#F286C4;">+=</span><span style="color:#F6F6F4;"> sumMap.</span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(target);</span></span>
<span class="line"><span style="color:#F6F6F4;">      }</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> count;</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fourSumCount</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">nums1</span><span style="color:#24292E;">, </span><span style="color:#E36209;">nums2</span><span style="color:#24292E;">, </span><span style="color:#E36209;">nums3</span><span style="color:#24292E;">, </span><span style="color:#E36209;">nums4</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">sumMap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Map</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">num1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> nums1) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">num2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> nums2) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">sum</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> num1 </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> num2;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (sumMap.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(sum)) {</span></span>
<span class="line"><span style="color:#24292E;">        sumMap.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(sum, sumMap.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(sum) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        sumMap.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(sum, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">num3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> nums3) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">num4</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> nums4) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">target</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> (num3 </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> num4);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (sumMap.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(target)) {</span></span>
<span class="line"><span style="color:#24292E;">        count </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> sumMap.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(target);</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> count;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function t(c,r,F,y,E,i){return a(),n("div",null,e)}const C=s(l,[["render",t]]);export{m as __pageData,C as default};
