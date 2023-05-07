import rss from '@astrojs/rss';

const postImportResult = import.meta.glob('./blog/*.{md,mdx}', { eager: true });
const posts = Object.values(postImportResult);

export async function get(context) {
    return rss({
        stylesheet: '/rss/styles.xsl',
        title: 'My Blog',
        description: 'My Blog description',
        site: context.site,
        items: posts.map((post) => ({
            link: post.url,
            title: post.frontmatter.title,
            pubDate: post.frontmatter.date,
            description: post.frontmatter.description,
            customData: `
            <author>${post.frontmatter.author}</author>`,
        }))

    });
}
