import appData from '@/data/appData';

/* eslint-disable @next/next/no-img-element */
const Hero = () => {
    return (
        <main>
            {/* Hero card */}
            <div className='relative'>
                <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
                    <div className='relative shadow-xl sm:overflow-hidden sm:rounded-2xl'>
                        <div className='absolute inset-0'>
                            <img
                                className='h-full w-full object-cover'
                                src='https://images.unsplash.com/photo-1626775238053-4315516eedc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=980&q=80'
                                alt='People working on laptops'
                            />
                            <div className='absolute inset-0 bg-gray-700 mix-blend-multiply' />
                        </div>
                        <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
                            <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                                <span className='block text-white'>
                                    MOST TRUSTED
                                </span>
                                <span className='block text-gray-50'>
                                    BOOK EVER.
                                </span>
                            </h1>
                            <p className='mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl'>
                                IMANDARI EK MAHANGA SHOK HAI JO HAR KISIKE BAS
                                KI BAAT NAHI HOTI.
                            </p>
                            <div className='mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center'>
                                <div className='sm:mx-auto'>
                                    <a
                                        href={appData.globalCTA}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='flex items-center justify-center rounded-md border border-transparent bg-brand px-4 py-3 text-xl font-semibold text-white shadow-sm hover:bg-brand-600 sm:px-8'>
                                        Visit Our Instagram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;
