import React from "react"

const Input = ({
  id,
  label,
  errorMessage,
  type,
  isError,
  placeholder,
  ...rest
}: any) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block mb-2">
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        {...rest}
        className="w-full px-6 py-[14px] rounded-[10px] bg-grayBg mb-2 outline-none"
      />
      {isError && <p className=" text-red-600">{errorMessage}</p>}
    </div>
  )
}

export default Input
