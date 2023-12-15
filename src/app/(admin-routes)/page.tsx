'use client'

import { Billboard, MovieList } from '@/components'
import InfoModal from '@/components/InfoModal'
import { Navbar } from '@/components/navbar'
import useFavorites from '@/hooks/useFavorites'
import useInfoModal from '@/hooks/useInfoModal'
import useMovieList from '@/hooks/useMovieList'

export default function Home() {
  const { data: movies = [] } = useMovieList()
  const { data: favorites = [] } = useFavorites()
  const { isOpen, closeModal } = useInfoModal()
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies.movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  )
}
