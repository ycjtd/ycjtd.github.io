import{_ as e,c as l,o as t,a as o}from"./app.d0de5917.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/Safe/SQl注入.md"}'),i={name:"Interview/Safe/SQl注入.md"},c=o("<p>就是通过把<code>SQL</code>命令插入到<code>Web</code>表单递交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的 SQL 命令</p><ul><li><p>总的来说有以下几点</p><ul><li>永远不要信任用户的输入，要对用户的输入进行校验，可以通过正则表达式，或限制长度，对单引号和双<code>&quot;-&quot;</code>进行转换等</li><li>永远不要使用动态拼装 SQL，可以使用参数化的<code>SQL</code>或者直接使用存储过程进行数据查询存取</li><li>永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接</li><li>不要把机密信息明文存放，请加密或者<code>hash</code>掉密码和敏感的信息</li></ul></li><li><p>防护原理：</p><ul><li>使用参数化查询或预编译语句</li><li>使用 ORM 框架或查询构建器</li><li>对用户输入进行输入验证和过滤</li></ul></li></ul>",2),_=[c];function a(d,s,r,n,p,S){return t(),l("div",null,_)}const m=e(i,[["render",a]]);export{f as __pageData,m as default};
