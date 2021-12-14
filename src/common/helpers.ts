/**
 * Helpers / common.
 */
import { logger } from '~/common/logger'

/**
 * Checks if structure is instance of Error and converts it to ErrnoException.
 */
export const isError = (structure: unknown): structure is NodeJS.ErrnoException => structure instanceof Error

/**
 * Logs and converts errors.
 */
export const handleThrownError = (error: unknown): Error => {
  if (!isError(error)) {
    logger.error('Error handler received something that is not an instance of Error')
    return new Error('Error handler received something that is not an instance of Error')
  }

  /**
   * Error conversion logic.
   */

  /**
   * If it is a simple error, just logs an then returns it.
   */
  logger.error(error.message)
  return error
}
