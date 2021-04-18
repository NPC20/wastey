export function convertObjectToNestArray(obj) {
  return Object.keys(obj).map(key => [key, obj[key]]);
}
