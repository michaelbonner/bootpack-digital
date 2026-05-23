import { env } from '$env/dynamic/private';
import { drizzle, type PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

let cached: PostgresJsDatabase<typeof schema> | undefined;

export function getDb(): PostgresJsDatabase<typeof schema> {
	if (cached) return cached;

	if (!env.DATABASE_URL) {
		throw new Error('DATABASE_URL is not set');
	}

	const client = postgres(env.DATABASE_URL, { max: 1 });
	cached = drizzle(client, { schema });
	return cached;
}
