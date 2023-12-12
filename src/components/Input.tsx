'use client'

interface InputProps {
  id: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any
  value: string
  label: string
  type?: string
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        type={type}
        value={value}
        id={id}
        className="invalid:border-b-1 peer block w-full appearance-none rounded-md bg-neutral-700 px-6 pb-1 pt-6 text-sm text-white focus:outline-none focus:ring-0"
        placeholder=" "
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className="absolute left-6 top-4  z-10 origin-[0] -translate-y-3 scale-75 transform text-sm  text-zinc-400 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
      >
        {label}
      </label>
    </div>
  )
}

export default Input
