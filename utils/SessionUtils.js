import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export async function getNextAuthServerSession(context) {
  return await getServerSession(context.req, context.res, authOptions);
}

export function getUserIdFromSeesion(session) {
  return session?.user?.id || null;
}
