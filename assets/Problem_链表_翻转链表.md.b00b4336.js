import{_ as s,c as n,o as a,d as p}from"./app.78019af7.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Problem/链表/翻转链表.md"}'),l={name:"Problem/链表/翻转链表.md"},e=p(`<p><strong>题目：</strong></p><p>反转链表:<a href="https://leetcode.cn/problems/reverse-linked-list/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/reverse-linked-list/</a></p><p><strong>description:</strong></p><p>给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。</p><p><strong>解题思路：</strong></p><p>三指针</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">head </span><span style="color:#F286C4;">||</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">head.next) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> head;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> temp </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">  pre </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">  cur </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> head;</span></span>
<span class="line"><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (cur) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  temp </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> cur.next;</span></span>
<span class="line"><span style="color:#F6F6F4;">  cur.next </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> pre;</span></span>
<span class="line"><span style="color:#F6F6F4;">  pre </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> cur;</span></span>
<span class="line"><span style="color:#F6F6F4;">  cur </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> temp;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> pre;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">head </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">head.next) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> head;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> temp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  cur </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> head;</span></span>
<span class="line"><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (cur) {</span></span>
<span class="line"><span style="color:#24292E;">  temp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cur.next;</span></span>
<span class="line"><span style="color:#24292E;">  cur.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pre;</span></span>
<span class="line"><span style="color:#24292E;">  pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cur;</span></span>
<span class="line"><span style="color:#24292E;">  cur </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> temp;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> pre;</span></span>
<span class="line"></span></code></pre></div>`,7),o=[e];function t(c,r,F,y,i,d){return a(),n("div",null,o)}const u=s(l,[["render",t]]);export{_ as __pageData,u as default};
