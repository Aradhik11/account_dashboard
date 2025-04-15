export { default } from 'next/config';

export const config = {
  matcher: [
    // Temporarily disable authentication for all routes
    // '/api/:path*',
  ],
}; 