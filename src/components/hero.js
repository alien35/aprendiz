import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const Hero = ({ image, title, content }) => (
  <div className={styles.hero}>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <a className={styles.github} target="_blank" href="https://github.com/alien35/maestros-de-desarollo-web">github</a>
    
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      
    </div>
    
  </div>
)

export default Hero
