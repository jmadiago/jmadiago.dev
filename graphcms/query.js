import { request, gql } from 'graphql-request';

const graphCmsApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export async function getPosts() {
    try {
        const query = gql`
            query AllPosts {
                posts {
                    id
                    title
                    excerpt
                    slug
                }
            }
        `;

        const result = await request(graphCmsApi, query);
        return result.posts;
    } catch (error) {
        console.error('Error fetching featured posts:', error.message);
        return [];
    }
}

export async function getFeaturedPosts() {
    try {
        const query = gql`
            query FeaturedPosts {
                posts(where: { featured: true }) {
                    id
                    title
                    excerpt
                    slug
                }
            }
        `;

        const result = await request(graphCmsApi, query);
        return result.posts;
    } catch (error) {
        console.error('Error fetching featured posts:', error.message);
        return [];
    }
}

export async function getBlogDetails(slug) {
    try {
        const query = gql`
            query BlogDetails($slug: String!) {
                post(where: { slug: $slug }) {
                    id
                    title
                    createdAt
                    content
                }
            }
        `;

        const result = await request(graphCmsApi, query, { slug });
        return result.post;
    } catch (error) {
        console.error('Error fetching post details:', error.message);
        return {};
    }
}
