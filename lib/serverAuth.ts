import { NextApiRequest, NextApiResponse } from 'next'

import prismadb from '@/../lib/prismadb'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, nextAuthOptions)

  if (!session?.user?.email) {
    throw new Error('Not logged in')
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  })

  if (!currentUser) {
    throw new Error('User not found')
  }

  return { currentUser }
}

export default serverAuth
