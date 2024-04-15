import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
    // console.log(`Check Middleware`);
    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/login' || path === '/register' || path==='/dashboard/docs';

    const token = request.cookies.get('__Secure-next-auth.session-token')?.value || ''

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

}

export const config = { matcher: ['/dashboard/', '/dashboard/settings', '/dashboard/subscriptions', '/dashboard/users'] };
