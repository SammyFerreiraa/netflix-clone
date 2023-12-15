'use client'

import React from 'react'
import { BsPlayFill } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

interface PlayButtonProps {
  movieId: string
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="flex w-auto flex-row items-center rounded-md bg-white px-2 py-1 text-xs font-semibold transition hover:bg-neutral-500 md:px-4 md:py-2 lg:text-lg"
    >
      <BsPlayFill className="mr-1" size={25} />
      Play
    </button>
  )
}

export default PlayButton
