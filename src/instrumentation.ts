import * as Sentry from '@sentry/nextjs';

export async function register() {
  if (
    process.env.NODE_ENV !== 'production' &&
    process.env.NEXT_RUNTIME === 'nodejs' &&
    process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'
  ) {
    await import('../mocks');
  }

  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('../sentry.server.config');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('../sentry.edge.config');
  }
}

export const onRequestError = Sentry.captureRequestError;
