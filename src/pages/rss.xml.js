import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Astro Example',
    description: '...',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.mdx')),
    customData: `<language>en-us</language>`,
  });
}