import React from 'react'
import styles from './Luxury.module.css'

const Luxury = () => {
  return (
    <div className={styles.luxury}>
        <div className={styles.heading}>
            <h2>Luxury Selection</h2>
            <div className={styles.text_bg}>
                <p><span>Select form the top luxury wehicles fo roll in styles</span></p>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.card}>
                <img src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className={styles.content}>
                    <h3>Rolls Royce</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Luxury