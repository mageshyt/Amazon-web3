import React, { useContext } from 'react'
import { useMoralis } from 'react-moralis'
import { UserAuthContext } from '../../context/AuthContext'

const styles = {
  wrapper: 'flex items-center p-1 cursor-pointer hover:border flex-col',
  title: 'text-xs text-white',
}
const SignIn = () => {
  const { login, logOut, isAuthenticated } = useContext(UserAuthContext)
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
