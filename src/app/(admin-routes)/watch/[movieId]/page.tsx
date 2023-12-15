'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import useMovie from '@/hooks/useMovie'

import { AiOutlineArrowLeft } from 'react-icons/ai'

const Page = () => {
  const router = useRouter()
  const searchParams = usePathname()
  const movieId = searchParams.replace('/watch/', '')

  const { data } = useMovie(movieId as string)
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed z-10 flex w-full flex-row gap-8 bg-black bg-opacity-70 p-4 text-white">
        <button onClick={() => router.back()}>
          <AiOutlineArrowLeft size={40} />
        </button>
        <p className="text-xl font-bold md:text-3xl">
          <span className="font-light">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        src={data?.videoUrl}
        className="h-full w-full"
      ></video>
    </div>
  )
}

export default Page
