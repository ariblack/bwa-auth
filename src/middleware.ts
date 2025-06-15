// src/middleware.ts
import { NextResponse, type NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "./routes";

export async function middleware(request: NextRequest) {
  const session = getSessionCookie(request);

  const isApiAuth = request.nextUrl.pathname.startsWith(apiAuthPrefix);

  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname);

  const isAuthRoute = () => {
    return authRoutes.some((path) => request.nextUrl.pathname.startsWith(path));
  };

  if (isApiAuth) {
    return NextResponse.next();
  }

  if (isAuthRoute()) {
    if (session) {
      return NextResponse.redirect(
        new URL(DEFAULT_LOGIN_REDIRECT, request.url)
      );
    }
    return NextResponse.next();
  }

  if (!session && !isPublicRoute) {
    return NextResponse.redirect(new URL(authRoutes[0], request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Kecuali untuk static files, image, favicon, dan file gambar
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
