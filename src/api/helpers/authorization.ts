import { Action } from 'routing-controllers'

/**
 * Helpers / common.
 */
import { handleThrownError } from '~/common/helpers'
import { logger } from '~/common/logger'

/**
 * Authorization checking.
 */
export const authorizationChecker = async (action: Action): Promise<boolean> => {
  try {
    logger.info('=== Auth:checker ===')

    /**
     * Auth logic.
     */

    return true
  } catch (error) {
    throw handleThrownError(error)
  } finally {
    logger.info('=== /Auth:checker ===')
  }
}
