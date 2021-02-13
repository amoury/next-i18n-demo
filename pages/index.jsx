import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useLocale from '../hooks/useLocale';

export default function Home() {
  const { t } = useLocale();
  return (
    <div className={styles.container}>
      
      <div className={styles.content}>
        <h1>{t('welcome_to_the_demo', { name: 'Ansar' })}</h1>

        <p>{t('lipsum_dummy_content')}</p>
      </div>
    </div>
  )
}
