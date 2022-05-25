import '../styles/globals.css';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Layout pageProps={pageProps}>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
