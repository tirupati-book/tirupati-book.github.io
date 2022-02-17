import AppHead from '@/components/apphead';
import { getLayout } from '@/components/layouts/layout';
import '@/styles/globals.css';
import { NextComponentType, NextPageContext } from 'next';
import type { AppProps, NextWebVitalsMetric } from 'next/app';

interface Props extends AppProps {
    Component: NextComponentType<NextPageContext, any, {}> & {
        getLayout?: (page: React.ReactNode) => JSX.Element | null;
    };
}

const App: React.FC<Props> = ({ Component, pageProps }) => {
    const getFinalLayout = Component.getLayout || getLayout;

    return (
        <>
            <AppHead />
            {getFinalLayout(<Component {...pageProps} />)}
        </>
    );
};

export const reportWebVitals = (metric: NextWebVitalsMetric) => {};

export default App;
