const dispatchMiddleware = client => ({
  dispatch,
  getState,
}) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }

  const {
    promise,
    types,
    onSuccess,
    onFailure,
    onError,
    data,
    ...rest
  } = action

  if (!promise) {
    return next(action)
  }

  const [REQUEST, SUCCESS, FAILURE] = types

  const pendingStateData = data || {}
  const dispatchKey = Date.now()

  next({ ...rest, dispatchKey, result: pendingStateData, type: REQUEST })

  const success = result => {
    const nextAction = onSuccess
      ? onSuccess({ result, type: SUCCESS, dispatchKey, ...rest })
      : { result, type: SUCCESS, dispatchKey, ...rest }

    next(nextAction)
    return result
  }

  const failure = e => {
    const nextAction = onFailure
      ? onFailure({ result: e, type: FAILURE, dispatchKey, ...rest })
      : { result: e, type: FAILURE, dispatchKey, ...rest }

    next(nextAction)
    return e
  }

  const error = e => {
    const nextAction = onError
      ? onError({ error: e, result: e, type: FAILURE, dispatchKey, ...rest })
      : { error: e, result: e, type: FAILURE, dispatchKey, ...rest }

    next(nextAction)
    return e
  }

  return new Promise((resolve, reject) => {
    const successHandler = result => resolve(success(result))
    const errorHandler = e => reject(failure(e))

    promise(client, getState())
      .then(successHandler, errorHandler)
      .catch(err => {
        error(err)
        throw err
      })
  })
}

export default dispatchMiddleware
