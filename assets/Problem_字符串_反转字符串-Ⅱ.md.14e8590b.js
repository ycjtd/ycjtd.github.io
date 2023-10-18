import{_ as s,c as n,o as a,a as l}from"./app.d0de5917.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Problem/字符串/反转字符串-Ⅱ.md"}'),p={name:"Problem/字符串/反转字符串-Ⅱ.md"},o=l(`<p><strong>题目：</strong></p><p>反转字符串 II <a href="https://leetcode.cn/problems/reverse-string-ii/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/reverse-string-ii/</a></p><p><strong>description:</strong></p><p>给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。</p><p>如果剩余字符少于 k 个，则将剩余字符全部反转。 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。</p><p><strong>解题思路：</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">reverseStr</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">s</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">k</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> len </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> s.length;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> resArr </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> s.</span><span style="color:#62E884;">split</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">; i </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> len; i </span><span style="color:#F286C4;">+=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;"> k) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> l </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      r </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> k </span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;"> len </span><span style="color:#F286C4;">?</span><span style="color:#F6F6F4;"> len </span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> k;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">l </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">--</span><span style="color:#F6F6F4;">r) [resArr[l], resArr[r]] </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [resArr[r], resArr[l]];</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> resArr.</span><span style="color:#62E884;">join</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reverseStr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">s</span><span style="color:#24292E;">, </span><span style="color:#E36209;">k</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">len</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> s.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> resArr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> s.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; i </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> k) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> k </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> k;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">l </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">r) [resArr[l], resArr[r]] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [resArr[r], resArr[l]];</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> resArr.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function r(t,c,F,y,i,E){return a(),n("div",null,e)}const _=s(p,[["render",r]]);export{A as __pageData,_ as default};
