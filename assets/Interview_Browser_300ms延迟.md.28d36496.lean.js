import{_ as s,c as t,o,b as e}from"./app.d0de5917.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/Browser/300ms延迟.md"}'),a={name:"Interview/Browser/300ms延迟.md"},c=e("p",null,"300ms 延迟解决的是双击缩放。双击缩放，手指在屏幕快速点击两次。safari 浏览器就会将网页缩放至原始比例。当用户点击屏幕一次之后，浏览器并不会判断用户确实要打开至这个链接，还是想要进行双击操作，所以 safair 浏览器会等待 300ms，用来判断是否再次点击了屏幕。",-1),n=e("p",null,"怎么解决？",-1),r=e("ol",null,[e("li",null,"禁止缩放，设置 meta 标签 user-scalable=no"),e("li",null,"fastclick.js 原理是检查到 touched 事件的时候，会通过 dom 自定义事件立即发出 click 事件，并把浏览器在 300ms 之后真正的 click 事件阻止掉。fastclick 还可以解决穿透问题")],-1),l=[c,n,r];function i(_,d,m,p,u,f){return o(),t("div",null,l)}const B=s(a,[["render",i]]);export{k as __pageData,B as default};
