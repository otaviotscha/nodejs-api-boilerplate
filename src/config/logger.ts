import { isTestEnvironment } from './env'

/**
 * Logging levels.
 */
const INFO_LOG = 'info'

/**
 * Console options.
 */
export const consoleOptions = {
  level: INFO_LOG,
  silent: isTestEnvironment()
}
