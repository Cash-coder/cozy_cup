export default function getUrlBaseName(url) {
  return url.split('/').pop();
}