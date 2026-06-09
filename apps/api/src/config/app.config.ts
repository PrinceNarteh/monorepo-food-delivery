import { Configuration, Value } from '@itgorillaz/configify';

@Configuration()
export class AppConfig {
  @Value('APP_PORT', { parse: parseInt })
  port: number;

  @Value('NODE_ENV')
  nodeEnv: string;
}
