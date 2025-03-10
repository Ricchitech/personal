import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // webpack: (config) => {
  //   config.experiments = {
  //     topLevelAwait: true
  //   };

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "assets.example.com",
//         port: "",
//         pathname: "/",
//         search: "",
//       },
//     ],
//   },
// };
