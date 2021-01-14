
import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { connectToDatabase } from '../util/mongodb'
import { faKey, faEnvelope, faEye, faEyeSlash, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SwitchTransition, CSSTransition, TransitionGroup } from "react-transition-group";
import * as uuid from 'uuid'
import stylesIn from '../style/Index.module.css'
import axios from 'axios'

export default function Index({ isConnected }) {
  const [changeType, setChangeType] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)
  const emailRef = useRef(null)

  useEffect(() => {
    setChangeType(true)
    emailRef.current.focus()
  }, [])

  const handleChangeIcon = () => {
    setChangeType(!changeType)
    if (changeType) passwordRef.current.type = 'text'
    else passwordRef.current.type = 'password'
  }

  const handleSubmit = async e => {
    e.preventDefault()
    // const response = await axios.post('/api/user')
    alert('os campos estão certinhos')
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
  const setValid = e => {
    e.target.setCustomValidity('informe um email válido')
  }

  return (
    <>
      <Head>
        <title>Login - Web Notices </title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      {isConnected ?

        <div>
          <TransitionGroup>
            <CSSTransition
              timeout={400}
            >
              <div className={ stylesIn.enter}>
                <main className={stylesIn.main}>
                  <div className={stylesIn.social}>
                    <img src="/images/learning.svg" className={stylesIn.imageBack} />
                  </div>
                  <div className={stylesIn.login}>
                    <div className={stylesIn.logo}>
                      <p className={stylesIn.title}>Web Notices
                        <FontAwesomeIcon
                          icon={faNewspaper}
                          style={{ width: 65, marginLeft: 4 }}
                        />
                      </p>
                    </div>
                    <form className={stylesIn.form} onSubmit={handleSubmit}>
                      <div className={stylesIn.inputForm}>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className={stylesIn.iconFont}
                        />
                        <input
                          type="email"
                          className={stylesIn.input}
                          placeholder="Email"
                          maxLength={30}
                          value={email}
                          onChange={e => setEmail(e.target.value.trim())}
                          onInvalid={setValid}
                          ref={emailRef}
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
                          ref={passwordRef}
                          value={password}
                          onChange={e => setPassword(e.target.value.trim())}
                        />
                        <a onClick={handleChangeIcon}>
                          {changeIcon(changeType)}
                        </a>
                      </div>
                      <button
                        type="submit"
                        className={stylesIn.submit}
                        disabled={!password || !email}
                      >Login
              <FontAwesomeIcon icon={faSignInAlt}
                          style={{ width: 18, marginLeft: 3 }}
                        /></button>
                      <Link href="/register" >
                        <p className={stylesIn.register}> Não tem uma conta? Crie a sua já! </p>
                      </Link>
                    </form>
                  </div>
                </main>
            </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
        : <h1>Error</h1>}
    </>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected() // Returns true or false

  return {
    props: { isConnected },

  }
}
