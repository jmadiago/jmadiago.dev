import Link from 'next/link';
import { Banner, FeaturedPosts } from '../components';
import { getFeaturedPosts } from '../graphcms/query';

export default function Home({ posts }) {
    return (
        <div>
            <Banner />
            <FeaturedPosts posts={posts} />

            <div className="mt-4">
                <Link href="/blog">
                    <span className="cursor-pointer hover:underline decoration-wavy">
                        Read all posts
                    </span>
                </Link>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const posts = await getFeaturedPosts();

    return {
        props: {
            posts,
        },
    };
}
