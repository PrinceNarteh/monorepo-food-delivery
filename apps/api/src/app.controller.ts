import type { HealthCheckResponse } from '@food-delivery/types';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health')
  health(): HealthCheckResponse {
    return {
      status: 'ok',
      timestamp: new Date(),
    };
  }
}
