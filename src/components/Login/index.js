import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Login = props => {
  const onClickSuccess = jwtToken => {
    const {history} = props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  const onClickLogin = async () => {
    const url = 'https://apis.ccbp.in/login'

    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      onClickSuccess(data.jwt_token)
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="container">
      <h1 className="title">Please Login</h1>
      <button className="btn" type="button" onClick={onClickLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
