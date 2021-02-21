import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'
import stylePage from '../style/Register.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { faKey, faEnvelope, faEye, faEyeSlash, faSignInAlt, faArrowLeft, faUserAlt, faNewspaper, faCheck, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios'
import { setValid } from '../util/function/customSet';

function Register() {
  const [changeType, setChangeType] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)

  const nameRef = useRef(null)
  const passwordRef = useRef(null)

  const showToast = ({ type, message }) => {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'warn':
        toast.warn(message);
        break;
      case 'error':
        toast.error(message);
        break;
      default:
        toast.info(message);
    }
  };

  useEffect(() => {
    setChangeType(true)
    nameRef.current.focus()
  }, [])

  const handleChangeIcon = () => {
    setChangeType(!changeType)
    if (changeType) passwordRef.current.type = 'text'
    else passwordRef.current.type = 'password'
  }

  const changeIcon = change => {
    if (change) return <FontAwesomeIcon
      icon={faEyeSlash}
      className={stylePage.slashPass}
    />
    return <FontAwesomeIcon
      icon={faEye}
      className={stylePage.slashPass}
    />
  }

  const handleSubmit = async  e => {
    try {
      e.preventDefault();
      
      const response = await axios.post('/api/user/create', {
        name: name.trim(),
        email: email.trim(),
        password: password.trim()
      });

      showToast(response.data)
      const { type } = response.data
      if (type === 'success') {
        setTimeout(() => {
          Router.push('/')
        }, 1500);
      }
    } catch (err) {
      showToast({ type: 'error', message: err.message })
    }
    
  }
  return <div> 
    <ToastContainer />
    <TransitionGroup>
      <CSSTransition
        timeout={400}
      >
        <div className={stylePage.exit}>
          <div className={stylePage.page}>
            <div className={stylePage.form} >
              <form onSubmit={handleSubmit}>   
                <p className={stylePage.title}>Web Notices
                  <FontAwesomeIcon
                    icon={faNewspaper}
                    style={{ width: 65, marginLeft: 4 }}
                  />
                </p>
                <h3 className={stylePage.title}>Registre-se
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    style={{ width: 65 }}
                  />
                </h3>
                <div className={stylePage.inputForm}>
                  <FontAwesomeIcon
                    icon={faUserAlt}
                    className={stylePage.iconFont}
                  />
                  <input
                    type="text"
                    placeholder="Nome Completo"
                    className={stylePage.input}
                    value={name}
                    onChange={e => setName(e.target.value.trimStart())}
                    maxLength={30}
                    ref={nameRef}
                  />
                </div>
                <div className={stylePage.inputForm}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={stylePage.iconFont}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className={stylePage.input}
                    value={email}
                    onChange={e => setEmail(e.target.value.trim())}
                    onInvalid={setValid}
                  />
                </div>
                <div className={stylePage.inputForm}>
                  <FontAwesomeIcon
                    icon={faKey}
                    className={stylePage.iconFont}
                  />
                  <input
                    type="password"
                    placeholder="Senha"
                    className={stylePage.input}
                    value={password}
                    onChange={e => setPassword(e.target.value.trim())}
                    ref={passwordRef}
                  />
                  <a
                    onClick={handleChangeIcon}
                    style={{cursor:'pointer'}}
                  >
                    {changeIcon(changeType)}
                  </a>
                </div>
                <button
                  type="submit"
                  className={stylePage.submit}
                  disabled={!password || !email || !name}
                >Registrar
                  <FontAwesomeIcon icon={faCheck}
                    style={{ width: 18, marginLeft: 3 }}
                  />
                </button>
              </form>
            </div>
            <div className={stylePage.social}>
              <Link href="/">
                <button
                  className={stylePage.return}>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ width: 18, marginRight: 3 }}
                  /> Voltar
                </button>
              </Link>
              <Image
                src="/images/comput.svg"
                className={stylePage.imageBack}
                height={100}
                width={820}
              />
            </div>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  </div>
}

export default Register;