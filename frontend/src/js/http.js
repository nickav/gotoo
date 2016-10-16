import 'whatwg-fetch'

/**
 * Thin wrapper around fetch for RESTful JSON actions.
 */

/** Default request options. */
const defaultOptions = {
  credentials: 'same-origin',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
}

/** Ensures JSON is a string. */
const stringify = json => typeof json == 'string' ? json : JSON.stringify(json)

/** fetch with JSON defaults (as specified in defaultOptions). */
export const fetchJson = (url, options) => {
  options = Object.assign({}, defaultOptions, options)
  return fetch(url, options)
    .then(response => response.json())
}

export const get = (url, options) => {
  options = Object.assign({}, options, { method: 'GET' })
  return fetchJson(url, options)
}

export const post = (url, options) => {
  options = Object.assign({}, options, { method: 'POST' })
  if (options.body) {
    options.body = stringify(options.body)
  }
  return fetchJson(url, options)
}

export const put = (url, options) => {
  options = Object.assign({}, options, { method: 'PUT' })
  options.body = stringify(options.body)
  return fetchJson(url, options)
}

export const patch = (url, options) => {
  options = Object.assign({}, options, { method: 'PATCH' })
  options.body = stringify(options.body)
  return fetchJson(url, options)
}

export const deleet = (url, options) => {
  options = Object.assign({}, options, { method: 'DELETE' })
  return fetchJson(url, options)
}

/** jQuery-esque object. */
const $ = {
  fetch: fetchJson,
  get,
  post,
  put,
  patch,
  delete: deleet
}

export default $
