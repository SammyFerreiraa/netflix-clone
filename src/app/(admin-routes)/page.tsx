import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'
import { LogoutButton } from '@/components'

export default async function Home() {
  const data = await getServerSession(nextAuthOptions)
  return (
    <>
      <h1 className="text-4xl text-white">Netflix Clone</h1>
      <p className="text-4xl text-white">Logged in as : {data?.user?.name}</p>
      <LogoutButton />
    </>
  )
}
