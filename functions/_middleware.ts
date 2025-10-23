// Cloudflare Pages Functions middleware
// This allows environment variables to be used in your app

export async function onRequest(context: any) {
  return context.next();
}

