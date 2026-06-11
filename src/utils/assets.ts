export function assetUrl(path: string) {
  if (!path.startsWith("/assets/")) {
    return path;
  }

  return `${import.meta.env.BASE_URL}${path.slice(1)}`;
}
