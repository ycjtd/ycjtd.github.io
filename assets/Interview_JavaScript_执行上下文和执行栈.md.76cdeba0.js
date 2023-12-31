import{_ as e,c as i,o as a,d as l}from"./app.58c7925b.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"什么是执行上下文？","slug":"什么是执行上下文","link":"#什么是执行上下文","children":[]},{"level":3,"title":"执行上下文分类？","slug":"执行上下文分类","link":"#执行上下文分类","children":[]},{"level":3,"title":"执行上下文的特点","slug":"执行上下文的特点","link":"#执行上下文的特点","children":[]},{"level":3,"title":"什么是执行栈？","slug":"什么是执行栈","link":"#什么是执行栈","children":[]},{"level":3,"title":"执行上下文的生命周期？","slug":"执行上下文的生命周期","link":"#执行上下文的生命周期","children":[]},{"level":3,"title":"什么是变量对象？","slug":"什么是变量对象","link":"#什么是变量对象","children":[]}],"relativePath":"Interview/JavaScript/执行上下文和执行栈.md"}'),t={name:"Interview/JavaScript/执行上下文和执行栈.md"},r=l('<h3 id="什么是执行上下文" tabindex="-1">什么是执行上下文？ <a class="header-anchor" href="#什么是执行上下文" aria-hidden="true">#</a></h3><p>当前 JavaScript 代码被解析和执行所在环境的抽象概念</p><p>JavaScript 代码都是在执行上下文中运行的，执行上下文就是指当前环境中的变量、函数声明、作用域链、this 等信息</p><h3 id="执行上下文分类" tabindex="-1">执行上下文分类？ <a class="header-anchor" href="#执行上下文分类" aria-hidden="true">#</a></h3><ol><li>全局执行上下文：只有一个，浏览器环境下为 window</li><li>函数执行上下文：存在无数个，每当一个函数<strong>被调用</strong>时，都会为该函数创建一个新的上下文</li><li>eval 执行上下文：运行在 eval 函数中的代码</li></ol><p>对于每个执行上下文，都有变量对象、作用域链、this 这三个属性</p><h3 id="执行上下文的特点" tabindex="-1">执行上下文的特点 <a class="header-anchor" href="#执行上下文的特点" aria-hidden="true">#</a></h3><ol><li>单线程，只在主线程上运行</li><li>同步执行，从上向下按顺序执行</li><li>全局上下文只有一个，也就是 window 对象</li><li>函数每调用一次就会产生一个新的执行上下文环境</li></ol><h3 id="什么是执行栈" tabindex="-1">什么是执行栈？ <a class="header-anchor" href="#什么是执行栈" aria-hidden="true">#</a></h3><p>是一种<strong>先进后出</strong>的数据结构，用来存储代码运行的所有执行上下文</p><ol><li>当 JS 引擎第一次遇到 js 脚本时，会创建一个全局的执行上下文并压入当前执行栈</li><li>每当 JS 引擎调用一个函数的时候，会为该函数创建一个新的执行上下文并压入栈的顶部</li><li>当该函数执行结束，执行上下文从栈中弹出，控制流程到达当前栈中的下一个上下文中</li><li>一旦所有代码都执行完毕，JS 引擎从当前栈中移除全局执行上下文</li></ol><h3 id="执行上下文的生命周期" tabindex="-1">执行上下文的生命周期？ <a class="header-anchor" href="#执行上下文的生命周期" aria-hidden="true">#</a></h3><p>主要分为两个阶段：</p><p>1.创建阶段：在这个阶段生成变量对象，建立作用域链，确定 this 指向</p><p>2.执行阶段：对变量进行赋值，函数引用，执行其它代码</p><h3 id="什么是变量对象" tabindex="-1">什么是变量对象？ <a class="header-anchor" href="#什么是变量对象" aria-hidden="true">#</a></h3><p>变量对象是和执行上下文相关的数据作用域，存储了上下文中定义的变量和函数声明</p><p>是一个抽象的概念，在全局执行上下文中，变量对象就是全局对象，在顶层 js 代码中，this 指向全局对象，全局变量会作为该对象的属性来被查询，在浏览器中，window 就是全局对象。</p>',18),n=[r];function d(h,s,c,o,_,p){return a(),i("div",null,n)}const f=e(t,[["render",d]]);export{v as __pageData,f as default};
