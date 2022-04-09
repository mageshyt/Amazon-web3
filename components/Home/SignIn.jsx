import React from 'react'
import { useMoralis } from 'react-moralis'

const styles = {
  wrapper: 'flex items-center flex-col',
  title: 'text-xs text-white',
}
const SignIn = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis()
  //   console.log('account', account)
  const login = async () => {
    console.log('login')
    if (!isAuthenticated) {
      await await authenticate({ signingMessage: 'Log in using Moralis' })
        .then(function (user) {
          console.log('logged in user:', user)
          console.log(user?.get('ethAddress'))
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  console.log({ isAuthenticated, user })
  const logOut = async () => {
    await logout()
    console.log('logged out')
  }
  return (
    <div>
      <div className={styles.wrapper}>
        <span className={styles.title}>Hello,Sign in</span>
        {/* Sign in button */}
        {!isAuthenticated ? (
          <button
            onClick={login}
            className="rounded-full bg-transparent  font-bold text-white"
          >
            Sign In
          </button>
        ) : (
          <button
            onClick={logOut}
            className="rounded-full bg-transparent  font-bold text-white"
          >
            Log out
          </button>
        )}
      </div>
    </div>
  )
}

export default SignIn
