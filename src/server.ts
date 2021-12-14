import 'reflect-metadata'

import path from 'path'
import { Express } from 'express'
import { createExpressServer, RoutingControllersOptions } from 'routing-controllers'

/**
 * Helpers / common.
 */
import { loadDocRoutes } from '~/api/helpers/openAPI'
import { authorizationChecker } from '~/api/helpers/authorization'
import { currentUserChecker } from '~/api/helpers/currentUser'

/**
 * Loading controllers.
 */
const controllersPath = path.resolve(__dirname, 'api', 'routes', '**', 'controller.{ts,js}')

/**
 * Loading middlewares.
 */
const middlewaresPath = path.resolve(__dirname, 'api', 'middlewares', '**', '*.{ts,js}')

/**
 * Server options.
 */
export const serverOptions: RoutingControllersOptions = {
  cors: '*',
  defaultErrorHandler: false,
  controllers: [controllersPath],
  middlewares: [middlewaresPath],
  authorizationChecker,
  currentUserChecker
}

/**
 * Creating server.
 */
const app: Express = createExpressServer(serverOptions)

export const server = async () => {
  loadDocRoutes(app)
  return app
}
