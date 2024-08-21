/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
            {
                source: '/backoffice',
                destination: '/backoffice/login',
                permanent: true,
            },
        ];
    }
};

export default nextConfig;
