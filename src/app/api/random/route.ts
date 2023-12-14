import prismadb from '@/../lib/prismadb'

export async function GET() {
  const movieCount = await prismadb.movie.count()
  const randomIndex = Math.floor(Math.random() * movieCount)
  const randomMovies = await prismadb.movie.findMany({
    take: 1,
    skip: randomIndex,
  })

  return new Response(JSON.stringify(randomMovies[0]), { status: 200 })
}
