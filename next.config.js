// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/api/:path*", // Replace with your API endpoint
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "totoday.vn",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};
