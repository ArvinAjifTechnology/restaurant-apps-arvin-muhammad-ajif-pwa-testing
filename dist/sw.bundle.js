if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let s={};const l=e=>i(e,r),o={module:{uri:r},exports:s,require:l};a[r]=Promise.all(n.map((e=>o[e]||l(e)))).then((e=>(c(...e),s)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"872.bundle.318651cdfb3264d73ef1.js",revision:null},{url:"app.webmanifest",revision:"8f4d78f17163fa700077faba31e0b845"},{url:"app~309f7e27.bundle.506baa25cf1683259954.js",revision:null},{url:"app~309f7e27.bundle.506baa25cf1683259954.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~61a228d7.bundle.6a87c271d203d9199dc9.js",revision:null},{url:"app~61a228d7.bundle.808635cf6eddcf3e9947.css",revision:null},{url:"app~a51fa3f5.bundle.2ab9a654c52ecb55ac62.js",revision:null},{url:"app~a51fa3f5.bundle.2ab9a654c52ecb55ac62.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.a23cd3297f0991b1d221.js",revision:null},{url:"app~ca0940c6.bundle.a23cd3297f0991b1d221.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.1c41dab1f10c780c3af1.js",revision:null},{url:"app~e4317507.bundle.1c41dab1f10c780c3af1.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"favicon.png",revision:"37c1f5a0d6c7bda8496f3f19d79d2f08"},{url:"icons/icon-128x128 .png",revision:"fa1fdc2d38d11bb5dcee814e7919de74"},{url:"icons/icon-144x144.png",revision:"2e9ee127ac9df9c9b433f3176667b1c3"},{url:"icons/icon-152x152.png",revision:"9a006c32c453206fcb2cd9a281c95740"},{url:"icons/icon-192x192.png",revision:"418527614ae2ac0ca18e8c026e964cf7"},{url:"icons/icon-384x384.png",revision:"4659517eac5f5069c34a85aee998ccc1"},{url:"icons/icon-512x512.png",revision:"37c1f5a0d6c7bda8496f3f19d79d2f08"},{url:"icons/icon-72x72.png",revision:"b4773604d08c458eb0d48a7bdde8da13"},{url:"icons/icon-96x96.png",revision:"c19b066059c2818cd8400cf86ab8b690"},{url:"images/heros/app-e88fe14602caf6ef7bf9.webmanifest",revision:null},{url:"images/heros/favicon-c76ccad9ad877944217e.png",revision:null},{url:"images/heros/hero-image_1-91bf5c4a50c73e706c25.jpg",revision:null},{url:"images/heros/hero-image_1-large-cbb2bacc4e3e220ed8b1.jpg",revision:null},{url:"images/heros/hero-image_1-large.jpg",revision:"34e304bf49cb62fd46194a33dfbc459a"},{url:"images/heros/hero-image_1-medium.jpg",revision:"22d1bccf362a6ad13482b8de99beacfc"},{url:"images/heros/hero-image_1-small-eaae531a5551ff66d9c0.jpg",revision:null},{url:"images/heros/hero-image_1-small.jpg",revision:"3ff0aa9232bb303c68910a6f71fbfeed"},{url:"images/heros/hero-image_1.jpg",revision:"a2f444d9e2e43a5d0373b1a0d8cb2236"},{url:"images/heros/icon-192x192-bd79bf6a2f5a77360a97.png",revision:null},{url:"index.html",revision:"d9c96abb2e96307aad02004c6f5ac81b"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"restaurants-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://image.tmdb.org/t/p/w500/")),new e.StaleWhileRevalidate({cacheName:"restaurants-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map