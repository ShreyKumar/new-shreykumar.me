
// Simple memory-based rate limiter for local/single-instance use
// For production with multiple instances, use a Redis-based solution like Upstash.

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

export interface RateLimitOptions {
  interval: number; // in milliseconds
  limit: number;    // maximum requests per interval
}

/**
 * Checks if a request from a specific identifier (like IP) is within the rate limit.
 * @returns {Promise<{ success: boolean, limit: number, remaining: number, reset: number }>}
 */
export async function rateLimit(identifier: string, options: RateLimitOptions) {
  const now = Date.now();
  const userData = store[identifier] || { count: 0, resetTime: now + options.interval };

  // If the reset time has passed, reset the counter
  if (now > userData.resetTime) {
    userData.count = 0;
    userData.resetTime = now + options.interval;
  }

  userData.count += 1;
  store[identifier] = userData;

  const success = userData.count <= options.limit;
  const remaining = Math.max(0, options.limit - userData.count);

  return {
    success,
    limit: options.limit,
    remaining,
    reset: userData.resetTime,
  };
}
