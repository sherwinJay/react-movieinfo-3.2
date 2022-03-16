// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = {
/* config options here */
  env: {
    MOVIE_DATABASE_ID: process.env.MOVIE_DATABASE_ID,
  },
  images:{
    domains: ['image.tmdb.org'],
  }
}