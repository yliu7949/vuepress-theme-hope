if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-452119c2"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"api/index.html",revision:"d1457e247656f1ce5092a281485d3cef"},{url:"api/page.html",revision:"4b68701ff7a850d7d3a84382963da3db"},{url:"api/plugin/container.html",revision:"734f39681631ff684f4753b3f1c5d6ce"},{url:"api/plugin/copyright.html",revision:"414aeabc26c5690ce44499b70087d16f"},{url:"api/plugin/index.html",revision:"c48200bcc242e17973861027995809a4"},{url:"api/plugin/md-enhance.html",revision:"475e4c6f7162c0093d1f5b0494d82a60"},{url:"api/plugin/medium-zoom.html",revision:"522c14542261458d43cc8fc7e1d9ea3e"},{url:"api/plugin/pwa.html",revision:"989457a5a0b3fffd0fae415036545f75"},{url:"api/stylus.html",revision:"051816569b65758d0f166368d76d6a14"},{url:"api/themeConfig.html",revision:"f107e37bf35e01f2ce05c110be58724c"},{url:"article/index.html",revision:"5f0abcafe8da225ea76b08b5a94e8be3"},{url:"assets/css/0.styles.89b87368.css",revision:"5b05526fc960dbf637c755333a210bf9"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/101.9d3185a5.js",revision:"7a25b67b794d08972e4873c636b147ad"},{url:"assets/js/app.313a87b0.js",revision:"0029cf02a9aa94809da33b39d109a7f8"},{url:"assets/js/layout-BlogEntry.2a2bcacd.js",revision:"5737aa14df513472e2b2e8cfcaf8bbed"},{url:"assets/js/layout-BlogEntry~layout-Layout.ec974ff6.js",revision:"260460fd5925abfc271e34e575f18cac"},{url:"assets/js/layout-Layout.6e1d5619.js",revision:"93159a765c3067180acc314ab0e06aaa"},{url:"assets/js/layout-NotFound.707f3c26.js",revision:"a566e8a4744a9be35230efb3d9080329"},{url:"assets/js/page--1b278726.78c764d6.js",revision:"30efbe409b2c91a5413d278a02264eaa"},{url:"assets/js/page--24b68849.8aed8d67.js",revision:"7a52d01478b63fafd7599e25dec85470"},{url:"assets/js/page--298eb4e9.892ad7b9.js",revision:"df5ec3f54edaed0b0d70cf40ba833452"},{url:"assets/js/page--33732ef1.fcde54fb.js",revision:"7e0868b05e04d236f6dbc86b822d037a"},{url:"assets/js/page--608d80cf.6c804d48.js",revision:"4908367285ebcaa22dc27818a1823eb9"},{url:"assets/js/page--b64dd6ee.5ff6214a.js",revision:"1f319ac138c41ee6e7ab517dcea24a0c"},{url:"assets/js/page-About Vuepress.f691ae47.js",revision:"fd4191743324900311a870b1d0aee386"},{url:"assets/js/page-API Docs.ee80c40e.js",revision:"e3aa357c1fe307f85e11d4d06638daec"},{url:"assets/js/page-API 文档.1dd3156f.js",revision:"3130e1ee182e7dfbf4aacab6db4d83d9"},{url:"assets/js/page-Basic.6d7eb24a.js",revision:"c9c8292348fc495921d1818ae7b4d14b"},{url:"assets/js/page-Blog related.fbad8d6c.js",revision:"223d6456c8064a78e30cbe7c505e101f"},{url:"assets/js/page-Breadcrumb.f81f5ba6.js",revision:"09a2002054c5e0370afae3d0a3cdd600"},{url:"assets/js/page-Comment Function.c9064f56.js",revision:"cb6675f8f5fcabecf235d86a3d45c591"},{url:"assets/js/page-Common problems.a8f78d82.js",revision:"e1911bf5c2b3cfcb0e23739b2f368103"},{url:"assets/js/page-Custom alignment.4476d13c.js",revision:"f3483ec531e28bb1ca4d2f7499d1f228"},{url:"assets/js/page-Default Theme Config.93204da7.js",revision:"8d95880a3cc95489f0ff415f8bf91c1e"},{url:"assets/js/page-Emoji List.36424ccb.js",revision:"091bae2878cc3d2b462ccd5128cbd514"},{url:"assets/js/page-Emoji列表.bad5c503.js",revision:"38076bfb84fc5d0d8aefd130c07c7bf1"},{url:"assets/js/page-Encryption function.4c3864d2.js",revision:"7f7ad5537e6d8821b658d47c3eaee499"},{url:"assets/js/page-File Structure.c7ad39bb.js",revision:"e5f9ccc115685ddddd1699b66b9443ef"},{url:"assets/js/page-Flowchart.474bba19.js",revision:"2092cc43c07724c967e673fdac54f74d"},{url:"assets/js/page-Footnote.2e01de89.js",revision:"da7de94cbd728cbddcc1dd2e85fb1238"},{url:"assets/js/page-Fullscreen Button.2d90a402.js",revision:"a009056a1663c8c4c42aa7f4e5d18804"},{url:"assets/js/page-Home Page.0a453d86.js",revision:"da4a7daa645b77c44a546c3abd0b7e20"},{url:"assets/js/page-Home.2a9ea534.js",revision:"d35ab920b92ad2fe037697959281bf3d"},{url:"assets/js/page-Icon support.aeeed72b.js",revision:"3fe32e6de09689b80fa6e3b749d7d6cd"},{url:"assets/js/page-Introduction.aebc6855.js",revision:"bd60eefab211e1caa1c5b1e7ce0f66be"},{url:"assets/js/page-Layout.43e6a4bb.js",revision:"2a2598fd70ac997b435ae0bef353add7"},{url:"assets/js/page-Markdown DEMO.f0e9e9d4.js",revision:"df805160e0902bd28a6d23d564bc16c3"},{url:"assets/js/page-Markdown Introduction.145394cc.js",revision:"1a14e1309edb10da9128697bb9357216"},{url:"assets/js/page-Markdown 新语法.ca6c1066.js",revision:"deb68ccfffcec40ee20bd8569c64b92b"},{url:"assets/js/page-Markdown介绍.907cecdb.js",revision:"110d218e18f3f8fc232653a663d64b2d"},{url:"assets/js/page-Markdown示例.32513c9d.js",revision:"ad279b52cab281d5b063b33fd4ca8f17"},{url:"assets/js/page-NavBar.857826eb.js",revision:"fe7b713828e785c9cee997641cfa598f"},{url:"assets/js/page-New Component.7830e337.js",revision:"3745f435ab04d71117cc90d486c8184e"},{url:"assets/js/page-New feature.17086678.js",revision:"f241735462996a75dcc54cf34f79f2bc"},{url:"assets/js/page-New syntax in Markdown.16e7cd81.js",revision:"14d507110a4834165de5ab9621cbbddc"},{url:"assets/js/page-Page Configuration.143da347.js",revision:"fc2bb66ae0d0ed79174aa8f936c7234d"},{url:"assets/js/page-Page.398f7f3d.js",revision:"9955176508836b351dcdb881a0723f62"},{url:"assets/js/page-Plugin Description.9dc96e7b.js",revision:"bc0b1a26f04296ff7318267473f633a2"},{url:"assets/js/page-Plugins.840a984c.js",revision:"c6b4b95d1c87090c41097a3785b380cb"},{url:"assets/js/page-Sidebar.8fe86d06.js",revision:"477424da4310f695861561563801eb9c"},{url:"assets/js/page-stylus configuration.3b0c7af8.js",revision:"8d644a0ae9d6ba0d012530b131ca2bec"},{url:"assets/js/page-stylus 配置.cf732fa1.js",revision:"99fcf1475a4bc6a74f31bab5863ee586"},{url:"assets/js/page-Superscript and Subscript.b34df855.js",revision:"dabcc72ce5c2f997f4b53fc12aacec5d"},{url:"assets/js/page-Tex Support.60be171b.js",revision:"a67f4ff11739a5a89a4ac0764fe70d50"},{url:"assets/js/page-Tex 语法支持.0a401b80.js",revision:"2183adc21453ed5e426ea316cd3607b4"},{url:"assets/js/page-Theme color and Night mode.b6a37482.js",revision:"ef95721eaa69014d0fdb864bcbc308f7"},{url:"assets/js/page-Theme Config.3607b67b.js",revision:"a9d6ae49f4f3f0e2a559e6d498fa9c14"},{url:"assets/js/page-TS support.aab141eb.js",revision:"1ef4c0c5fb79ef3bf1a6c1cb6d374ecc"},{url:"assets/js/page-TS 支持.3ee3586f.js",revision:"1d91af37d260d9f8ef76b868eb35d29d"},{url:"assets/js/page-Vuepress Cases.bc2b535a.js",revision:"785e6e4cf78a995671922b2eb54bd0f3"},{url:"assets/js/page-Vuepress commands.253a9b91.js",revision:"ede9be28072d3c33b397ddfeef3b24c6"},{url:"assets/js/page-Vuepress 案例.58bb2720.js",revision:"d7441a52ee54421469993e7f40053c6b"},{url:"assets/js/page-vuepress-plugin-container.02232883.js",revision:"83cd5fd561a290ec981e7e802adcf525"},{url:"assets/js/page-vuepress-plugin-copyright.5c04b8c3.js",revision:"48ce2200ce8e764d3f37ef3e93fb9ea3"},{url:"assets/js/page-vuepress-plugin-md-enhance.891ce18c.js",revision:"e30bec78d15c2deb034ef4808766da76"},{url:"assets/js/page-Vuepress.846b619b.js",revision:"75293a639a5c14b795415dd3d22c69d8"},{url:"assets/js/page-Writing a theme.c2a07859.js",revision:"bb3f28b28b5ff90dac571c02cf2dad0f"},{url:"assets/js/page-上下角标.3cf0e3b5.js",revision:"e37bf86c1350140a23acf6f7fe624743"},{url:"assets/js/page-主页.d7116418.js",revision:"0bc2ee68754d632ab6e4aaed217f81f0"},{url:"assets/js/page-主题色与夜间模式.d3946f46.js",revision:"66666cd47b24000674421e2aeea621c5"},{url:"assets/js/page-主题配置.3f487410.js",revision:"4d19c121e7a5f39002ee295f36c34261"},{url:"assets/js/page-人物.3d476763.js",revision:"25213975dec9fb1eae363b5d132cca6d"},{url:"assets/js/page-介绍.a5ce1bd4.js",revision:"eca709d6ccae8d158c18fedb5593d4c5"},{url:"assets/js/page-侧边栏.638bf25f.js",revision:"7e5a1b681720e120822609d036da0ebc"},{url:"assets/js/page-全屏按钮.b9211a44.js",revision:"37b35414d56b0bbd0e263ec51e952191"},{url:"assets/js/page-加密功能.b4fe76b4.js",revision:"daba42f9c749cee490770dc339e5b1e2"},{url:"assets/js/page-博客相关.0dd63c7a.js",revision:"2f1b0ad9b4cfa4a9f3217d48d1d7c5eb"},{url:"assets/js/page-图标支持.043e2c2d.js",revision:"495819bcb8deeb579344f79a79566429"},{url:"assets/js/page-地点.1fad8e03.js",revision:"3da6fbb8433326b5b737ce9c7a650774"},{url:"assets/js/page-基础知识.b4f4271e.js",revision:"81771a42db68286ce5ebdae023ec5e58"},{url:"assets/js/page-对象.7588fce1.js",revision:"b9980c9d109a4c4c6308df12c521ae61"},{url:"assets/js/page-导航栏.46162f27.js",revision:"7a73ffb98ce284d73cc7650e9ea3c122"},{url:"assets/js/page-布局.e825e2c0.js",revision:"bd335a663fbf16f522585f3edd00fb8a"},{url:"assets/js/page-常见问题.2cc48416.js",revision:"958646d09675fd8447284a68d28f3900"},{url:"assets/js/page-开发主题.27396190.js",revision:"0a503a78cd11f0ce241bc62521352bf0"},{url:"assets/js/page-插件.2a507527.js",revision:"e5ac02a3909283801a37df2477e7a094"},{url:"assets/js/page-插件说明.f46d64e6.js",revision:"da6db2c9ac3364ea095cfecdc057a70c"},{url:"assets/js/page-文件结构介绍.19cc1fb4.js",revision:"60b88d5969b5763a757b60bb998e843e"},{url:"assets/js/page-新增特性.98b4a85c.js",revision:"ff324d20fa457365b9468aa4a942529f"},{url:"assets/js/page-新增组件.0035ab56.js",revision:"1aa4c8610a9da3d4179595921a2f52f4"},{url:"assets/js/page-流程图支持.dfcc10b2.js",revision:"86707d8ea2156c8be7362b0dc8f4a248"},{url:"assets/js/page-符号.aa0d16c3.js",revision:"da17a1ce481630d20b283857030c4741"},{url:"assets/js/page-脚注.d06361e1.js",revision:"53cf941d14c52c397e6ee5c866ade414"},{url:"assets/js/page-自定义对齐.d44ef3bb.js",revision:"de2575029627653123c42ef9dec2f42e"},{url:"assets/js/page-自然.582d6f98.js",revision:"d5ffbd53e8dabff0c2ad178f755ab20d"},{url:"assets/js/page-评论功能.5d53085e.js",revision:"2f05c92180a666834ec8b559f4886fe8"},{url:"assets/js/page-路径导航.fa5e8aed.js",revision:"a61face1273fac853e679086fc15c69c"},{url:"assets/js/page-页面.48806a33.js",revision:"5f232ff97a6b864095b993b338e0ef0a"},{url:"assets/js/page-页面配置.e39bd2d0.js",revision:"82db8b77029a52b01d5b804eb80e24e3"},{url:"assets/js/page-项目指令.001da804.js",revision:"982fd8d1d27f98be63b52f0e71ee8168"},{url:"assets/js/page-默认主题配置.2c2ab9b1.js",revision:"17676a278700630065090cafe6cc60ef"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.bb89318b.js",revision:"2e4633336ed4683d111d3ac270035a60"},{url:"assets/js/vendors~layout-Layout.24989d8f.js",revision:"1e6dd93c06da3ec9023c376880e0343d"},{url:"basic/index.html",revision:"9ebf0a4f9023c9a6502c774c65087ecf"},{url:"basic/markdown/demo.html",revision:"125f23ab7fa7b63cb88ae9c1126cdf4b"},{url:"basic/markdown/emoji/index.html",revision:"695c5ef9dcd618f0ee944791dec50b3b"},{url:"basic/markdown/emoji/locate.html",revision:"0f888042641c305ab86a8df1e94f3889"},{url:"basic/markdown/emoji/nature.html",revision:"284d1bbf09536292c43fe54f60956479"},{url:"basic/markdown/emoji/object.html",revision:"67c18bab834379c3315ccff94b5fa003"},{url:"basic/markdown/emoji/people.html",revision:"6f5006437fef76c38b5351319e5872fe"},{url:"basic/markdown/emoji/symbol.html",revision:"d763b44c342c8c71543b3f71cafa2b1d"},{url:"basic/markdown/index.html",revision:"b052add5152082e376740ac8e0f4fb79"},{url:"basic/vuepress/case.html",revision:"74bd4cefda18b15ffbbdfaba47e158a4"},{url:"basic/vuepress/command.html",revision:"8ee66b38e6967ecef1f43356d76f1b01"},{url:"basic/vuepress/file.html",revision:"b7a94dfe1d567e8b405d0b09a5b260e5"},{url:"basic/vuepress/index.html",revision:"3df9fe89c6824dcd5a4dd7f5c25e4226"},{url:"basic/vuepress/plugin.html",revision:"ea1a759864238c5fc6de0c33ed6964d8"},{url:"basic/vuepress/theme/config.html",revision:"3e1b944d42ae7abafaa6bd930befa8fd"},{url:"basic/vuepress/theme/dev.html",revision:"d9894b71a6ce4a6d492036ba7a6a5277"},{url:"basic/vuepress/theme/index.html",revision:"1ef3f0d0da7d27ce2ddcb74a86007441"},{url:"category/api/index.html",revision:"dd588cfc42f23c33999edfd8b6aeda99"},{url:"category/api/page/2/index.html",revision:"8795e94bd86933e67e0cd55e90372920"},{url:"category/FAQ/index.html",revision:"50c825c9c70d32ad6c2fc0709d00ead2"},{url:"category/function/index.html",revision:"bd9c4c516a3e1fecb365c62f0a95c4cd"},{url:"category/function/page/2/index.html",revision:"20143fd03fe577aa974fd089b2f0bae0"},{url:"category/index.html",revision:"fbbf7885b4d7c6ded11720d7b91632ab"},{url:"category/instruction/index.html",revision:"b9c0aef61a1d05ffcc71e3aff60c600e"},{url:"category/layout/index.html",revision:"f4db1ac0bce020fce3d03901c15c7dc3"},{url:"category/layout/page/2/index.html",revision:"8933464c6a765882b419c193c1d36528"},{url:"category/markdown/index.html",revision:"9b82bedaee410563f6d2456855bce091"},{url:"category/style/index.html",revision:"4b09b025e84ee2950c5cbba27fb73afc"},{url:"en/api/index.html",revision:"afb7b8dca77bb5314d464515fb7325c0"},{url:"en/api/page.html",revision:"122cfecd112a1c39a290eb9d8ddefe09"},{url:"en/api/plugin/container.html",revision:"1d51dbae5fabde77e8688a188a537d20"},{url:"en/api/plugin/copyright.html",revision:"2372ae586c789ed0f0010ef2b2119962"},{url:"en/api/plugin/index.html",revision:"0355f7c8a9b52a3207b42bf337827b29"},{url:"en/api/plugin/md-enhance.html",revision:"734e0e2efaeedc2a4196b27f5b06774d"},{url:"en/api/plugin/medium-zoom.html",revision:"c6cd5f721024f989a173aad372caa377"},{url:"en/api/plugin/pwa.html",revision:"8bf470d4eca0333af5d7b3360ff6d18e"},{url:"en/api/stylus.html",revision:"ca893485c5929a342cf6691a45d642dc"},{url:"en/api/themeConfig.html",revision:"fe4910e7b294192a613afac545d55651"},{url:"en/basic/index.html",revision:"ad3c8ff7723948e9be375c39354f8067"},{url:"en/basic/markdown/demo.html",revision:"cba0a0542a530ee02d038133f5c6529c"},{url:"en/basic/markdown/emoji.html",revision:"49d7f4c0b042804e9249b82dffc35ca7"},{url:"en/basic/markdown/index.html",revision:"4277a1a38136761872c310512ee59ab6"},{url:"en/basic/vuepress/case.html",revision:"dd3d935beba97f6a1e07d5204a89602d"},{url:"en/basic/vuepress/command.html",revision:"115a337a54f1f0ce2f5a04ef80601ffa"},{url:"en/basic/vuepress/file.html",revision:"89b786d6399effd7a79040f70d7fe53a"},{url:"en/basic/vuepress/index.html",revision:"d698c161b2f6386f8875c01c25df8c1f"},{url:"en/basic/vuepress/plugin.html",revision:"9f26ef352b5e7c744c0d5768c5925f4e"},{url:"en/basic/vuepress/theme/config.html",revision:"c589f67bfd1468755173238380b1b6da"},{url:"en/basic/vuepress/theme/dev.html",revision:"144f35a5d18c4726bd40bbd862159b42"},{url:"en/basic/vuepress/theme/index.html",revision:"1a1dc045ac91aefb3f2d24d11a8b6d9b"},{url:"en/FAQ/index.html",revision:"3c251bdee47d54b59f195dbc5d8a7d39"},{url:"en/guide/feature/blog.html",revision:"9c74c5109270dd5fad25cdb518a9e8d2"},{url:"en/guide/feature/comment.html",revision:"064210454c39b7cef9be6fda9cb64484"},{url:"en/guide/feature/component.html",revision:"3a15379551031235afaf5a2a0c9ac749"},{url:"en/guide/feature/encrypt.html",revision:"9c28064f6c43f10930677234b87c23ec"},{url:"en/guide/feature/fullscreen.html",revision:"0318365a1c19973637967df8ac74490a"},{url:"en/guide/feature/icon.html",revision:"520c52641ebf7193c4229ffa29f4f062"},{url:"en/guide/feature/index.html",revision:"8583a1065898f1974cf21627d2bc57e8"},{url:"en/guide/feature/themecolor.html",revision:"d2cfd4167954c1ce15113bd69a83ed76"},{url:"en/guide/feature/typescript.html",revision:"8639cb89f507bc8f6002c0353ecc6514"},{url:"en/guide/index.html",revision:"825e9378478332c88fef030567eed131"},{url:"en/guide/install.html",revision:"df98f26ddbbe641006abc3a10b568794"},{url:"en/guide/layout/breadcrumb.html",revision:"0194ad206db9d2d91416e707e3a8758f"},{url:"en/guide/layout/home.html",revision:"b14610608aa48de9830ba3bd7b496b91"},{url:"en/guide/layout/index.html",revision:"624d79aef86c6ca2e721eb316fea140a"},{url:"en/guide/layout/navbar.html",revision:"472426a7785287311dedd93078b77e63"},{url:"en/guide/layout/page.html",revision:"490d5eb4609a65dc9d6fcd81e195a98e"},{url:"en/guide/layout/sidebar.html",revision:"003ce8505eedc3b3fd48358a86b6965a"},{url:"en/guide/markdown/align.html",revision:"4327ada1fbc3a2a9d01c5528c7d63652"},{url:"en/guide/markdown/flowchart.html",revision:"34fbf87ef14796da8326440c216daaf3"},{url:"en/guide/markdown/footnote.html",revision:"5cdfafba2dd34e8984da57eb0393bbbb"},{url:"en/guide/markdown/index.html",revision:"a851e398c4178d574dd1994131bb6c8f"},{url:"en/guide/markdown/sup-sub.html",revision:"bfa0dd9bbf8f19fd8bf8e1a081c5af69"},{url:"en/guide/markdown/tex.html",revision:"da9954e2f50e06faf58d34f028fe0ffe"},{url:"en/index.html",revision:"d8c6dc2cee13d561907bffe1ba43fbd1"},{url:"FAQ/index.html",revision:"ff1a7fadc22f624c2459b916a0ff3bb3"},{url:"guide/feature/blog.html",revision:"83205e76b49b0b07aaa0bbc0394473be"},{url:"guide/feature/comment.html",revision:"a68aed93f5d9cbf856aec0bb88e56e92"},{url:"guide/feature/component.html",revision:"37db3ec7986b5b67cef61325abd15780"},{url:"guide/feature/encrypt.html",revision:"12a2df66bc950996ffe60a294d36a0fb"},{url:"guide/feature/fullscreen.html",revision:"4d71bb8872a78c0f641ab2b14914a143"},{url:"guide/feature/icon.html",revision:"7407db54fe36cd9d4f39cde79484e86e"},{url:"guide/feature/index.html",revision:"837d26a2f746f69d42653acacc7905c7"},{url:"guide/feature/themecolor.html",revision:"f2f053d26e7b3f3862a38a9cc24c75e0"},{url:"guide/feature/typescript.html",revision:"92ec0d790af2eace773b8fc82f13ef47"},{url:"guide/index.html",revision:"67bf65b6aa86cebe03222ea0505bf9c4"},{url:"guide/install.html",revision:"464059eeb94eb4f4796ff43f45641792"},{url:"guide/layout/breadcrumb.html",revision:"b06f596d6b886d915a44074d72039020"},{url:"guide/layout/home.html",revision:"ab50ca729a356c397ef0f8ca3f7c8169"},{url:"guide/layout/index.html",revision:"65cae529bf921c1ea7c1f68e434d6385"},{url:"guide/layout/navbar.html",revision:"3784cb0ecd5d362852f3e46f5347b137"},{url:"guide/layout/page.html",revision:"ec13ff5886699284150a1316e82fdd9f"},{url:"guide/layout/sidebar.html",revision:"4d3b78b4e464ca4568684b8100205772"},{url:"guide/markdown/align.html",revision:"883126d34c4eca7de074e8d34f4bd5de"},{url:"guide/markdown/flowchart.html",revision:"c82b4c0ebc36b05f458ec69a17e92fd6"},{url:"guide/markdown/footnote.html",revision:"cd0ecec0d5385e542ca7061b00b041d2"},{url:"guide/markdown/index.html",revision:"d7d162f6622f584b823b3bda703697c4"},{url:"guide/markdown/sup-sub.html",revision:"6bc7f44000f9c66d840cb409af9240ad"},{url:"guide/markdown/tex.html",revision:"327cc9a51d878834330e3a5b8075687d"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"4f65b5ab4d1635ae771c393256f74665"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"ec10aa5e01705333ce53bb4a66c72fd4"},{url:"tag/api/page/2/index.html",revision:"737eb10cc541db2aba9d37e3a8c30043"},{url:"tag/blog/index.html",revision:"adc09193d7443cf91fcf756804618112"},{url:"tag/comment/index.html",revision:"7c433bb0f9ebd45c973264108deb195f"},{url:"tag/component/index.html",revision:"d077cf9f12ed3af380fca145cc3dc9ab"},{url:"tag/components/index.html",revision:"4bef186f8dfa88ae81d4260a05fefc8c"},{url:"tag/emoji/index.html",revision:"9abe1fec49790689367f2a5401c28774"},{url:"tag/encrypt/index.html",revision:"1c4d66d60e8cdefc69320c5fed4812c0"},{url:"tag/enhance/index.html",revision:"897e8e7d9097da59dacd58303685dc39"},{url:"tag/frontmatter/index.html",revision:"a17665478144ca9d13bd9b133a36155a"},{url:"tag/fullscreen/index.html",revision:"e8b9ab969931c72be07a8a6bfe364f6b"},{url:"tag/function/index.html",revision:"ce44b2924fe0cbea5773db99966db07e"},{url:"tag/function/page/2/index.html",revision:"0af03c027ed455ad77d332538ba0e36b"},{url:"tag/home/index.html",revision:"a2df70cfae9898a355dffdf039ff60b8"},{url:"tag/icon/index.html",revision:"6740736e44de735943bf8358d7a36697"},{url:"tag/index.html",revision:"a097e51c60910c258947471b8c9f4648"},{url:"tag/intro/index.html",revision:"77263e4eb22dde8079612bad0c1093db"},{url:"tag/layout/index.html",revision:"782ef65ef478cdf1ceb362b4681b7e10"},{url:"tag/markdown/index.html",revision:"ea2564619c64cd61b13285daa9dc747f"},{url:"tag/plugin/index.html",revision:"ea133de518e302eb17c67178ba06f33b"},{url:"tag/plugin/page/2/index.html",revision:"efe394f7e56cd93d79afef7073bfe77f"},{url:"tag/style/index.html",revision:"b5b98d54f5e39deb237510085845d4ab"},{url:"tag/themeConfig/index.html",revision:"1797068edbc9faff362643d462e71be5"},{url:"tag/typescript/index.html",revision:"85e0f0e4eb6cc84782c4c4cbcc55a7ba"},{url:"tag/vuepress/index.html",revision:"3198795d6926513c1eed7f3f9e30b300"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting')
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
