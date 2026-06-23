import { resolve } from '$app/paths';
import type { RouteId } from '$app/types';

/**
 * `resolve()` distributes its argument tuple across the `RouteId` union, so a
 * value typed as the whole union (e.g. a route id read from nav data at
 * runtime) isn't assignable to any single overload, even though every member
 * is individually valid. All routes resolved this way are param-free, so we
 * narrow to that overload to satisfy the type checker.
 */
export function resolveRoute(route: RouteId): string {
	return resolve(route as '/');
}
