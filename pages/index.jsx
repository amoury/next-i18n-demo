import Head from 'next/head'
import useLocale from '../hooks/useLocale';

export default function Home() {
  const { t } = useLocale();
  return (
    <div className="px-28">
      
      <div className="my-24">
        <h1 className="font-medium">{t('welcome_to_the_demo', { name: 'Ansar' })}</h1>

        <p>{t('lipsum_dummy_content')}</p>
      </div>
    </div>
  )
}
