import{_ as s,c as n,o as a,d as l}from"./app.ba5af232.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Problem/链表/删除链表的倒数第N个节点.md"}'),p={name:"Problem/链表/删除链表的倒数第N个节点.md"},o=l(`<p><strong>题目：</strong></p><p>删除链表的倒数第 N 个结点 <a href="https://leetcode.cn/problems/remove-nth-node-from-end-of-list/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/remove-nth-node-from-end-of-list/</a></p><p><strong>description:</strong></p><p>给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。</p><p><strong>解题思路：</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">removeNthFromEnd</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">head</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">n</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 创建一个dummy节点，连接到链表的头部</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> dummy </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">ListNode</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">, head);</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 获取链表的长度</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> len </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">getLen</span><span style="color:#F6F6F4;">(head, n);</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 计算要删除的节点再正向遍历中的位置</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> targetN </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> len </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> n;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// cur指向dummy节点，用于遍历链表</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> cur </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> dummy;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 遍历到要删除的节点的前一个节点</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">; i </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> targetN; i</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    cur </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> cur.next;</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 删除要删除的节点</span></span>
<span class="line"><span style="color:#F6F6F4;">  cur.next </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> cur.next.next;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 返回要删除的节点</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> dummy.next;</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 获取链表长度</span></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">getLen</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">head</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">n</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> len </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (head) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    len</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    head </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> head.next;</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> len;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">removeNthFromEnd</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">head</span><span style="color:#24292E;">, </span><span style="color:#E36209;">n</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 创建一个dummy节点，连接到链表的头部</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> dummy </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ListNode</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, head);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取链表的长度</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getLen</span><span style="color:#24292E;">(head, n);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 计算要删除的节点再正向遍历中的位置</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> targetN </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> n;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cur指向dummy节点，用于遍历链表</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> cur </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> dummy;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 遍历到要删除的节点的前一个节点</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> targetN; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    cur </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cur.next;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 删除要删除的节点</span></span>
<span class="line"><span style="color:#24292E;">  cur.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cur.next.next;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 返回要删除的节点</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> dummy.next;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取链表长度</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getLen</span><span style="color:#24292E;">(</span><span style="color:#E36209;">head</span><span style="color:#24292E;">, </span><span style="color:#E36209;">n</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (head) {</span></span>
<span class="line"><span style="color:#24292E;">    len</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> head.next;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> len;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div>`,6),e=[o];function t(c,r,F,y,i,E){return a(),n("div",null,e)}const m=s(p,[["render",t]]);export{C as __pageData,m as default};
