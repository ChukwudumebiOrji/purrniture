import React, { useState } from "react"
import { Link } from "react-router-dom"
import Checkbox from "../../layout/Checkbox/Checkbox"
import Input from "../../layout/Input/Input"
import { v4 as uuidv4 } from "uuid"
import validator from "validator"

const Index = () => {
  const [fname, setFname] = useState("")
  const [isName, setIsName] = useState(true)
  const [email, setEmail] = useState("")
  const [isEmail, setIsEmail] = useState(true)
  const [password, setPassword] = useState("")
  const [isPassword, setIsPassword] = useState(true)
  const [isChecked, setIsChecked] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const user = {
    name: "",
    email: "",
    password: "",
    userId: "",
  }

  const formatVal = (val: string) => {
    return val.trim().toLowerCase()
  }

  const validateName = () => {
    const testName = formatVal(fname)
    const userNameArr = testName.split(" ")

    return userNameArr.every((el) => {
      if (!validator.isAlpha(el)) {
        setIsName(false)
        setTimeout(() => {
          setIsName(true)
        }, 2000)
        return false
      }

      return true
    })
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

    if (
      validateName() == false ||
      validateEmail() == false ||
      validatePassword() == false
    )
      return

    user.password = password
    user.email = formatVal(email)
    user.name = formatVal(fname)
    user.userId = uuidv4().slice(-13, -1)

    console.log(user)
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-[460px] h-fit">
          <img src="/svg/logo.svg" alt="" className="mx-auto mb-16" />
          <div>
            <h1 className="font-medium text-authH1 mb-4">
              Sign up to Purrniture
            </h1>
            <p className="mb-8">
              Already have an account?{" "}
              <Link to={"/auth/login"} className="text-orange53">
                Sign in now
              </Link>
            </p>
            <form action="" onSubmit={handleSubmit}>
              <Input
                id="fname"
                label="Full Name"
                value={fname}
                placeholder="Enter your full name"
                type="text"
                onChange={(e: React.SyntheticEvent) => {
                  let target = e.target as HTMLInputElement
                  setFname(target.value)
                }}
                isError={!isName}
                errorMessage="Name must contain only letters"
              />
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
                placeholder="6+ characters and a number"
                type={showPassword ? "text" : "password"}
                isError={!isPassword}
                errorMessage="Password must be at least 6 characters and must have a number"
                onChange={(e: React.SyntheticEvent) => {
                  let target = e.target as HTMLInputElement
                  setPassword(target.value)
                }}
              />

              <Checkbox
                value={isChecked}
                onChange={(e: React.SyntheticEvent) => {
                  let target = e.target as HTMLInputElement
                  setIsChecked(target.checked)
                }}
              >
                By signing up, I agree to Terms & conditions and Privacy policy
              </Checkbox>

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
