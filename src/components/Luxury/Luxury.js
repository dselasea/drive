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
            <div className={styles.card}>
                <img src="https://images.pexels.com/photos/6894429/pexels-photo-6894429.jpeg?cs=srgb&dl=pexels-sebastian-pichard-6894429.jpg&fm=jpg" alt="Maserati" />
                <div className={styles.content}>
                    <h3>Maserati</h3>
                </div>
            </div>
            <div className={styles.card}>
                <img src="https://images.pexels.com/photos/4062200/pexels-photo-4062200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className={styles.content}>
                    <h3>Range Rover</h3>
                </div>
            </div>
            <div className={styles.card}>
                <img src="https://images.pexels.com/photos/9805740/pexels-photo-9805740.jpeg?cs=srgb&dl=pexels-deane-bayas-9805740.jpg&fm=jpg" alt="" />
                <div className={styles.content}>
                    <h3>Porche</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Luxury