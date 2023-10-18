import{_ as e,c as n,o as x,a}from"./app.d0de5917.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1xx","slug":"_1xx","link":"#_1xx","children":[]},{"level":3,"title":"2xx","slug":"_2xx","link":"#_2xx","children":[]},{"level":3,"title":"3xx","slug":"_3xx","link":"#_3xx","children":[]},{"level":3,"title":"4xx","slug":"_4xx","link":"#_4xx","children":[]},{"level":3,"title":"5xx","slug":"_5xx","link":"#_5xx","children":[]}],"relativePath":"Interview/network/常见状态码.md"}'),r={name:"Interview/network/常见状态码.md"},t=a(`<h3 id="_1xx" tabindex="-1">1xx <a class="header-anchor" href="#_1xx" aria-hidden="true">#</a></h3><p>提示信息，表示目前是协议处理的中间状态，还需要后续的操作</p><h3 id="_2xx" tabindex="-1">2xx <a class="header-anchor" href="#_2xx" aria-hidden="true">#</a></h3><p>成功，报文已经收到并且被正常处理</p><pre><code>* 200 OK 最常见的成功状态码，表示一切正常
* 204  No Content  成功，但是响应头没有body数据
* 206 Partial Content 用于HTTP分块下载或断点续传，表示响应返回的body数据不是资源的全部，而是其中的一部分
</code></pre><h3 id="_3xx" tabindex="-1">3xx <a class="header-anchor" href="#_3xx" aria-hidden="true">#</a></h3><p>表示客户端请求的资源发生了变动，需要客户端用新的 URL 重新发送请求获取资源，也就是重定向</p><pre><code>* 301 Moved Permanently 永久重定向，说明请求的资源已经不存在了，需要用新的URL再次访问
* 302 Found 表示临时重定向，说明请求的资源还在，但是暂时需要用另一个URL来访问
* 304 Not Modified 表示资源未修改，重定向已经存在的缓存文件，也叫做缓存重定向。
</code></pre><h3 id="_4xx" tabindex="-1">4xx <a class="header-anchor" href="#_4xx" aria-hidden="true">#</a></h3><p>表示客户端发送的报文有误，服务器无法处理</p><pre><code>* 400 表示客户端请求的报文有错误
* 403 Forbidden 表示服务器禁止访问资源，不是客户端的请求出错
* 404 Not Found 请求的资源在服务器上找不到或不存在
</code></pre><h3 id="_5xx" tabindex="-1">5xx <a class="header-anchor" href="#_5xx" aria-hidden="true">#</a></h3><p>客户端请求正确，但是服务器内部发生了错误</p><pre><code>* 500 服务器发生错误
* 501 表示客户端请求的功能还不支持
* 502 通常是服务器作为网关或代理时返回的错误码，表示服务器自身工作正常，访问后端服务器发生了错误
* 503 表示服务器当前很忙，暂时无法响应客户端
</code></pre>`,14),d=[t];function i(_,o,l,c,h,s){return x(),n("div",null,d)}const f=e(r,[["render",i]]);export{u as __pageData,f as default};
