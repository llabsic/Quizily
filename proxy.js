
// proxy.js
import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function proxy(request) {
  let response = NextResponse.next({
    request: {
      ...request,
      nextUrl: request.nextUrl,
    },
  });

  // Supabase client with cookies
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // console.log('SESSION in proxy:', session)

  // Allow public routes (sign-in, root)
  const pathname = request.nextUrl.pathname
  if(pathname.startsWith('/sign-in') || pathname === '/') {
    return response
  }

  if(!session?.user) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  return response
}

// Match protected routes
export const config = {
  matcher: ['/dashboard/:path*'],
}
