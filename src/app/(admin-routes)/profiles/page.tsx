'use client'

import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

const Home = async () => {
  const session = await getServerSession(nextAuthOptions)
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-center text-3xl text-white md:text-6xl">
          Who is watching: {session?.user?.name}
        </h1>
        <div className="mt-10 flex items-center justify-center gap-8">
          <div onClick={() => null}>
            <div className="group mx-auto w-44 flex-row">
              <div className="flex h-44 w-44  items-center justify-center overflow-hidden rounded-md border-2 border-transparent transition-colors group-hover:cursor-pointer group-hover:border-white">
                <img src="/images/default-red.png" alt="profile red" />
              </div>
              <div className="mt-4 text-center text-3xl text-gray-400 group-hover:text-white">
                {session?.user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
