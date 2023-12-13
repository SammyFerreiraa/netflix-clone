import { NextApiRequest, NextApiResponse } from 'next'
import serverAuth from '@/../lib/serverAuth'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { currentUser } = await serverAuth(req, res)

  return new Response(JSON.stringify(currentUser), { status: 200 })
}
