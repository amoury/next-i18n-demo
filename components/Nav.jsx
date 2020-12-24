import Link from 'next/link';
import { useRouter } from 'next/router'

const Nav = () => {
  const {pathname} = useRouter()

  const handleLangSwitch = lang => {
    const { origin } = window.location;
    window.location.replace(`${origin}/${lang}${pathname}`)
  }

  return (
    <nav className="container py-4 my-4 mx-auto w-full sticky top-0 flex justify-between bg-white border-b z-50">
        <Link href="/">
          <a>
            <h1 className="font-bold uppercase">Next Demo App</h1>
          </a>
        </Link>
        <div>
          <Link href="/blog">
            <a>
              <span className="font-mono text-xs uppercase">/blog</span>
            </a>
          </Link>
        </div>
        <div className="flex min-w-150 justify-between text-xs items-center">
          <button onClick={() => handleLangSwitch('en')} className="cursor-pointer font-bold">EN</button> | 
          <button onClick={() => handleLangSwitch('ar')} className="cursor-pointer font-bold">AR</button> | 
          <button onClick={() => handleLangSwitch('fr')} className="cursor-pointer font-bold">FR</button>
        </div>
      </nav>
  )
}

export default Nav
