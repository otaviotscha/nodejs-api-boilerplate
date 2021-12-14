/**
 * Loading aliases and env variables.
 */
import './config/aliases'
import './config/env'

/**
 * Server.
 */
import { server } from '~/server'

/**
 * Helpers / common.
 */
import { logger } from '~/common/logger'

/**
 * Environment.
 */
import { PORT } from '~/config/env'

/**
 * Connecting to database and starting server.
 */
server().then(app => app.listen(PORT, () => logger.info(`Server running on port ${PORT}!`)))
