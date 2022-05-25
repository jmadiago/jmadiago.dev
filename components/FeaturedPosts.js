import { PostCard } from './';

export default function FeaturedPosts({ posts }) {
    return (
        <div className="mt-8">
            <h2 className="font-semibold text-2xl">Featured Posts</h2>

            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}
