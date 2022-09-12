import React from 'react'
import styles from './Landing.module.css'
import reactLogo from '../assets/reactLogo.png'
import skillLogo from '../assets/SkillFactoryLogo.png'
import linkedInLogo from "../assets/LinkedInLogo.png" 
import githubLogo from '../assets/githubLogo.png'
import { Link } from 'react-router-dom'



function Landing() {
  return (
    //<div>Landing</div>
  <div className={styles.container}>
  <body className={styles.body}>
    <header className={styles.header}>   
    <img className={styles.skillLogo} src={(skillLogo)} alt="Skill Factory Logo"/>
    <div className={styles.react}>
        <img className={styles.logoReact} src={(reactLogo)} alt="React Logo"/>
        <h1>React</h1>
    </div>
    </header>
<main className={styles.main}>
            <Link className={styles.btn} to='/form'>
                FORM
            </Link>
        
            <Link className={styles.btn} to='/users'>
                USERS
            </Link>
        
            <Link className={styles.btn} to='/personajes'>
                CARDS
            </Link>
        
        </main>

        <footer className={styles.footer}>
                <a className={styles.linkedIn} href="https://www.linkedin.com/in/tomas-napolitano"><img className={styles.logoLinkedIn} src={linkedInLogo} alt="LinkedIn member" target="_blank"/>Tomas Napolitano</a>
                <a className={styles.linkedIn} href="https://www.linkedin.com/in/maximiliano-santin-34ba6876"><img className={styles.logoLinkedIn} src={linkedInLogo} alt="LinkedIn member" target="_blank"/>Maximiliano Santin</a>
                <a className={styles.linkedIn} href="https://www.linkedin.com/in/mathias-avolio-0a27811b5"><img className={styles.logoLinkedIn} src={linkedInLogo} alt="LinkedIn member" target="_blank"/>Mathias Avolio</a>
                <a className={styles.linkedIn} href="https://www.linkedin.com/in/foclemens"><img className={styles.logoLinkedIn} src={linkedInLogo}  alt="LinkedIn member" target="_blank"/>Fernando Clemens</a>
                <a className={styles.gitHub} href="https://github.com/Ferclemens/React-SkillFactory-ViteApp.git"><img className={styles.logoGitHub} src={githubLogo} alt="github project" target="_blank"/>GitHub</a>  
        </footer>
        </body>
</div>
  )
}

export default Landing