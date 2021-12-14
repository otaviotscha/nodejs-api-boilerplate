import { Get, HttpCode, JsonController, OnUndefined } from 'routing-controllers'
import { OpenAPI } from 'routing-controllers-openapi'

/**
 * Controller.
 */
@JsonController('/health-check')
export class HealthCheckController {
  @Get()
  @OpenAPI({ summary: 'Checks if the API is up' })
  @HttpCode(204)
  @OnUndefined(204)
  getAll() {}
}
