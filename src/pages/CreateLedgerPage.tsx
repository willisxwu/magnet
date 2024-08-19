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
    <div className='mx-auto py-10 flex flex-center flex-col gap-5 '>
      <div className='p-5 w-40% flex justify-between items-center flex-col aspect-ratio-3/4 rounded-2 bg-[#2E84C7] text-white'>
        <h2>{name || t('ledger.myFirstLedger')}</h2>
        <p className='text-bold'>{currency}</p>
      </div>
      <input
        type='text'
        placeholder={t('ledger.myFirstLedger')}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='px-4 py-2 rounded'
      />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className='px-4 py-2 rounded'
      >
        {currencyOptions}
      </select>
      <button
        onClick={handleCreateLedger}
        className='px-10 py-3.5 rounded-10 text-bold'
      >
        {t('general.complete')}
      </button>
    </div>
  )
}

export default CreateLedgerPage
