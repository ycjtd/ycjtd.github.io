import{_ as e,c as t,o as i,d as l}from"./app.eeaca755.js";const T=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/network/DNS.md"}'),r={name:"Interview/network/DNS.md"},_=l("<ul><li>检查浏览器中是否缓存过该域名对应的 IP 地址</li><li>如果浏览器缓存中没有命中，将继续查找本级（操作系统）是否缓存过该 IP</li><li>向本地域名解析服务系统发起域名解析的请求（一般是本地运营商的机房）</li><li>向根域名解析服务器发起域名解析服务请求</li><li>根域名服务器返回 gTLD 域名解析服务器地址</li><li>向 gTLD 服务器发起解析请求</li><li>gTLD 服务器接收请求并返回 Name Server 服务器（通常情况下就是你注册的域名服务器）</li><li>Name Server 服务器返回 IP 地址给本地服务器</li><li>本地服务器缓存解析结果</li><li>返回解析结果给用户</li></ul>",1),a=[_];function o(n,s,c,d,p,m){return i(),t("div",null,a)}const D=e(r,[["render",o]]);export{T as __pageData,D as default};
