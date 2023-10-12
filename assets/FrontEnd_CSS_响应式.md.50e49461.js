import{_ as t,c as r,o,d as n}from"./app.72c7cb6e.js";const h=JSON.parse('{"title":"移动端响应式","description":"","frontmatter":{},"headers":[{"level":2,"title":"响应式布局常用方法","slug":"响应式布局常用方法","link":"#响应式布局常用方法","children":[]}],"relativePath":"FrontEnd/CSS/响应式.md"}'),i={name:"FrontEnd/CSS/响应式.md"},p=n('<h1 id="移动端响应式" tabindex="-1">移动端响应式 <a class="header-anchor" href="#移动端响应式" aria-hidden="true">#</a></h1><p><strong>什么是响应式？</strong></p><p>响应式就是将界面设计成能够适应不同的设备。&quot;如果将屏幕看成是容器，那么内容就像水一样&quot;</p><p><strong>为什么要设计响应式？</strong></p><p>首先，电脑、笔记本、手机、平板等智能设备在不断增加，其次，就算是都使用的 PC 端，用户是否将浏览器全屏也是个问题，不同屏幕分辨率也不同，同一张图片在不同的设备上，大小可能天差地别。</p><p><strong>响应式界面的标准是什么？</strong></p><ul><li>同一页面在不同大小和比例上看起来都应该是舒适的</li><li>同一页面在不同分辨率上看起来应该合理</li><li>同一页面在不同操作方式下，体验应该是统一的</li><li>同一页面在不同类型的设备上，交互方式应该是符合习惯的</li></ul><h2 id="响应式布局常用方法" tabindex="-1">响应式布局常用方法 <a class="header-anchor" href="#响应式布局常用方法" aria-hidden="true">#</a></h2><ul><li><p><strong>使用 vm 定制 rem 自适应布局</strong></p><p>移动端使用 rem 布局需要通过 JS 设置不同屏幕宽高比的 font-size，结合 vm 单位和 calc()可以脱离 JS 的控制 适用于 rem 布局</p></li><li><p><strong>使用:nth-child()选择指定元素</strong></p><p>通过:nth-child()筛选指定的元素设置样式，适用于表格着色、边界元素排版</p></li><li><p><strong>使用 writing-mode 排版竖文</strong></p><p>通过 writing-mode 调整文本排版方向，适用于竖行文字、文言文、诗词</p></li><li><p><strong>使用 text-align-last 对齐两端文本</strong></p><p>设置文本两端对齐，适用于未知字数中文对齐</p></li><li><p><strong>使用：not()去除无用属性</strong></p><p>排除指定元素不使用样式，适用于符号分割文字，边界元素排版</p></li><li><p><strong>使用 object-fit 规定图像尺寸</strong></p><p>通过 object-fit 使图像脱离 background-size 的约束，使用 img 来标记图像背景尺寸，适用于图片尺寸自适应</p></li><li><p><strong>使用 overflow-x 排版横向列表</strong></p><p>通过 flexbox 或 inline-block 的形式横行排列元素，对父元素设置 overflow-x:auto 横行滚动查看，适用于横行滚动列表，元素过多但位置有限的导航栏</p></li><li><p><strong>使用 text-overflow 控制文本溢出</strong></p><p>适用于单行文字、多行文字溢出</p></li><li><p><strong>使用 transform 描绘 1px 边框</strong></p><p>适用于容器 1px 边框</p></li><li><p><strong>使用 transform 翻转内容</strong></p><p>通过 transform：scale3d 对内容进行翻转，适用于内容翻转</p></li><li><p><strong>使用 letter-spacing 排版倒序文本</strong></p><p>设置负值字体间距将文本倒序，适用于文言文、诗词</p></li><li><p><strong>使用 margin-left 排版左重右轻列表</strong></p><p>使用 flexbox 横行布局时，最后一个元素通过设置 margin-left：auto 实现向右对齐，适用于右侧带图标的导航栏</p></li></ul>',9),e=[p];function l(s,a,g,c,d,_){return o(),r("div",null,e)}const m=t(i,[["render",l]]);export{h as __pageData,m as default};
