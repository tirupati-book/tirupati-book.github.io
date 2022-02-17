import { InboxIcon } from '@heroicons/react/outline';

const Contact = () => {
    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
                <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
                    <h2 className='text-2xl font-extrabold text-gray-900 sm:text-3xl'>
                        Get in touch
                    </h2>
                    <div className='mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0'>
                        <div>
                            <h3 className='text-lg font-medium leading-6 text-gray-900'>
                                Collaborate
                            </h3>
                            <dl className='mt-2 text-base text-gray-500'>
                                <div>
                                    <dt className='sr-only'>Email</dt>
                                    <dd className='space-x-1'>
                                        <InboxIcon className='inline h-6 w-6' />
                                        <span>support@example.com</span>
                                    </dd>
                                </div>
                                <div className='mt-1'>
                                    <dt className='sr-only'>Phone number</dt>
                                    <dd>+1 (555) 123-4567</dd>
                                </div>
                            </dl>
                        </div>
                        <div>
                            <h3 className='text-lg font-medium leading-6 text-gray-900'>
                                Press
                            </h3>
                            <dl className='mt-2 text-base text-gray-500'>
                                <div>
                                    <dt className='sr-only'>Email</dt>
                                    <dd>support@example.com</dd>
                                </div>
                                <div className='mt-1'>
                                    <dt className='sr-only'>Phone number</dt>
                                    <dd>+1 (555) 123-4567</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
