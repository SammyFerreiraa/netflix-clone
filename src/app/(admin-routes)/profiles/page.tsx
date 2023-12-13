import { ProfileUser, ProfilesUsers } from '@/components'

const Home = async () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-center text-3xl text-white md:text-6xl">
          Who is watching?
        </h1>
        <ProfilesUsers>
          <ProfileUser />
        </ProfilesUsers>
      </div>
    </div>
  )
}

export default Home
