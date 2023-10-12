import{_ as s,c as n,o as a,d as l}from"./app.72c7cb6e.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/手写/AJAX.md"}'),p={name:"Interview/手写/AJAX.md"},o=l(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">getJSON</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">url</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Promise</span><span style="color:#F6F6F4;">((</span><span style="color:#FFB86C;font-style:italic;">resolve</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">reject</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> xhr </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">XMLHttpRequest</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    xhr.</span><span style="color:#62E884;">open</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">GET</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, url, </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    xhr.</span><span style="color:#62E884;">setRequestHeader</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Content-Type</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">application/json</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    xhr.</span><span style="color:#62E884;">onreadystatechange</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> () {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (xhr.readyState </span><span style="color:#F286C4;">!==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (xhr.status </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">200</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">||</span><span style="color:#F6F6F4;"> xhr.status </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">304</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">resolve</span><span style="color:#F6F6F4;">(xhr.responseText);</span></span>
<span class="line"><span style="color:#F6F6F4;">      } </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">reject</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Error</span><span style="color:#F6F6F4;">(xhr.responseText));</span></span>
<span class="line"><span style="color:#F6F6F4;">      }</span></span>
<span class="line"><span style="color:#F6F6F4;">    };</span></span>
<span class="line"><span style="color:#F6F6F4;">    xhr.</span><span style="color:#62E884;">send</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">  });</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getJSON</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">, </span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">xhr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">XMLHttpRequest</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    xhr.</span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;GET&quot;</span><span style="color:#24292E;">, url, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    xhr.</span><span style="color:#6F42C1;">setRequestHeader</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Content-Type&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;application/json&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    xhr.</span><span style="color:#6F42C1;">onreadystatechange</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (xhr.readyState </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (xhr.status </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> xhr.status </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">304</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(xhr.responseText);</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(xhr.responseText));</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">    xhr.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span></code></pre></div>`,1),e=[o];function t(c,r,y,F,E,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};
