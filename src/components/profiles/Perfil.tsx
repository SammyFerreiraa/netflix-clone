import { useSession } from 'next-auth/react'

const Perfil = () => {
  const { data } = useSession()
  return (
    <div className="group mx-auto w-44 flex-row">
      <div className="flex h-44 w-44  items-center justify-center overflow-hidden rounded-md border-2 border-transparent transition-colors group-hover:cursor-pointer group-hover:border-white">
        <img src="/images/default-red.png" alt="profile red" />
      </div>
      <div
        className={`${
          data?.user?.name === undefined
            ? 'min-h-[72px] rounded-md bg-zinc-800'
            : ''
        } mt-4 text-center text-3xl text-gray-400 group-hover:text-white`}
      >
        {data?.user?.name}
      </div>
    </div>
  )
}

export default Perfil
