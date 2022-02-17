import Link from 'next/link';
import React from 'react';

const Custom404 = (props: any) => {
    return (
        <div className='grid flex-1 place-items-center bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
            <div className='mx-auto max-w-max'>
                <main className='sm:flex sm:items-center sm:justify-center'>
                    <p className='pb-2 text-4xl font-extrabold text-red-500 sm:pb-0 sm:text-5xl'>
                        404
                    </p>
                    <div className='border-t border-gray-200 pt-2 sm:ml-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6'>
                        <div>
                            <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl'>
                                Page not found
                            </h1>
                            <p className='mt-1 text-base text-gray-500'>
                                Please check the URL in the address bar and try
                                again.
                            </p>
                        </div>
                        <div className='mt-4 flex space-x-3 sm:border-l sm:border-transparent'>
                            <Link href='/'>
                                <a className='inline-flex items-center rounded-md border border-transparent bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2'>
                                    Go back home
                                </a>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

Custom404.pageTitle = '404 - Page not found';

export default Custom404;
