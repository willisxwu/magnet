import SignInButton from '../components/SignInButton'
import { FaFacebookF, FaGoogle, FaApple, FaUser, FaLine } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const SignInPage = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className='mx-auto h-100vh flex flex-center flex-col gap-5'>
      <p className='px-5 text-(8 bold)'>{t('general.welcome')}</p>
      <img
        src='https://img.icons8.com/external-flat-02-chattapat-/400/external-attract-money-flat-02-chattapat-.png'
        alt='Welcome Image'
        className='my-5 w-3/4 max-w-50'
      />

      <div className='flex flex-center flex-col gap-3'>
        <SignInButton
          color='#4267B2'
          icon={<FaFacebookF />}
          text={t('login.facebook')}
        />
        <SignInButton
          color='#DB4437'
          icon={<FaGoogle />}
          text={t('login.google')}
        />
        <SignInButton
          color='#4BC764'
          icon={<FaLine />}
          text={t('login.line')}
        />
        <SignInButton
          color='#000000'
          icon={<FaApple />}
          text={t('login.apple')}
        />
        <span className='text-4'>-</span>
        <SignInButton
          color='#9E9E9E'
          icon={<FaUser />}
          text={t('login.guest')}
        />
      </div>
    </div>
  )
}

export default SignInPage
