import{_ as t,c as n,o as a,a as e}from"./app.a84b4934.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/工程化/文件指纹.md"}'),s={name:"Interview/工程化/文件指纹.md"},o=e("p",null,"文件指纹是打包后输出的文件名的后缀",-1),c=e("ul",null,[e("li",null,"Hash：和整个项目的构建相关，只要项目文件有修改，整个项目构建的 hash 值就会更改"),e("li",null,"Chunkhash：和 Webpack 打包的 chunk 有关，不同的 entry 会生出不同的 chunkhash"),e("li",null,"Contenthash：根据文件内容来定义 hash，文件内容不变，则 contenthash 不变")],-1),h=[o,c];function l(r,_,i,u,d,p){return a(),n("div",null,h)}const k=t(s,[["render",l]]);export{f as __pageData,k as default};
