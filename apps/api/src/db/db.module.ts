import { Module } from '@nestjs/common';
import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { DBConfig } from '../config/db.config';
import * as schema from './schema';

export const DRIZZLE = Symbol('drizzle-connection');
export type DrizzleDB = NodePgDatabase<typeof schema>;

@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [DBConfig],
      useFactory: (dbConfig: DBConfig) => {
        const pool = new Pool({
          connectionString: dbConfig.url,
          ssl: true,
        });
        return drizzle(pool, { schema });
      },
    },
  ],
  exports: [DRIZZLE],
})
export class DBModule {}
