const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: {
                    DEFAULT: '#CDA203',
                    50: '#FDE58A',
                    100: '#FDE076',
                    200: '#FCD74E',
                    300: '#FCCE26',
                    400: '#F5C204',
                    500: '#CDA203',
                    600: '#967602',
                    700: '#5E4B01',
                    800: '#271F01',
                    900: '#000000',
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('tailwindcss-debug-screens'),
    ],
};
