/** @type {import('next').NextConfig} */
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "images.dog.ceo",
            "cdn2.thecatapi.com",
            "randomfox.ca",
            "random.dog",
            "cdn.shibe.online",
        ],
    },
}

module.exports = withVanillaExtract(nextConfig)
