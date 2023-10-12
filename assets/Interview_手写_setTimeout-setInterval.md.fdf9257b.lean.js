import{_ as t,c as n,o as l,a as e}from"./app.eeaca755.js";const T=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/手写/setTimeout-setInterval.md"}'),a={name:"Interview/手写/setTimeout-setInterval.md"},r=e("p",null,"setTimeout 模拟实现 setInterval",-1),o=e("pre",null,[e("code",null,`\`\`\`js
function mySetInterval(callback, delay) {
  function interval() {
    callback(); // 首先执行回调函数
    timer = setTimeout(interval, delay); // 设置下一次执行interval函数，达到模拟循环
  }

  // 第一次interval函数，在delay后执行interval
  let timer = setTimeout(interval, delay);

  return {
    clear: function () { // 返回清除定时器的方法
      clearTimeout(timer);
    },
  };
}
\`\`\`
`)],-1),i=e("p",null,"setInterval 模拟实现 setTimeout",-1),c=e("pre",null,[e("code",null,`\`\`\`js
function mySetTimeout(callback, delay) {
  let timer = null;

  function timeout() {
    callback();  // 执行回调
    clearInterval(timer);// 清除定时器
  }

  timer = setInterval(timeout, delay);

  return {
    clear: function () {
      clearInterval(timer);
    },
  };
}
\`\`\`
`)],-1),s=[r,o,i,c];function u(m,d,_,v,p,f){return l(),n("div",null,s)}const h=t(a,[["render",u]]);export{T as __pageData,h as default};
