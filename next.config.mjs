import { withNextVideo } from "next-video/process";

const nextConfig = {
  images: {
    domains: ["clan.cloudflare.steamstatic.com"],
  },
};

export default withNextVideo(nextConfig);

