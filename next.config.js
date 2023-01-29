/** @type {import('next').NextConfig} */


require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
  },
};
