import React from 'react'
import styles from './Hero.module.css/'
import {AiOutlineSearch} from 'react-icons'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <form>
            <div className="styles.text"></div>
            <div className="styles.from"></div>
            <div className="styles.until"></div>
            <div className="styles.search_btn"></div>
        </form>
    </div>
  )
}

export default Hero