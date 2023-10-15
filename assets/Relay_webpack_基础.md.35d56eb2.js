import{_ as s,c as a,o as n,d as l}from"./app.ba5af232.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"手动配置 webpack","slug":"手动配置-webpack","link":"#手动配置-webpack","children":[]},{"level":2,"title":"插件","slug":"插件","link":"#插件","children":[{"level":3,"title":"HtmlWebpackPlugin","slug":"htmlwebpackplugin","link":"#htmlwebpackplugin","children":[]},{"level":3,"title":"mini-css-extract-plugin","slug":"mini-css-extract-plugin","link":"#mini-css-extract-plugin","children":[]},{"level":3,"title":"optimize-css-assets-webpack-plugin","slug":"optimize-css-assets-webpack-plugin","link":"#optimize-css-assets-webpack-plugin","children":[]},{"level":3,"title":"uglifyjs-webpack-plugin","slug":"uglifyjs-webpack-plugin","link":"#uglifyjs-webpack-plugin","children":[]}]},{"level":2,"title":"Loader","slug":"loader","link":"#loader","children":[{"level":3,"title":"css-loader","slug":"css-loader","link":"#css-loader","children":[]},{"level":3,"title":"style-loader","slug":"style-loader","link":"#style-loader","children":[]},{"level":3,"title":"less-loader","slug":"less-loader","link":"#less-loader","children":[]},{"level":3,"title":"postcss-loader","slug":"postcss-loader","link":"#postcss-loader","children":[]},{"level":3,"title":"babel-loader @babel/core @babel/preset-env","slug":"babel-loader-babel-core-babel-preset-env","link":"#babel-loader-babel-core-babel-preset-env","children":[]},{"level":3,"title":"url-loader","slug":"url-loader","link":"#url-loader","children":[]}]}],"relativePath":"Relay/webpack/基础.md"}'),p={name:"Relay/webpack/基础.md"},e=l(`<p><strong>搭建环境</strong></p><p>初始化 node 环境 <code>yarn init -y</code> 安装 webpack <code>yarn add webpack webpack-cli -D</code> -D 表示开发依赖</p><h3 id="手动配置-webpack" tabindex="-1">手动配置 webpack <a class="header-anchor" href="#手动配置-webpack" aria-hidden="true">#</a></h3><p>默认配置名为 webpack.config.js</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7B7F8B;">// webpack是node写出来的</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> path </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">require</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">path</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#97E1F1;font-style:italic;">module</span><span style="color:#F6F6F4;">.</span><span style="color:#97E1F1;font-style:italic;">exports</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  mode</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">development</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#7B7F8B;">// 模式 默认两种  production development</span></span>
<span class="line"><span style="color:#F6F6F4;">  entry</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">./src/index.js</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#7B7F8B;">// 入口</span></span>
<span class="line"><span style="color:#F6F6F4;">  output</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 出口</span></span>
<span class="line"><span style="color:#F6F6F4;">    filename</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">bundle.js</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#7B7F8B;">// 打包后的文件名</span></span>
<span class="line"><span style="color:#F6F6F4;">    path</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> path.</span><span style="color:#62E884;">resolve</span><span style="color:#F6F6F4;">(__dirname, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">dist</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">), </span><span style="color:#7B7F8B;">// 路径必须是一个绝对路径</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// webpack是node写出来的</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  mode: </span><span style="color:#032F62;">&quot;development&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 模式 默认两种  production development</span></span>
<span class="line"><span style="color:#24292E;">  entry: </span><span style="color:#032F62;">&quot;./src/index.js&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 入口</span></span>
<span class="line"><span style="color:#24292E;">  output: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 出口</span></span>
<span class="line"><span style="color:#24292E;">    filename: </span><span style="color:#032F62;">&quot;bundle.js&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 打包后的文件名</span></span>
<span class="line"><span style="color:#24292E;">    path: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;dist&quot;</span><span style="color:#24292E;">), </span><span style="color:#6A737D;">// 路径必须是一个绝对路径</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-hidden="true">#</a></h2><h3 id="htmlwebpackplugin" tabindex="-1">HtmlWebpackPlugin <a class="header-anchor" href="#htmlwebpackplugin" aria-hidden="true">#</a></h3><p>在 webpack 构建过程中自动生成 HTML 文件，并自动引入 Webpack 生成的 JS 和 CSS 文件</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">HtmlWebpackPlugin</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">  title</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Webpack</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#7B7F8B;">// HTML页面的标题</span></span>
<span class="line"><span style="color:#F6F6F4;">  template</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">./src/index.html</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#7B7F8B;">// 使用自定义模板，可选</span></span>
<span class="line"><span style="color:#F6F6F4;">  filename</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">index.html</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">});</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HtmlWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  title: </span><span style="color:#032F62;">&quot;Webpack&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// HTML页面的标题</span></span>
<span class="line"><span style="color:#24292E;">  template: </span><span style="color:#032F62;">&quot;./src/index.html&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用自定义模板，可选</span></span>
<span class="line"><span style="color:#24292E;">  filename: </span><span style="color:#032F62;">&quot;index.html&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span></code></pre></div><h3 id="mini-css-extract-plugin" tabindex="-1">mini-css-extract-plugin <a class="header-anchor" href="#mini-css-extract-plugin" aria-hidden="true">#</a></h3><p>将 css 样式文件从 JavaScript 文件中分离出来并且单独打包</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">MiniCssExtractPlugin</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">   filename</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">main.css</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">}),</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MiniCssExtractPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">   filename: </span><span style="color:#032F62;">&quot;main.css&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}),</span></span>
<span class="line"></span></code></pre></div><p>在配置 css-loader 的时候</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#7B7F8B;">// 处理css文件</span></span>
<span class="line"><span style="color:#F6F6F4;">   test:</span><span style="color:#E7EE98;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;">\\.css</span><span style="color:#F286C4;">$</span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">   use: [MiniCssExtractPlugin.loader, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">css-loader</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">],</span></span>
<span class="line"><span style="color:#F6F6F4;"> },</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// 处理css文件</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">: [MiniCssExtractPlugin.loader, </span><span style="color:#032F62;">&quot;css-loader&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;"> },</span></span>
<span class="line"></span></code></pre></div><h3 id="optimize-css-assets-webpack-plugin" tabindex="-1">optimize-css-assets-webpack-plugin <a class="header-anchor" href="#optimize-css-assets-webpack-plugin" aria-hidden="true">#</a></h3><p>优化压缩 css 资源</p><h3 id="uglifyjs-webpack-plugin" tabindex="-1">uglifyjs-webpack-plugin <a class="header-anchor" href="#uglifyjs-webpack-plugin" aria-hidden="true">#</a></h3><p>压缩 js 文件</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F6F6F4;"> optimization: {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//优化项</span></span>
<span class="line"><span style="color:#F6F6F4;">    minimizer: [</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">UglifyJsPlugin</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">        cache</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        parallel</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      }),</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">OptimizeCssAssetsWebpackPlugin</span><span style="color:#F6F6F4;">(),</span></span>
<span class="line"><span style="color:#F6F6F4;">    ],</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">optimization</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//优化项</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">minimizer</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UglifyJsPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        cache: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        parallel: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      }),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">OptimizeCssAssetsWebpackPlugin</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span></code></pre></div><h2 id="loader" tabindex="-1">Loader <a class="header-anchor" href="#loader" aria-hidden="true">#</a></h2><p>webpack 只能理解 JavaScript 文件，loader 的作用就是将非 JavaScript 文件转换成 webpack 可以理解的模块</p><p>特点：</p><ul><li>功能单一</li><li>执行顺序：默认从右向左，从下到上</li></ul><h3 id="css-loader" tabindex="-1">css-loader <a class="header-anchor" href="#css-loader" aria-hidden="true">#</a></h3><p>解析 @import 这种语法的</p><h3 id="style-loader" tabindex="-1">style-loader <a class="header-anchor" href="#style-loader" aria-hidden="true">#</a></h3><p>把 css 插入到 head 的标签中</p><h3 id="less-loader" tabindex="-1">less-loader <a class="header-anchor" href="#less-loader" aria-hidden="true">#</a></h3><p>将 less 文件转换成 css 文件</p><h3 id="postcss-loader" tabindex="-1">postcss-loader <a class="header-anchor" href="#postcss-loader" aria-hidden="true">#</a></h3><p>自动添加前缀</p><h3 id="babel-loader-babel-core-babel-preset-env" tabindex="-1">babel-loader @babel/core @babel/preset-env <a class="header-anchor" href="#babel-loader-babel-core-babel-preset-env" aria-hidden="true">#</a></h3><p>将 ES6 转化成 ES5</p><h3 id="url-loader" tabindex="-1">url-loader <a class="header-anchor" href="#url-loader" aria-hidden="true">#</a></h3><p>处理图片</p><p>如果想要实现打包文件分类，添加</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F6F6F4;">options: {</span></span>
<span class="line"><span style="color:#F6F6F4;">  outputPath: </span><span style="color:#DEE492;">&quot;&quot;</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">options</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">outputPath</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div>`,37),o=[e];function t(c,r,i,y,F,d){return n(),a("div",null,o)}const h=s(p,[["render",t]]);export{E as __pageData,h as default};
