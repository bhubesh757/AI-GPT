/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : ['upload.wikimedia.org']
  },
  experimental :  {
    appDir : true,
  },
}

module.exports = nextConfig