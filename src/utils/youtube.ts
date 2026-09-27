export function resolveYouTubeVideoId(input: string): string | null {
  const iframeSource = input.match(/src=["']([^"']+)["']/i)?.[1];
  const value = iframeSource ?? input.trim();

  if (/^[\w-]{11}$/.test(value)) return value;

  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    const supportedHosts = [
      'youtube.com',
      'www.youtube.com',
      'm.youtube.com',
      'youtube-nocookie.com',
      'www.youtube-nocookie.com',
      'youtu.be',
      'www.youtu.be',
    ];

    if (!supportedHosts.includes(host)) return null;

    const pathId = url.pathname.match(/^\/(?:embed|shorts|live)\/([^/?]+)/)?.[1];
    const videoId = host.includes('youtu.be')
      ? url.pathname.split('/').filter(Boolean)[0]
      : url.searchParams.get('v') ?? pathId;

    return videoId && /^[\w-]{11}$/.test(videoId) ? videoId : null;
  } catch {
    return null;
  }
}