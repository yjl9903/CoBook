if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>i(e,o),u={module:{uri:o},exports:l,require:t};s[o]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-d53a1377"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/About.1be23510.css",revision:null},{url:"assets/About.c6d044e4.js",revision:null},{url:"assets/fp.esm.27f96b96.js",revision:null},{url:"assets/index.a0f767c2.css",revision:null},{url:"assets/index.e3a8fe34.js",revision:null},{url:"assets/Login.79953f6d.css",revision:null},{url:"assets/Login.ed76846d.js",revision:null},{url:"assets/vendor.a5df7e50.js",revision:null},{url:"assets/vendor.b7162192.css",revision:null},{url:"index.html",revision:"3445f41adf90aa2cb1c79baa36294549"},{url:"favicon.svg",revision:"c79f6bd56db73a1e613e36bedb218d44"},{url:"favicon.ico",revision:"48194eaf36a8bbcabe56ac0febd01fb6"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"97f80919bdf9d1c0956ca4bf51d6ad7f"},{url:"pwa-192x192.png",revision:"ac75fed6421063af67c53227a6d09cee"},{url:"pwa-512x512.png",revision:"1d831921120664cd98b1b225fbd24515"},{url:"manifest.webmanifest",revision:"426ba0d29fd98c7143bb3235e327d485"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
