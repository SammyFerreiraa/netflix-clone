import prismadb from '@/../lib/prismadb'
import serverAuth from '@/../lib/serverAuth'

export async function GET() {
  const { currentUser } = await serverAuth()

  const favoriteMovies = await prismadb.movie.findMany({
    where: {
      id: {
        in: currentUser.favoriteIds,
      },
    },
  })

  return new Response(JSON.stringify(favoriteMovies), {
    status: 200,
  })
}
