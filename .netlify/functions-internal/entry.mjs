import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import { h as deserializeManifest } from './chunks/astro.6b5bb010.mjs';
import '@astrojs/internal-helpers/path';
import 'react';
import 'react-dom/server';
import 'path-to-regexp';
import 'string-width';
import 'html-escaper';

const _page0  = () => import('./chunks/index@_@astro.71e3daba.mjs');
const _page1  = () => import('./chunks/rss.4566a32f.mjs');
const _page2  = () => import('./chunks/index@_@astro.74491dd2.mjs');
const _page3  = () => import('./chunks/_...5c8e70fe.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/rss.xml.js", _page1],["src/pages/blog/index.astro", _page2],["src/pages/blog/[...slug].astro", _page3]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_...slug_.d0c7927a.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_...slug_.d0c7927a.css"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_...slug_.d0c7927a.css"}],"routeData":{"route":"/blog/[...slug]","type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://muziyan.me","base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/season/code/jixiaoqi/blog/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/season/code/jixiaoqi/blog/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/season/code/jixiaoqi/blog/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/Users/season/code/jixiaoqi/blog/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/rss.xml.js":"chunks/pages/rss.xml.js.9ee1f16b.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.71e3daba.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss.4566a32f.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index@_@astro.74491dd2.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_...5c8e70fe.mjs","/Users/season/code/jixiaoqi/blog/src/content/blog/welcome.md?astroContentCollectionEntry=true":"chunks/welcome.cb61a151.mjs","/Users/season/code/jixiaoqi/blog/src/content/blog/welcome.md?astroPropagatedAssets":"chunks/welcome.6e33312d.mjs","/Users/season/code/jixiaoqi/blog/src/content/blog/welcome.md":"chunks/welcome.5670e883.mjs","@astrojs/react/client.js":"_astro/client.c67de31f.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/_...slug_.d0c7927a.css","/favicon.svg","/toggle-theme.js","/_astro/client.c67de31f.js"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
