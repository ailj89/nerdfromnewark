exports.handler = async (event, context) => {
  if (event.httpMethod === 'GET') {
    try {
      const data = require('./db.json')

      return {
        statusCode: 200,
        body: JSON.stringify(data)
      }
    } catch (e) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to process request' })
      }
    }
  }
}
