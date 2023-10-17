import{_ as e,c as t,o as n,a as i}from"./app.58c7925b.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/CSS/使元素消失的方法.md"}'),l={name:"Interview/CSS/使元素消失的方法.md"},s=i("ol",null,[i("li",null,"display:none 把元素隐藏起来，使元素完全从渲染树中消失，不占据任何空间，会改变页面布局，可以理解为在页面中把该元素删掉 非继承属性，子孙节点消失是因为元素本身从渲染树中消失，修改子孙节点的属性无法使其显示， 会导致重排，读屏器不会读取 display：none 元素的内容"),i("li",null,"visibility:hidden 把元素隐藏起来，不会使元素从渲染树中消失，不会改变页面布局，不会触发该元素已经绑定的事件 继承属性，子孙节点消失是继承了 hidden 属性，可以通过设置 visibility：visibile 使子孙节点显示，只会导致重绘，读屏器会读取 visibility：hidden 元素的内容"),i("li",null,"opacity:0 把元素隐藏起来，不会改变页面布局，如果该元素绑定了事件会触发 非继承属性 重绘"),i("li",null,"content-visibility：移出文档流，但是再次显示时消耗性能低"),i("li",null,"z-index：负值，将层级放到底部，被覆盖，相当于隐藏了"),i("li",null,"transform：scale（0，0），将元素缩放为 0，依然占据空间，不可交互")],-1),a=[s];function o(r,_,c,d,p,u){return n(),t("div",null,a)}const f=e(l,[["render",o]]);export{v as __pageData,f as default};
