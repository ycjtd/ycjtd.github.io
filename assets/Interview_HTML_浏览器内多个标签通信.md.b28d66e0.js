import{_ as s,c as n,o as a,d as e}from"./app.ba5af232.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"怎么实现浏览器内多个标签的通信","slug":"怎么实现浏览器内多个标签的通信","link":"#怎么实现浏览器内多个标签的通信","children":[{"level":3,"title":"websocket","slug":"websocket","link":"#websocket","children":[]},{"level":3,"title":"localStorage","slug":"localstorage","link":"#localstorage","children":[]},{"level":3,"title":"cookie + SetInterval","slug":"cookie-setinterval","link":"#cookie-setinterval","children":[]}]}],"relativePath":"Interview/HTML/浏览器内多个标签通信.md"}'),p={name:"Interview/HTML/浏览器内多个标签通信.md"},l=e(`<h2 id="怎么实现浏览器内多个标签的通信" tabindex="-1">怎么实现浏览器内多个标签的通信 <a class="header-anchor" href="#怎么实现浏览器内多个标签的通信" aria-hidden="true">#</a></h2><h3 id="websocket" tabindex="-1">websocket <a class="header-anchor" href="#websocket" aria-hidden="true">#</a></h3><ul><li><p>建立 WebSocket 连接，<code>const socket = new WebSocket(&#39;ws://your-server-url&#39;)</code></p></li><li><p>监听消息事件：<code>socket.addEventListener(&#39;message&#39;, (event) =&gt; { const message = event. data; // 处理接收到的消息 })</code></p></li><li><p>发送消息：<code>socket.send(&#39;Hello from tab 1!&#39;)</code></p></li><li><p>处理连接关闭：<code>socket.addEventListener(&#39;close&#39;, (event) =&gt; { // 处理连接关闭 })</code></p></li><li><p>关闭连接：<code>socket.close()</code></p></li></ul><h3 id="localstorage" tabindex="-1">localStorage <a class="header-anchor" href="#localstorage" aria-hidden="true">#</a></h3><p>使用 localStorage，在一个标签页内使用 localStorage.setItem(key,value)内容，在另一个标签页里面监听 storage 事件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#f6f6f4;">// 标签页1</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;input id=&quot;name&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&amp;lt;input type=&amp;quot;button&amp;quot; id=&amp;quot;btn&amp;quot; value=&amp;quot;提交&amp;quot;&amp;gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&amp;lt;script type=&amp;quot;text/javascript&amp;quot;&amp;gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    $(function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        $(&amp;quot;#btn&amp;quot;).click(function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">            var name=$(&amp;quot;#name&amp;quot;).val();</span></span>
<span class="line"><span style="color:#f6f6f4;">            localStorage.setItem(&amp;quot;name&amp;quot;, name);</span></span>
<span class="line"><span style="color:#f6f6f4;">        });</span></span>
<span class="line"><span style="color:#f6f6f4;">    });</span></span>
<span class="line"><span style="color:#f6f6f4;">&amp;lt;/script&amp;gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">// 标签页2</span></span>
<span class="line"><span style="color:#f6f6f4;">&amp;lt;script type=&amp;quot;text/javascript&amp;quot;&amp;gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    $(function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        window.addEventListener(&amp;quot;storage&amp;quot;, function(event){</span></span>
<span class="line"><span style="color:#f6f6f4;">            console.log(event.key + &amp;quot;=&amp;quot; + event.newValue);</span></span>
<span class="line"><span style="color:#f6f6f4;">        });</span></span>
<span class="line"><span style="color:#f6f6f4;">    });</span></span>
<span class="line"><span style="color:#f6f6f4;">&amp;lt;/script&amp;gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#24292e;">// 标签页1</span></span>
<span class="line"><span style="color:#24292e;">&lt;input id=&quot;name&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&amp;lt;input type=&amp;quot;button&amp;quot; id=&amp;quot;btn&amp;quot; value=&amp;quot;提交&amp;quot;&amp;gt;</span></span>
<span class="line"><span style="color:#24292e;">&amp;lt;script type=&amp;quot;text/javascript&amp;quot;&amp;gt;</span></span>
<span class="line"><span style="color:#24292e;">    $(function(){</span></span>
<span class="line"><span style="color:#24292e;">        $(&amp;quot;#btn&amp;quot;).click(function(){</span></span>
<span class="line"><span style="color:#24292e;">            var name=$(&amp;quot;#name&amp;quot;).val();</span></span>
<span class="line"><span style="color:#24292e;">            localStorage.setItem(&amp;quot;name&amp;quot;, name);</span></span>
<span class="line"><span style="color:#24292e;">        });</span></span>
<span class="line"><span style="color:#24292e;">    });</span></span>
<span class="line"><span style="color:#24292e;">&amp;lt;/script&amp;gt;</span></span>
<span class="line"><span style="color:#24292e;">// 标签页2</span></span>
<span class="line"><span style="color:#24292e;">&amp;lt;script type=&amp;quot;text/javascript&amp;quot;&amp;gt;</span></span>
<span class="line"><span style="color:#24292e;">    $(function(){</span></span>
<span class="line"><span style="color:#24292e;">        window.addEventListener(&amp;quot;storage&amp;quot;, function(event){</span></span>
<span class="line"><span style="color:#24292e;">            console.log(event.key + &amp;quot;=&amp;quot; + event.newValue);</span></span>
<span class="line"><span style="color:#24292e;">        });</span></span>
<span class="line"><span style="color:#24292e;">    });</span></span>
<span class="line"><span style="color:#24292e;">&amp;lt;/script&amp;gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span></code></pre></div><h3 id="cookie-setinterval" tabindex="-1">cookie + SetInterval <a class="header-anchor" href="#cookie-setinterval" aria-hidden="true">#</a></h3><p>将要传递的消息存储在 cookie 中，每隔一段时间读取 cookie 信息</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#f6f6f4;">// 页面1</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;input id=&quot;name&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;input type=&quot;button&quot; id=&quot;btn&quot; value=&quot;提交&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    $(function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        $(&quot;#btn&quot;).click(function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">            var name=$(&quot;#name&quot;).val();</span></span>
<span class="line"><span style="color:#f6f6f4;">            document.cookie=&quot;name=&quot;+name;</span></span>
<span class="line"><span style="color:#f6f6f4;">        });</span></span>
<span class="line"><span style="color:#f6f6f4;">    });</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">// 页面2</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    $(function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        function getCookie(key) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            return JSON.parse(&quot;{\\&quot;&quot; + document.cookie.replace(/;\\s+/gim,&quot;\\&quot;,\\&quot;&quot;).replace(/=/gim, &quot;\\&quot;:\\&quot;&quot;) + &quot;\\&quot;}&quot;)[key];</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        setInterval(function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">            console.log(&quot;name=&quot; + getCookie(&quot;name&quot;));</span></span>
<span class="line"><span style="color:#f6f6f4;">        }, 10000);</span></span>
<span class="line"><span style="color:#f6f6f4;">    });</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#24292e;">// 页面1</span></span>
<span class="line"><span style="color:#24292e;">&lt;input id=&quot;name&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;input type=&quot;button&quot; id=&quot;btn&quot; value=&quot;提交&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    $(function(){</span></span>
<span class="line"><span style="color:#24292e;">        $(&quot;#btn&quot;).click(function(){</span></span>
<span class="line"><span style="color:#24292e;">            var name=$(&quot;#name&quot;).val();</span></span>
<span class="line"><span style="color:#24292e;">            document.cookie=&quot;name=&quot;+name;</span></span>
<span class="line"><span style="color:#24292e;">        });</span></span>
<span class="line"><span style="color:#24292e;">    });</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">// 页面2</span></span>
<span class="line"><span style="color:#24292e;">&lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    $(function(){</span></span>
<span class="line"><span style="color:#24292e;">        function getCookie(key) {</span></span>
<span class="line"><span style="color:#24292e;">            return JSON.parse(&quot;{\\&quot;&quot; + document.cookie.replace(/;\\s+/gim,&quot;\\&quot;,\\&quot;&quot;).replace(/=/gim, &quot;\\&quot;:\\&quot;&quot;) + &quot;\\&quot;}&quot;)[key];</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        setInterval(function(){</span></span>
<span class="line"><span style="color:#24292e;">            console.log(&quot;name=&quot; + getCookie(&quot;name&quot;));</span></span>
<span class="line"><span style="color:#24292e;">        }, 10000);</span></span>
<span class="line"><span style="color:#24292e;">    });</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span></code></pre></div>`,9),t=[l];function o(c,i,r,u,f,q){return a(),n("div",null,t)}const d=s(p,[["render",o]]);export{m as __pageData,d as default};
