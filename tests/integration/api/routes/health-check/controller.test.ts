import request from 'supertest'

/**
 * Helpers / common.
 */
import { startServer, closeServer, server } from 'tests/helpers/server'

/**
 * Test suite.
 */
describe('ROUTES: Health Check', () => {
  beforeAll(startServer)

  test('should return status code 204', done => {
    request(server).get('/health-check').expect(204, done)
  })

  afterAll(closeServer)
})
