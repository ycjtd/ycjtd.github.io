import{_ as e,c as o,o as c,d}from"./app.72c7cb6e.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/CSS/flex1.md"}'),l={name:"Interview/CSS/flex1.md"},i=d("<ul><li><p><code>flex</code> 实际上是 <code>flex-grow：1</code>、<code>flex-shrink：1</code> 和 <code>flex-basis：0%</code> 三个属性的缩写。</p></li><li><p><code>flex-grow</code>：定义项目的的放大比例；</p><ul><li>默认为<code>0</code>，如果存在剩余空间，元素也不会放大，设置为 1，代表会放大，等分剩余空间</li><li><code>flex-grow</code>为<code>n</code>的项目，占据的空间（放大的比例）是<code>flex-grow</code>为<code>1</code>的<code>n</code>倍</li></ul></li><li><p><code>flex-shrink</code>：定义项目的缩小比例；</p><ul><li>默认为<code>1</code>，即 如果空间不足，该元素将缩小；</li><li>所有项目的<code>flex-shrink</code>为<code>1</code>：当空间不足时，缩小的比例相同；</li><li><code>flex-shrink</code>为<code>0</code>：空间不足时，该项目不会缩小；</li><li><code>flex-shrink</code>为<code>n</code>的项目，空间不足时缩小的比例是<code>flex-shrink</code>为<code>1</code>的<code>n</code>倍。</li></ul></li><li><p><code>flex-basis</code>： 定义在分配多余空间之前，项目占据的主轴空间（<code>main size</code>），浏览器根据此属性计算主轴是否有多余空间</p><ul><li>默认值为<code>auto</code>，即 项目原本大小，设置为 0%之后，因为有 flex-grow 和 flex-shrink 的设置会自动放大或缩小。</li></ul></li></ul>",1),t=[i];function r(s,n,_,a,f,x){return c(),o("div",null,t)}const h=e(l,[["render",r]]);export{u as __pageData,h as default};
