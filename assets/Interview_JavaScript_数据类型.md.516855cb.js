import{_ as l,c as a,o as e,d as s}from"./app.eeaca755.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"JavaScript 是什么语言？","slug":"javascript-是什么语言","link":"#javascript-是什么语言","children":[]},{"level":3,"title":"JS 都有什么数据类型","slug":"js-都有什么数据类型","link":"#js-都有什么数据类型","children":[]},{"level":3,"title":"为什么要新增 symbol？","slug":"为什么要新增-symbol","link":"#为什么要新增-symbol","children":[]},{"level":3,"title":"如果想要复用一个 Symbol，该怎么操作？","slug":"如果想要复用一个-symbol-该怎么操作","link":"#如果想要复用一个-symbol-该怎么操作","children":[]},{"level":3,"title":"为什么要新增 BigInt？作用是什么？","slug":"为什么要新增-bigint-作用是什么","link":"#为什么要新增-bigint-作用是什么","children":[]},{"level":3,"title":"null 和 undefined 的区别","slug":"null-和-undefined-的区别","link":"#null-和-undefined-的区别","children":[]},{"level":3,"title":"null 是对象吗？为什么","slug":"null-是对象吗-为什么","link":"#null-是对象吗-为什么","children":[]},{"level":3,"title":"JavaScript 数据如何存储","slug":"javascript-数据如何存储","link":"#javascript-数据如何存储","children":[]},{"level":3,"title":"判断数据类型的方法","slug":"判断数据类型的方法","link":"#判断数据类型的方法","children":[]},{"level":3,"title":"怎么判断一个数组","slug":"怎么判断一个数组","link":"#怎么判断一个数组","children":[]},{"level":3,"title":"如何判断一个对象是否为空","slug":"如何判断一个对象是否为空","link":"#如何判断一个对象是否为空","children":[]},{"level":3,"title":"为什么没 0.1+0.2 !=0.3 ？ 怎么解决","slug":"为什么没-0-1-0-2-0-3-怎么解决","link":"#为什么没-0-1-0-2-0-3-怎么解决","children":[]},{"level":3,"title":"isNaN 和 Number.isNaN 函数的区别","slug":"isnan-和-number-isnan-函数的区别","link":"#isnan-和-number-isnan-函数的区别","children":[]},{"level":3,"title":"Object.is 和 === == 的区别","slug":"object-is-和-的区别","link":"#object-is-和-的区别","children":[]},{"level":3,"title":"[] == ![] 为什么","slug":"为什么","link":"#为什么","children":[]},{"level":3,"title":"如何让if(a==1 && a==2)成立？","slug":"如何让if-a-1-a-2-成立","link":"#如何让if-a-1-a-2-成立","children":[]},{"level":3,"title":"[\\"1\\", \\"2\\", \\"3\\"].map(parseInt) 答案是多少","slug":"_1-2-3-map-parseint-答案是多少","link":"#_1-2-3-map-parseint-答案是多少","children":[]},{"level":3,"title":"Set、WeakSet、Map、WeakMap 的区别","slug":"set、weakset、map、weakmap-的区别","link":"#set、weakset、map、weakmap-的区别","children":[]}],"relativePath":"Interview/JavaScript/数据类型.md"}'),n={name:"Interview/JavaScript/数据类型.md"},i=s(`<h3 id="javascript-是什么语言" tabindex="-1">JavaScript 是什么语言？ <a class="header-anchor" href="#javascript-是什么语言" aria-hidden="true">#</a></h3><p>JavaScript 是一种弱类型（可以发生隐式类型转换）、动态的语言</p><ul><li><p>动态语言：在运行过程中需要检查数据类型的语言</p></li><li><p>静态语言：在使用之前就需要确认其变量数据类型的语言</p></li></ul><h3 id="js-都有什么数据类型" tabindex="-1">JS 都有什么数据类型 <a class="header-anchor" href="#js-都有什么数据类型" aria-hidden="true">#</a></h3><p>基本数据类型：string、number、boolean、null、undefined、symbol（ES6 新增）、bigint（ES10 新增）</p><p>引用数据类型：object （普通对象-object、函数-function、数组-array、数学函数-Math、正则对象-RegExp、日期对象-Date）</p><h3 id="为什么要新增-symbol" tabindex="-1">为什么要新增 symbol？ <a class="header-anchor" href="#为什么要新增-symbol" aria-hidden="true">#</a></h3><p>主要是为了解决全局变量冲突的问题，比如定义了一个全局对象，用来缓存数据，现在有两个 js 文件需要往这个对象中添加键名，由于 js 文件在不同模块，所以可能添加相同的键名，就会出现冲突的问题，所以 Symbol 数据类型的主要作用就是为对象添加独一无二的属性名</p><h3 id="如果想要复用一个-symbol-该怎么操作" tabindex="-1">如果想要复用一个 Symbol，该怎么操作？ <a class="header-anchor" href="#如果想要复用一个-symbol-该怎么操作" aria-hidden="true">#</a></h3><p>使用<code>Symbol.for(&#39;字符串&#39;)</code>，传入相同的字符串，一定会返回相同的 symbol 类型的值</p><p>使用 symbol 值作为对象的属性名，通过 for in、Object.keys 都是获取不到的，所以 Symbol 类型的属性也适合作为对象的私有属性</p><h3 id="为什么要新增-bigint-作用是什么" tabindex="-1">为什么要新增 BigInt？作用是什么？ <a class="header-anchor" href="#为什么要新增-bigint-作用是什么" aria-hidden="true">#</a></h3><p>支持比 Number 数据类型支持的范围更大的整数值</p><p>创建 bigint，只需要在数字末尾追加 n 或者使用 BigInt()构造函数来创建</p><h3 id="null-和-undefined-的区别" tabindex="-1">null 和 undefined 的区别 <a class="header-anchor" href="#null-和-undefined-的区别" aria-hidden="true">#</a></h3><ul><li><p>null</p><p>空值 语义是表示一个对象被认为的重置为空对象，不是一个变量最原始的状态，使用场景</p><ul><li>明确定义的变量在将来是用于保存对象的，就应该将这个变量初始化为 null，有助于区分 null 和 undefined</li><li>当一个数据不再需要使用时，通过将其设置为 null 来解除引用</li></ul></li><li><p>undefined</p><p>字面意思就是 未定义的值 语义是表示一个变量最原始的状态，而不是人为操作的结果</p><ul><li>声明一个变量，但是没有赋值</li><li>访问对象上不存在的属性或者没有定义的变量</li><li>函数定义了形参，但是调用的时候，没有传递实参</li><li>使用 void 对表达式求值</li></ul></li></ul><h3 id="null-是对象吗-为什么" tabindex="-1">null 是对象吗？为什么 <a class="header-anchor" href="#null-是对象吗-为什么" aria-hidden="true">#</a></h3><p><code>typeof null == &#39;object&#39;</code></p><p>从逻辑上来看，null 值表示一个空对象指针，代表的其实就是一个空对象</p><p>在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表对象，但是 null 表示为全零，所以误判为对象</p><h3 id="javascript-数据如何存储" tabindex="-1">JavaScript 数据如何存储 <a class="header-anchor" href="#javascript-数据如何存储" aria-hidden="true">#</a></h3><p>基本数据类型用栈存储，栈内存的特点的分配固定大小的内存空间，可以快速分配和释放，而基本数据类型的值是不可变的，所以可以存储在栈中，可以直接访问和复制</p><p>引用数据类型用堆存储，堆内存是动态分配，可以容纳各种大小的数据</p><p>对于复制操作，原始类型的数据直接完整地复制变量值，对象数据类型的数据则是复制引用地址</p><h3 id="判断数据类型的方法" tabindex="-1">判断数据类型的方法 <a class="header-anchor" href="#判断数据类型的方法" aria-hidden="true">#</a></h3><ul><li>typeof：可以判断除了 null 之外的原始数据类型，判断 null 为 object，对于引用类型，会判断为 function 和 object 两种类型 直接在计算机底层基于数据类型的二进制值进行检测</li></ul><p>typeof 普通对象/数组对象/正则对象/日期对象 都是 object</p><p>typeof NaN === &#39;number&#39;</p><ul><li><p>instanceof：可以判断引用类型</p><ul><li>检测当前实例是否是属于这个类的</li><li>底层机制：只要当前类出现在实例的原型上，结果都是 true 基于原型链和构造函数</li><li>但是不能检测基本数据类型</li></ul></li><li><p>Object.prototype.toString.call</p></li><li><p>constructor</p><ul><li>支持基本数据类型</li></ul></li></ul><h3 id="怎么判断一个数组" tabindex="-1">怎么判断一个数组 <a class="header-anchor" href="#怎么判断一个数组" aria-hidden="true">#</a></h3><ol><li><code>instanceof</code>方法：使用<code>instanceof</code>运算符判断对象是否为数组，返回布尔值。例如：<code>arr instanceof Array</code>。</li><li><code>constructor</code>方法：使用<code>constructor</code>属性返回对象的构造函数，并判断该构造函数是否为数组构造函数。例如：<code>arr.constructor == Array</code>。</li><li>使用<code>Object.prototype.toString.call()</code>方法：利用<code>Object.prototype.toString.call(value)</code>方法，将要判断的变量作为参数传入，并判断返回的字符串是否为<code>&quot;[object Array]&quot;</code>。例如：<code>Object.prototype.toString.call(arr) == &#39;[object Array]&#39;</code>。</li><li><code>ES5</code>新增的<code>isArray()</code>方法：使用<code>Array.isArray()</code>方法判断一个值是否为数组，返回布尔值。例如：<code>Array.isArray(arr)</code>。</li></ol><h3 id="如何判断一个对象是否为空" tabindex="-1">如何判断一个对象是否为空 <a class="header-anchor" href="#如何判断一个对象是否为空" aria-hidden="true">#</a></h3><ul><li>Object.keys() <code>Object.keys(obj).length === 0</code></li><li>for in 循环，<code>if (obj.hasOwnProperty(key)) {return false}</code></li><li>JSON.stringfy() 然后判断是否等于 {}</li></ul><h3 id="为什么没-0-1-0-2-0-3-怎么解决" tabindex="-1">为什么没 0.1+0.2 !=0.3 ？ 怎么解决 <a class="header-anchor" href="#为什么没-0-1-0-2-0-3-怎么解决" aria-hidden="true">#</a></h3><p><strong>原因：</strong></p><ul><li>当计算机计算 0.1+0.2 的时候，实际上计算的是这两个数字在计算机里所存储的二进制，0.1 和 0.2 在转换为二进制表示的时候会出现位数无限循环的情况。js 中是以 64 位双精度格式来存储数字的，只有 53 位的有效数字，超过这个长度的位数会被截取掉这样就造成了精度丢失的问题。</li></ul><p><strong>解决：</strong></p><ul><li>将其转换为整数之后再进行运算，运算之后再转换为小数</li><li>使用 toFixed(1)，控制小数点后的位数，将结果四舍五入到指定的精度</li><li>将相加的结果和右边相减，如果相减的结果小于一个极小数，就可以认定结果是相等的</li></ul><h3 id="isnan-和-number-isnan-函数的区别" tabindex="-1">isNaN 和 Number.isNaN 函数的区别 <a class="header-anchor" href="#isnan-和-number-isnan-函数的区别" aria-hidden="true">#</a></h3><p><strong>isNaN</strong></p><p>接收参数后,会尝试将这个参数转换成数值,任何不能被转换成数值的值都会返回 true,因此非数字值传入也会返回 true,会影响 NaN 的判断</p><p><strong>Number.isNaN</strong></p><p>会首先判断传入参数是否为数字,如果是数字再继续判断是否为 NaN,不会进行数据类型的转换,这种方法对于判断 NaN 更准确</p><h3 id="object-is-和-的区别" tabindex="-1"><a href="http://Object.is" target="_blank" rel="noreferrer">Object.is</a> 和 === == 的区别 <a class="header-anchor" href="#object-is-和-的区别" aria-hidden="true">#</a></h3><p>== 两边类型不一致,会进行强制类型转换再进行比较</p><p>=== 如果两边的类型不一致,不会做强制类型转换,直接返回 false</p><p><a href="http://Object.is" target="_blank" rel="noreferrer">Object.is</a> 一般情况下和===相同,处理了一些特殊的情况 比如-0 !== +0 NaN === NaN</p><h3 id="为什么" tabindex="-1">[] == ![] 为什么 <a class="header-anchor" href="#为什么" aria-hidden="true">#</a></h3><p>隐式类型转换</p><p>转换过程：</p><ul><li>[]转换成数字 0</li><li>！[]首先转换成布尔值 false，再转换成数字为 0</li></ul><h3 id="如何让if-a-1-a-2-成立" tabindex="-1">如何让<code>if(a==1 &amp;&amp; a==2)</code>成立？ <a class="header-anchor" href="#如何让if-a-1-a-2-成立" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> a </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  value</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">valueOf</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> () {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.value</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.value;</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  value: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">valueOf</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.value</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.value;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span></code></pre></div><h3 id="_1-2-3-map-parseint-答案是多少" tabindex="-1">[&quot;1&quot;, &quot;2&quot;, &quot;3&quot;].map(parseInt) 答案是多少 <a class="header-anchor" href="#_1-2-3-map-parseint-答案是多少" aria-hidden="true">#</a></h3><ul><li><code>答案 [1, NaN, NaN] ​</code></li><li>parseInt 第一个参数<code>str</code>，即要解析的字符串</li><li>parseInt 第二个参数<code>radix</code>，基数（进制），范围<code>2-36</code> ，以<code>radix</code>进制的规则去解析<code>str</code>字符串。不合法导致解析失败</li><li>parseInt(&#39;1&#39;, 0) radix 为 0 且第一个参数不以 0/0x 开头时，按照 10 为基数返回</li><li>parseInt(&#39;2&#39;, 1) 基数为 1（1 进制）表示的数中，最大值小于 2，无法解析，返回 NaN</li><li>parseInt(&#39;3&#39;, 2) 基数为 2（2 进制）表示的数中，最大值小于 3，无法解析，返回 NaN</li></ul><h3 id="set、weakset、map、weakmap-的区别" tabindex="-1">Set、WeakSet、Map、WeakMap 的区别 <a class="header-anchor" href="#set、weakset、map、weakmap-的区别" aria-hidden="true">#</a></h3><p>Set</p><ul><li>成员不能重复</li><li>只有健值，没有健名，有点类似数组。</li><li>可以遍历，方法有 add, delete,has</li></ul><p>WeakSet</p><ul><li>成员都是对象</li><li>成员都是弱引用，随时可以消失。 可以用来保存 DOM 节点，不容易造成内存泄漏</li><li>不能遍历，方法有 add, delete,has</li></ul><p>Map</p><ul><li>本质上是健值对的集合，类似集合</li><li>可以遍历，方法很多，可以跟各种数据格式转换</li></ul><p>weakMap</p><ul><li>接受对象作为健名（null 除外），不接受其他类型的值作为健名</li><li>健名所指向的对象，不计入垃圾回收机制</li><li>不能遍历，方法同 get,set,has,delete</li></ul>`,64),t=[i];function r(p,o,c,d,u,h){return e(),a("div",null,t)}const f=l(n,[["render",r]]);export{b as __pageData,f as default};
