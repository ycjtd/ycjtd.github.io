import{_ as e,c as l,o as i,d as t}from"./app.72c7cb6e.js";const T=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"TSL 中的加密","slug":"tsl-中的加密","link":"#tsl-中的加密","children":[]},{"level":3,"title":"对称密钥加密和非对称密钥加密有什么区别","slug":"对称密钥加密和非对称密钥加密有什么区别","link":"#对称密钥加密和非对称密钥加密有什么区别","children":[]},{"level":3,"title":"HTTPS 加密过程","slug":"https-加密过程","link":"#https-加密过程","children":[]},{"level":3,"title":"中间人攻击的过程","slug":"中间人攻击的过程","link":"#中间人攻击的过程","children":[]},{"level":3,"title":"怎么预防中间人攻击？","slug":"怎么预防中间人攻击","link":"#怎么预防中间人攻击","children":[]}],"relativePath":"Interview/Safe/中间人攻击.md"}'),a={name:"Interview/Safe/中间人攻击.md"},r=t('<p>HTTP 是明文传输，HTTPS 是加密传输 HTTPS = HTTP + TLS/SSL</p><h3 id="tsl-中的加密" tabindex="-1">TSL 中的加密 <a class="header-anchor" href="#tsl-中的加密" aria-hidden="true">#</a></h3><ul><li>对称加密：两边拥有相同的密钥，两边都知道如何将密文加密解密</li><li>非对称解密：有公钥和私钥之分，公钥所有人都知道，可以将数据用公钥加密，但是将数据解密必须使用私钥解密，私有只有分发公钥的一方才知道</li></ul><h3 id="对称密钥加密和非对称密钥加密有什么区别" tabindex="-1">对称密钥加密和非对称密钥加密有什么区别 <a class="header-anchor" href="#对称密钥加密和非对称密钥加密有什么区别" aria-hidden="true">#</a></h3><ul><li>对称密钥加密是最简单的一种加密方式，加解密都是相同的密钥，好处是加解密效率快，但是不安全，如果有人拿到了这个密钥谁都可以进行解密</li><li>非对称密钥会有两把密钥，一把是私钥，只有自己才有；一把是公钥，可以发布给任何人。并且加密的内容只有相匹配的密钥才能解。这样带来的一个好处就是能保证传输的内容是安全的，因为例如如果是公钥加密的数据，就算是第三方截取了这个数据但是没有对应的私钥也解密不了。缺点是非对称加密的时候要消耗一定的时间，减低了数据的传输效率；因为公钥是公开的，拥有对应公钥的黑客可以用这个公钥进行解密得到里面的信息；公钥中没有包含服务器的信息，所以并不能确保服务器合法的身份</li></ul><h3 id="https-加密过程" tabindex="-1">HTTPS 加密过程 <a class="header-anchor" href="#https-加密过程" aria-hidden="true">#</a></h3><ol><li>客户端请求网址，<a href="http://xn--www-uc0ep96b.baidu.com" target="_blank" rel="noreferrer">例如www.baidu.com</a></li><li>服务端存储着公钥和私钥</li><li>服务器把 CA 数字证书（包含公钥）响应给客户端</li><li>客户端解析证书拿到公钥，生成随机的 KEY</li><li>客户端把解密后的 KEY 传递给服务端，使用随机码 KEY 对传输数据进行对称加密</li><li>服务端拿私钥解密随机码 KEY，使用随机码 KEY 对传输的数据进行对称加密</li><li>把对称加密后的内容传递给客户端，客户端使用之前生成的随机 KEY 进行解密数据</li></ol><h3 id="中间人攻击的过程" tabindex="-1">中间人攻击的过程 <a class="header-anchor" href="#中间人攻击的过程" aria-hidden="true">#</a></h3><ul><li>客户端请求被劫持，将所有的请求发送到中间人的服务器</li><li>中间人服务器返回自己的证书</li><li>客户端创建随机数，使用中间人证书中的公钥进行加密发送给中间人服务器，中间人使用私钥对随机数解密并构造对称加密，对之后传输的内容进行加密传输</li><li>中间人通过客户端的随机数对客户端的数据进行解密</li><li>中间人与服务端建立合法的 https 连接，和服务端之之间使用对称加密进行数据传输，拿到服务端的响应数据，并通过和服务器建立的对称加密的密钥进行解密</li><li>中间人再通过和客户端建立的对称加密对响应数据进行加密后传输给客户端</li><li>客户端通过与中间人建立的对称加密的密钥对数据进行解密</li></ul><p>简单来说，中间人攻击中，中间人首先伪装成服务端和客户端进行通信，然后又伪装成客户端和服务端进行通信，整个过程中，由于缺少了证书的验证过程，虽然使用了 https，但是传输的数据已经被监听，客户端却无法得知。</p><h3 id="怎么预防中间人攻击" tabindex="-1">怎么预防中间人攻击？ <a class="header-anchor" href="#怎么预防中间人攻击" aria-hidden="true">#</a></h3><p>使用正规厂商的证书，慎用免费的</p>',12),h=[r];function n(s,d,c,_,o,p){return i(),l("div",null,h)}const f=e(a,[["render",n]]);export{T as __pageData,f as default};
