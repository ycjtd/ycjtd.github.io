import{_ as e,c as r,o as t,d as a}from"./app.72c7cb6e.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/network/CDN.md"}'),o={name:"Interview/network/CDN.md"},n=a('<ol start="28"><li><p>CDN</p><blockquote><p>CDN 的基本原理是广泛采用各种缓存服务器，将这些缓存服务器分布到用户访问相对集中的地区或者网络中，在用户访问网站的时候，将其指向距离最近的工作正常的缓存服务器上，由缓存服务器直接响应用户请求。</p></blockquote><p><strong>主要特点：</strong></p><ol><li>本地<code>Cache</code>加速：提高了企业站点（尤其含有大量图片和静态页面站点）的访问速度，并大大提高以上性质站点的稳定性。</li><li>镜像服务：消除了不同运营商之间互联的瓶颈造成的影响，实现了跨运营商的网络加速，保证不同网络中的用户都能得到良好的访问质量。</li><li>远程加速：<a href="https://baike.baidu.com/item/%E8%BF%9C%E7%A8%8B%E8%AE%BF%E9%97%AE" target="_blank" rel="noreferrer">远程访问 </a>​<a href="https://baike.baidu.com/item/%E8%BF%9C%E7%A8%8B%E8%AE%BF%E9%97%AE" target="_blank" rel="noreferrer"><strong>(opens new window)</strong></a>用户根据 DNS<a href="https://baike.baidu.com/item/%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1" target="_blank" rel="noreferrer">负载均衡 </a>​<a href="https://baike.baidu.com/item/%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1" target="_blank" rel="noreferrer"><strong>(opens new window)</strong></a>技术智能自动选择 Cache<a href="https://baike.baidu.com/item/%E6%9C%8D%E5%8A%A1%E5%99%A8" target="_blank" rel="noreferrer">服务器 </a>​<a href="https://baike.baidu.com/item/%E6%9C%8D%E5%8A%A1%E5%99%A8" target="_blank" rel="noreferrer"><strong>(opens new window)</strong></a>，选择最快的 Cache 服务器，加快远程访问的速度。</li><li>带宽优化：自动生成<a href="https://baike.baidu.com/item/%E6%9C%8D%E5%8A%A1%E5%99%A8" target="_blank" rel="noreferrer">服务器 </a>​<a href="https://baike.baidu.com/item/%E6%9C%8D%E5%8A%A1%E5%99%A8" target="_blank" rel="noreferrer"><strong>(opens new window)</strong></a>的远程 Mirror（<a href="https://baike.baidu.com/item/%E9%95%9C%E5%83%8F" target="_blank" rel="noreferrer">镜像 </a>​<a href="https://baike.baidu.com/item/%E9%95%9C%E5%83%8F" target="_blank" rel="noreferrer"><strong>(opens new window)</strong></a>）cache 服务器，<a href="https://baike.baidu.com/item/%E8%BF%9C%E7%A8%8B%E7%94%A8%E6%88%B7" target="_blank" rel="noreferrer">远程用户 </a>​<a href="https://baike.baidu.com/item/%E8%BF%9C%E7%A8%8B%E7%94%A8%E6%88%B7" target="_blank" rel="noreferrer"><strong>(opens new window)</strong></a>访问时从 cache 服务器上读取数据，减少<a href="https://baike.baidu.com/item/%E8%BF%9C%E7%A8%8B%E8%AE%BF%E9%97%AE" target="_blank" rel="noreferrer">远程访问 </a>​<a href="https://baike.baidu.com/item/%E8%BF%9C%E7%A8%8B%E8%AE%BF%E9%97%AE" target="_blank" rel="noreferrer"><strong>(opens new window)</strong></a>的带宽、分担网络流量、减轻原站点<a href="https://baike.baidu.com/item/WEB%E6%9C%8D%E5%8A%A1%E5%99%A8" target="_blank" rel="noreferrer">WEB 服务器 </a>​<a href="https://baike.baidu.com/item/WEB%E6%9C%8D%E5%8A%A1%E5%99%A8" target="_blank" rel="noreferrer"><strong>(opens new window)</strong></a>负载等功能。</li><li>集群抗攻击：广泛分布的 CDN 节点加上节点之间的智能<a href="https://baike.baidu.com/item/%E5%86%97%E4%BD%99" target="_blank" rel="noreferrer">冗余 </a>​<a href="https://baike.baidu.com/item/%E5%86%97%E4%BD%99" target="_blank" rel="noreferrer"><strong>(opens new window)</strong></a>机制，可以有效地预防<a href="https://baike.baidu.com/item/%E9%BB%91%E5%AE%A2" target="_blank" rel="noreferrer">黑客 </a>​<a href="https://baike.baidu.com/item/%E9%BB%91%E5%AE%A2" target="_blank" rel="noreferrer"><strong>(opens new window)</strong></a>入侵以及降低各种 D.D.o.S 攻击对网站的影响，同时保证较好的服务质量 。</li></ol><p><strong>CDN 作用</strong></p><blockquote><p>使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率</p></blockquote><p><strong>CDN 原理</strong></p><p>最简单的<code>CDN</code>网络由一个 DNS 服务器和几台缓存服务器组成。而工作的核心就是缓存服务器，它记录了用户所需内容，而且离用户较近，负载较小，因此提高了服务器响应速度。</p><blockquote><p>实际上<code>CDN</code>的工作过程要更复杂，为了便于理解，上面只是简述。我们从用户访问一个<code>URL</code>地址说起：<code>访问URL</code> =&gt; <code>CNAME指向的CDN专用DNS服务器对URL解析</code> =&gt; <code>负载均衡设备根据解析的ip地址和内容选择一台缓存服务器</code> =&gt; <code>返回缓存服务器ip地址给用户</code></p></blockquote></li></ol>',1),i=[n];function s(E,l,c,b,d,p){return t(),r("div",null,i)}const k=e(o,[["render",s]]);export{h as __pageData,k as default};