import Footer from '@/components/footer';
import Header from '@/components/header';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export const getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Layout;
