'use client'

import React from 'react'

const ProfilesUsers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-10 flex items-center justify-center gap-8">
      <div onClick={() => null}>{children}</div>
    </div>
  )
}

export default ProfilesUsers
