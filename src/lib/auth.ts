import { SignJWT, jwtVerify, type JWTPayload } from 'jose';

const encoder = new TextEncoder();

function getJwtSecret(): Uint8Array {
  const secret = process.env.ADMIN_JWT_SECRET || 'dev-admin-secret-change-me';
  return encoder.encode(secret);
}

export type AdminJwtPayload = JWTPayload & {
  role: 'admin';
  sub: string;
};

export async function createAdminJwt(subject: string): Promise<string> {
  const token = await new SignJWT({ role: 'admin', sub: subject })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getJwtSecret());
  return token;
}

export async function verifyAdminJwt(token: string): Promise<AdminJwtPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getJwtSecret());
    if (payload.role !== 'admin') return null;
    return payload as AdminJwtPayload;
  } catch {
    return null;
  }
}

export const ADMIN_SESSION_COOKIE = 'admin_session';

export function getSessionCookieOptions() {
  // 7 days
  const maxAge = 60 * 60 * 24 * 7;
  return {
    httpOnly: true as const,
    secure: true as const,
    sameSite: 'lax' as const,
    path: '/',
    maxAge,
  };
}
