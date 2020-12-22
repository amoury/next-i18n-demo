import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const {pathname} = useRouter()

  const handleLangSwitch = lang => {
    console.log(window.location.origin)
    const { origin } = window.location;
    window.location.replace(`${origin}/${lang}${pathname}`)
  }

  return (
    <>
      <nav className={styles.nav}>
        <h1>Language switcher demo app</h1>
        <div className={styles.languageSwitcher}>
          <span onClick={() => handleLangSwitch('en')} className={styles.lang}>EN</span> | 
          <span onClick={() => handleLangSwitch('ar')} className={styles.lang}>AR</span> | 
          <span onClick={() => handleLangSwitch('fr')} className={styles.lang}>FR</span>
        </div>
      </nav>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
