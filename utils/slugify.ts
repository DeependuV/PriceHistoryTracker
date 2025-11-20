export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function createProductUrl(title: string, sid: number, pid: string, pt1id: string): string {
  const slug = slugify(title);
  return `/product/${slug}?sid=${sid}&pid=${pid}&pt1id=${pt1id}`;
}
