const requestLogger = (request, response, next) => {
  console.log('Method: ', request.method)
  console.log('Path: ', request.path, 'Query: ', request.query)
  console.log('Body: ', request.body)
  response.on('finish', () => {
    console.log('Status:', response.statusCode)
    console.log('---')
  })
  next()
}
const unknownEndpoint = (_request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

export default {
  unknownEndpoint,
  requestLogger
}