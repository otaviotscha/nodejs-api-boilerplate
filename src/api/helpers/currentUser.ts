import { Action } from 'routing-controllers'

/**
 * Helpers / common
 */
import { handleThrownError } from '~/common/helpers'
import { logger } from '~/common/logger'

/**
 * Current user checking.
 */
export const currentUserChecker = async (action: Action): Promise<void> => {
  try {
    logger.info('=== CurrentUser:checker ===')

    /**
     * Current user logic.
     */

    return
  } catch (error) {
    throw handleThrownError
  } finally {
    logger.info('=== /CurrentUser:checker===')
  }
}
