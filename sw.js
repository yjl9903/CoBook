if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const d=e=>s(e,o),t={module:{uri:o},exports:c,require:d};i[o]=Promise.all(n.map((e=>t[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-455a0d7a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.150a65ea.js",revision:null},{url:"assets/index.92d52daa.css",revision:null},{url:"assets/vendor.91ee3bad.js",revision:null},{url:"assets/vendor.eca8d712.css",revision:null},{url:"index.html",revision:"88832f618c45d1ccb4c1bb372dd147ba"},{url:"favicon.svg",revision:"c79f6bd56db73a1e613e36bedb218d44"},{url:"favicon.ico",revision:"48194eaf36a8bbcabe56ac0febd01fb6"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"97f80919bdf9d1c0956ca4bf51d6ad7f"},{url:"pwa-192x192.png",revision:"ac75fed6421063af67c53227a6d09cee"},{url:"pwa-512x512.png",revision:"1d831921120664cd98b1b225fbd24515"},{url:"manifest.webmanifest",revision:"8fd2f7c9081bcba78c8cb47d8946f74d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
