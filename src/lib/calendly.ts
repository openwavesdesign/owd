// Calendly scheduling URL with widget colors matched to the brand palette (hex without "#").
export function calendlyEmbedUrl(url: string): string {
  const params = new URLSearchParams({
    background_color: 'ffffff',
    text_color: '13293d',
    primary_color: '1b3a57',
  });
  return `${url}?${params}`;
}
