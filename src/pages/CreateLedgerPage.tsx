import { useState } from 'react'
import { localStorageManager } from '../utils/StorageManager'
import { defaultLocale, type Locale } from '../utils/locale'
import { useTranslation } from 'react-i18next'

const CreateLedgerPage = (): JSX.Element => {
  const { t } = useTranslation()
  const [name, setName] = useState('')

  const currencyMap: Record<Locale, string> = {
    'en-US': 'USD',
    'ja-JP': 'JPY',
    'zh-HK': 'HKD',
    'zh-TW': 'TWD',
  }
  const savedLanguage = localStorageManager.get('locale')
  const [currency, setCurrency] = useState(
    currencyMap[savedLanguage || defaultLocale]
  )

  const currencyOptions = Object.entries(currencyMap).map(([key, value]) => (
    <option key={key} value={value}>
      {value}
    </option>
  ))

  const handleCreateLedger = (): void => {
    console.log('Ledger Created:', { name, currency })
  }

  return (
    <div className='h-100vh flex flex-center flex-col'>
      <div className='p-5 w-70% flex flex-col aspect-ratio-3/4 rounded-2 bg-blue'>
        <textarea
          placeholder={t('ledger.myFirstLedger')}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full h-full text-(8 white) bg-transparent placeholder-(white) break-words'
        />
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className='ml-auto mr-0 py-2 text-(5 white) bg-transparent'
        >
          {currencyOptions}
        </select>
      </div>

      <button
        onClick={handleCreateLedger}
        className='mt-10 px-10 py-3.5 rounded-10 text-bold bg-amber'
      >
        {t('general.complete')}
      </button>
    </div>
  )
}

export default CreateLedgerPage
