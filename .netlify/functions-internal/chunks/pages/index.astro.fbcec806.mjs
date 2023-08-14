import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, g as renderHead, _ as __astro_tag_component__ } from '../astro.6b5bb010.mjs';
import { $ as $$BaseHead, L as Layout, S as SITE_TITLE, a as SITE_DESCRIPTION, b as Link, g as getCollection } from './_...slug_.astro.b6b101e4.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';

const $$Astro$1 = createAstro("https://muziyan.me");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`<html lang="en">
	<head>
		${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}
	${renderHead()}</head>
	<body>
    ${renderComponent($$result, "Layout", Layout, {}, { "default": ($$result2) => renderTemplate`
      <main>
        <h1>🧑‍🚀 Hello!</h1>
        <p>Welcome to my blog!</p>
      </main>
    ` })}
	</body></html>`;
}, "/Users/season/code/jixiaoqi/blog/src/pages/index.astro", void 0);

const $$file$1 = "/Users/season/code/jixiaoqi/blog/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

function calculateReadTime(markdownContent, wordsPerMinute = 200) {
  const wordCount = markdownContent.split(/\s+/).length;
  const readTimeMinutes = wordCount / wordsPerMinute;
  return Math.ceil(readTimeMinutes);
}

const Posts = ({
  posts
}) => {
  const formatDate = (post) => {
    const date = new Date(post.data.pubDate);
    return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;
  };
  return /* @__PURE__ */ jsx("ul", {
    className: "post-list",
    children: posts.map((post) => {
      return /* @__PURE__ */ jsx("li", {
        className: "post-item",
        children: /* @__PURE__ */ jsxs(Link, {
          href: `/blog/${post.slug}`,
          children: [/* @__PURE__ */ jsx("h3", {
            className: "post-title",
            children: post.data.title
          }), /* @__PURE__ */ jsxs("p", {
            className: "post-desc post-time",
            children: [formatDate(post), " · ", calculateReadTime(post.body), "min"]
          })]
        })
      });
    })
  });
};
__astro_tag_component__(Posts, "@astrojs/react");

const getSortedPosts = (posts) => posts.filter(({ data }) => !data.draft).sort(
  (a, b) => Math.floor(new Date(b.data.pubDatetime).getTime() / 1e3) - Math.floor(new Date(a.data.pubDatetime).getTime() / 1e3)
);

const $$Astro = createAstro("https://muziyan.me");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  return renderTemplate`<html lang="en">
	<head>
		${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}
	${renderHead()}</head>
	<body>
    ${renderComponent($$result, "Layout", Layout, {}, { "default": ($$result2) => renderTemplate`
      ${renderComponent($$result2, "Posts", Posts, { "posts": sortedPosts })}
    ` })}
	</body></html>`;
}, "/Users/season/code/jixiaoqi/blog/src/pages/blog/index.astro", void 0);

const $$file = "/Users/season/code/jixiaoqi/blog/src/pages/blog/index.astro";
const $$url = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
