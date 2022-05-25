import { getPosts } from '../../graphcms/query';
import { PostCard } from '../../components';

export default function Blogs({ posts }) {
    return (
        <div className="mt-8">
            <h2 className="font-semibold text-2xl">Blogs</h2>

            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export async function getStaticProps() {
    const posts = await getPosts();

    return {
        props: {
            posts,
        },
    };
}
