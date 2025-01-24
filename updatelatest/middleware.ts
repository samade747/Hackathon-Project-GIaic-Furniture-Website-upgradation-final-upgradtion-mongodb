// middleware.ts (at project root)
import { clerkMiddleware } from '@clerk/nextjs/server';

// ...existing code...

const middleware = clerkMiddleware({
  publicRoutes: [
    "/",
    "/shop",
    "/myaccount",
    "/sign-in(.*)",
    "/sign-up(.*)",
    // Add any other public routes here
  ],
});

export const config = {
  matcher: [
    // Match all request paths except for:
    // - _next (Next.js internals)
    // - static files
    // - favicon.ico
    "/((?!.*\\..*|_next|favicon.ico).*)",
  ],
};
