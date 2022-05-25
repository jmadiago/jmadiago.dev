import { useRouter } from 'next/router';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import { Loader } from '../../components';
import { getBlogDetails, getPosts } from '../../graphcms/query';

export default function Blog({ post }) {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <div className="mt-5">
            <h1 className="text-4xl bg-gray-200 p-3 rounded-sm">{post.title}</h1>
            <div className="flex gap-2 my-5 items-center">
                <Image
                    width="32px"
                    height="32px"
                    src="/images/profile-image.jpg"
                    alt="Jose Mari Diago"
                    className="rounded-full object-cover"
                />
                <div className="flex gap-2 text-gray-500 text-xs items-center">
                    <p>Jose Diago</p>
                    <span>/</span>
                    <p>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
                </div>
            </div>
            <div className="px-10 py-4 bg-gray-50 rounded-sm">
                <ReactMarkdown className="prose">{post.content}</ReactMarkdown>
            </div>
        </div>
    );
}

export async function getStaticProps({ params }) {
    const post = await getBlogDetails(params.slug);

    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths() {
    const posts = await getPosts();

    return {
        paths: posts.map(({ slug }) => ({ params: { slug } })),
        fallback: true,
    };
}
