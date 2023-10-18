import{_ as s,c as n,o as a,a as l}from"./app.d0de5917.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Problem/链表/环形链表.md"}'),p={name:"Problem/链表/环形链表.md"},e=l(`<p><strong>题目：</strong></p><p>环形链表 : <a href="https://leetcode.cn/problems/linked-list-cycle-ii/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/linked-list-cycle-ii/</a></p><p><strong>description:</strong></p><p>给定一个链表的头节点 head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。</p><p>如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。</p><p>不允许修改 链表</p><p><strong>解题思路：</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (head) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (head.flag) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> head;</span></span>
<span class="line"><span style="color:#F6F6F4;">  } </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    head.flag </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    head </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> head.next;</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (head) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (head.flag) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> head;</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    head.flag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> head.next;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"></span></code></pre></div>`,8),o=[e];function t(c,r,i,F,y,d){return a(),n("div",null,o)}const E=s(p,[["render",t]]);export{h as __pageData,E as default};
