import './App.css'
import { loginStorageManager } from './utils/StorageManager'
import SignInPage from './pages/SignInPage'
import CreateLedgerPage from './pages/CreateLedgerPage'
import { useEffect, useState } from 'react'

function App(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const savedLoginMethod = loginStorageManager.get('loginMethod')

    if (savedLoginMethod != null) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <>
      <div className='mx-auto max-w-192'>
        {isLoggedIn ? <CreateLedgerPage /> : <SignInPage />}
      </div>
    </>
  )
}

export default App
