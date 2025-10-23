// Cloudflare Worker for serving static assets with environment variables support
export default {
  async fetch(request, env) {
    // Get the asset from the static files
    return env.ASSETS.fetch(request);
  },
};

