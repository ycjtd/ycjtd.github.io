import{_ as s,c as n,o as a,d as p}from"./app.58c7925b.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Problem/链表/两两交换链表中的节点.md"}'),l={name:"Problem/链表/两两交换链表中的节点.md"},e=p(`<p><strong>题目：</strong></p><p>两两交换链表中的节点 <a href="https://leetcode.cn/problems/swap-nodes-in-pairs/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/swap-nodes-in-pairs/</a></p><p><strong>description:</strong></p><p>给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。</p><p><strong>解题思路：</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> dummy </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">ListNode</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">, head),</span></span>
<span class="line"><span style="color:#F6F6F4;">  temp </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> dummy;</span></span>
<span class="line"><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (temp.next </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> temp.next.next) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> cur </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> temp.next.next,</span></span>
<span class="line"><span style="color:#F6F6F4;">    pre </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> temp.next;</span></span>
<span class="line"><span style="color:#F6F6F4;">  pre.next </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> cur.next;</span></span>
<span class="line"><span style="color:#F6F6F4;">  cur.next </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> pre;</span></span>
<span class="line"><span style="color:#F6F6F4;">  temp.next </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> cur;</span></span>
<span class="line"><span style="color:#F6F6F4;">  temp </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> pre;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> dummy.next;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> dummy </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ListNode</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, head),</span></span>
<span class="line"><span style="color:#24292E;">  temp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> dummy;</span></span>
<span class="line"><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (temp.next </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> temp.next.next) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> cur </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> temp.next.next,</span></span>
<span class="line"><span style="color:#24292E;">    pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> temp.next;</span></span>
<span class="line"><span style="color:#24292E;">  pre.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cur.next;</span></span>
<span class="line"><span style="color:#24292E;">  cur.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pre;</span></span>
<span class="line"><span style="color:#24292E;">  temp.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cur;</span></span>
<span class="line"><span style="color:#24292E;">  temp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pre;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> dummy.next;</span></span>
<span class="line"></span></code></pre></div>`,6),o=[e];function t(c,r,y,F,i,d){return a(),n("div",null,o)}const E=s(l,[["render",t]]);export{_ as __pageData,E as default};
