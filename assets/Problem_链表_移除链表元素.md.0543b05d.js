import{_ as s,c as n,o as a,d as l}from"./app.ba5af232.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Problem/链表/移除链表元素.md"}'),p={name:"Problem/链表/移除链表元素.md"},e=l(`<p><strong>题目：</strong></p><p>移除链表元素 <a href="https://leetcode.cn/problems/remove-linked-list-elements/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/remove-linked-list-elements/</a></p><p><strong>description:</strong></p><p>给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。</p><p><strong>解题思路：</strong></p><p>遍历链表，当下一个节点的 val === target，让下一个节点的 next 指向 next.next</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> dummy </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">ListNode</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">, head); </span><span style="color:#7B7F8B;">// 虚拟头节点</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> cur </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> dummy;</span></span>
<span class="line"><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (cur.next) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (cue.next.val </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> val) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    cur.next </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> cur.next.next;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">continue</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  cur </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> cur.next;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> dummy.next;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> dummy </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ListNode</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, head); </span><span style="color:#6A737D;">// 虚拟头节点</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> cur </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> dummy;</span></span>
<span class="line"><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (cur.next) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (cue.next.val </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> val) {</span></span>
<span class="line"><span style="color:#24292E;">    cur.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cur.next.next;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">continue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  cur </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cur.next;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> dummy.next;</span></span>
<span class="line"></span></code></pre></div>`,7),o=[e];function t(c,r,y,F,i,d){return a(),n("div",null,o)}const m=s(p,[["render",t]]);export{_ as __pageData,m as default};
