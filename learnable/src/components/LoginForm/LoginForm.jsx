import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./LoginForm.css"

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })

  const handleChange = (event) => {
    const { id, value } = event.target
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }))
  }

  const navigate = useNavigate()
// Sam
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(credentials)
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        // console.log(response)
        if (response.token) {
          window.localStorage.setItem("token", response.token)
          navigate("/workshops")
        } else {
          alert("Unable to log in with provided credentials.")
        }
      })
    }
  }

  const postData = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    )
    console.log(JSON.stringify(credentials))
    return response.json()
  }

  return (
    <form>
      <div className="login-1">
        <div className="login-1b">
          <div className="login-2">
            <div className="login-3">
              <div className="login-3b">
                <h3>My Login Details</h3>
              </div>
              <div className="login-4a">
                <label htmlFor="email">Email:</label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="username"
                  placeholder="Enter email"
                ></input>
              </div>

              <div className="login-4a">
                <label htmlFor="password">Password:</label>
                <input
                  onChange={handleChange}
                  type="password"
                  id="password"
                  placeholder="Enter password"
                ></input>
              </div>
              <div className="login-4b">
                <button type="submit" onClick={handleSubmit} className="btn-4">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
