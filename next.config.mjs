/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "live.staticflickr.com" },
      { protocol: "https", hostname: "ecampusontario.pressbooks.pub" },
      { protocol: "https", hostname: "science.mcmaster.ca" },
      { protocol: "https", hostname: "msumcmaster.ca" },
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "www.eng.mcmaster.ca" },
    ],
  },
  transpilePackages: ["three"],
};

export default nextConfig;
