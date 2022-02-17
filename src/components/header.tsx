import Image from 'next/image';
const Header = () => {
    return (
        <div className='my-5 grid place-items-center'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/logo.png' width={128} height={128} alt='logo' />
        </div>
    );
};

export default Header;
