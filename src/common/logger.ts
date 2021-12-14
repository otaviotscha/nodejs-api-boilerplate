import { createLogger, transports } from 'winston'

import { NODE_ENV } from '~/config/env'
import { EnvironmentType } from '~/@types/environment'
import { consoleOptions } from '~/config/logger'

/**
 * Log transports.
 */
const transportsLogger =
  /**
   * TODO: add production transports
   */
  NODE_ENV === EnvironmentType.PRODUCTION ? [new transports.Console(consoleOptions)] : [new transports.Console(consoleOptions)]

/**
 * Creates logger.
 */
export const logger = createLogger({
  transports: transportsLogger
})
