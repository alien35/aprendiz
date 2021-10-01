import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>Aprendiz en programación</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/cheatsheet/javascript" activeClassName="active">
          Cheatsheet
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="https://programacion.freeflarum.com/" activeClassName="active">
          Foro
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="https://main.d2xsod1hmib8yc.amplifyapp.com/" activeClassName="active">
          Curso
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
