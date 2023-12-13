import { NextApiRequest, NextApiResponse } from 'next'
import serverAuth from '@/../lib/serverAuth'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { currentUser } = await serverAuth(req, res)

  return new Response(JSON.stringify(currentUser), { status: 200 })
}

export { handler as GET }
