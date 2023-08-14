import { i as createVNode, F as Fragment, j as spreadAttributes } from './astro.6b5bb010.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h1 id=\"welcome-to-my-blog\">Welcome to my blog.</h1>\n<blockquote>\n<p>I’m is a web developer. This is my first astro blog site.</p>\n</blockquote>");

				const frontmatter = {"title":"Welcome!","description":"A hello world post!","pubDate":"2023-08-14"};
				const file = "/Users/season/code/jixiaoqi/blog/src/content/blog/welcome.md";
				const url = undefined;
				function rawContent() {
					return "\n# Welcome to my blog.\n\n> I'm is a web developer. This is my first astro blog site.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"welcome-to-my-blog","text":"Welcome to my blog."}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
