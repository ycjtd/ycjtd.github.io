import{_ as s,c as n,o as a,d as p}from"./app.a84b4934.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Problem/数组/有序数组的平方.md"}'),l={name:"Problem/数组/有序数组的平方.md"},o=p(`<p><strong>题目：</strong></p><p>有序数组的平方 😀 <a href="https://leetcode.cn/problems/squares-of-a-sorted-array/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/squares-of-a-sorted-array/</a></p><p><strong>description:</strong></p><p>给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序</p><p><strong>解题思路：</strong></p><p>看到这个题目的第一个思路就是遍历数组，将数组中每一个元素平方，然后对数组使用 sort 排序</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">; i </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> nums.length; i</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  nums[i] </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> nums[i] </span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;"> nums[i];</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> nums.</span><span style="color:#62E884;">sort</span><span style="color:#F6F6F4;">((</span><span style="color:#FFB86C;font-style:italic;">a</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">b</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> a </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> b);</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> nums.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  nums[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> nums[i] </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> nums[i];</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> nums.</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">((</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> b);</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function t(r,c,y,F,i,_){return a(),n("div",null,e)}const E=s(l,[["render",t]]);export{u as __pageData,E as default};
