const Features = () => {
    return (
        <div className='overflow-hidden bg-gray-50 py-16 lg:py-24'>
            <div className='relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <svg
                    className='absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block'
                    width={404}
                    height={784}
                    fill='none'
                    viewBox='0 0 404 784'
                    aria-hidden='true'>
                    <defs>
                        <pattern
                            id='b1e6e422-73f8-40a6-b5d9-c8586e37e0e7'
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits='userSpaceOnUse'>
                            <rect
                                x={0}
                                y={0}
                                width={4}
                                height={4}
                                className='text-gray-200'
                                fill='currentColor'
                            />
                        </pattern>
                    </defs>
                    <rect
                        width={404}
                        height={784}
                        fill='url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)'
                    />
                </svg>

                <div className='relative'>
                    <h2 className='text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
                        Features
                    </h2>
                </div>

                <div className='relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8'>
                    <div className='relative'>
                        <h3 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
                            Feature - 1
                        </h3>
                        <p className='mt-3 text-lg text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Pariatur minima sequi recusandae, porro
                            maiores officia assumenda aliquam laborum ab aliquid
                            veritatis impedit odit adipisci optio iste
                            blanditiis facere. Totam, velit.
                        </p>
                    </div>

                    <div className='relative mt-10 lg:mt-0' aria-hidden='true'>
                        <img
                            className='relative mx-auto lg:ml-auto'
                            width={500}
                            src='https://images.unsplash.com/photo-1518133196839-3aa1219f671d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
                            alt=''
                        />
                    </div>
                </div>

                <svg
                    className='absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block'
                    width={404}
                    height={784}
                    fill='none'
                    viewBox='0 0 404 784'
                    aria-hidden='true'>
                    <defs>
                        <pattern
                            id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits='userSpaceOnUse'>
                            <rect
                                x={0}
                                y={0}
                                width={4}
                                height={4}
                                className='text-gray-200'
                                fill='currentColor'
                            />
                        </pattern>
                    </defs>
                    <rect
                        width={404}
                        height={784}
                        fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                    />
                </svg>

                <div className='relative mt-12 sm:mt-16 lg:mt-24'>
                    <div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8'>
                        <div className='lg:col-start-2'>
                            <h3 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
                                Feature - 2
                            </h3>
                            <p className='mt-3 text-lg text-gray-500'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Impedit ex obcaecati natus
                                eligendi delectus, cum deleniti sunt in labore
                                nihil quod quibusdam expedita nemo.
                            </p>
                        </div>

                        <div className='relative mt-10 lg:col-start-1 lg:mt-0'>
                            <img
                                className='relative mx-auto lg:mx-0'
                                width={500}
                                src='https://images.unsplash.com/photo-1518133196839-3aa1219f671d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
