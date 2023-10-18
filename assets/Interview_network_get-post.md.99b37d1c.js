import{_ as e,c as o,o as s,b as t}from"./app.d0de5917.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/network/get-post.md"}'),n={name:"Interview/network/get-post.md"},r=t("ol",null,[t("li",null,"get 是从服务器获取指定的资源；post 是根据请求报文对指定的资源做出处理"),t("li",null,"get 请求的参数一般放在 URL 中，浏览器对 URL 的长度有限制；post 请求携带的参数一般是写在 body 报文中，没有限制"),t("li",null,"get 请求是安全且幂等的，无论操作多少次，服务器上的数据都是安全的，每次的结果都是相同的，浏览器会对 get 请求进行缓存；post 请求会修改服务器上的资源，是不安全的，多次提交会创建多个资源，不是幂等的，浏览器一般不会缓存 post 请求")],-1),a=[r];function l(c,p,i,_,d,u){return s(),o("div",null,a)}const f=e(n,[["render",l]]);export{m as __pageData,f as default};
