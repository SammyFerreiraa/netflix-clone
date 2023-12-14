'use client'

import React, { useCallback, useMemo } from 'react'
import axios from 'axios'

import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'
import useFavorites from '@/hooks/useFavorites'
import { useSession } from 'next-auth/react'
import useCurrentUser from '@/hooks/UseCurrentUser'

interface FavoriteButtonProps {
  movieId: number
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites()
  const { data: currentUser, mutate } = useCurrentUser()

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || []

    return list.includes(movieId)
  }, [currentUser, movieId])

  const toggleFavorites = useCallback(async () => {
    let response

    if (isFavorite) {
      response = await axios.delete(`/api/favorite`, { data: { movieId } })
    } else {
      response = await axios.post(`/api/favorite`, { movieId })
    }

    const updatedFavoritesIds = response?.data?.favoritesIds

    mutate({
      ...currentUser,
      favoriteIds: updatedFavoritesIds,
    })

    mutateFavorites()
  }, [movieId, isFavorite, currentUser, mutate, mutateFavorites])

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus

  return (
    <div
      onClick={toggleFavorites}
      className="group-item flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-white text-white transition hover:border-neutral-300 lg:h-10 lg:w-10"
    >
      <Icon size={25} />
    </div>
  )
}

export default FavoriteButton
