import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import React from 'react'

const ProfileUser = async () => {
  const data = await getServerSession(nextAuthOptions)

  return (
    <div className="group mx-auto w-44 flex-row">
      <div className="flex h-44 w-44  items-center justify-center overflow-hidden rounded-md border-2 border-transparent transition-colors group-hover:cursor-pointer group-hover:border-white">
        <img src="/images/default-red.png" alt="profile red" />
      </div>
      <div className="mt-4 text-center text-3xl text-gray-400 group-hover:text-white">
        {data?.user?.name}
      </div>
    </div>
  )
}

export default ProfileUser
