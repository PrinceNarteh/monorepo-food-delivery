import { Configuration, Value } from '@itgorillaz/configify';

@Configuration()
export class AppConfig {
  @Value('APP_HOST', { default: 'localhost' })
  host: string;

  @Value('APP_PORT', { parse: parseInt, default: 3000 })
  port: number;

  @Value('NODE_ENV')
  nodeEnv: string;
}
