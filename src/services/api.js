import axios from 'axios'

export default class Api {
  constructor(options = {}) {
    this.options = options
    this.Instance = axios.create({
      baseURL: options.apiUrl,
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
  }

  get = (url, payload = {}, headers = {}) => {
    return this.Instance.get(
      `${url}${this.payloadToQueryString({
        ...payload,
        app_id: this.options.apiId,
        app_key: this.options.apiKey,
      })}`,
      {
        ...headers,
      }
    )
      .then(this.responseParser)
      .catch(this.errorParser)
  }

  responseParser(response) {
    const { data } = response
    return {
      data,
      errors: data.errorMessages || [],
    }
  }

  errorParser(e) {
    const defaults = {
      data: {},
      errors: [{ message: 'Your request cannot be completed.' }],
    }

    if (e.response) {
      const {
        data: { errorCode, errorMessages },
      } = e.response

      return {
        ...defaults,
        errorCode,
        ...(errorMessages || defaults.errors),
      }
    }

    return defaults
  }

  payloadToQueryString = (payload = {}) =>
    Object.keys(payload)
      .filter((key) => payload[key])
      .map((key, index) => `${!index ? '?' : ''}${key}=${encodeURIComponent(payload[key])}`)
      .join('&')
}
