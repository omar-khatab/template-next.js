import React from 'react'
import styles from './page.module.css'
import Button from '@/Components/Button/Button'
import Image from 'next/image'

const Category = ({params}) => {
  return (
    <div style={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Creative Portfolio
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus esse beatae incidunt 
            sit eaque ut alias tenetur natus corporis, accusamus voluptate possimus recusandae! 
            Sit esse cum consectetur accusamus debitis.
          </p>
          <Button text="See More" url = "#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image fill 
          src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
          className={styles.img}
          alt=''/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Minimal Single Product
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus esse beatae incidunt 
            sit eaque ut alias tenetur natus corporis, accusamus voluptate possimus recusandae! 
            Sit esse cum consectetur accusamus debitis.
          </p>
          <Button text="See More" url = "#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image fill 
          src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
          className={styles.img}
          alt=''/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>
          Strong Together Charity
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus esse beatae incidunt 
            sit eaque ut alias tenetur natus corporis, accusamus voluptate possimus recusandae! 
            Sit esse cum consectetur accusamus debitis.
          </p>
          <Button text="See More" url = "#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image fill 
          src="https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg"
          className={styles.img}
          alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Category