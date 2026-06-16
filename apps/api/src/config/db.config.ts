import { Configuration, Value } from '@itgorillaz/configify';

@Configuration()
export class DBConfig {
  @Value('POSTGRES_HOST', { default: 'localhost' })
  host: string;

  @Value('POSTGRES_PORT', { parse: parseInt, default: 5432 })
  port: number;

  @Value('POSTGRES_USER')
  username: string;

  @Value('POSTGRES_PASSWORD')
  password: string;

  @Value('POSTGRES_DB')
  database: string;

  @Value('POSTGRES_URL')
  url: string;
}
