'use client'

import { Billboard, MovieList } from '@/components'
import { Navbar } from '@/components/navbar'
import useMovieList from '@/hooks/useMovieList'

export default function Home() {
  const { data: movies = [] } = useMovieList()
  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies.movies} />
      </div>
    </>
  )
}
