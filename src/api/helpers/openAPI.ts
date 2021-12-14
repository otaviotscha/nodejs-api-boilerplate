import { validationMetadatasToSchemas } from 'class-validator-jsonschema'
import { routingControllersToSpec } from 'routing-controllers-openapi'
import { getMetadataArgsStorage } from 'routing-controllers'
import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'

/**
 * Server options.
 */
import { serverOptions } from '~/server'

/**
 * Creates and loads "/docs" route.
 */
export const loadDocRoutes = (app: Express) => {
  /**
   * Metadata.
   */
  const storage = getMetadataArgsStorage()

  /**
   * Validation classes to schemas.
   */
  const schemas = validationMetadatasToSchemas({
    refPointerPrefix: '#/components/schemas/'
  })

  /**
   * Generated specs.
   */
  const spec = routingControllersToSpec(storage, serverOptions, {
    components: {
      schemas,
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    info: { title: 'user-crud', version: '0.1' }
  })

  /**
   * Docs route.
   */
  app.use('/docs', serve, setup(spec))
}
