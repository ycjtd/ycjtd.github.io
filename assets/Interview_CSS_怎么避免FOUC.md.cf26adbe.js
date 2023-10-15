import{_ as t,c as l,o as n,a as e}from"./app.ba5af232.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/CSS/怎么避免FOUC.md"}'),o={name:"Interview/CSS/怎么避免FOUC.md"},s=e("p",null,"FOUC 指的是在页面加载过程中，由于外部样式表加载较慢或延迟，导致页面先以无样式的方式显示，然后突然闪烁出样式的现象",-1),a=e("p",null,"解决：",-1),r=e("ol",null,[e("li",null,"将样式表放在文档的 head 中：通过将样式表放在文档头部，确保浏览器在渲染页面内容之前先加载和解析样式表，从而避免了页面一开始的无样式状态"),e("li",null,"使用内联样式：关键样式直接写在 HTML 标签的 style 属性中，这样即使外部样式表加载延迟，页面仍然可以有基本的样式展示，避免出现完全无样式的情况"),e("li",null,'使用样式预加载：在 HTML 的 head 中使用 link ref="preload"，将样式提前预加载，确保在页面渲染之前样式表已经下载完毕'),e("li",null,"使用媒体查询避免不必要的样式加载：通过媒体查询在适当的条件下加载特定的样式，避免在不需要的情况下加载不必要的样式")],-1),_=[s,a,r];function c(i,d,p,u,h,f){return n(),l("div",null,_)}const O=t(o,[["render",c]]);export{C as __pageData,O as default};
