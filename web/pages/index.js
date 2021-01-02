
import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { connectToDatabase } from '../util/mongodb'
import { faKey, faEnvelope, faEye, faEyeSlash, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import Navbar from './components/Navbar'
import styles from '../style/Footer.module.css'
import stylesIn from '../style/Index.module.css'

export default function Index({ isConnected }) {
  const [changeType, setChangeType] = useState(false)
  const inputTypeRef = useRef(null)
  const linkTypeRef = useRef(null)

  useEffect(() => {
    setChangeType(true)

  }, [])

  const handleChangeIcon = () => {
    setChangeType(!changeType)
    if (changeType) inputTypeRef.current.type = 'text'
    else inputTypeRef.current.type = 'password' 
  }
  const changeIcon = change => {
    if (change) return <FontAwesomeIcon
      icon={faEyeSlash}
      className={stylesIn.iconType}
    />

    return <FontAwesomeIcon
      icon={faEye}
      className={stylesIn.iconType}
    />
  
  }
  return (
    <div>
      <Head>
        <title>Login - Web Notices </title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className={stylesIn.main}>
        <div className={stylesIn.social}>
          <img src="/images/learning.svg" className={stylesIn.imageBack} />
        </div>

        <div className={stylesIn.login}>
          <div className={stylesIn.logo}>
            <p className={stylesIn.title}>Web Notices <FontAwesomeIcon icon={faNewspaper} style={{ width: 65, marginLeft: 4 }} /> </p>
          </div>
          <form className={stylesIn.form}>
            <div className={stylesIn.inputForm}>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={stylesIn.iconFont} />
              <input
                type="text"
                className={stylesIn.input}
                placeholder="Email"
                maxLength={30}
              />

            </div>
            <div className={stylesIn.inputForm}>
              <FontAwesomeIcon
                icon={faKey}
                className={stylesIn.iconFont}
              />
              <input
                type="password"
                className={stylesIn.input}
                placeholder="Senha"
                maxLength={12}
                ref={inputTypeRef}
              />
              <a onClick={handleChangeIcon}>{changeIcon(changeType)}</a>
            </div>
            <button
              type="submit"
              className={stylesIn.submit}>Login
              <FontAwesomeIcon icon={faSignInAlt}
                style={{ width: 18, marginLeft: 3 }}
              /></button>
            <Link href="/register" >
              <p className={stylesIn.register}> Não tem uma conta? Crie a sua já! </p>
            </Link>
          </form>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer> */}


    </div>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected() // Returns true or false
  return {
    props: { isConnected },
  }
}
