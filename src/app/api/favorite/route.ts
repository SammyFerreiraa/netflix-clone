import { without } from 'lodash'

import prismadb from '@/../lib/prismadb'
import serverAuth from '@/../lib/serverAuth'
import { NextApiRequest } from 'next'

export async function POST(req: Request) {
  const { currentUser } = await serverAuth()

  const { movieId } = await req.json()

  const existingMovie = await prismadb.movie.findUnique({
    where: { id: movieId },
  })

  if (!existingMovie) {
    throw new Error('Invalid ID')
  }

  const user = await prismadb.user.update({
    where: {
      email: currentUser.email || '',
    },
    data: {
      favoriteIds: {
        push: movieId,
      },
    },
  })

  return new Response(JSON.stringify(user), {
    status: 200,
  })
}

export async function DELETE(req: Request) {
  const { currentUser } = await serverAuth()

  const { movieId } = await req.json()

  const existingMovie = await prismadb.movie.findUnique({
    where: { id: movieId },
  })

  if (!existingMovie) {
    throw new Error('Invalid ID')
  }

  const updatedFavoriteIds = without(currentUser.favoriteIds, movieId)

  const updatedUser = await prismadb.user.update({
    where: {
      email: currentUser.email || '',
    },
    data: {
      favoriteIds: updatedFavoriteIds,
    },
  })

  return new Response(JSON.stringify(updatedUser), {
    status: 200,
  })
}
