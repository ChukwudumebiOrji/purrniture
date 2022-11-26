import React from "react"

const Checkbox = ({ children, ...rest }: any) => {
  return (
    <span className="mb-12 text-[#808080] flex items-center">
      <input type="checkbox" className="mr-2 w-5 h-5" {...rest} />
      <div>{children}</div>
    </span>
  )
}

export default Checkbox
