import serverAuth from '@/../lib/serverAuth'

export async function GET() {
  const { currentUser } = await serverAuth()

  return new Response(JSON.stringify(currentUser), { status: 200 })
}
