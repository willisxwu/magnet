import React from 'react'
import { loginStorageManager } from '../utils/StorageManager'

interface SignInButtonProps {
  color: string
  icon: React.ReactNode
  text: string
  className?: string
}

const SignInButton = ({
  color,
  icon,
  text,
  className = '',
}: SignInButtonProps): JSX.Element => {
  const handleClick = (method: string): void => {
    loginStorageManager.set('loginMethod', method)
    window.location.reload()
  }

  return (
    <button
      className={`py-3.5 w-full rounded-10 text-white text-bold ${className}`}
      style={{ backgroundColor: color }}
      onClick={() => handleClick(text)}
    >
      <div className='mx-auto flex flex-center'>
        <div>{icon}</div>
        <span className='min-w-40'>{text}</span>
      </div>
    </button>
  )
}

export default SignInButton