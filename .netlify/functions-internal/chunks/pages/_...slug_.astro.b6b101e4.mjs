import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, _ as __astro_tag_component__, d as createCollectionToGlobResultMap, e as createGetCollection, f as renderComponent, g as renderHead } from '../astro.6b5bb010.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
/* empty css                               */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://muziyan.me");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- Global Metadata --><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<link rel="icon" type="image/svg+xml" href="/favicon.svg">\n\n<!-- Font preloads -->\n\n<!-- Canonical URL -->\n<link rel="canonical"', ">\n\n\n<!-- Primary Meta Tags -->\n<title>", '</title>\n<meta name="title"', '>\n<meta name="description"', '>\n\n<!-- Open Graph / Facebook -->\n<meta property="og:type" content="website">\n<meta property="og:url"', '>\n<meta property="og:title"', '>\n<meta property="og:description"', '>\n<meta property="og:image"', '>\n\n<!-- Twitter -->\n<meta property="twitter:card" content="summary_large_image">\n<meta property="twitter:url"', '>\n<meta property="twitter:title"', '>\n<meta property="twitter:description"', '>\n<meta property="twitter:image"', '>\n\n<script src="/toggle-theme.js"><\/script>'])), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"));
}, "/Users/season/code/jixiaoqi/blog/src/components/BaseHead.astro", void 0);

const SITE_TITLE = "Muziyan Blog";
const SITE_DESCRIPTION = "Welcome to my website!";

const Link = ({
  children,
  href,
  className = "",
  ...restProp
}) => {
  return /* @__PURE__ */ jsx("a", {
    href,
    ...restProp,
    className: `${className} link`,
    children
  });
};
__astro_tag_component__(Link, "@astrojs/react");

const Header = () => {
  return /* @__PURE__ */ jsxs("header", {
    className: "layout-header",
    children: [/* @__PURE__ */ jsx(Link, {
      href: "/",
      className: "logo",
      children: SITE_TITLE
    }), /* @__PURE__ */ jsx("div", {
      className: "nav",
      children: /* @__PURE__ */ jsxs("ul", {
        className: "menu",
        children: [/* @__PURE__ */ jsx("li", {
          className: "menu-item",
          children: /* @__PURE__ */ jsx(Link, {
            href: "/blog",
            children: "Blog"
          })
        }), /* @__PURE__ */ jsx("li", {
          className: "menu-item",
          children: /* @__PURE__ */ jsx(Link, {
            href: "https://github.com/muziyan",
            target: "_blank",
            children: /* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx("path", {
                fill: "currentColor",
                d: "M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415a1.2 1.2 0 0 1-.167-.11a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098l.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182ZM20.737 5.377a5.39 5.39 0 0 0 .09-.42a6.278 6.278 0 0 0-.408-3.293a1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584a6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83a8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4a1 1 0 0 0 1.942.479a1.678 1.678 0 0 1 .468-.878a1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738a4.258 4.258 0 0 1 .92-2.713a3.022 3.022 0 0 1 .195-.231a1 1 0 0 0 .188-1.025a3.388 3.388 0 0 1-.155-.555a4.094 4.094 0 0 1 .079-1.616a7.543 7.543 0 0 1 2.415 1.18a1.009 1.009 0 0 0 .827.133a11.777 11.777 0 0 1 6.173.001a1.005 1.005 0 0 0 .83-.138a7.572 7.572 0 0 1 2.406-1.19a4.04 4.04 0 0 1 .087 1.578a3.205 3.205 0 0 1-.169.607a1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746a1.63 1.63 0 0 1 .466.908a3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311a4.256 4.256 0 0 0-.116-.416a6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826Z"
              })
            })
          })
        }), /* @__PURE__ */ jsxs("li", {
          className: "menu-item",
          id: "theme-btn",
          children: [/* @__PURE__ */ jsx("svg", {
            id: "sun-svg",
            xmlns: "http://www.w3.org/2000/svg",
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx("path", {
              fill: "currentColor",
              d: "M21.64 13a1 1 0 0 0-1.05-.14a8.05 8.05 0 0 1-3.37.73a8.15 8.15 0 0 1-8.14-8.1a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69a1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14a9.79 9.79 0 0 0 2.1-.22a8.11 8.11 0 0 1-7.18 4.32Z"
            })
          }), /* @__PURE__ */ jsx("svg", {
            id: "moon-svg",
            xmlns: "http://www.w3.org/2000/svg",
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx("path", {
              fill: "currentColor",
              d: "m5.64 17l-.71.71a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5Z"
            })
          })]
        })]
      })
    })]
  });
};
__astro_tag_component__(Header, "@astrojs/react");

const Footer = () => {
  return /* @__PURE__ */ jsx("footer", {
    className: "layout-footer",
    children: "2023 © Muziyan"
  });
};
__astro_tag_component__(Footer, "@astrojs/react");

const Layout = (props) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "layout",
    children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx("main", {
      className: "layout-main",
      children: props.children
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
};
__astro_tag_component__(Layout, "@astrojs/react");

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/welcome.md": () => import('../welcome.cb61a151.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"welcome":"/src/content/blog/welcome.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/welcome.md": () => import('../welcome.6e33312d.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro = createAstro("https://muziyan.me");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`<html lang="en">
<head>
  ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE + post.data.title, "description": SITE_DESCRIPTION })}
${renderHead()}</head>
<body>
${renderComponent($$result, "Layout", Layout, {}, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Content", Content, {})}
` })}
</body></html>`;
}, "/Users/season/code/jixiaoqi/blog/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/season/code/jixiaoqi/blog/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseHead as $, Layout as L, SITE_TITLE as S, ____slug_ as _, SITE_DESCRIPTION as a, Link as b, getCollection as g };
