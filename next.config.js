module.exports = {
    swcMinify: true,
    webpack(config, _) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};
