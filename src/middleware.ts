// Auth gateway for Hermy HQ
// When GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are set in Vercel env,
// this middleware blocks unauthenticated access.
// For local dev or when env vars are absent, the dashboard is public.

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if Google auth is configured in environment
  const hasGoogleAuth =
    process.env.GOOGLE_CLIENT_ID &&
    process.env.GOOGLE_CLIENT_SECRET &&
    process.env.GOOGLE_CLIENT_ID !== 'your_google_client_id_here';

  // If not configured, allow public access
  if (!hasGoogleAuth) {
    return NextResponse.next();
  }

  // If configured, check for auth cookie
  const token = request.cookies.get('auth_token')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|login|api/auth|data.json).*)',
  ],
};
