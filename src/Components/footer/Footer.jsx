import React from 'react'
import styles from "./Footer.module.css"
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2024 Lamamia All rights reserved</div>
      <div>
        <div className={styles.social}>
          < Image src="/1.png" width={15} height={15} alt='Lama div Facebook' className={styles.icon}/>
          < Image src="/2.png" width={15} height={15} alt='Lama div Instagram' className={styles.icon}/>
          < Image src="/3.png" width={15} height={15} alt='Lama div Twitter' className={styles.icon}/>
          < Image src="/4.png" width={15} height={15} alt='Lama div Youtube' className={styles.icon}/>
        </div>
      </div>
    </div>
  )
}

export default Footer