import{_ as e,c as a,o as t,d as r}from"./app.eeaca755.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"什么是热更新原理？","slug":"什么是热更新原理","link":"#什么是热更新原理","children":[]},{"level":3,"title":"原理","slug":"原理","link":"#原理","children":[]}],"relativePath":"Interview/工程化/热更新原理.md"}'),i={name:"Interview/工程化/热更新原理.md"},s=r('<h3 id="什么是热更新原理" tabindex="-1">什么是热更新原理？ <a class="header-anchor" href="#什么是热更新原理" aria-hidden="true">#</a></h3><p>开发过程中，代码发生变动后，webpack 会重新编译，编译后浏览器替换修改的模块，局部刷新，无需刷新整个页面</p><p>好处：节省开发时间，提升开发体验</p><h3 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-hidden="true">#</a></h3><p>主要是通过 webscoket 实现，建立本地服务器和浏览器的双向通信，当代码变化后，重新编译后，通知浏览器请求更新的模块，替换原有的模块</p><ol><li>通过 webpack-dev-server 开启 server 服务，本地 server 启动后，再去启动 webscoket 服务，建立本地服务和浏览器的双向通信</li><li>webpack 每次编译后，会生成一个 hash 值，Hash 代表每一次编译的标识，本次输出的 Hash 值会编译新生成的文件标识，被作为下次热更新的标识</li><li>webpack 监听文件变化，（主要是通过文件的生成时间判断是否有变化），当文件变化后，重新编译</li><li>编译结束后，通知浏览器请求变化的资源，同时将新生成的 hash 值传给浏览器，用于下次热更新使用</li><li>浏览器拿到更新后的模块后，用新模块替换掉旧的模块，实现局部刷新</li></ol>',6),l=[s];function _(c,n,o,d,h,p){return t(),a("div",null,l)}const f=e(i,[["render",_]]);export{v as __pageData,f as default};
