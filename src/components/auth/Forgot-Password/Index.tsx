import React, { useState } from "react"
import { Link } from "react-router-dom"
import validator from "validator"
import Input from "../../layout/Input/Input"

const Index = () => {
  const [email, setEmail] = useState("")
  const [isEmail, setIsEmail] = useState(true)

  const formatVal = (val: string) => {
    return val.trim().toLowerCase()
  }

  const validateEmail = () => {
    const testEmail = formatVal(email)

    if (!validator.isEmail(testEmail)) {
      setIsEmail(false)
      setTimeout(() => {
        setIsEmail(true)
      }, 2000)
      return false
    }

    return true
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLFormElement
    e.preventDefault()

    if (validateEmail() == false) return

    const userEmail = formatVal(email)

    console.log(userEmail)
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[460px] h-fit">
          <img src="/svg/logo.svg" alt="" className="mx-auto mb-16" />
          <div>
            <h1 className="font-medium text-authH1 mb-4">
              Sign in to Purrniture
            </h1>
            <p className="mb-8 text-[#808080]">
              Enter the email address you used when you joined and we'll send
              you your password.
            </p>
            <form action="" onSubmit={handleSubmit}>
              <Input
                id="email"
                label="Email"
                value={email}
                placeholder="Enter your email address"
                type="email"
                isError={!isEmail}
                errorMessage="Invalid email"
                onChange={(e: React.SyntheticEvent) => {
                  let target = e.target as HTMLInputElement
                  setEmail(target.value)
                }}
              />
              <button
                type="submit"
                className="w-full bg-orange53 text-white py-[14.5px] rounded-[10px]"
              >
                Send reset instruction
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
