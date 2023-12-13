import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

type PrivateLayoutProps = {
  children: React.ReactNode
}

const PrivateLayout = async ({ children }: PrivateLayoutProps) => {
  const session = await getServerSession(nextAuthOptions)

  if (!session) {
    redirect('/auth')
  }
  return <>{children}</>
}

export default PrivateLayout
