if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-452119c2"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"api/index.html",revision:"3d6333a81cbfc6ed4c27158233b3c5ab"},{url:"api/page.html",revision:"e5ffbb4176e68e010ec26776ed06234c"},{url:"api/plugin/container.html",revision:"e4cdbb127a4f0caa4fd229ff2d4521f2"},{url:"api/plugin/copyright.html",revision:"1b2bb04a8ec219f3ed3ae6afed6da54b"},{url:"api/plugin/index.html",revision:"dcef11186c9d709e35e32654a9ef1096"},{url:"api/plugin/md-enhance.html",revision:"cd008656a1dc9940b54f6c46ad30c6e8"},{url:"api/plugin/medium-zoom.html",revision:"13af4539a60da389adcdfb9f96b4ed40"},{url:"api/plugin/pwa.html",revision:"a6e2eda64226df23e25b1311cf1b6d7f"},{url:"api/stylus.html",revision:"09e9afc1c6ae75525d0b4c4cd0c8da7f"},{url:"api/themeConfig.html",revision:"27b35480c9c73388b99f3f6c68553299"},{url:"article/index.html",revision:"c34e877c90a2d5f7f39d3273ddf3f040"},{url:"assets/css/0.styles.cff1d485.css",revision:"60325204889097671e73e47ff71eb072"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/94.071c7593.js",revision:"47720b7adcad76475a2f1806281c0300"},{url:"assets/js/app.43380e96.js",revision:"76ad37f0a47dd6cd96f631521f65eefc"},{url:"assets/js/layout-BlogEntry.7924d2a3.js",revision:"01b4d355afae56bd0eca6c1bef282faf"},{url:"assets/js/layout-BlogEntry~layout-Layout.88802471.js",revision:"f07653ce19955dc7e4c3706bd82c45aa"},{url:"assets/js/layout-Layout.38ffc106.js",revision:"88d693e1eace53a406b0ba78641d14d0"},{url:"assets/js/layout-NotFound.6938d692.js",revision:"2ee03fad48af520bf74359dc531d1a73"},{url:"assets/js/page--1b278726.30e24e0f.js",revision:"f204e2e92a466c28da46a59b86f3ff61"},{url:"assets/js/page--24b68849.6baf9be4.js",revision:"6aec704ed5a12797db83a9dc1157a61f"},{url:"assets/js/page--298eb4e9.b023a8d9.js",revision:"f5a66dc130aa6e65ab234fb73d1da746"},{url:"assets/js/page--33732ef1.7d12d639.js",revision:"67f61966602d9a14c82d8583d005c95e"},{url:"assets/js/page--608d80cf.a54ff57c.js",revision:"5619d5e1c6e88263ed518d2fe0a3fbdc"},{url:"assets/js/page--b64dd6ee.dff9e135.js",revision:"1dd49a32dff12aa5ece9fe2cb029f443"},{url:"assets/js/page-About Vuepress.93c4a0ee.js",revision:"e602d493a73fb5c330f59a783ff31a62"},{url:"assets/js/page-API Docs.f2913ce3.js",revision:"93aba1027ec900c70e7662452cfd427f"},{url:"assets/js/page-API 文档.9d9a52e4.js",revision:"c8ac64e19ecdb5a320094e2987b2b0b9"},{url:"assets/js/page-Basic.d747c86d.js",revision:"600ca112cece810a7291f2817c6c7217"},{url:"assets/js/page-Breadcrumb.e0963841.js",revision:"a40121b4e69623ac8f4e8d3f325db58d"},{url:"assets/js/page-Comment Function.4ef6fc3d.js",revision:"1e545372cf9b4049fb2334eb97e2a327"},{url:"assets/js/page-Default Theme Config.c23e25c2.js",revision:"a50dc5e34b04b5444e941161aa4912b8"},{url:"assets/js/page-Emoji List.29703b0e.js",revision:"ad13d512aedfca40b4e2ce31cef025e1"},{url:"assets/js/page-Emoji列表.5662bfa3.js",revision:"a8ba048da655818b3e6804f605dd94ef"},{url:"assets/js/page-File Structure.33208140.js",revision:"b8557b34cc44550f76236075ebef0f03"},{url:"assets/js/page-flowchart.1a71771f.js",revision:"49236180934bfc690322682f3064b12d"},{url:"assets/js/page-Footnote.f902ab0d.js",revision:"8709b85fdb7f25288c782a64c097da2e"},{url:"assets/js/page-Fullscreen Button.9cf4fb45.js",revision:"d5474efab2e3ae9e1315a72270cf9240"},{url:"assets/js/page-Home Page.7124d61d.js",revision:"9599b85ff859e799a4a23e61a166d401"},{url:"assets/js/page-Home.6283db02.js",revision:"b10492957447d5240cca42d82785163e"},{url:"assets/js/page-Introduction.f4bdabf2.js",revision:"6a71981c4697793e101cf9f790fb393d"},{url:"assets/js/page-Markdown DEMO.f1f2e55a.js",revision:"32e4a9b8bb5803d16636b407510cc617"},{url:"assets/js/page-Markdown Introduction.cfdec96e.js",revision:"b3c10ce1e37a3d1dcc4a1dc87b543f88"},{url:"assets/js/page-Markdown 新语法.c3d8d11e.js",revision:"2d0ae97e5ad55abb13e03a465f34bc66"},{url:"assets/js/page-Markdown介绍.fd633c14.js",revision:"57a5531e4f3692b57df00f391feecad4"},{url:"assets/js/page-Markdown示例.f13486b1.js",revision:"a2253fd49c0e69d599b44c72242207b0"},{url:"assets/js/page-NavBar.cb7d2901.js",revision:"56ec05ed7e2f0119f86c2566250611df"},{url:"assets/js/page-New Component.99462bcb.js",revision:"babffb1e8fcbc834272c01341df70cf1"},{url:"assets/js/page-New syntax in Markdown.65765bf5.js",revision:"b942b738a00509f683529da60c019edc"},{url:"assets/js/page-Page Configuration.0b43242a.js",revision:"b57c480c40b2cb768a799bb1e45b6813"},{url:"assets/js/page-Page.8343774b.js",revision:"7f2a67ff7557424cdcadfaeb025e1e55"},{url:"assets/js/page-Plugin Description.37481508.js",revision:"388db53ffdcc1bba2e4b456a7ee35513"},{url:"assets/js/page-Plugins.2e2cc219.js",revision:"346c2421b95685b151900bdcb357f313"},{url:"assets/js/page-Sidebar.e17370f8.js",revision:"1548620e72349775d5fe73ef60cf09ca"},{url:"assets/js/page-stylus configuration.e39d443c.js",revision:"1d11f2457e458f0695a5a6cdab0e698c"},{url:"assets/js/page-stylus 配置.177fc043.js",revision:"2bda04635927b6299cabdeeeac8b5648"},{url:"assets/js/page-Superscript and Subscript.ffe1e241.js",revision:"8f92dee2aefb5342e1111ac324942a1e"},{url:"assets/js/page-Tex Support.554c8382.js",revision:"2cba8db31a79551817245860db233385"},{url:"assets/js/page-Tex 语法支持.e224cdf7.js",revision:"5cc74902a0af05d1bf6517c673a933d9"},{url:"assets/js/page-Theme color and Night mode.b09953ec.js",revision:"37e9d7288ce61a7dfb60786e429fd0dd"},{url:"assets/js/page-Theme Config.e142b5ff.js",revision:"9104d12e7f6a644a13e6e8eb09352e35"},{url:"assets/js/page-TS 支持.a4537c08.js",revision:"a40a491492b8973d5b24a89ba9defe1e"},{url:"assets/js/page-Vuepress Cases.ef9371a6.js",revision:"fe1c9f73c1f7b657ca39e509cf1ce3ff"},{url:"assets/js/page-Vuepress commands.17e566bd.js",revision:"e05428b0233fcf0fb14d7de093ffbf05"},{url:"assets/js/page-Vuepress 案例.e4bb12ed.js",revision:"0736439f94cfe0cbe043e3d550c6b1dc"},{url:"assets/js/page-vuepress-plugin-container.fc79f72a.js",revision:"a747f1eae996be67d32430daad6275df"},{url:"assets/js/page-vuepress-plugin-copyright.42f28e78.js",revision:"7d0c645717129a50b22e70258d8eb716"},{url:"assets/js/page-vuepress-plugin-md-enhance.c0afe031.js",revision:"0984eee75b73dbac63e119c57d94efdd"},{url:"assets/js/page-vuepress-plugin-name-chunks.91622c6b.js",revision:"93170849393905d21c3af120425ae78e"},{url:"assets/js/page-Vuepress.399ff72a.js",revision:"9bf404801805ebb7840df8e6f8d10671"},{url:"assets/js/page-Writing a theme.b169cc69.js",revision:"c9a94990bc373c8aa2c669a0de482ff2"},{url:"assets/js/page-上下角标.e9886323.js",revision:"2d97654e57bdc0dc132900a007954c4b"},{url:"assets/js/page-主页.6cbecc1f.js",revision:"8bb014129a5d88b5010094fcad73f981"},{url:"assets/js/page-主题色与夜间模式.b87fd217.js",revision:"571e933eee901f9b035f5a8f751def18"},{url:"assets/js/page-主题配置.0f38dd78.js",revision:"84989bf17458cb79459a808325e58553"},{url:"assets/js/page-人物.703e2a64.js",revision:"c96b2e888b6e8343da2233e6f171b0d2"},{url:"assets/js/page-介绍.669733f7.js",revision:"0d3cc8a80e913282f861131c97ac17f1"},{url:"assets/js/page-侧边栏.5f6c1be9.js",revision:"6958dc1d2db7c78369c181ad301c749c"},{url:"assets/js/page-全屏按钮.546fea5e.js",revision:"a092d77d26ffa75140158fe179e8b2cd"},{url:"assets/js/page-加密功能.e0633786.js",revision:"e6bce4d236a424a7010e44db1d397c72"},{url:"assets/js/page-博客相关.116fd99d.js",revision:"efa2d5fe54edd7e8185a21c068dce586"},{url:"assets/js/page-图标支持.aca733e9.js",revision:"dba85dfa09bdf66619ca3d28471cf3ac"},{url:"assets/js/page-地点.e52c73e3.js",revision:"0b3bc3c58e8238de2cccf5bd10333b2d"},{url:"assets/js/page-基础知识.97211f3c.js",revision:"cc97d82aa17446b8829ba1f266bdc37c"},{url:"assets/js/page-对象.7713700a.js",revision:"58910c5c83782549820e4481455afaa7"},{url:"assets/js/page-导航栏.00970376.js",revision:"c8f8706d5b874c7ddee80f33d2cc3bc0"},{url:"assets/js/page-布局.47b0a827.js",revision:"d6ea11118ddf383983ab2bf30a2d56d2"},{url:"assets/js/page-常见问题.9db9eae6.js",revision:"f61354b91c05bcc0b543e30742f441a6"},{url:"assets/js/page-开发主题.c2e5204e.js",revision:"bc2f5f7bd4d721e90a06e25f3b18eeba"},{url:"assets/js/page-插件.36c92180.js",revision:"2a60a8a27c2356e46770c06079e5e50d"},{url:"assets/js/page-插件说明.aae527b2.js",revision:"095d8f980a0db65f761d0683f2f0181d"},{url:"assets/js/page-文件结构介绍.6daeb0e8.js",revision:"9dbe7e778c0b087b2bce395e4de73c30"},{url:"assets/js/page-新增特性.9904ce97.js",revision:"1242866fcc43c8c13d39d19ea377ac4b"},{url:"assets/js/page-新增组件.f442ac99.js",revision:"fe721e950224f1bfe3de32b96ff98f92"},{url:"assets/js/page-流程图支持.aecfaf46.js",revision:"5dc90d4790d1743153144766fd084e27"},{url:"assets/js/page-符号.4ca5f2d0.js",revision:"bfc2c7e4d7f0d4b286de1b31b5881568"},{url:"assets/js/page-脚注.5c2c550c.js",revision:"4988249a7d77453e10c4799138602f08"},{url:"assets/js/page-自定义对齐.9b35bd0f.js",revision:"5869c48115fb21f3b59b2a0f21af9999"},{url:"assets/js/page-自然.3a431d37.js",revision:"9b6f590826b41f2470f0d1199ea2bb69"},{url:"assets/js/page-评论功能.eb55457f.js",revision:"15efddb37e4837a4d87a7dbafb1daec0"},{url:"assets/js/page-路径导航.5ae6216d.js",revision:"d1648d1ab0c81e995d41e4d60b6ea2f3"},{url:"assets/js/page-页面.af645b28.js",revision:"c6469abe0c8c12a3925d220f6cb95a0e"},{url:"assets/js/page-页面配置.f5e1f9b2.js",revision:"2bc19e3cb15b5d8826b51c4e7963e612"},{url:"assets/js/page-项目指令.bc0af64c.js",revision:"f6d4025ec9d4650769befa05700a51cb"},{url:"assets/js/page-默认主题配置.7f79d721.js",revision:"f06959a0d2f558d423d361b765838763"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.322a4840.js",revision:"9ec1d011c1db034203408be301921b34"},{url:"assets/js/vendors~layout-Layout.7546c60d.js",revision:"0c35cdd9f1adb5473adc6fb11594d284"},{url:"basic/index.html",revision:"d0a90af6c498448376cea5f57ed6cb8f"},{url:"basic/markdown/demo.html",revision:"b2887a5054e7430be0ccdeab7d5dca76"},{url:"basic/markdown/emoji/index.html",revision:"9895b38cd5ef0349f3ce876c2966e26b"},{url:"basic/markdown/emoji/locate.html",revision:"26a0b147c596b59f2c6a8e2cad63fa39"},{url:"basic/markdown/emoji/nature.html",revision:"70a2f456ec95ee264b0cd2a094beface"},{url:"basic/markdown/emoji/object.html",revision:"064642d8160db814418d6f479c0439cf"},{url:"basic/markdown/emoji/people.html",revision:"6f08a9c24f9fe57e543c02492a5adb80"},{url:"basic/markdown/emoji/symbol.html",revision:"5318f0b739250accf7708326ae541bec"},{url:"basic/markdown/index.html",revision:"4b6d8917cb35be5e71d29717b81e6e5d"},{url:"basic/vuepress/case.html",revision:"38ae0a62c33bd3495d52f8269b725ac4"},{url:"basic/vuepress/command.html",revision:"89882710a790204674b6e38b98167ecd"},{url:"basic/vuepress/file.html",revision:"07cdb3745a44ad38651a239e776182f3"},{url:"basic/vuepress/index.html",revision:"b5fad54da4232ade238125ebf3d28608"},{url:"basic/vuepress/plugin.html",revision:"b9eb02bca2d2719f4bb5eadc42aa4c30"},{url:"basic/vuepress/theme/config.html",revision:"4bf585e9f95cba81d9716be542539876"},{url:"basic/vuepress/theme/dev.html",revision:"3c079de3a28f30b081d352d87e580461"},{url:"basic/vuepress/theme/index.html",revision:"fa03accc1636815ed3d67e82cc06b2bd"},{url:"category/api/index.html",revision:"33aef454b8c8e9de5911a60766ae2698"},{url:"category/function/index.html",revision:"c67fed1da3609623a43d936ee716e35b"},{url:"category/index.html",revision:"1d4d599be3e64f61f4577d1a7532a8c8"},{url:"category/instruction/index.html",revision:"5784c53aed689eb813703e384bcbfc0b"},{url:"category/layout/index.html",revision:"8157fe1dc56b149cfdd95e3836f1f03d"},{url:"category/markdown/index.html",revision:"7e994f18e8e540f2816ec1a207a40859"},{url:"category/style/index.html",revision:"990563c03bdb4582b2349de4faad1a85"},{url:"en/api/index.html",revision:"9e5053f9bfebc08d792ca7287289cab6"},{url:"en/api/page.html",revision:"d211ee3092bc38f1e685b91fead5b29d"},{url:"en/api/plugin/container.html",revision:"9116cd58d4905d5040077841f4b6547b"},{url:"en/api/plugin/copyright.html",revision:"41ba7cb476471aa9832fa9bf4d267f77"},{url:"en/api/plugin/index.html",revision:"7ed8067694b1e812545d2dade9311ffc"},{url:"en/api/plugin/medium-zoom.html",revision:"806476971abba0e8a747b0b8544766db"},{url:"en/api/plugin/name-chunks..html",revision:"45caa9715f92835d5789f46e4c1d61b4"},{url:"en/api/plugin/pwa.html",revision:"a0f7d59627534c120ff22c92d5ac5a95"},{url:"en/api/stylus.html",revision:"24eeec6075a784069dfb5bd10370df16"},{url:"en/api/themeConfig.html",revision:"a4cf6ccc32aaf7cdf2b9040b281ca790"},{url:"en/basic/index.html",revision:"6787918bc5c9c13ddd51b232ceca3918"},{url:"en/basic/markdown/demo.html",revision:"633addcf2ebb1cd259a052cdc3da6e05"},{url:"en/basic/markdown/emoji.html",revision:"a64c3ccccac4c6c2f164356205dfea9e"},{url:"en/basic/markdown/index.html",revision:"ac3b1752497e6bc8ff4d9d7b9c51c747"},{url:"en/basic/vuepress/case.html",revision:"280eec8efc299befb556e92179917aa5"},{url:"en/basic/vuepress/command.html",revision:"aa8b9bb2bb8d915bd27d1751ffe7af47"},{url:"en/basic/vuepress/file.html",revision:"c1621a8fecdae0a656744dabc8b757fd"},{url:"en/basic/vuepress/index.html",revision:"89a984b35e818bbd9618f33ccfd02329"},{url:"en/basic/vuepress/plugin.html",revision:"eed6681b3746ef0544bddc070cdfb032"},{url:"en/basic/vuepress/theme/config.html",revision:"44af1a4a0ffa85d470f48f0267e64ed4"},{url:"en/basic/vuepress/theme/dev.html",revision:"f872760013372b876b0373162f937fb9"},{url:"en/basic/vuepress/theme/index.html",revision:"b5c1883fe1e3236cde9946fe99091487"},{url:"en/guide/breadcrumb.html",revision:"9747624f376031f7c293a104b7dc6cf8"},{url:"en/guide/comment.html",revision:"f17a98274ed07a0a157ef44750ce6695"},{url:"en/guide/component.html",revision:"77c8ebf477ed439f978a719a3746bca9"},{url:"en/guide/fullscreen.html",revision:"20ca7bf5f96c416f09fd0f4f348b806d"},{url:"en/guide/home.html",revision:"0be546950c7a0e99f4f0c20c720611e5"},{url:"en/guide/index.html",revision:"ecdb5945e2cc63a8de657511eb3e8871"},{url:"en/guide/install.html",revision:"80ce844a9534ba0f21c9449c1cb69a13"},{url:"en/guide/markdown/flowchart.html",revision:"6abd78c78409edf0497871fe0582202d"},{url:"en/guide/markdown/footnote.html",revision:"f0e15df66aca5016dc516bcc0a1324cc"},{url:"en/guide/markdown/index.html",revision:"649975dffa17016abab44b860d1b5259"},{url:"en/guide/markdown/sup-sub.html",revision:"dca3c1fe149c3bd4d65c805e1832aa5d"},{url:"en/guide/markdown/tex.html",revision:"154a72ca73f45473a7a57a0339790db0"},{url:"en/guide/navbar.html",revision:"ea8e72c92d7c88d87897bee85ee8a0d4"},{url:"en/guide/page.html",revision:"c82d8dad8c9e6b6bd1fd7d5c69850d18"},{url:"en/guide/sidebar.html",revision:"9552a8f46bb7c71b04833438b3753571"},{url:"en/guide/themecolor.html",revision:"f6af4bd0b3e5e1a88afdc54956aa6e76"},{url:"en/index.html",revision:"2ecdcffe275c0d9a0ed44eaa7d7b39dc"},{url:"FAQ/index.html",revision:"bcad1e3487b87efe5b83c8302e636e7c"},{url:"guide/feature/blog.html",revision:"b70ffb643507e4ea93a498a0b152ebe8"},{url:"guide/feature/comment.html",revision:"ef6863973399522c8e4ee40957c1c3d3"},{url:"guide/feature/component.html",revision:"0193560b6a8fbd76c44160ef5bacc6cd"},{url:"guide/feature/encrypt.html",revision:"2f25cf92523f7e6e6ad527049bbc8caa"},{url:"guide/feature/fullscreen.html",revision:"1cb05182f61772dba9147e12a633f6af"},{url:"guide/feature/icon.html",revision:"2a2e2c3fd2ea3021026637640bee6d1b"},{url:"guide/feature/index.html",revision:"4a81d0b98fd06c1e8bfe518574b577cf"},{url:"guide/feature/themecolor.html",revision:"312efbd13e25c62846af7c59e27b1e15"},{url:"guide/feature/typescript.html",revision:"8473d92aa6f105ea56aa6c873b2caa72"},{url:"guide/index.html",revision:"3f2a2af2da6d40a779fd10f1cf41150b"},{url:"guide/install.html",revision:"89c8c81ec4765a7c22dfd12d6412b83d"},{url:"guide/layout/breadcrumb.html",revision:"2de0134753f1cecdfb611c4785d5f23d"},{url:"guide/layout/home.html",revision:"84c175431e8c3d256f379dd5a771b350"},{url:"guide/layout/index.html",revision:"36439cfcd39399eac5bc5ac217168ab4"},{url:"guide/layout/navbar.html",revision:"ccdaea7939c33664d855dd5eb81e5081"},{url:"guide/layout/page.html",revision:"a96b5b4eb472136d9ac72f898317888e"},{url:"guide/layout/sidebar.html",revision:"a57ba4e0de8640e463d119ff2c7afdb9"},{url:"guide/markdown/align.html",revision:"59d68db04f49ad65f9f7fca69f5fc3b8"},{url:"guide/markdown/flowchart.html",revision:"e0a8a7168d13b97eb4f9e79a3484147b"},{url:"guide/markdown/footnote.html",revision:"88226d3b2587101824dcf65a45a29966"},{url:"guide/markdown/index.html",revision:"1084f6d5c2c397c89407b5e69bc71496"},{url:"guide/markdown/sup-sub.html",revision:"b02a083455e13b45ed18308f53744d19"},{url:"guide/markdown/tex.html",revision:"fef5669aefeeea74af253f9c0b9fe75d"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"c45464c502867f92c48b8427d408d81e"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"0b88e4ad268af0d1f413ecc83b7a5e72"},{url:"tag/comment/index.html",revision:"045eedb6d0d2237928fb8619de986ee8"},{url:"tag/component/index.html",revision:"f73fc55a8bc5832349ab69a7eea25812"},{url:"tag/components/index.html",revision:"a84e65c123890dbe618f32edf2dfa8f0"},{url:"tag/emoji/index.html",revision:"a217b5bf5c7b7668b53ab36305d44c06"},{url:"tag/encrypt/index.html",revision:"395751d13ba8f612a55e5c0828af6134"},{url:"tag/enhance/index.html",revision:"43c09d5a28be3ea1c5540a032c02f6ec"},{url:"tag/frontmatter/index.html",revision:"495cc8ae3ffe10e84991bbffc0c6e2a2"},{url:"tag/fullscreen/index.html",revision:"769a8b0e688f9268e8c00279c6621aa0"},{url:"tag/function/index.html",revision:"ce87db7c65790c34dd51482c9f8f9382"},{url:"tag/home/index.html",revision:"b3011703033eaf842a80212891bc53c5"},{url:"tag/icon/index.html",revision:"edadd9ccf990ebb4938c068835950259"},{url:"tag/index.html",revision:"7bb8e2e893f45264ae64a8286fc40c31"},{url:"tag/intro/index.html",revision:"a5975fc1f758a83c1c9efce35c26b30d"},{url:"tag/layout/index.html",revision:"f3d0a365d4708cb362843789c4473873"},{url:"tag/markdown/index.html",revision:"12ccda475f5faacfb053a9520938b81e"},{url:"tag/plugin/index.html",revision:"1dde214aa5afa66203b8091233f8033b"},{url:"tag/style/index.html",revision:"3a1f9cb2f29ba0611e1b4aa04bd032d1"},{url:"tag/themeConfig/index.html",revision:"55f345f897991f6f74c31e16a2b6481d"},{url:"tag/typescript/index.html",revision:"df15b7e9771058f67c2871d215abbec7"},{url:"tag/vuepress/index.html",revision:"af5c943a487d0a4be246d58c0f333ff4"}],{})}));
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