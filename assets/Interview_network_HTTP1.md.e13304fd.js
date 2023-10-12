import{_ as e,c as T,o as t,d as p}from"./app.72c7cb6e.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"HTTP1.1","slug":"http1-1","link":"#http1-1","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]},{"level":3,"title":"性能","slug":"性能","link":"#性能","children":[]},{"level":3,"title":"如何优化","slug":"如何优化","link":"#如何优化","children":[]}]},{"level":2,"title":"HTTP2","slug":"http2","link":"#http2","children":[{"level":3,"title":"有什么优点","slug":"有什么优点","link":"#有什么优点","children":[]}]}],"relativePath":"Interview/network/HTTP1.md"}'),r={name:"Interview/network/HTTP1.md"},a=p('<h2 id="http1-1" tabindex="-1">HTTP1.1 <a class="header-anchor" href="#http1-1" aria-hidden="true">#</a></h2><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-hidden="true">#</a></h3><p>简单、灵活和好扩展、应用广泛和跨平台</p><p>简单：HTTP 的基本报文格式就是 header+body，头部信息也是 key-value 简单文本的形式，易于理解，学习和使用的门槛低</p><p>灵活和易于扩展：HTTP 协议中的各类请求方法、URL/URI、状态码、头字段每个组成要求都没有被固定死，允许开发人员自定义和扩展</p><h3 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-hidden="true">#</a></h3><p>无状态、明文传输、不安全：浏览器不会记录 HTTP 的状态，当要完成有关联性的操作时会麻烦，可以使用 cookie 解决；明文传输，内容很容易被窃取；</p><h3 id="性能" tabindex="-1">性能 <a class="header-anchor" href="#性能" aria-hidden="true">#</a></h3><p>基于 TCP/IP，使用请求-应答的通信模式</p><p>在 HTTP 1.0 中，每次发起一个请求，都要新建一次 TCP 链接，而且是串行请求，TCP 的连接和断开，增加了通信开销</p><p>HTTP1.0 为了解决这个问题，提出了长连接的方式，减少了 TCP 连接的重复建立和断开所造成的额外开销，减轻了服务器端的负载</p><p>持久连接就是只要任意一端没有明确提出断开连接，就会报错 TCP 连接状态</p><p>管道：在同一个 TCP 连接中，客户端发起多个请求，发出了第一个请求之后，不用等待返回结果，可以发第二个请求，但是服务器必须按照接收请求的顺序发送对这个管道化请求的响应，如果服务端在处理 A 请求耗时比较长，就会导致后续的请求的处理都会被堵塞，这就是**队头堵塞，**所以 HTTP1.1 管道解决了请求的队头阻塞，但是没有解决响应的队头阻塞\\</p><h3 id="如何优化" tabindex="-1">如何优化 <a class="header-anchor" href="#如何优化" aria-hidden="true">#</a></h3><p>主要从以下三个方面来进行考虑：</p><ol><li>尽量避免发送 HTTP 请求</li><li>在需要发送 HTTP 请求的时候，考虑如何减少 HTTP 请求数</li><li>减少服务器的 HTTP 响应的数据大小</li></ol><p><strong>避免发送 HTTP 请求</strong></p><p>对于一些具有重复性的 HTTP 请求，如果每次请求到的数据都是一样的，就可以把这对请求响应的数据缓存在本地，下次读取数据的时候，就可以直接在本地读取数据，不必再通过网络获取请求</p><p>主要是通过缓存技术实现，为了避免客户端获取到的数据不是最新的数据，服务端在返回数据的时候，会在响应头中放一个过期时间，当客户端发起请求的时候，首先会查看响应头的信息，如果发现缓存的响应是过期的，就会重新发起网络请求。</p><p><strong>减少 HTTP 请求数</strong></p><p>重定向请求：</p><p>当服务器上的资源从 url1 迁移至 url2 之后，客户端不知道，继续请求 url1，这个时候服务器就会提高 302 状态码和 Location 头部，通知客户端这个资源已经迁移到 url2，所以客户端需要再发送 url2 请求获取资源，如果重定向的请求多，客户端每次都要发起 HTTP 请求，就会降低网络的性能，可以将重定向的工作交给代理服务器，就能减少 HTTP 请求数</p><p>合并请求：</p><p>就是把多个访问小文件的请求合并成一个大的请求，虽然传输的总资源是一样的，但是减少请求，就意味着减少了重复发送的 HTTP 头部，HTTP1.1 中是请求响应模型，默认不开启管道模式，所以也存在队头阻塞问题，如果合并了请求，就会减少 TCP 连接的数量，节省 TCP 握手和慢启动过程耗费的时间，常见的合并请求比如精灵图就是将请求多个小图片合并成请求成一张大的图片，减少 HTTP 请求的次数，减少网络开销</p><p>延迟发送请求：</p><p>一个 HTML 文件中会包含很多的 HTTP 请求，如果是当前页面不需要的资源，没必要一次性全部获取，可以通过按需获取的方式，减少第一时间的 HTTP 请求数。比如请求网页的时候，就没有必要把全部的资源获取到，只获取当前用户能看到的页面资源，当用户向下滑动页面的时候，再去请求服务器获取相应的资源，达到延迟发送请求的效果。</p><p><strong>减少 HTTP 响应的数据大小</strong></p><p>一般来说，HTTP 的响应数据要比请求大，所以可以考虑对响应的资源进行压缩，减少响应的数据大小，提高网络传输的效率</p><p>无损压缩：</p><p>无损压缩是指源码经过压缩后，信息不被破坏，还能恢复到压缩前的模样，适合用在文本文件，程序可执行文件、程序源代码。一般情况下，代码文件中会有很多换行符或空格，目的是为了更好的可读性，但是机器执行的时候不需要这些符合，所以可以把这些多余的字符去除。gzip 就是常见的无损压缩，客户端也支持，客户端会在请求中提高头部 Accept-Encoding 字段告知服务器支持的压缩算法，服务器从中选择一个服务器支持的合适的压缩算法，使用这个算法对代码进行压缩，通过响应头中的 Content-Encoding 字段告诉客户端当前资源使用的压缩算法。服务器应该选择压缩效率更高的 br 压缩算法</p><p>有损压缩：</p><p>经过有损压缩压缩之后的数据，解压之后和原始数据不同但是非常相近，有损压缩主要将次要的数据舍弃，通过牺牲一些质量来减少数据量，提高压缩比，常用于压缩多媒体数据，比如音视频、图片。可以通过 HTTP 请求头部中的 Accept 字段中的 q 质量因子，告诉服务器期望的资源质量。</p><p>压缩比较高的是 Webp 格式</p><h2 id="http2" tabindex="-1">HTTP2 <a class="header-anchor" href="#http2" aria-hidden="true">#</a></h2><h3 id="有什么优点" tabindex="-1">有什么优点 <a class="header-anchor" href="#有什么优点" aria-hidden="true">#</a></h3><p>HTTP2 的出现是为了解决 HTTP1.1 存在的问题，HTTP1.1 中存在以下问题：<strong>并发连接有限</strong>（比如谷歌浏览器的最大并发连接数是 6 个，而且每一个连接都要经过 TCP 和 TSL 握手的耗时）；<strong>队头阻塞问题</strong>（同一个连接只能在完成一个 HTTP 请求和响应之后，才能处理下一个请求）；<strong>HTTP 头部巨大而且重复</strong>（因为 HTTP 协议是无状态的，每一个请求都得携带 HTTP 头部，特别是对于携带 Cookie 的头部）；<strong>不支持服务器推送消息</strong>（当客户端需要获取通知的时候，只能通过定时器不断的拉取信息）</p><p>针对以上问题，HTTP2 做了以下优化：</p><p><strong>头部压缩</strong></p><p>HTTP1.1 中，可以通过指定 Content-Encoding 字段来对 Body 来进行压缩，但是针对 header 部分，没有优化手段，因为 header 中有很大固定的字段，比如 Cookie、Accept 等，这些字段加起来高达几百甚至几千字节，所以有必要进行压缩，而且很大请求和响应的报文中有很多字段都是重复的，所以有必要避免重复性；而且字段是 ASCII 编码，可读性较好但是效率低，所以有必要改成二进制编码</p><p>所以 HTTP2 开发了 HPACK 算法来压缩头部，主要由静态字典、动态字典和 Huffman 编码组成，核心就是客户端和服务端都会建立和维护字典，用长度较小的索引号来表示重复的字符串，再用 huffman 编码来压缩数据，最高能达到 50-90 的高压缩率</p><p><strong>二进制帧</strong></p><p>HTTP2 将 HTTP1 的文本格式改成二进制帧格式传输数据，极大的提高了 HTTP 传输的效率</p><p>H2 将响应报文划分成了两类帧，HEADERS 首部和 DATA 消息负载，就是说一条 HTTP 响应，划分成了两类帧来传输，采用二进制编码。</p><p><strong>并发传输</strong></p><p>HTTP1.1 是基于请求-响应模型实现的，在同一个连接中，HTTP 完成一个请求-响应，才能处理下一个，也就是说在发出请求等待响应的过程中，是没办法做其它事情的，如果响应迟迟不来，后续的请求是无法发送的，这就造成了队头阻塞的问题，HTTP2 通过使用多个 Stream 复用一条 TCP 连接，达到并发的效果。</p><ul><li><p>1 个 TCP 连接包含一个或者多个 Stream，Stream 是 HTTP/2 并发的关键技术；</p></li><li><p>Stream 里可以包含 1 个或多个 Message，Message 对应 HTTP/1 中的请求或响应，由 HTTP 头部和包体构成；</p></li><li><p>Message 里包含一条或者多个 Frame，Frame 是 HTTP/2 最小单位，以二进制压缩格式存放 HTTP/1 中的内容（头部和包体）；</p></li></ul><p>多个 Stream 跑在一条 TCP 连接，同一个 HTTP 请求与响应是跑在同一个 Stream 中，HTTP 消息可以由多个 Frame 构成， 一个 Frame 可以由多个 TCP 报文构成。</p><p>当 HTTP/2 实现 100 个并发 Stream 时，只需要建立一次 TCP 连接，而 HTTP/1.1 需要建立 100 个 TCP 连接，每个 TCP 连接都要经过 TCP 握手、慢启动以及 TLS 握手过程，这些都是很耗时的。</p><p><strong>服务器主动推送资源</strong></p><p>客户端发起的请求，必须使用的是奇数号 Stream，服务器主动的推送，使用的是偶数号 Stream。服务器在推送资源时，会通过 <code>PUSH_PROMISE</code> 帧传输 HTTP 头部，并通过帧中的 <code>Promised Stream ID</code> 字段告知客户端，接下来会在哪个偶数号 Stream 中发送包体。</p>',50),n=[a];function i(P,l,o,s,d,h){return t(),T("div",null,n)}const g=e(r,[["render",i]]);export{c as __pageData,g as default};