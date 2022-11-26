import React, { useState } from "react"
import { Link } from "react-router-dom"
import validator from "validator"
import Checkbox from "../../layout/Checkbox/Checkbox"
import Input from "../../layout/Input/Input"

const Index = () => {
  const [email, setEmail] = useState("")
  const [isEmail, setIsEmail] = useState(true)
  const [password, setPassword] = useState("")
  const [isPassword, setIsPassword] = useState(true)
  const [isChecked, setIsChecked] = useState(true)

  const user = {
    email: "",
    password: "",
  }

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

  const validatePassword = () => {
    const testPassword = password
    const strongPasswordOptions = {
      minLength: 6,
      minLowercase: 0,
      minUppercase: 0,
      minNumbers: 1,
      minSymbols: 0,
    }

    if (!validator.isStrongPassword(testPassword, strongPasswordOptions)) {
      setIsPassword(false)
      setTimeout(() => {
        setIsPassword(true)
      }, 2000)
      return false
    }

    return true
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLFormElement
    e.preventDefault()

    if (validateEmail() == false || validatePassword() == false) return

    user.password = password
    user.email = formatVal(email)

    console.log(user)
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
            <p className="mb-8">
              Don't have an account?{" "}
              <Link to={"/auth/register"} className="text-orange53">
                Sign up now
              </Link>
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

              <Input
                id="password"
                label="Password"
                value={password}
                placeholder="Enter Password"
                type="password"
                isError={!isPassword}
                errorMessage="Password must be at least 6 characters and must have a number"
                onChange={(e: React.SyntheticEvent) => {
                  let target = e.target as HTMLInputElement
                  setPassword(target.value)
                }}
              />

              <div className="flex items-start justify-between">
                <Checkbox
                  value={isChecked}
                  onChange={(e: React.SyntheticEvent) => {
                    let target = e.target as HTMLInputElement
                    setIsChecked(target.checked)
                  }}
                >
                  Remember me
                </Checkbox>
                <Link to="/auth/forgot-password" className="text-orange53">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-orange53 text-white py-[14.5px] rounded-[10px]"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
