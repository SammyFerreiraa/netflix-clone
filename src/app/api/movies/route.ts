import serverAuth from '@/../lib/serverAuth'
import prismadb from '@/../lib/prismadb'

export async function GET() {
  try {
    await serverAuth()

    const movies = await prismadb.movie.findMany()

    return new Response(JSON.stringify({ movies }), {
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
    })
  }
}
