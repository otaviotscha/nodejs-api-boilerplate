/**
 * Helpers / common.
 */
import { startServer, closeServer } from 'tests/helpers/server'

/**
 * Environment.
 */
import { isDevelopmentEnvironment, isProductionEnvironment, isTestEnvironment } from '~/config/env'

/**
 * Types.
 */
import { EnvironmentType } from '~/@types/environment'

/**
 * Test suite.
 */
describe('CONFIG: Env', () => {
  beforeAll(startServer)

  test('should confirm that environment is dev', async () => {
    process.env.NODE_ENV = EnvironmentType.DEV
    expect(isDevelopmentEnvironment()).toBeTruthy()

    expect(isTestEnvironment()).toBeFalsy()
    expect(isProductionEnvironment()).toBeFalsy()
  })

  test('should confirm that environment is test', async () => {
    process.env.NODE_ENV = EnvironmentType.TEST
    expect(isTestEnvironment()).toBeTruthy()

    expect(isDevelopmentEnvironment()).toBeFalsy()
    expect(isProductionEnvironment()).toBeFalsy()
  })

  test('should confirm that environment is production', async () => {
    process.env.NODE_ENV = EnvironmentType.PRODUCTION
    expect(isProductionEnvironment()).toBeTruthy()

    expect(isDevelopmentEnvironment()).toBeFalsy()
    expect(isTestEnvironment()).toBeFalsy()
  })

  afterAll(() => (process.env.NODE_ENV = EnvironmentType.TEST))
  afterAll(closeServer)
})
