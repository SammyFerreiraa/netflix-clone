'use client'

import { Perfil } from '@/components/profiles'
import { useRouter } from 'next/navigation'

const ProfilesUsers = () => {
  const router = useRouter()
  return (
    <div className="mt-10 flex items-center justify-center gap-8">
      <div onClick={() => router.replace('/')}>
        <Perfil />
      </div>
    </div>
  )
}

export default ProfilesUsers
