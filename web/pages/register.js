import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
// import stylePage from '../style/Index.module.css'
import stylePage from '../style/Register.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { faKey, faEnvelope, faEye, faEyeSlash, faSignInAlt, faArrowLeft, faUserAlt,faNewspaper,faCheck } from '@fortawesome/free-solid-svg-icons'



function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)

  return <div>
    <TransitionGroup>
      <CSSTransition
        timeout={400}
      >
        <div className={stylePage.exit}>
          <div className={stylePage.page}>
            <div className={stylePage.form} >
             
              <form>
                <p className={stylePage.title}>Web Notices <FontAwesomeIcon icon={faNewspaper} style={{ width: 65, marginLeft: 4 }} /> </p>
                <h3 className={stylePage.title}>Registre-se</h3>
                <div className={stylePage.inputForm}>
                  <FontAwesomeIcon
                    icon={faUserAlt}
                    className={stylePage.iconFont} />
                  <input
                    type="text"
                    placeholder="Nome Completo"
                    className={stylePage.input}
                    value={name}
                    onChange={e => setName(e.target.value.trim())}
                  />
                </div>
                <div className={stylePage.inputForm}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={stylePage.iconFont} />
                  <input
                    type="text"
                    placeholder="Email"
                    className={stylePage.input}
                    value={email}
                    onChange={e => setEmail(e.target.value.trim())}
                  />
                </div>
                <div className={stylePage.inputForm}>
                  <FontAwesomeIcon
                    icon={faKey}
                    className={stylePage.iconFont} />
                  <input
                    type="text"
                    placeholder="Senha"
                    className={stylePage.input}
                    value={password}
                    onChange={e => setPassword(e.target.value.trim())}
                  />
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className={stylePage.slashPass}
                  />
                </div>
                <button
                  type="submit"
                  className={stylePage.submit}
                  disabled={!password || !email || !name}
                >Registrar
              <FontAwesomeIcon icon={faCheck}
                    style={{ width: 18, marginLeft: 3 }}
                  /></button>
                
              </form> 
        
            </div>
            <div className={stylePage.social}>
              <Link href="/">
                <button
                  className={stylePage.return}>
                  <FontAwesomeIcon icon={faArrowLeft}
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