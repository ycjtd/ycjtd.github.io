import{_ as s,c as n,o as a,d as l}from"./app.78019af7.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Problem/哈希表/有效的字母异位词.md"}'),p={name:"Problem/哈希表/有效的字母异位词.md"},o=l(`<p><strong>题目：</strong></p><p>有效的字母异位词 : <a href="https://leetcode.cn/problems/valid-anagram/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/valid-anagram/</a></p><p><strong>description:</strong></p><p>给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。</p><p>注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。</p><p><strong>解题思路：</strong></p><p>先将两个字符串转换为使用 map 存储，再比较两个 map</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">isAnagram</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">s</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">t</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (s.length </span><span style="color:#F286C4;">!==</span><span style="color:#F6F6F4;"> t.length) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> map1 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">transMap</span><span style="color:#F6F6F4;">(s);</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> map2 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">transMap</span><span style="color:#F6F6F4;">(t);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> res </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">equalMap</span><span style="color:#F6F6F4;">(map1, map2);</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> res;</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">transMap</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">value</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> map </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Map</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">; i </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> value.length; i</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    map.</span><span style="color:#62E884;">set</span><span style="color:#F6F6F4;">(value[i], map.</span><span style="color:#62E884;">has</span><span style="color:#F6F6F4;">(value[i]) </span><span style="color:#F286C4;">?</span><span style="color:#F6F6F4;"> map.</span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(value[i]) </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> map;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">equalMap</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">val1</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">val2</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (val1.size </span><span style="color:#F286C4;">!==</span><span style="color:#F6F6F4;"> val2.size) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> [key, value] </span><span style="color:#F286C4;">of</span><span style="color:#F6F6F4;"> val1) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">val2.</span><span style="color:#62E884;">has</span><span style="color:#F6F6F4;">(key) </span><span style="color:#F286C4;">||</span><span style="color:#F6F6F4;"> val2.</span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(key) </span><span style="color:#F286C4;">!==</span><span style="color:#F6F6F4;"> value) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isAnagram</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">s</span><span style="color:#24292E;">, </span><span style="color:#E36209;">t</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (s.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> t.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> map1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transMap</span><span style="color:#24292E;">(s);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> map2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transMap</span><span style="color:#24292E;">(t);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">equalMap</span><span style="color:#24292E;">(map1, map2);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transMap</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> map </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Map</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> value.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    map.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(value[i], map.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(value[i]) </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> map.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(value[i]) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> map;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">equalMap</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val1</span><span style="color:#24292E;">, </span><span style="color:#E36209;">val2</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (val1.size </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> val2.size) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">key</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">value</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> val1) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">val2.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(key) </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> val2.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(key) </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> value) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function t(c,r,F,y,i,E){return a(),n("div",null,e)}const A=s(p,[["render",t]]);export{u as __pageData,A as default};
