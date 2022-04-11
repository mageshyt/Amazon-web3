import { createContext } from 'react'
import { useMoralis } from 'react-moralis'

export const UserAuthContext = createContext()

export const UserAuthProvider = ({ children }) => {
  //Track category
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
      await authenticate({ signingMessage: 'Log in using Moralis' })
        .then(function (user) {
          console.log('logged in user:', user)
          console.log(user?.get('ethAddress'))
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  const logOut = async () => {
    await logout()
    console.log('logged out')
  }

  return (
    <UserAuthContext.Provider
      value={{ login, logOut, isAuthenticated, user, account }}
    >
      {children}
    </UserAuthContext.Provider>
  )
}
