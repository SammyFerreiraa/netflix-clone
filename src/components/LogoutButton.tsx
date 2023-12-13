'use client'

import { signOut } from 'next-auth/react'

const LogoutButton = () => {
  return (
    <button className="h-10 w-full bg-white" onClick={() => signOut()}>
      Sign Out
    </button>
  )
}

export default LogoutButton
