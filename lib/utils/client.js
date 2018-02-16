const execute = (request) =>
  request
    .then((response) => response.json())

const get = (headers, path) => fetch(path, { headers })

const post = (headers, path, body) => fetch(
  path,
  {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  }
)

const patch = (headers, path, body) => fetch(
  path,
  {
    method: 'PATCH',
    headers,
    body: JSON.stringify(body)
  }
)

const put = (headers, path, body) => fetch(
  path,
  {
    method: 'PUT',
    headers,
    body: JSON.stringify(body)
  }
)

const del = (headers, path, body) => fetch(
  path,
  {
    method, 'DELETE',
    headers,
    body: JSON.stringify(body)
  }
)

export default {
  get: () => execute(get(...arguments)),
  post: () => execute(post(...arguments)),
  patch: () => execute(patch(...arguments)),
  put: () => execute(put(...arguments)),
  delete: () => execute(del(...arguments))
}
