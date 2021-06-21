import styles from './header.module.scss'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.container}>
      <Link href="/">
        <a>
          <img
            className={styles.linkImg}
            src="/images/logo.svg"
            alt="logo"
          />
        </a>
      </Link>
    </header>
  )
}
