import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import SearchBar from './search-bar'
import { Arrow, Logo } from '../icons'
import styles from './header.module.css'

const ActiveLink = ({ href, children }) => {
  const { pathname } = useRouter()

  return (
    <Link href={href}>
      <a
        className={`${styles.link} ${
          pathname.split('/')[1] === href.split('/')[1] ? styles.active : ''
        }`}
      >
        {children}
      </a>
    </Link>
  )
}

export default () => {
  const [mobileNavShown, setMobileNavShown] = useState(false)

  const toggle = () => setMobileNavShown(!mobileNavShown)

  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.logo} aria-label="MSSlogo">
            <img src="./msslogosmall.png" alt="bug" className={styles.logo}  /> 
          </a>
        </Link>

        <nav className={styles.desktopNav}>
          <ActiveLink href="/patterns">Patterns</ActiveLink>
          <ActiveLink href="/demo">Demo</ActiveLink>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://example.com"
            className={styles.link}
          >
            GitHub
          </a>         
          <ActiveLink href="/blog">Blog</ActiveLink>
        </nav>

        <div className={styles.rightNav}>
          <SearchBar />
        </div>

        <span className={styles.toggle} onClick={toggle}>
          <Arrow height={14} width={26} />
        </span>
      </header>

      <nav
        className={`${styles.mobileNav} ${mobileNavShown ? styles.active : ''}`}
      >
        <Link href="/patterns">
          <a>Patterns</a>
        </Link>
        <Link href="/demo">
          <a>Demo</a>
        </Link>
        <Link href="/store/submit">
          <a>Submit</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <SearchBar />
      </nav>
    </>
  )
}
