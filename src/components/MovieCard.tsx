'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { BsFillPlayFill } from 'react-icons/bs'
import FavoriteButton from './FavoriteButton'
import useInfoModal from '@/hooks/useInfoModal'
import { BiChevronDown } from 'react-icons/bi'

interface MovieCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const route = useRouter()
  const { openModal } = useInfoModal()
  return (
    <div className="group relative col-span-1 h-[12vh] bg-zinc-900 md:h-[17vh] lg:h-[23vh]">
      <img
        className="duration h-[12vh] w-full cursor-pointer rounded-md object-cover shadow-xl transition delay-300 group-hover:opacity-90 sm:group-hover:opacity-0 md:h-[17vh] lg:h-[23vh]"
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
      <div className="invisible absolute top-0 z-10 w-full scale-0 opacity-0 transition delay-300 duration-200 group-hover:-translate-y-[6vw] group-hover:translate-x-[1.7vw] group-hover:scale-110 group-hover:opacity-100 sm:visible">
        <img
          className="duration h-[12vh] w-full cursor-pointer rounded-t-md object-cover shadow-xl transition md:h-[17vh] lg:h-[23vh]"
          src={data.thumbnailUrl}
          alt="Thumbnail"
        />
        <div className="absolute z-10 w-full rounded-b-md bg-zinc-800 p-2 shadow-md transition lg:p-4">
          <div className="flex flex-row items-center gap-3">
            {' '}
            <div
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white transition hover:bg-neutral-300 lg:h-10 lg:w-10"
              onClick={() => route.push(`/watch/${data?.id}`)}
            >
              <BsFillPlayFill size={30} />
            </div>
            <FavoriteButton movieId={data?.id} />
            <div
              onClick={() => openModal(data?.id)}
              className="group/item ml-auto flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-white transition hover:border-neutral-300 lg:h-10 lg:w-10"
            >
              <BiChevronDown
                siz={30}
                className="w4 text-white group-hover/item:text-neutral-300"
                size={20}
              />
            </div>
          </div>
          <p className="mt-4 text-sm font-semibold text-green-400 lg:text-base">
            New <span className="text-white">2023</span>
          </p>

          <div className="mt-3 flex flex-row items-center gap-2">
            <p className="text-[10px] text-white lg:text-sm">{data.duration}</p>
          </div>
          <div className="mt-3 flex flex-row items-center gap-2">
            <p className="text-[10px] text-white lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
