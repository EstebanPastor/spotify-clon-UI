/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com", "i.scdn.co", "i1.sndcdn.com", "imagenes.elpais.com", "cnnespanol.cnn.com", "www.eltiempo.com", "indiehoy.com"],
  },
};

module.exports = nextConfig;
