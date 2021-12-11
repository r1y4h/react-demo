export const jsonToQueryString = (payload = {}) =>
  Object.keys(payload)
    .filter(key => payload[key] !== null && payload[key] !== undefined)
    .map((key, index) => `${!index ? '?' : ''}${key}=${encodeURIComponent(payload[key])}`)
    .join('&')
