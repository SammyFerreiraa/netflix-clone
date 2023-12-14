import React from 'react'

import { isEmpty } from 'lodash'
import { MovieCard } from '.'

interface MovieListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>[]
  title: string
}
const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) return null
  return (
    <div className="mt-4 space-y-8 px-4 md:px-12">
      <div>
        <p className="mb-4 font-semibold text-white md:text-xl lg:text-2xl">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
