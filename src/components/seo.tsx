import appData from '@/data/appData';
import Head from 'next/head';

const SEO = () => {
    return (
        <Head>
            <meta name='description' content={appData.description} />

            <meta property='og:description' content={appData.description} />
            <meta property='og:title' content={appData.name} />
            <meta name='twitter:description' content={appData.description} />
            <meta name='twitter:title' content={appData.name} />

            <meta property='og:image' content={appData.ogImg} />

            <title>{appData.name}</title>
        </Head>
    );
};

export default SEO;
