import pkg from 'package.json';

const rootUrl =
    process.env.NEXT_PUBLIC_DOMAIN ?? pkg.homepage ?? 'tbook.live';
const name = 'Tirupati';

const appData = {
    name,
    version: pkg.version,
    description: `${name} - ${pkg.description}`,
    author: pkg.author.name,
    type: 'Website',
    rootUrl,
    logo: `https://${rootUrl}/logo.png`,
    ogImg: `https://${rootUrl}/logo.png`,
    globalCTA: 'https://tbook.live/contact',
    themeColor: '#50A555',
};

export default appData;
