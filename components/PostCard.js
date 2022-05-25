import Link from 'next/link';

export default function PostCard({ post }) {
    return (
        <Link href={`/blog/${post.slug}`}>
            <div className="bg-gray-100 p-5 mt-4 cursor-pointer hover:bg-gray-200 rounded-sm">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="mt-2">{post.excerpt}</p>
            </div>
        </Link>
    );
}
