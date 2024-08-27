import { loginStorageManager } from './utils/StorageManager'
import SignInPage from './pages/SignInPage'
import CreateLedgerPage from './pages/CreateLedgerPage'
import { useEffect, useState } from 'react'

function App(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const savedLoginMethod = loginStorageManager.get('loginMethod')

    if (savedLoginMethod != null && savedLoginMethod != '') {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <>
      <div className='mx-auto h-100vh max-w-192 bg-white'>
        {isLoggedIn ? <CreateLedgerPage /> : <SignInPage />}
      </div>
    </>
  )
}

export default App
