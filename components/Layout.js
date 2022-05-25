import Head from 'next/head';
import { Header, Footer } from './';

export default function Layout({ children, pageProps }) {
    const title = pageProps?.post?.title ? pageProps.post.title : 'jmadiago.dev';
    const description = pageProps?.post?.title ? `${pageProps.post.title} by Jose Mari Diago` : 'Jose Mari Diago';

    return (
        <div className="container mx-auto px-8 max-w-3xl">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/images/profile-image.jpg" />
            </Head>

            <Header />
            {children}
            <Footer />
        </div>
    );
}
