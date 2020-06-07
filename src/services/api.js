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
      `${url}${`?${this.payloadToQueryString({
        ...payload,
        app_id: this.options.apiId,
        app_key: this.options.apiKey,
      })}`}`,
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
    if (e.response) {
      const {
        data: { errorCode, errorMessages },
      } = e.response
      if (e.response.status === 403) {
        if (e.response.data) {
          localStorage.setItem('PAGE_ERROR', JSON.stringify(e.response.data))
        }
        window.location.replace(`/404?error`)
      }

      return {
        data: {},
        errorCode,
        errors: errorMessages || [{ message: 'Your request cannot be completed as of now' }],
      }
    }

    return {
      data: {},
      errors: [{ message: 'Your request cannot be completed as of now' }],
    }
  }

  payloadToQueryString = (payload = {}) =>
    Object.keys(payload)
      .filter((key) => !payload[key])
      .map((key) => key + '=' + encodeURIComponent(payload[key]))
      .join('&')
}
