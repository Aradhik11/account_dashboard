import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyAuth } from './lib/auth';

// Temporarily disabled authentication for development
export async function middleware(request: NextRequest) {
  // Allow all requests for now
  return NextResponse.next();

  // Authentication code commented out for development
  /*
  // Exclude authentication for public routes
  const publicPaths = ['/api/auth/login', '/api/auth/register'];
  if (publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Check for API routes that need protection
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const token = request.headers.get('authorization')?.split(' ')[1];

    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    try {
      const verified = await verifyAuth(token);
      if (!verified) {
        return NextResponse.json(
          { error: 'Invalid authentication token' },
          { status: 401 }
        );
      }

      // Add user info to request headers for downstream use
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-user-id', verified.userId);
      requestHeaders.set('x-user-role', verified.role);

      return NextResponse.next({
        headers: requestHeaders,
      });
    } catch (error) {
      return NextResponse.json(
        { error: 'Authentication failed' },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
  */
} 