export function stringFormatter (str) {
  if (!str) return ''
  return str.replace(/[^a-zA-Z ]/g, '')
}
