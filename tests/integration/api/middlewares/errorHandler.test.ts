import request from 'supertest'

/**
 * Helpers / common.
 */
import { startServer, closeServer, server } from 'tests/helpers/server'

/**
 * Test suite.
 */
describe('MIDDLEWARES: Error Handler', () => {
  beforeAll(startServer)

  test('should return status code 404 because of not found route', done => {
    request(server).get('/not-found-route').expect(404, done)
  })

  afterAll(closeServer)
})
