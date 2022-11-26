import React from "react"

const Checkbox = ({ children, ...rest }: any) => {
  return (
    <div className="mb-12 text-[#808080] flex items-center">
      <input type="checkbox" className="mr-2 w-5 h-5" {...rest} />
      <div>{children}</div>
    </div>
  )
}

export default Checkbox
