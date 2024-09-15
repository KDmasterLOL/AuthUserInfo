import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { State } from './lib/token.store'

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname

  const cookie = cookies().get('token')?.value
  const token: State | undefined = cookie ? JSON.parse(cookie).state : undefined
  const there_is_profile = (token && token.tokens)
    ? (await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
      headers: {
        "Authorization": "Bearer " + token.tokens.access
      }
    })).ok
    : false

  if (path == '/') return NextResponse.redirect(new URL('/login', req.nextUrl))
  if (path == '/login' && there_is_profile) return NextResponse.redirect(new URL('/MyInfo/TimeOff', req.nextUrl))
  if (path != '/login' && there_is_profile == false) return NextResponse.redirect(new URL('/login', req.nextUrl))

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
