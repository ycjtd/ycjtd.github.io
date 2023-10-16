import{_ as e,c as t,o,d as c}from"./app.78019af7.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/Safe/XSS.md"}'),i={name:"Interview/Safe/XSS.md"},s=c("<p><code>Xss(cross-site scripting)</code>攻击指的是攻击者往<code>Web</code>页面里插入恶意<code>html</code>标签或者<code>javascript</code>代码。比如：攻击者在论坛中放一个看似安全的链接，骗取用户点击后，窃取<code>cookie</code>中的用户私密信息；或者攻击者在论坛中加一个恶意表单，当用户提交表单的时候，却把信息传送到攻击者的服务器中，而不是用户原本以为的信任站点</p><ul><li><p>防护原理：</p><ul><li>对用户输入进行合适的转义和过滤</li><li>使用安全的模板引擎或自动转义函数</li><li>使用 HTTP 头部中的 Content Security Policy (CSP)</li></ul></li></ul>",2),_=[s];function a(r,d,n,l,p,S){return o(),t("div",null,_)}const m=e(i,[["render",a]]);export{f as __pageData,m as default};