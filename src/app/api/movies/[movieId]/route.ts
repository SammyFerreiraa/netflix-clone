import prismadb from '@/../lib/prismadb'
import serverAuth from '@/../lib/serverAuth'

export async function GET(req: Request) {
  await serverAuth()

  const movieId = await req.url.split('/').at(-1)

  if (typeof movieId !== 'string') throw new Error('Invalid ID')

  if (!movieId) throw new Error('Invalid movieId')

  const movie = await prismadb.movie.findUnique({
    where: {
      id: movieId,
    },
  })

  if (!movie) throw new Error('Invalid ID')

  return new Response(JSON.stringify(movie), { status: 200 })
}
